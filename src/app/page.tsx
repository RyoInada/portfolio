import Drawer from "./components/Drawer";
import Anchor from "./components/Anchor";
import ModeSwitch from "./components/ModeSwitch";
import Fv from "./sections/Fv";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Home() {
  const this_year = new Date().getFullYear();
  return (
    <div className="page">
      <header className="header">
        <ModeSwitch></ModeSwitch>
        <Drawer id="drawer">
          <div className="drawer--content">
            <Anchor
              className="drawer--content__link"
              id="About"
              title="ABOUT"
              data-micromodal-close
            ></Anchor>
            <Anchor
              className="drawer--content__link"
              id="Works"
              title="WORKS"
              data-micromodal-close
            ></Anchor>
            <Anchor
              className="drawer--content__link"
              id="Skills"
              title="SKILLS"
              data-micromodal-close
            ></Anchor>
            <Anchor
              className="drawer--content__link"
              id="Contact"
              title="CONTACT"
              data-micromodal-close
            ></Anchor>
          </div>
        </Drawer>
      </header>
      <main className="main">
        <Fv></Fv>
        <About></About>
        <Works></Works>
        <Skills></Skills>
        <Contact></Contact>
      </main>
      <footer className="footer">
        <span className="copyright">© {this_year} Ryo Inada</span>
      </footer>
    </div>
  );
}
