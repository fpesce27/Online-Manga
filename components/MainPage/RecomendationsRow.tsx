"use client";
import { Mangas } from "@/constants/interfaces";
import { Text } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MangaCard } from "./MangaCard";
import styles from "./styles/recomendations.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function RecomendationsRow({
  mangas,
  title,
}: {
  mangas: Mangas;
  title: string;
}) {
  return (
    mangas && (
      <div style={{ margin: 35, position: "relative" }}>
        <Text size="2em" style={{ marginBottom: 20 }}>
          {title}
        </Text>
        <Carousel
          centerSlidePercentage={20}
          centerMode
          autoPlay
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          className={styles.carousel}
          renderArrowPrev={(onClickHandler, hasPrev) => {
            return (
              <div
                className={styles.arrowLeft}
                onClick={onClickHandler}
              >
                <FaArrowCircleLeft size={50} color="var(--text-color)" />
              </div>
            );
          }}
        renderArrowNext={(onClickHandler, hasNext) => {
            return (
                <div
                className={styles.arrowRight}
                onClick={onClickHandler}
                >
                    <FaArrowCircleRight size={50} color="var(--text-color)" />
                </div>
            );
            }}
        >
          {mangas.data.map((manga, index) => (
            <MangaCard manga={manga} key={index} />
          ))}
        </Carousel>
      </div>
    )
  );
}

export default RecomendationsRow;
