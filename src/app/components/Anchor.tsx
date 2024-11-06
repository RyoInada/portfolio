"use client";
import { Link as Scroll } from "react-scroll";
import MicroModal from "micromodal";

interface AnchorProps {
  className: string;
  id: string;
  title: string;
}

const Anchor: React.FC<AnchorProps> = ({ id, className, title }) => {
  return (
    <Scroll
      className={className}
      to={id}
      smooth={true}
      duration={600}
      offset={-30}
      onClick={() => {
        if (document.querySelector("#drawer")?.classList.contains("is-open")) {
          MicroModal.close("drawer");
        }
      }}
    >
      {title}
    </Scroll>
  );
};

export default Anchor;
