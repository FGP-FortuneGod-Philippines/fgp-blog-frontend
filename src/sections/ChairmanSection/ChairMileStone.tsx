import gallery1 from "@/assets/image-gallery/gallery-1.jpg";
import gallery2 from "@/assets/image-gallery/gallery-2.jpg";
import gallery3 from "@/assets/image-gallery/gallery-3.jpg";
import gallery4 from "@/assets/image-gallery/gallery-4.jpg";
import gallery5 from "@/assets/image-gallery/gallery-5.jpg";
import gallery6 from "@/assets/image-gallery/gallery-6.jpg";
import gallery7 from "@/assets/image-gallery/gallery-7.jpg";
import gallery8 from "@/assets/image-gallery/gallery-8.jpg";
import gallery9 from "@/assets/image-gallery/gallery-9.jpg";
import gallery10 from "@/assets/image-gallery/gallery-10.jpg";
import gallery11 from "@/assets/image-gallery/gallery-11.jpg";
import gallery12 from "@/assets/image-gallery/gallery-12.jpg";
import gallery13 from "@/assets/image-gallery/gallery-13.jpg";
import gallery14 from "@/assets/image-gallery/gallery-14.jpg";
import gallery15 from "@/assets/image-gallery/gallery-15.jpg";

const ChairMileStone = () => {
  // const galleryImg = [
  //   {
  //     src: gallery1,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery2,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery3,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery4,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery5,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery6,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery7,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery8,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery9,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery10,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery11,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery12,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery13,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery14,
  //     alt: "Chairman Photo",
  //   },
  //   {
  //     src: gallery15,
  //     alt: "Chairman Photo",
  //   },
  // ];

  return (
    <div className="w-full h-auto flex flex-col items-center my-10 max-md:my-5">
      <h3 className="my-10 max-md:my-5">Chairman Milestone</h3>

      {/* Image Gallery */}

      <div className="w-full lg:w-[65rem] grid grid-cols-3 gap-3">
        <div className="col-span-1 bg-amber-100">
          <img src={gallery1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 bg-amber-100">
          <img src={gallery2} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-1 bg-amber-100">
          <img src={gallery3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 bg-amber-100">
          <img src={gallery4} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 bg-amber-100">
          <img src={gallery5} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-amber-100">
              <img
                src={gallery6}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-amber-100">
              <img
                src={gallery7}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-amber-100">
          <img src={gallery8} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 bg-amber-100">
          <img src={gallery9} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 bg-amber-100">
          <img src={gallery10} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-amber-100">
              <img
                src={gallery11}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-amber-100">
              <img
                src={gallery12}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-amber-100">
          <img src={gallery13} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 bg-amber-100">
          <img src={gallery14} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-1 bg-amber-100">
          <img src={gallery15} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ChairMileStone;
