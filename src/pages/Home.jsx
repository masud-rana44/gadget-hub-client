import { Banner } from "../components/Banner";
import { Brands } from "../components/Brands";
import Testimonials from "../components/Testimonials";
import { Loader } from "../components/Loader";
import { useBrand } from "../contexts/BrandContext";
import FAQ from "../components/FAQ";

const Home = () => {
  const { brands, isLoading } = useBrand();

  return (
    <div className=" font-bold text-indigo-950 text-4xl">
      <Banner />
      {isLoading ? <Loader /> : <Brands brands={brands} />}
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
