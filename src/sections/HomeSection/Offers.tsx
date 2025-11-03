import LazyImage from "@/components/LazyImage";
import { cards } from "@/constants";
import { lazy } from "react";
import { LuArrowRight } from "react-icons/lu";

const BaseDialog = lazy(() => import("@/components/BaseDialog"));

const Offers = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10 max-md:gap-5 max-xs:gap-0 my-10">
      <h3>What We Do and Offer</h3>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
        {cards.map((card) => (
          <div
            key={card.alt}
            className="w-full h-auto flex flex-col items-center gap-5"
          >
            <div className="max-w-[15rem] w-full h-[15rem]">
              <LazyImage
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col justify-start items-start">
              <p className="font-semibold">{card.label}</p>
              <BaseDialog
                trigger="Learn More"
                triggerIcon={<LuArrowRight />}
                close="Close"
              >
                <div className="flex flex-col justify-center items-center w-full h-auto gap-3">
                  {/* Banner */}
                  <div className="w-full flex flex-col py-5 px-40 max-lg:px-25 max-md:px-20 max-sm:px-2 gap-3">
                    <div className="w-full h-[15rem]">
                      <LazyImage
                        src={card.banner}
                        alt={card.bannerAlt}
                        className={`w-full h-full ${
                          card.extension ? "object-contain" : "object-cover"
                        }`}
                      />
                    </div>

                    {/* Main Contents */}
                    <div className="w-full h-auto flex justify-start items-start max-lg:flex-col gap-5">
                      <div className="w-full h-[15rem] aspect-square">
                        <LazyImage
                          src={card.featImg}
                          alt={card.featImgAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="w-full flex flex-col">
                        <h3 className="text-start">{card.title}</h3>
                        <p className="text-justify">{card.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Extension */}
                  {card.extension && (
                    <div className="w-full flex flex-col py-5 px-40 max-lg:px-25 max-md:px-20 max-sm:px-2 gap-10 my-10">
                      <div className="w-full h-auto">
                        <h3>Three Core Platforms</h3>
                      </div>

                      <div className="w-full flex flex-col gap-3">
                        <div className="w-full h-auto flex max-md:flex-col gap-3">
                          <div className="w-full h-auto">
                            <LazyImage
                              src={card.banner}
                              alt={card.bannerAlt}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="w-full h-auto flex flex-col gap-3">
                            <h4>ShoPilipinas.ph</h4>
                            <p>
                              Philippine Export Gateway One-stop export support:
                              listing, marketing, payments, logistics. Promotes
                              Philippine agriculture, food, crafts, and
                              lifestyle brands to global markets.
                            </p>
                          </div>
                        </div>

                        <div className="w-full h-auto flex max-md:flex-col-reverse gap-3">
                          <div className="w-full h-auto flex flex-col gap-3">
                            <h4>ShoPilipinas.vip</h4>
                            <p>
                              Premium Membership System Monthly cashback,
                              referral incentives, exclusive offers. Designed to
                              increase customer retention and transaction
                              frequency.
                            </p>
                          </div>

                          <div className="w-full h-auto">
                            <LazyImage
                              src={card.banner}
                              alt={card.bannerAlt}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        <div className="w-full h-auto flex max-md:flex-col gap-3">
                          <div className="w-full h-auto">
                            <LazyImage
                              src={card.banner}
                              alt={card.bannerAlt}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="w-full h-auto flex flex-col gap-3">
                            <h4>ShoPilipinas.com</h4>
                            <p>
                              China Direct Import Consolidated procurement, low
                              logistics cost, and customs clearance support.
                              Designed for retailers, SMEs, and individual
                              entrepreneurs.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-auto flex flex-col gap-3">
                        <h3 className="text-center">
                          Transforming the Philippine E-Commerce Landscape
                        </h3>

                        <p className="text-justify">
                          ShoPilipinas.com is a live-ecommerce, and matrix
                          operational strategy, FortuneGod Group of Companies is
                          poised to transform the Philippine e-commerce
                          landscape. This innovative approach combines global
                          technological advancements with localized market
                          insights, offering a scalable, profitable solution for
                          sellers and consumers alike. With strategic
                          investments in technology, training, and
                          infrastructure, FortuneGod Group of Companies
                          integrated model will set a new standard for
                          e-commerce in the Philippines, unlocking substantial
                          growth and long-term value
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </BaseDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
