// import PropTypes from 'prop-types';
// MyComponent.propTypes = {
//   myProp: PropTypes.bool
// };

import { Banner } from "../components/Banner";
import { Brands } from "../components/Brands";
import { useBrand } from "../contexts/BrandContext";

const Home = () => {
  const { brands } = useBrand();

  return (
    <div className=" font-bold text-indigo-950 text-4xl">
      <Banner />
      <Brands brands={brands} />
    </div>
  );
};

export default Home;
