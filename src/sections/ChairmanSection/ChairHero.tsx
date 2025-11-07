import chairman from "@/assets/chairman.png";

const ChairHero = () => {
  return (
    <div className="w-full flex justify-between items-center max-md:flex-col gap-5 my-10">
      <div className="w-full h-auto flex items-center justify-center">
        <img
          src={chairman}
          alt="chairman profile picture"
          className="w-100 h-100 max-lg:w-70 max-lg:h-70 max-md:w-50 max-md:h-50 max-xs:w-40 max-xs:h-40 object-cover rounded-full"
        />
      </div>

      <div className="w-full h-auto">
        <h3 className="text-start mb-10">Chairman & Background</h3>

        <p className="text-justify">
          <span className="font-bold">David Huang (黃大維)</span> is a seasoned
          entrepreneur and advisor with nearly three decades of business
          experience in the Philippines, beginning in 1995. His early ventures
          focused on international trade, which later expanded into project
          investment, business consulting, and strategic advisory across
          renewable energy, technology, and infrastructure. <br /> <br /> He has
          held prominent public sector roles, including serving as Special
          Advisor to the Director General of the Philippine Economic Zone
          Authority (PEZA-DTI) and Investment and Tourism Promotion Advisor to
          the Provincial Government of Bohol. From 2015 to 2023, Mr. Huang was
          also Vice President of the Taiwan Chamber of Commerce and Industry in
          the Philippines.
        </p>
      </div>
    </div>
  );
};

export default ChairHero;
