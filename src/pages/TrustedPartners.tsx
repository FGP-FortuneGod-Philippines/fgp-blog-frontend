import { partnerships } from "@/constants";
import { Link } from "react-router";
import moreImg from "@/assets/partnerships/more-partnership.png";

const TrustedPartners = () => {
  return (
    <div className="text-center space-y-5 mt-20">
      <h3 className="text-3xl sm:text-4xl">Accredited Business Partners</h3>
      <p>
        Trusted entities selected for their reliability, expertise, and
        operational excellence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10 mx-5">
        {partnerships.map((partner) => (
          <Link
            key={partner.src}
            to={partner.path}
            className="relative h-[140px] w-full overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="h-full w-full object-cover"
            />
          </Link>
        ))}

        <div className="relative h-[140px] w-full overflow-hidden border cursor-default">
          <img
            src={moreImg}
            alt="more partnerships"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;
