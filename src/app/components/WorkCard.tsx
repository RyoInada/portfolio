"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

import Gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

interface WorkCardProps {
  title: string;
  img: StaticImageData;
  pf: string;
  lang: string;
  text: string;
  url: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  img,
  pf,
  lang,
  text,
  url,
}) => {
  const ref_elm = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Gsap.registerPlugin(ScrollTrigger);
    const fadeIn = (elm: HTMLDivElement | null) => {
      Gsap.to(elm, {
        startAt: {
          y: 30,
          opacity: 0,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          start: "top center+=25%",
          trigger: elm,
          scrub: false,
        },
      });
    };
    fadeIn(ref_elm.current);
  });
  return (
    <div className="c-work-card" ref={ref_elm}>
      <div className="c-work-card--img">
        <Image src={img} alt={title} width={800} height={800} />
      </div>
      <h4 className="c-work-card--title">{title}</h4>
      <p className="c-work-card--pf">PLATFORM：{pf}</p>
      <p className="c-work-card--lang">LANGUAGE：{lang}</p>
      <p className="c-work-card--text">{text}</p>
      <a
        className="c-work-card--viewmore"
        href={url}
        target="_blank"
        rel="noopener"
      >
        VIEW SITE
      </a>
    </div>
  );
};

export default WorkCard;
