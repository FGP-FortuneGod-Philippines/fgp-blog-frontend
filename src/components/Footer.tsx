import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center bg-[#faf5e5] py-[10rem] px-[20rem]">
        {/* Top Side */}
        <div className="w-full flex justify-between items-center gap-10">
          {/* Top Left */}
          <div className="max-w-[35%] w-full flex flex-col items-start justify-start gap-5">
            <h3 className="text-start">
              FGP FortuneGod Philippines Trading Inc.
            </h3>
            <p>
              Connecting Markets, Empowering Communities, Creating Prosperity.
            </p>
          </div>

          {/* Top Right */}
          <div className="max-w-[35%] w-full flex items-start gap-10">
            <div className="flex flex-col gap-5 items-start">
              <div className="flex flex-col items-start">
                <p>© 2025 FGP FortuneGod</p>
                <p className="text-left">
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
      <div className="w-full h-auto flex flex-col justify-center items-center bg-[#faf5e5] pt-[1rem] pb-[3rem] px-[20rem]">
        {/* Top Side */}
        <div className="w-full flex justify-between items-start gap-10">
          {/* Top Left */}
          <div className="max-w-[35%] w-full flex flex-col items-start justify-start gap-5">
            <div className="flex flex-col gap-5">
              <h3 className="text-base text-start">Address</h3>
              <p className="text-left text-base leading-6">
                Unit3211, 32/F Trium Square, Sen. Gil Puyat Ave. Cor. Leveriza
                Street, Brgy. 37 Pasay City, 1300 Metro Manila, Philippines
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-base text-start">Contact Us:</h3>
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

          {/* Top Right */}
          <div className="max-w-[35%] w-full flex items-start gap-30">
            <div className="flex flex-col gap-5 items-start">
              <h3 className="text-base text-start">Services</h3>
              <ul>
                <li>Ecommerce</li>
                <li>International Trade</li>
                <li>Project & Investment</li>
                <li>Turn Key Operations</li>
              </ul>
            </div>

            <div className="flex items-start justify-start gap-5 mt-11">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Announcement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
