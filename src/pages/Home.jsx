import HomeCarousel from "../components/Home/HomeCarousel/HomeCarousel";
import HomeReviews from "../components/Home/HomeReviews/HomeReviews";
import FeaturedBundles from "../components/Home/FeaturedBundles/FeaturedBundles";

const Home = () => {
	return (
		<>
			<HomeCarousel />
			<HomeReviews />
			<FeaturedBundles/>
		</>
	);
};

export default Home;
