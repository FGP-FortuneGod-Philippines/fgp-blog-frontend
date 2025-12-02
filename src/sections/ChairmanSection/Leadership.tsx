import { useRef } from "react";
import Timeline from "@/components/Timeline";

const Leadership = () => {
  const scrollRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-auto flex flex-col items-center">
      <h3 className="mb-10 text-2xl font-semibold">Leadership Roles</h3>

      <Timeline scroll={scroll} scrollRef={scrollRef} />
    </div>
  );
};

export default Leadership;
