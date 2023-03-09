'use client'
import { ShowMangaPanel } from './ShowMangaPanel';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carrousel({images} : {images : string[]}) {
  return (
    <> 
      <Carousel
        autoFocus
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        useKeyboardArrows
        transitionTime={0}
      >
        {images.map((image) => (
          <ShowMangaPanel  image={image} />
        ))}
      </Carousel>
    </>
  )
}

export default Carrousel