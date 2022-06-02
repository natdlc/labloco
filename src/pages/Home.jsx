import HomeCarousel from "../components/Home/HomeCarousel/HomeCarousel";
import HomeReviews from "../components/Home/HomeReviews/HomeReviews";
import FeaturedBundles from "../components/Home/FeaturedBundles/FeaturedBundles";
import HomeBenefits from "../components/Home/HomeBenefits/HomeBenefits";
import HomeAbout from "../components/Home/HomeAbout/HomeAbout";

const Home = () => {
	return (
		<>
			<HomeCarousel />
			<HomeReviews />
			<FeaturedBundles/>
			<HomeBenefits/>
			<HomeAbout/>
		</>
	);
};

export default Home;
