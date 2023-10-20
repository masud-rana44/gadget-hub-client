// import PropTypes from 'prop-types';
// MyComponent.propTypes = {
//   myProp: PropTypes.bool
// };

import { Banner } from "../components/Banner";
import { Brands } from "../components/Brands";
import Testimonials from "../components/Testimonials";
import { Loader } from "../components/Loader";
import { useBrand } from "../contexts/BrandContext";

const Home = () => {
  const { brands, isLoading } = useBrand();

  return (
    <div className=" font-bold text-indigo-950 text-4xl">
      <Banner />
      {isLoading ? <Loader /> : <Brands brands={brands} />}
      <Testimonials />
    </div>
  );
};

export default Home;
