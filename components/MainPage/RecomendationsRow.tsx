"use client";
import { Mangas } from "@/constants/mangas";
import { Text } from "@nextui-org/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MangaCard } from "../Globals/MangaCard";
import styles from "./styles/recomendations.module.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function RecomendationsRow({
  mangas,
  title,
}: {
  mangas: Mangas;
  title: string;
}) {
  const current_chapter = mangas.current_chapter;
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
          infiniteLoop
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
          {mangas.data?.map((manga, index) => (
            <div style={{ display: "flex", flexDirection: "column", alignItems:'center', justifyContent:'center' }}>
              <MangaCard manga={manga} key={index} current_chapter={current_chapter}/>
              {current_chapter && ( <Text size="1.5em">Capitulo {current_chapter} </Text> )}
            </div>
          ))}
        </Carousel>
      </div>
    )
  );
}

export default RecomendationsRow;
