import ContactDetails from "@/sections/ContactUsSection/ContactDetails";
import ContactForms from "@/sections/ContactUsSection/ContactForms";

const ContactUs = () => {
  return (
    <div className="wrapper h-auto flex justify-between items-start">
      <div className="w-full flex justify-between items-start max-md:mt-15 max-md:flex-col gap-5">
        {/* Contact Us Details */}
        <ContactDetails />

        {/* Contact Us Form */}
        <ContactForms />
      </div>
    </div>
  );
};

export default ContactUs;
