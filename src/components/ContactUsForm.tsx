import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

/**
 * ContactUsForm Component
 *
 * Handles:
 * - Name, Email, Message inputs
 * - Validation & error handling
 * - CAPTCHA verification
 * - Email sending via EmailJS to multiple recipients
 * - Notifications via Sonner
 *
 * Dependencies:
 * - emailjs-com
 * - react-google-recaptcha
 * - sonner
 */

// test commit v2
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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Send email via EmailJS
  const sendEmail = async () => {
    if (!formRef.current) return;

    const toastId = toast.loading("Sending message...");

    try {
      setIsSending(true);

      await emailjs.sendForm(
        "service_4y1h1mo",
        "template_rzxiweu",
        formRef.current,
        {
          publicKey: "eXnJjZFqasYto_ZtR",
        }
      );

      toast.success("Message sent successfully", { id: toastId });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setCaptchaToken(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err?.text || err);
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (isSending) return;

    // Validation of forms and using toast for the ui
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    // CAPTCHA validation
    if (!captchaToken) {
      toast.error("Please verify that you are not a robot");
      return;
    }

    // send email function
    sendEmail();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="w-full flex flex-col gap-3"
    >
      <div className="w-full flex flex-col">
        <label className="label">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          disabled={isSending}
        />
      </div>

      <div className="w-full flex flex-col">
        <label className="label">Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          disabled={isSending}
        />
      </div>

      <div className="w-full flex flex-col">
        <label className="label">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input h-[10rem]"
          disabled={isSending}
        />
      </div>

      {/* CAPTCHA */}
      <div className="w-full flex justify-center mt-2 mb-4">
        <div className="transform scale-90 sm:scale-100">
          <ReCAPTCHA
            sitekey="6LesxEMsAAAAAJnT78AIVVFpWh1E-zvd3wX4no0E"
            onChange={(token) => setCaptchaToken(token)}
            onExpired={() => setCaptchaToken(null)}
          />
        </div>
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
