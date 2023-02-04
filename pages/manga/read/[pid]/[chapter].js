/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";
import Layout from "@/components/Layout";
import { getImages, getMangaById } from "@/pages/api/functions";
import { Button, Image } from "@nextui-org/react";
import Head from "next/head";
import styles from "@/styles/Chapter.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { chapter, pid } = context.query;
  const mangaName = await getMangaById(pid).then((res) =>
    res.data.title.toLowerCase().replace(/ /g, "-")
  );
  const images = await getImages(mangaName, chapter);
  return {
    props: {
      images,
    },
  };
}

function index({ images }) {
  const router = useRouter();
  const { chapter, pid } = router.query;

  const [fullscreen, setFullscreen] = React.useState(false);

  const ShowManga = () => {
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
                showSkeleton
              />
            </div>
          ))}
          <Link href={`/manga/read/${pid}/${parseInt(chapter) + 1}`} legacyBehavior className={styles.nextChapter}>
            <a> Next Chapter </a>
          </Link>
      </Carousel>
    );
  };

  const Fullscreen = () => {

    return (
      <div className={styles.fullscreen} onKeyDown={(e) => { if (e.key === "Escape") setFullscreen(false) }} tabIndex={0}>
        <ShowManga />
      </div>
    );
  };

  return fullscreen ? (
    <Fullscreen />
  ) : (
    <Layout reading>
      <Head>
        {images.map((image, index) => (
          <link key={index} rel="preload" href={image} as="image" />
        ))}
      </Head>
      <div className={styles.controls}>
        <h1>Chapter {chapter}</h1>
        <Button onClick={() => setFullscreen(true)} auto rounded> Fullscreen </Button>
      </div>
      <ShowManga />
    </Layout>
  );
}

export default index;
