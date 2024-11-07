"use client";

import WorkSlider from "../components/WorkSlider";
import Gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import Link from "next/link";

const Works = () => {
  const ref_title = useRef<HTMLDivElement>(null);
  const ref_slider = useRef<HTMLDivElement>(null);
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
    fadeIn(ref_title.current);
    fadeIn(ref_slider.current);
  });
  return (
    <section className="c-section" id="Works">
      <h2 className="c-section-title" ref={ref_title}>
        WORKS
      </h2>
      <div className="work-container" ref={ref_slider}>
        <WorkSlider></WorkSlider>
        <Link className="work-viewmore" href="/works">
          VIEW MORE
        </Link>
      </div>
    </section>
  );
};

export default Works;
