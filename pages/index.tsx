import Meta from "components/Meta";
import Services from "../components/services/HomeServices";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <>
      <Meta name='Home' path='/' />
      <Showcase />
      <Services />
    </>
  );
};

export default Home;
