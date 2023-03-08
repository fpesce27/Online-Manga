"use client";
import { Manga, Mangas } from "@/constants/mangas";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image, Text } from "@nextui-org/react";
import styles from "./styles/carousel.module.css";
import { Button } from "@nextui-org/react";
import Link from "next/link";


function MainPageCarousel({ mangas }: { mangas: Mangas }) {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      {mangas.data?.map((manga, index) => (
        <ShowMangaInfo manga={manga} key={index} />
      ))}
    </Carousel>
  );
}

export default MainPageCarousel;

function ShowMangaInfo({ manga }: { manga: Manga }) {
  return (
    <div className={styles.mangaInfo}>
      <div className={styles.mangaInfoText}>
        <Text size="2.5em">
          {manga.title}
        </Text>
        <Text className={styles.synopsis}>
          {manga.synopsis}
        </Text>

        <div className={styles.mangaInfoTextButtons}>
            <Button size='xl' flat>
              <Link href={`/read/${manga.mal_id}/1`}>
                Leer Capitulo 1
              </Link>
            </Button>

            <Button bordered size='xl' ghost>
              <Link href={`/${manga.mal_id}`} style={{color: 'var(--text-color)'}}>
                Mas Informacion
              </Link>
            </Button>
        </div>
      </div>
      <Image
        src={manga.images["jpg"].large_image_url}
        alt="Manga"
        height="89vh"
      />
    </div>
  );
}
