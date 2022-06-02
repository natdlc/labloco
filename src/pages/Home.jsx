import HomeCarousel from "../components/Home/HomeCarousel/HomeCarousel";
import HomeReviews from "../components/Home/HomeReviews/HomeReviews";
import FeaturedBundles from "../components/Home/FeaturedBundles/FeaturedBundles";
import HomeBenefits from "../components/Home/HomeBenefits/HomeBenefits";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";
import PaymentMethods from "../components/Home/PaymentMethods/PaymentMethods";
import HomeNewsletter from "../components/Home/HomeNewsletter/HomeNewsletter";

const Home = () => {
	return (
		<div className="d-flex flex-column gap-5 mb-5 pb-5">
			<HomeCarousel />
			<HomeReviews />
			<FeaturedBundles />
			<HomeBenefits />
			<HomeAbout />
			<FeaturedProducts />
			<PaymentMethods />
			<HomeNewsletter />
		</div>
	);
};

export default Home;
