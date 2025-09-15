import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import ServiceHighlights from "./ServiceHighlights";
import TopCategories from "./TopCategories";
import TrustedFood from "./TrustedFood";

const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceHighlights />
            <FeaturedProducts />
            <TopCategories />
            <TrustedFood />
        </div>
    );
};

export default Home;