import ContactDetails from "@/sections/ContactUsSection/ContactDetails";
import ContactForms from "@/sections/ContactUsSection/ContactForms";
import ContactMap from "@/sections/ContactUsSection/ContactMap";

const ContactUs = () => {
  return (
    <div className="wrapper h-auto">
      {/* Top Section */}
      <div className="w-full flex justify-between items-start max-md:mt-15 max-md:flex-col gap-5">
        <ContactDetails />
        <ContactForms />
      </div>

      {/* Map Section */}
      <ContactMap />
    </div>
  );
};

export default ContactUs;