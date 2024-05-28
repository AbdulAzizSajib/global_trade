import Cover from "./Cover";
import Feture from "./Feature/Feture";
import Pricing from "./Pricing/Pricing";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Feture></Feture>
      <Service></Service>
      <Pricing></Pricing>
    </div>
  );
};

export default Home;
