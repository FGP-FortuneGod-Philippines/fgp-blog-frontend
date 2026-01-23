import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

/**
 * ContactUsForm Component
 *
 * Handles:
 * - Name, Email, Message inputs
 * - Validation & error handling
 * - Email sending via EmailJS to multiple recipients
 * - Notifications via Sonner
 *
 * Dependencies:
 * - emailjs
 * - sonner
 */

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUsForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false);

  // Send email via EmailJS
  const sendEmail = async () => {
    if (!formRef.current) return;

    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.sendForm(
        "service_jznih4e",
        "template_udeoesb",
        formRef.current,
        {
          publicKey: "Sk_yv3AzPF5zsYJCw",
        }
      );

      toast.success("Message sent successfully", { id: toastId });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.", {
        id: toastId,
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      setIsSending(false);
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      setIsSending(false);
      return;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSending(false);
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      setIsSending(false);
      return;
    }

    await sendEmail();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="w-full flex flex-col gap-3"
    >
      <div className="w-full flex flex-col">
        <label htmlFor="name" className="label">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          disabled={isSending}
        />
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="email" className="label">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          disabled={isSending}
        />
      </div>

      <div className="w-full flex flex-col">
        <label htmlFor="message" className="label">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input h-[10rem]"
          disabled={isSending}
        />
      </div>

      <Button
        type="submit"
        variant="default"
        className="max-sm:text-xs"
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactUsForm;
