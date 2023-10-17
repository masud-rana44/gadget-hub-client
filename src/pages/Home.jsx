// import PropTypes from 'prop-types';
// MyComponent.propTypes = {
//   myProp: PropTypes.bool
// };

import { useLoaderData } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Brands } from "../components/Brands";

const Home = () => {
  const { data } = useLoaderData();
  const brands = data.data;

  return (
    <div className=" font-bold text-indigo-950 text-4xl">
      <Banner />
      <Brands brands={brands} />
    </div>
  );
};

export default Home;
