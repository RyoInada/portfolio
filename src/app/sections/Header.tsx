import Drawer from "../components/Drawer";
import Anchor from "../components/Anchor";
import ModeSwitch from "../components/ModeSwitch";
import Link from "next/link";

const Header = () => {
  return (
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
          <Link className="drawer--content__link" href="/works">
            WORKS
          </Link>
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
  );
};

export default Header;
