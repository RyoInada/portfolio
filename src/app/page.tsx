import Header from "./sections/Header";
import Fv from "./sections/Fv";
import About from "./sections/About";
import Works from "./sections/Works";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <Fv></Fv>
        <About></About>
        <Works></Works>
        <Skills></Skills>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
