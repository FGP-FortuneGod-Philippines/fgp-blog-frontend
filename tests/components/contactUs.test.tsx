import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUsForm from "../../src/components/ContactUsForm";
import "@testing-library/jest-dom";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// --------------------------
// MOCKS
// --------------------------

// Mock Sonner toast
vi.mock("sonner");

// Mock EmailJS
vi.mock("@emailjs/browser");

// Type the mocked emailjs
const mockedEmailjs = {
  sendForm: vi.fn(),
};

// Type the mocked toast
const mockedToast = {
  success: vi.fn(),
  error: vi.fn(),
};

// Assign the mocked modules
Object.assign(emailjs, mockedEmailjs);
Object.assign(toast, mockedToast);

// --------------------------
// HELPER FUNCTIONS
// --------------------------

/**
 * fillForm
 * Fills all fields with sample data
 */
async function fillForm(
  name = "John",
  email = "john@example.com",
  message = "Hello"
) {
  await userEvent.type(screen.getByLabelText(/your name/i), name);
  await userEvent.type(screen.getByLabelText(/your email/i), email);
  await userEvent.type(screen.getByLabelText(/your message/i), message);
}

// --------------------------
// INTEGRATION TESTS
// --------------------------
describe("ContactUsForm – Integration / Happy Path", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("completes full user journey: fill → submit → success → reset", async () => {
    render(<ContactUsForm />);

    mockedEmailjs.sendForm.mockResolvedValueOnce({ status: 200 });

    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(nameInput, "Jane Doe");
    await userEvent.type(emailInput, "jane.doe@example.com");
    await userEvent.type(messageInput, "Test message");

    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockedToast.success).toHaveBeenCalled();
    });

    expect(mockedEmailjs.sendForm).toHaveBeenCalledTimes(1);
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
    expect(submitButton).toBeEnabled();
    expect(submitButton).toHaveTextContent("Submit");
  });
});

// --------------------------
// VALIDATION TESTS
// --------------------------
describe("ContactUsForm – validation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows error when name is empty", async () => {
    render(<ContactUsForm />);

    await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockedToast.error).toHaveBeenCalledWith("Please enter your name");
    expect(mockedEmailjs.sendForm).not.toHaveBeenCalled();
  });

  it("shows error when email is invalid", async () => {
    render(<ContactUsForm />);

    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(screen.getByLabelText(/your email/i), "invalid-email");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockedToast.error).toHaveBeenCalledWith(
      "Please enter a valid email address"
    );
    expect(mockedEmailjs.sendForm).not.toHaveBeenCalled();
  });

  it("shows error when message is empty", async () => {
    render(<ContactUsForm />);

    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(
      screen.getByLabelText(/your email/i),
      "john@example.com"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockedToast.error).toHaveBeenCalledWith(
      "Please enter your message"
    );
    expect(mockedEmailjs.sendForm).not.toHaveBeenCalled();
  });

  it("prevents multiple submissions during sending", async () => {
    render(<ContactUsForm />);

    await fillForm();

    let resolveEmail: (value: { status: number }) => void = () => {};
    const emailPromise = new Promise<{ status: number }>((resolve) => {
      resolveEmail = resolve;
    });

    mockedEmailjs.sendForm.mockReturnValueOnce(emailPromise);

    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.click(submitButton);
    await userEvent.click(submitButton);

    expect(mockedEmailjs.sendForm).toHaveBeenCalledTimes(1);

    resolveEmail({ status: 200 });
    await act(async () => {
      await emailPromise;
    });

    expect(submitButton).not.toBeDisabled();
    expect(submitButton).toHaveTextContent("Submit");
  });
});

// --------------------------
// EMAIL SENDING TESTS
// --------------------------
describe("ContactUsForm – Email sending", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sends email successfully → shows success toast and resets form", async () => {
    render(<ContactUsForm />);

    await fillForm();

    mockedEmailjs.sendForm.mockResolvedValueOnce({ status: 200 });

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(mockedEmailjs.sendForm).toHaveBeenCalledTimes(1);
    expect(mockedToast.success).toHaveBeenCalled();

    expect(screen.getByLabelText(/your name/i)).toHaveValue("");
    expect(screen.getByLabelText(/your email/i)).toHaveValue("");
    expect(screen.getByLabelText(/your message/i)).toHaveValue("");
  });

  it("fails to send email → shows error toast and does not reset form", async () => {
    render(<ContactUsForm />);

    await fillForm();

    mockedEmailjs.sendForm.mockRejectedValueOnce(new Error("Network Error"));

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(mockedToast.error).toHaveBeenCalledWith(
        "Failed to send message. Please try again.",
        { id: undefined }
      );
    });

    expect(mockedEmailjs.sendForm).toHaveBeenCalledTimes(1);

    expect(screen.getByLabelText(/your name/i)).toHaveValue("John");
    expect(screen.getByLabelText(/your email/i)).toHaveValue(
      "john@example.com"
    );
    expect(screen.getByLabelText(/your message/i)).toHaveValue("Hello");
  });
});
