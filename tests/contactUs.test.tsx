import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUsForm from "../src/components/ContactUsForm";
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

// Mock Google reCAPTCHA
let mockCaptchaOnChange: (token: string | null) => void = () => {};
vi.mock("react-google-recaptcha", () => {
  return {
    default: ({ onChange }: { onChange: (token: string | null) => void }) => {
      // Store onChange callback for tests to simulate CAPTCHA solve/expire
      mockCaptchaOnChange = onChange;
      return (
        <button
          data-testid="mock-captcha"
          onClick={() => {
            onChange("mock-token");  // Simulate solving CAPTCHA
          }}
        >
          Mock CAPTCHA
        </button>
      );
    },
  };
});

// --------------------------
// HELPER FUNCTIONS
// --------------------------

/**
 * fillForm
 * Fills all fields with sample data
 * Does NOT solve CAPTCHA
 */
async function fillForm() {
  await userEvent.type(screen.getByLabelText(/your name/i), "John");
  await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");
  await userEvent.type(screen.getByLabelText(/your message/i), "Hello");
}

/**
 * fillFormAndSolveCaptcha
 * Fills all fields and simulates solving CAPTCHA
 */
async function fillFormAndSolveCaptcha() {
  await fillForm();

  // Solve CAPTCHA by clicking mocked button
  await userEvent.click(screen.getByTestId("mock-captcha"));
}

// --------------------------
// INTEGRATION TESTS
// --------------------------
describe("ContactUsForm – Integration / Happy Path", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("completes full user journey: fill → CAPTCHA → submit → success → reset", async () => {
    // Arrange
    render(<ContactUsForm />);
    const user = userEvent.setup();
    
    // Mock EmailJS to succeed
    (emailjs.sendForm as any).mockResolvedValueOnce({ status: 200 });

    // Get form elements
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const captchaButton = screen.getByTestId("mock-captcha");

    // Fill form
    await user.type(nameInput, "Jane Doe");
    await user.type(emailInput, "jane.doe@example.com");
    await user.type(messageInput, "Test message");
    
    // Solve CAPTCHA
    await user.click(captchaButton);
    
    // Submit form
    await user.click(submitButton);
    
    // Wait for submission to complete
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalled();
    });

    // Verify all success conditions
    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
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

    // Fill only email and message
    await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    // Attempt to submit
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Expect validation toast and no email sent
    expect(toast.error).toHaveBeenCalledWith("Please enter your name");
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  it("shows error when email is invalid", async () => {
    render(<ContactUsForm />);

    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(screen.getByLabelText(/your email/i), "invalid-email");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(toast.error).toHaveBeenCalledWith("Please enter a valid email address");
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  it("shows error when message is empty", async () => {
    render(<ContactUsForm />);

    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(toast.error).toHaveBeenCalledWith("Please enter your message");
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  it("prevents multiple submissions during sending", async () => {
    render(<ContactUsForm />);

    // Fill all fields
    await fillFormAndSolveCaptcha();

    // Mock EmailJS to succeed with a delay
    let resolveEmail: (value: { status: number }) => void;
    const emailPromise = new Promise<{ status: number }>((resolve) => {
      resolveEmail = resolve;
    });
    (emailjs.sendForm as any).mockReturnValueOnce(emailPromise);

    // Click submit twice quickly
    const submitButton = screen.getByRole("button", { name: /submit/i });
    await userEvent.click(submitButton);
    await userEvent.click(submitButton); // Second click should be ignored

    // EmailJS should only be called once
    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);

    // Resolve the email promise
    resolveEmail!({ status: 200 });
    await act(async () => {
      await emailPromise;
    });

    // Verify the button is re-enabled after sending
    expect(submitButton).not.toBeDisabled();
    expect(submitButton).toHaveTextContent("Submit");
  });
});

// --------------------------
// CAPTCHA BEHAVIOR TESTS
// --------------------------
describe("ContactUsForm – CAPTCHA behavior", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("cannot submit without solving CAPTCHA", async () => {
    render(<ContactUsForm />);

    // Fill fields but do NOT solve CAPTCHA
    await fillForm();

    // Attempt submit
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Expect CAPTCHA error toast and no email sent
    expect(toast.error).toHaveBeenCalledWith("Please verify that you are not a robot");
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  it("solving CAPTCHA enables submit", async () => {
    render(<ContactUsForm />);

    await fillFormAndSolveCaptcha();

    // Submit form
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // EmailJS should be called
    expect(emailjs.sendForm).toHaveBeenCalled();
  });

  it("CAPTCHA expired blocks submit again", async () => {
    render(<ContactUsForm />);

    await fillFormAndSolveCaptcha();

    // Expire CAPTCHA
    act(() => {
      mockCaptchaOnChange(null);
    });

    // Attempt submit
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Expect CAPTCHA error toast and no email sent
    expect(toast.error).toHaveBeenCalledWith("Please verify that you are not a robot");
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });
});

// --------------------------
// EMAIL SENDING TESTS
// --------------------------
describe("ContactUsForm – Email sending", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * Helper: fills form and solves CAPTCHA
   */
  async function fillFormAndSolveCaptcha() {
    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    // Solve CAPTCHA via mocked button
    await act(async () => {
      mockCaptchaOnChange("mock-token");
    });
  }

  it("sends email successfully → shows success toast and resets form", async () => {
    render(<ContactUsForm />);

    // Fill form and solve CAPTCHA
    await fillFormAndSolveCaptcha();

    // Mock EmailJS to succeed
    (emailjs.sendForm as any).mockResolvedValueOnce({ status: 200 });

    // Submit form
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // EmailJS should be called
    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      expect.any(String),
      expect.any(String),
      expect.any(HTMLFormElement),
      expect.any(Object)
    );

    // Toast success
    expect(toast.success).toHaveBeenCalledWith("Message sent successfully", { id: undefined });

    // Form reset
    expect(screen.getByLabelText(/your name/i)).toHaveValue("");
    expect(screen.getByLabelText(/your email/i)).toHaveValue("");
    expect(screen.getByLabelText(/your message/i)).toHaveValue("");
  });

  it("fails to send email → shows error toast and does not reset form", async () => {
    render(<ContactUsForm />);

    // Fill form and solve CAPTCHA
    await fillFormAndSolveCaptcha();

    // Mock EmailJS to fail
    (emailjs.sendForm as any).mockRejectedValueOnce(new Error("Network Error"));

    // Submit form
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Toast error for failed send (not CAPTCHA)
    expect(toast.error).toHaveBeenCalledWith("Failed to send message. Please try again.", { id: undefined });

    // EmailJS should have been called
    expect(emailjs.sendForm).toHaveBeenCalledTimes(1);

    // Form should remain filled
    expect(screen.getByLabelText(/your name/i)).toHaveValue("John");
    expect(screen.getByLabelText(/your email/i)).toHaveValue("john@example.com");
    expect(screen.getByLabelText(/your message/i)).toHaveValue("Hello");
  });
});
