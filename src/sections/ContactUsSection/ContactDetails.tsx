import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col gap-10 py-5 px-8 max-md:py-0 max-md:px-0">
      <div className="flex flex-col gap-3">
        <h3 className="text-start">Contact Us</h3>

        <h4 className="font-medium">Your partner in e-commerce and trade.</h4>
      </div>

      <div className="flex flex-col gap-5  max-sm:gap-2">
        <p className="text-start">
          Have questions? Our team is ready to assist you
        </p>

        <div className="w-full flex justify-start items-center gap-3">
          <span>
            <LuPhone className="text-lg" />
          </span>
          <p>+63-2-85168137</p>
        </div>

        <div className="w-full flex justify-start items-center gap-3">
          <span>
            <LuMail className="text-lg" />
          </span>
          <p>support@fortunegodph.com</p>
        </div>

        <div className="w-full flex justify-start items-center gap-3">
          <span>
            <LuMapPin className="text-lg" />
          </span>
          <p>
            Unit3211, 32/F Trium Square Sen. Gil Puyat Ave. Cor. Leveriza
            Street, Brgy.37, Pasay City, 1300 Metro Manila, Philippines
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
