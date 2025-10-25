const BusinessModel = () => {
  return (
    <div className="w-full h-auto flex max-md:flex-col items-start gap-5 my-10">
      <div className="w-full h-full flex justify-center">
        <h3>Business Model Overview</h3>
      </div>

      <div className="w-full h-full flex flex-col justify-start gap-3">
        <p>
          ShoPilipinas is a triple-platform e-commerce ecosystem designed for
          the fast-growing Philippine digital economy, combining:
        </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            China Supply Chain Procurement – affordable, reliable sourcing for
            local demand.
          </li>
          <li>
            Philippine Global Export Platform – giving local products
            international reach.
          </li>
          <li>
            High-Value Membership Economy – cashback, loyalty, and referral
            rewards to sustain user growth.
          </li>
        </ul>

        <p>
          Together, this ecosystem ensures a “Source Globally, Sell Globally,
          Earn Continuously” cycle.
        </p>
      </div>
    </div>
  );
};

export default BusinessModel;
