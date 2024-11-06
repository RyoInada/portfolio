"use client";

import Image from "next/image";
import pf01 from "../images/pf01.webp";
import Gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const About = () => {
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  };

  const ref_title = useRef<HTMLDivElement>(null);
  const ref_left = useRef<HTMLDivElement>(null);
  const ref_right = useRef<HTMLDListElement>(null);
  useEffect(() => {
    Gsap.registerPlugin(ScrollTrigger);
    const fadeIn = (elm: HTMLDivElement | HTMLDListElement | null) => {
      if (elm != null) {
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
      }
    };
    if (ref_left.current != null) {
      const element = ref_left.current.querySelector(".about-image");
      fadeIn(ref_left.current);
      Gsap.to(element, {
        startAt: {
          scale: 1.1,
          y: 0,
        },
        scale: 1.1,
        y: 20,
        scrollTrigger: {
          start: "top bottom",
          trigger: element,
          scrub: 1,
        },
      });
    }
    const element_right = ref_right.current;
    fadeIn(element_right);
    const element_title = ref_title.current;
    fadeIn(element_title);
  });
  return (
    <section className="c-section" id="About">
      <h2 className="c-section-title" ref={ref_title}>
        ABOUT
      </h2>
      <div className="about-container">
        <div className="about-image-wrap" ref={ref_left}>
          <Image
            className="about-image"
            src={pf01}
            alt="ryo inada's image"
            width={200}
            height={200}
          />
        </div>
        <dl className="about-list" ref={ref_right}>
          <dt className="about-list--title">氏名 / NAME</dt>
          <dd className="about-list--content">稲田 涼 / Ryo Inada</dd>
          <dt className="about-list--title">年齢 / AGE</dt>
          <dd className="about-list--content">
            {calculateAge("1995-04-10")}歳 / 29yo (1995.04.10)
          </dd>
          <dt className="about-list--title">職種 / Role</dt>
          <dd className="about-list--content">
            フロントエンドエンジニア / Frontend engineer
          </dd>
          <dt className="about-list--title">趣味 / Hobby</dt>
          <dd className="about-list--content">
            筋トレ,音楽,映画鑑賞 / training, music, movies
          </dd>
          <dt className="about-list--title">経歴 / History</dt>
          <dd className="about-list--content">
            兵庫県宝塚市出身で福岡県福岡市在住。
            <br />
            大学卒業後は大好きなフィットネス業界でトレーナーとして一年働きましたが、webに興味が出てきたことやコロナ禍もありWeb業界へ飛び込みました。
            <br />
            大阪にあるEC販売の会社で２年間、様々な経験を積んだ後、2022年4月にコロニーインタラクティブ株式会社へ入社。
            <br />
            業務ではShopifyのフロント構築やカスタマイズをメインに担当しています。
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default About;
