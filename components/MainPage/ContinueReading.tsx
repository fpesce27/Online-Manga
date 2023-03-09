"use client";
import { Manga, Mangas } from "@/constants/mangas";
import { auth, db } from "@/db/firebase";
import React, { use } from "react";
import styles from "./styles/recomendations.module.css";
import { MangaCard } from "../Globals/MangaCard";
import { Text } from "@nextui-org/react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import { waitForAuthInit } from "@/constants/functions";

function ContinueReading() {
  const [mangas, setMangas] = React.useState<Mangas | any>([]);

  React.useEffect(() => {
    (async () => {
      await waitForAuthInit();
      const lastReadMangas = db
        .collection("users")
        .doc(auth.currentUser?.uid)
        .collection("continue_reading")
        .limit(5)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setMangas(data);
        });
    })();
  }, []);
  return (
      <div style={{ margin: 35, position: "relative" }}>
        <Text size="2em" style={{ marginBottom: 20 }}>
          {mangas.length > 0 ? "Continuar Leyendo" : ""}
        </Text>
        <Carousel
          centerSlidePercentage={20}
          centerMode
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          className={styles.carousel}
          renderArrowPrev={(onClickHandler, hasPrev) => {
            return (
              <div className={styles.arrowLeft} onClick={onClickHandler}>
                <FaArrowCircleLeft size={50} color="var(--text-color)" />
              </div>
            );
          }}
          renderArrowNext={(onClickHandler, hasNext) => {
            return (
              <div className={styles.arrowRight} onClick={onClickHandler}>
                <FaArrowCircleRight size={50} color="var(--text-color)" />
              </div>
            );
          }}
        >
          {mangas?.map((data: any, index: number) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MangaCard
                manga={data.manga}
                key={index}
                current_chapter={data.current_chapter}
              />
              {data.current_chapter && (
                <Text size="1.5em">Capitulo {data.current_chapter} </Text>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    
  );
}

export default ContinueReading;
