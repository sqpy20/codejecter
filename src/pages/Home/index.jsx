import Nav from "../../Layout/Navbar";
import TheHero from "./Hero/Hero";
import OurServices from "./Services/Index";
import Goals from "./Goals/Ourgoal";
import Ourteams from "./Ourteam/Teams";
import Foot from "../../Layout/Footer";

const Homepage = () => {
  return (
    <section className="hero overflow-x-hidden">
      <TheHero />
      <OurServices />
      <Goals />
      <Ourteams />
      <Foot />
    </section>
  );
};

export default Homepage;
