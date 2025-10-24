import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center bg-[#faf5e5] py-20 max-lg:px-10 gap-y-[5rem]">
      <div className="max-w-[90rem] w-full h-auto flex flex-col ">
        {/* Top Side */}
        <div className="flex justify-between items-start">
          {/* Top Left */}
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="md:w-[70%] w-full">
              <h3 className="text-start">
                FGP FortuneGod Philippines Trading Inc.
              </h3>
              <p>
                Connecting Markets, Empowering Communities, Creating Prosperity.
              </p>
            </div>
          </div>

          {/* Top Right */}
          <div className="flex justify-end gap-10">
            <div className="w-[20rem] flex flex-col gap-4 items-start">
              <div className="flex flex-col items-start text-justify hyphens-auto break-words">
                <p>© 2025 FGP FortuneGod</p>
                <p>
                  Philippines Trading Inc. | Pasay City | Empowering Filipino
                  Entrepreneurs through E-Commerce
                </p>
              </div>
              <h4 className="text-lg">Company</h4>
            </div>

            <div className="flex items-start justify-start gap-5 mt-1">
              <div className="text-[var(--primary-ctc)] text-lg">
                <FaFacebookF />
              </div>
              <div className="text-[var(--primary-ctc)] text-lg">
                <FaTiktok />
              </div>
              <div className="text-[var(--primary-ctc)] text-lg">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t" />

      {/* Bottom Side */}
      <div className="max-w-[90rem] w-full h-auto flex flex-col ">
        {/* Top Side */}
        <div className="flex justify-between items-start flex-wrap">
          {/* Address Section */}
          <div className="flex flex-col items-start justify-start gap-5 md:w-[40%] w-full">
            <div className="flex flex-col gap-5">
              <h3 className="text-base font-semibold text-start">Address</h3>
              <p className="text-left text-base leading-6">
                Unit3211, 32/F Trium Square, Sen. Gil Puyat Ave. Cor. Leveriza
                Street, Brgy. 37 Pasay City, 1300 Metro Manila, Philippines
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-base font-semibold text-start">
                Contact Us:
              </h3>
              <div className="flex flex-col">
                <p className="text-left text-base leading-6">
                  +63 931-020-7050
                </p>
                <p className="text-left text-base leading-6">+63-2-85168137</p>
                <p className="text-left text-base leading-6">
                  support@fortunegodph.com
                </p>
              </div>
            </div>
          </div>

          {/* Center and Right Columns */}
          <div className="flex flex-1 justify-center gap-20">
            {/* Services */}
            <div className="flex flex-col gap-5 items-start">
              <h3 className="text-base font-semibold">Services</h3>
              <ul className="space-y-1">
                <li>Ecommerce</li>
                <li>International Trade</li>
                <li>Project & Investment</li>
                <li>Turn Key Operations</li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-5 items-start mt-11">
              <ul className="space-y-1">
                <li>Home</li>
                <li>About</li>
                <li>Announcement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
