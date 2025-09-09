import React, { useRef, useEffect, useState } from "react";
import "./Timeline.css";
import Experience from "./Experience.jsx";

const Timeline = ({ experiences }) => {
  const containerRef = useRef(null);
  const firstDotRef = useRef(null);
  const lastDotRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({ top: 0, left: 0, height: 0, scale: 0 });

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !firstDotRef.current || !lastDotRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const firstDotRect = firstDotRef.current.getBoundingClientRect();
      const lastDotRect = lastDotRef.current.getBoundingClientRect();

      const top = firstDotRect.top - containerRect.top + firstDotRect.height / 2;
      const left = firstDotRect.left - containerRect.left + firstDotRect.width / 2 - 2;
      const height = lastDotRect.top - firstDotRect.top;

      const windowHeight = window.innerHeight;
      const visible = Math.min(windowHeight - containerRect.top + 100, height);
      const progress = Math.max(0, Math.min(visible / height, 1));

      setLineStyle({ top, left, height, scale: progress });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [experiences.length]);

  return (
    <div className="timeline-container" ref={containerRef}>
      <div
        className="timeline-line"
        style={{
          top: `${lineStyle.top}px`,
          left: `${lineStyle.left}px`,
          height: `${lineStyle.height}px`,
          transform: `scaleY(${lineStyle.scale})`,
        }}
      />
      {experiences.map((exp, idx) => (
        <Experience
          key={idx}
          experience={exp}
          ref={idx === 0 ? firstDotRef : idx === experiences.length - 1 ? lastDotRef : null}
        />
      ))}
    </div>
  );
};

export default Timeline;