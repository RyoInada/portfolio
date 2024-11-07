import Drawer from "../components/Drawer";
import ModeSwitch from "../components/ModeSwitch";
import Link from "next/link";

const PageHeader = () => {
  return (
    <header className="header">
      <ModeSwitch></ModeSwitch>
      <Drawer id="drawer">
        <div className="drawer--content">
          <Link className="drawer--content__link" href="/#About">
            ABOUT
          </Link>
          <Link className="drawer--content__link" href="/#Works">
            WORKS
          </Link>
          <Link className="drawer--content__link" href="/#Skills">
            SKILLS
          </Link>
          <Link className="drawer--content__link" href="/#Contact">
            CONTACT
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default PageHeader;
