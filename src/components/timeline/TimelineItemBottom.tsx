// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimelineItemBottom = ({ item, width }: any) => {
  return (
    <div
      className="flex-shrink-0 text-center px-2 sm:px-3 lg:px-4"
      style={{ width }}
    >
      <div className={item.position === "bottom" ? "visible" : "invisible"}>
        <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm leading-tight">{item.organization}</p>
      </div>
    </div>
  );
};

export default TimelineItemBottom;
