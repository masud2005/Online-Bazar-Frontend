import Banner from "./Banner";
import BestSellerProducts from "./BestSellerProducts";
import Blog from "./Blog";
import ContactAndConnect from "./ContactAndConnect";
import FeaturedProducts from "./FeaturedProducts";
import PromoAndCountDownBanner from "./PromoAndCountDownBanner";
import Review from "./Review";
import ServiceHighlights from "./ServiceHighlights";
import Testimonials from "./Testimonials";
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
            <Review />
            <div className="container mx-auto px-4">
                <PromoAndCountDownBanner />
                <BestSellerProducts />
            </div>
            <Blog />
            <Testimonials />
            <ContactAndConnect />
        </div>
    );
};

export default Home;