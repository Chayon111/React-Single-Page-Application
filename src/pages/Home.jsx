import Service from "./Service";
import Footer from "./Footer";
export default function Home() {
  return (
    <div>
      <div className="jumbotron text-center mt-5 ">
        <h1>My Home Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <Service />
      <Footer />
    </div>
  );
}
