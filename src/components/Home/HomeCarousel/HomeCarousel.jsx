import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";
import img1 from "../../../assets/imgs/img1.png";
import img2 from "../../../assets/imgs/img2.png";
import img3 from "../../../assets/imgs/img3.png";

const HomeCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="d-flex align-items-center">
        <img
          className="d-block w-100 carousel-img"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-header">Quality and Affordability</h1>
          <p className="text-content">Your one stop shop for tried and tested lab equipments.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="text-header">Shop The Best Deals</h1>
          <p className="text-content">Enjoy limited time offers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="text-header">Client First Priority</h1>
          <p className="text-content">
            We care for your experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
