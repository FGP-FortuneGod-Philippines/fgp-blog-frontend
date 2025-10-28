import aboutIllustration from "@/assets/About me-rafiki.png";

const About = () => {
  return (
    <>
      {/* About Us */}
      <div
        id="about"
        className="max-w-[70.5rem] w-full h-auto flex justify-center items-center max-md:flex-col gap-5"
      >
        <div className="w-full h-[31.25rem] max-md:h-[20rem]">
          <img
            src={aboutIllustration}
            alt="about illustration"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full h-auto flex flex-col gap-3">
          <h3>About Us</h3>
          <p className="text-justify">
            FortuneGod connects Asia-Pacific opportunities with the Philippine
            market driving innovation in trade, e-commerce, and sustainable
            growth. Through ShoPilipinas, we empower businesses and communities
            to thrive in the global economy.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-[70.5rem] w-full h-auto flex justify-center items-center my-10">
        <div className="w-full h-auto flex flex-col gap-5">
          <h3>Company Overview</h3>
          <p className="text-justify">
            Founded in 2023 in Taoyuan, Taiwan, FortuneGod International Trade
            Co., Ltd. has quickly grown into a dynamic force in international
            trade, cross-border e-commerce, and strategic project investments.{" "}
            <br /> <br />
            Backed by over three decades of business presence in the
            Philippines, FortuneGod leverages deep local insights with global
            resources to introduce world-class products, advanced technology,
            and innovative services to the Philippine market. In 2025, the group
            established FGP FortuneGod Philippines Trading Inc. and launched
            ShoPilipinas.com, operated by ShoPilipinas E-Commerce Corporation,
            marking a milestone in building a next-generation O2O
            (online-to-offline) ecosystem. <br /> <br />
            Our core strength lies in bridging Asia-Pacific opportunities with
            the fast-emerging Philippine economy, creating sustainable value for
            communities, consumers, and corporations alike.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
