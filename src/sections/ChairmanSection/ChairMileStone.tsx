const ChairMileStone = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3>Chairman Milestone</h3>

      {/* Image Gallery */}

      <div className="w-full lg:w-[65rem] grid grid-cols-3 gap-3">
        <div className="col-span-1 bg-amber-100">Done</div>
        <div className="col-span-2 bg-amber-100">Done</div>

        <div className="col-span-1 bg-amber-100">Done</div>
        <div className="col-span-1 bg-amber-100">Done</div>
        <div className="col-span-1 bg-amber-100">Done</div>

        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-amber-100">Hello</div>
            <div className="bg-amber-100">Hello</div>
          </div>
        </div>

        <div className="col-span-1 bg-amber-100">Done</div>
        <div className="col-span-1 bg-amber-100">Done</div>
        <div className="col-span-1 bg-amber-100">Done</div>

        <div className="col-span-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-amber-100">Hello</div>
            <div className="bg-amber-100">Hello</div>
          </div>
        </div>

        <div className="col-span-1 bg-amber-100">Done</div>
        <div className="col-span-1 bg-amber-100">Done</div>
        <div className="col-span-1 bg-amber-100">Done</div>
      </div>
    </div>
  );
};

export default ChairMileStone;
