import { Helmet } from "react-helmet";
import Banner from "../AllComponents/Banner";
import Topfoods from "../AllComponents/Topfoods";
import About from "../AllComponents/About";
import ProfileDropdown from "./Myprofile";
import Reviews from "../AllComponents/Review";
import LocationSection from "../AllComponents/LocationSection ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home| Bite-Bazar - Discover Fresh </title>
      </Helmet>

      <Banner />

      <Topfoods />

      <About />

      <LocationSection />
      <Reviews />
    </div>
  );
};

export default Home;
