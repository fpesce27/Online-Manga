'use client'
import { Image } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import styles from '@/app/page.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { db } from "@/db/firebase";

function Carrousel({images} : {images : string[]}) {
  return (
    <Carousel
        autoFocus
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        useKeyboardArrows
        transitionTime={0}
      >
        {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image
                src={image}
                alt="Manga"
                width="100%"
                height="99.8vh"
              />
            </div>
          ))}

      </Carousel>
  )
}

export default Carrousel