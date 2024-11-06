"use client";
import Image from "next/image";
import { useEffect } from "react";
import MicroModal from "micromodal";
import { StaticImageData } from "next/image";
import { createPortal } from "react-dom";

interface WorkProps {
  id: string;
  title: string;
  img: StaticImageData;
  children: React.ReactNode;
}

const Work: React.FC<WorkProps> = ({ id, title, img, children }) => {
  useEffect(() => {
    MicroModal.init(); // モーダルの初期化
  }, []);

  return (
    <div className="work_wrapper">
      <button
        className="c-work-button"
        data-micromodal-trigger={id}
        role="button"
      >
        <Image
          className="c-work-img"
          src={img}
          alt={title}
          width={250}
          height={250}
        />
      </button>
      {createPortal(
        <div className="modal micromodal_slide" id={id} aria-hidden="true">
          <div className="modal__overlay" tabIndex={-1} data-micromodal-close>
            <div
              className="modal__container"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-1-title"
            >
              <header className="modal__header">
                <h2 className="modal__title" id="modal-1-title"></h2>
                <button
                  className="modal__close"
                  aria-label="Close modal"
                  data-micromodal-close
                ></button>
              </header>
              <main className="modal__content" id="modal-1-content">
                {children}
              </main>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Work;
