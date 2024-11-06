"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface WorkDetailProps {
  title: string;
  img: StaticImageData;
  pf: string;
  lang: string;
  text: string;
  url: string;
}

const WorkDetail: React.FC<WorkDetailProps> = ({
  title,
  img,
  pf,
  lang,
  text,
  url,
}) => {
  return (
    <div className="c-work-detail">
      <div className="c-work-detail--img">
        <Image src={img} alt={title} width={800} height={800} />
      </div>
      <h4 className="c-work-detail--title">{title}</h4>
      <p className="c-work-detail--pf">PLATFORM：{pf}</p>
      <p className="c-work-detail--lang">LANGUAGE：{lang}</p>
      <p className="c-work-detail--text">{text}</p>
      <a
        className="c-work-detail--viewmore"
        href={url}
        target="_blank"
        rel="noopener"
      >
        VIEW MORE
      </a>
    </div>
  );
};

export default WorkDetail;
