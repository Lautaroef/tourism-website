import aerosillaAtardecer from "./images/aerosilla-0.jfif";
import trekking from "../Home/images/trekking.jpg";
import aerosilla2 from "../Home/images/aerosilla-2.jpg";
import tablaDeSnow from "../Home/images/tabla-de-snow-new.jpg";
import paisajeMontania from "../Home/images/paisaje-montania.jpg";

import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <div className="relative">
      <Carousel fade controls={false} pause={false}>
        <Carousel.Item interval={4300}>
          <img
            className="d-block w-100 bg-image"
            src={aerosillaAtardecer}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={4300}>
          <img
            className="d-block w-100 bg-image"
            src={trekking}
            alt="Cerro caterdral"
          />
        </Carousel.Item>
        <Carousel.Item interval={4300}>
          <img
            className="d-block w-100 bg-image"
            src={tablaDeSnow}
            alt="Tabla de snowboard"
          />
        </Carousel.Item>
        <Carousel.Item interval={4300}>
          <img
            className="d-block w-100 bg-image"
            src={aerosilla2}
            alt="Snow forest"
          />
        </Carousel.Item>
        <Carousel.Item interval={4300}>
          <img
            className="d-block w-100 bg-image"
            src={paisajeMontania}
            alt="Cerro catedral"
          />
        </Carousel.Item>
      </Carousel>

      <div className="transformY text-white absolute w-full top-1/2 text-center z-10">
        <h1 className="text-shadow-title md:text-5xl smMd:text-4xl sm:text-2xl text-base font-bold">
          Book in Bariloche with a Click !!
        </h1>
        <h3 className="text-shadow-subtitle mt-15px mb-4 md:text-2xl smMd:text-xl text-3vw font-medium">
          No commissions, no intermediaries or extra expenses
        </h3>
        <button className="slider-color mt-1 py-2 px-6 rounded md:text-base smMd:text-sm text-xs uppercase tracking-wider">
          Transfers and excursions online
        </button>
      </div>
    </div>
  );
}

export default Slider;
