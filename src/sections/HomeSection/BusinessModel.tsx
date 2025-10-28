const BusinessModel = () => {
  return (
    <div className="w-full h-auto flex max-md:flex-col items-start gap-5 my-10 max-md:my-5">
      <div className="w-full h-full flex justify-center">
        <h3>Business Model Overview</h3>
      </div>

      <div className="w-full h-full flex flex-col justify-start gap-3">
        <p>
          ShoPilipinas is a triple-platform e-commerce ecosystem designed for
          the fast-growing Philippine digital economy, combining:
        </p>

        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            <p>
              China Supply Chain Procurement – affordable, reliable sourcing for
              local demand.
            </p>
          </li>
          <li>
            <p>
              Philippine Global Export Platform – giving local products
              international reach.
            </p>
          </li>
          <li>
            <p>
              High-Value Membership Economy – cashback, loyalty, and referral
              rewards to sustain user growth.
            </p>
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
