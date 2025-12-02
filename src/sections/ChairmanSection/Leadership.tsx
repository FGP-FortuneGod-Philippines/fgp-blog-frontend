import Timeline from "@/components/Timeline";
import { timelineData } from "@/constants/contents";
import { useItemsPerPage } from "@/hooks/useItemsPerPage";
import { useMemo, useState } from "react";

const Leadership = () => {
  const itemsPerPage = useItemsPerPage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = timelineData.length - itemsPerPage;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  const translateX = useMemo(
    () => -(currentIndex * (100 / itemsPerPage)),
    [currentIndex, itemsPerPage]
  );

  const itemWidth = `${100 / itemsPerPage}%`;

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="mb-10">Leadership Roles</h3>

      <Timeline
        handlePrev={handlePrev}
        handleNext={handleNext}
        translateX={translateX}
        itemWidth={itemWidth}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        maxIndex={maxIndex}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Leadership;
