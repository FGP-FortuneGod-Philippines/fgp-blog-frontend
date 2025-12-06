import ContactUsForm from "@/components/ContactUsForm";

const ContactForms = () => {
  return (
    <div className="w-full flex flex-col gap-10 py-5 px-8 max-md:py-0 max-md:px-0 mb-20">
      <h3 className="text-start">Drop us a line</h3>

      <ContactUsForm />
    </div>
  );
};

export default ContactForms;
