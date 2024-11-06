"use client";
import { useEffect } from "react";
import MicroModal from "micromodal";

interface DrawerProps {
  id: string;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ id, children }) => {
  useEffect(() => {
    MicroModal.init(); // モーダルの初期化
  }, []);

  return (
    <div className="modal_wrapper">
      <button
        data-micromodal-trigger={id}
        role="button"
        className="drawer-button"
      >
        <div className="drawer-button--bar"></div>
        <div className="drawer-button--bar"></div>
        <div className="drawer-button--bar"></div>
      </button>
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
      </div>
    </div>
  );
};

export default Drawer;
