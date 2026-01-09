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

// Mock Button to avoid dependency on "@/components/ui/button"
vi.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));

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
