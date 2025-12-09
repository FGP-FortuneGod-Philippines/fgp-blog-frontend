import { useState } from "react";
import { Button } from "./ui/button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUsForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(
      (prev) => ({ ...prev, [name]: value } as Pick<FormData, keyof FormData>)
    );
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <div className="w-full flex flex-col">
        <label className="label">Your Name</label>
        <div className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
          {error && (
            <p className="text-xs text-[var(--red-text)]">
              Error Message: Missing Name
            </p>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col">
        <label className="label">Your Email</label>
        <div className="flex flex-col">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          {error && (
            <p className="text-xs text-[var(--red-text)]">
              Error Message: Missing Email
            </p>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col">
        <label className="label">Your Message</label>
        <div className="flex flex-col">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input h-[10rem]"
          />
          {error && (
            <p className="text-xs text-[var(--red-text)]">
              Error Message: Missing Message
            </p>
          )}
        </div>
      </div>

      <Button variant="default" className="max-sm:text-xs">
        Submit
      </Button>
    </form>
  );
};

export default ContactUsForm;
