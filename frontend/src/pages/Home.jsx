import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;