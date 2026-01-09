import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactUsForm from "../src/components/ContactUsForm";
import "@testing-library/jest-dom";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Activate mocks
vi.mock("sonner");
vi.mock("@emailjs/browser");

// Mock Google reCAPTCHA
let mockCaptchaOnChange: (token: string | null) => void = () => {};
vi.mock("react-google-recaptcha", () => {
  return {
    default: ({ onChange }: { onChange: (token: string | null) => void }) => {
      mockCaptchaOnChange = onChange;
      return (
        <button
          data-testid="mock-captcha"
          onClick={() => onChange("mock-token")}
        >
          Mock CAPTCHA
        </button>
      );
    },
  };
});

describe("ContactUsForm – validation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * TEST 1
   * Empty name should show an error
   */
  it("shows error when name is empty", async () => {
    render(<ContactUsForm />);

    // Fill only email and message
    await userEvent.type(
      screen.getByLabelText(/your email/i),
      "john@example.com"
    );
    await userEvent.type(
      screen.getByLabelText(/your message/i),
      "Hello"
    );

    // Submit form
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Assertion: toast error should appear
    expect(toast.error).toHaveBeenCalledWith("Please enter your name");

    // Assertion: email should NOT be sent
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  /**
   * TEST 2
   * Invalid email format
   */
  it("shows error when email is invalid", async () => {
    render(<ContactUsForm />);

    await userEvent.type(
      screen.getByLabelText(/your name/i),
      "John"
    );
    await userEvent.type(
      screen.getByLabelText(/your email/i),
      "invalid-email"
    );
    await userEvent.type(
      screen.getByLabelText(/your message/i),
      "Hello"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(toast.error).toHaveBeenCalledWith(
      "Please enter a valid email address"
    );
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  /**
   * TEST 3
   * Empty message
   */
  it("shows error when message is empty", async () => {
    render(<ContactUsForm />);

    await userEvent.type(
      screen.getByLabelText(/your name/i),
      "John"
    );
    await userEvent.type(
      screen.getByLabelText(/your email/i),
      "john@example.com"
    );

    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(toast.error).toHaveBeenCalledWith(
      "Please enter your message"
    );
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  /**
   * TEST 4
   * Prevent submit while sending
   */
  it("does not submit when already sending", async () => {
    render(<ContactUsForm />);

    // Fill all fields correctly
    await userEvent.type(
      screen.getByLabelText(/your name/i),
      "John"
    );
    await userEvent.type(
      screen.getByLabelText(/your email/i),
      "john@example.com"
    );
    await userEvent.type(
      screen.getByLabelText(/your message/i),
      "Hello"
    );

    // Force sending state by clicking twice quickly
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.dblClick(submitButton);

    // Still should not call EmailJS
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });
});

describe("ContactUsForm – CAPTCHA behavior", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * TEST 1
   * Cannot submit without solving CAPTCHA
   */
  it("cannot submit without solving CAPTCHA", async () => {
    render(<ContactUsForm />);

    // Fill form fields
    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    // Attempt to submit without solving CAPTCHA
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Should show CAPTCHA error and not call EmailJS
    expect(toast.error).toHaveBeenCalledWith("Please verify that you are not a robot");
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });

  /**
   * TEST 2
   * Solving CAPTCHA enables submit
   */
  it("solving CAPTCHA enables submit", async () => {
    render(<ContactUsForm />);

    // Fill form fields
    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    // Solve CAPTCHA
    await userEvent.click(screen.getByTestId("mock-captcha"));

    // Submit form
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // EmailJS should be called now
    expect(emailjs.sendForm).toHaveBeenCalled();
  });

  /**
   * TEST 3
   * CAPTCHA expired blocks submit again
   */
  it("CAPTCHA expired blocks submit again", async () => {
    render(<ContactUsForm />);

    // Fill form fields
    await userEvent.type(screen.getByLabelText(/your name/i), "John");
    await userEvent.type(screen.getByLabelText(/your email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/your message/i), "Hello");

    // Solve CAPTCHA first
    await userEvent.click(screen.getByTestId("mock-captcha"));

    // Expire CAPTCHA (simulate token expiration)
    mockCaptchaOnChange(null);

    // Attempt to submit
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Should show CAPTCHA error and not call EmailJS
    expect(toast.error).toHaveBeenCalledWith("Please verify that you are not a robot");
    expect(emailjs.sendForm).not.toHaveBeenCalled();
  });
});
