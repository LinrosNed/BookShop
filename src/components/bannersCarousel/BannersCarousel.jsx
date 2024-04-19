import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BannersCarousel({ banners }) {

  if (!banners) {
    return null  
  }

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators={false} >
      {banners.map((banners, index) => (
        <div key={index}>
          <img src={banners.image} alt={banners.title} />
        </div>
      ))}
    </Carousel>
  );
}

export default React.memo(BannersCarousel);