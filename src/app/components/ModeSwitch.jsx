"use client";

import { useEffect } from "react";

export default function ModeSwitch() {
  useEffect(() => {
    let is_light = true;
    if (localStorage.getItem("color_mode") == "dark") {
      document.body.dataset.colorMode = "dark";
      document.querySelector(".c-mode-switch")?.classList.add("is-dark");
      is_light = false;
    }
    document.querySelector(".c-mode-switch")?.addEventListener("click", () => {
      if (localStorage.getItem("color_mode") == "dark") {
        is_light = false;
      }
      if (is_light) {
        document.body.dataset.colorMode = "dark";
        document.querySelector(".c-mode-switch")?.classList.toggle("is-dark");
        localStorage.setItem("color_mode", "dark");
        is_light = false;
      } else {
        document.body.dataset.colorMode = "light";
        document.querySelector(".c-mode-switch")?.classList.toggle("is-dark");
        localStorage.removeItem("color_mode");
        is_light = true;
      }
    });
  });

  return (
    <button type="button" className="c-mode-switch">
      <div className="c-mode-switch--light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-brightness-down"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" />
          <path d="M12 4a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
          <path d="M17 6a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
          <path d="M19 11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
          <path d="M17 16a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
          <path d="M12 18a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
          <path d="M7 16a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
          <path d="M5 11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
          <path d="M7 6a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" />
        </svg>
      </div>
      <div className="c-mode-switch--dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-moon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
        </svg>
      </div>
    </button>
  );
}
