import React, { useRef, useEffect, useState } from "react";
import "./Timeline.css";
import Experience from "./Experience.jsx";

const Timeline = ({ experiences }) => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !lineRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const offset = 200;
      const visible = Math.min(windowHeight - rect.top + offset, totalHeight);
      const progress = Math.max(0, Math.min(visible / totalHeight, 1));
      setScale(progress);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div
        ref={lineRef}
        className="timeline-line"
        style={{ transform: `scaleY(${scale})` }}
      />
      {experiences.map((exp, idx) => (
        <Experience key={idx} experience={exp} />
      ))}
    </div>
  );
};

export default Timeline;