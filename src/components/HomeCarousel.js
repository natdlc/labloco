import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";

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
          <h1 className="text-header">First slide label</h1>
          <h5 className="text-content">Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="text-header">Second slide label</h1>
          <h5 className="text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="text-header">Third slide label</h1>
          <h5 className="text-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
