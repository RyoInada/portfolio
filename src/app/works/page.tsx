import PageHeader from "../sections/PageHeader";
import WorksPage from "../sections/WorksPage";
import Footer from "../sections/Footer";

export default function Works() {
  return (
    <div className="page">
      <PageHeader></PageHeader>
      <main className="main">
        <WorksPage></WorksPage>
      </main>
      <Footer></Footer>
    </div>
  );
}
