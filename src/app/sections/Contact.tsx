"use client";
import Gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const Contact = () => {
  const ref_title = useRef<HTMLDivElement>(null);
  const ref_contact = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Gsap.registerPlugin(ScrollTrigger);
    const fadeIn = (elm: any) => {
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
    fadeIn(ref_contact.current);
  });
  return (
    <section className="c-section" id="Contact">
      <h2 className="c-section-title" ref={ref_title}>
        CONTACT
      </h2>
      <div className="contact-list" ref={ref_contact}>
        <a
          href="mailto:ryo.inada.sapato@gmail.com"
          className="contact-list--link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          mail
        </a>
        <a
          href="https://www.instagram.com/ryo_inada/"
          target="_blank"
          rel="noopener"
          className="contact-list--link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M16.5 7.5v.01" />
          </svg>
          instagram
        </a>
      </div>
    </section>
  );
};

export default Contact;
