import HomeCarousel from "../components/Home/HomeCarousel/HomeCarousel";
import HomeReviews from "../components/Home/HomeReviews/HomeReviews";
import FeaturedProducts from "../components/Home/FeaturedProducts/FeaturedProducts";

const Home = () => {
	return (
		<>
			<HomeCarousel />
			<HomeReviews />
			<FeaturedProducts/>
		</>
	);
};

export default Home;
