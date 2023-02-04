/* eslint-disable react-hooks/rules-of-hooks */
import { getChapters, getMangaById } from "@/pages/api/functions";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import styles from "../../../../styles/SelectChapter.module.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import React from "react";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { pid } = context.query;
  const manga = await getMangaById(pid);
  const chapters = await getChapters(manga.data.title.toLowerCase().replace(/ /g, "-"));  
  return {
    props: {
      manga,
      chapters
    },
  };
}

function index({ manga, chapters }) {
  const router = useRouter();
  const { pid } = router.query;
  const [reverse, setReverse] = React.useState(false);
  const c = chapters;

  const handleReverse = () => {
    setReverse(!reverse);
    c.reverse();
  };

  return (
    <Layout>
      <div className={styles.dataContainer}>

        <div style={{display:'flex', flexDirection:'column', gap:15}}>

          <div className={styles.imageContainer}>
            <Image
              src={manga.data.images.jpg.image_url}
              alt="Manga"
              width={300}
              height={400}
              showSkeleton
              css={{ borderRadius: "25px" }}
              objectFit="cover"
            />
          </div>

          

        </div>

        <div>
          <h1>{manga.data.title}</h1>
          <p>{manga.data.synopsis}</p>

          <div className={styles.numbersContainer}>
            <p>Score: {manga.data.score}</p>
            <p>Rank: {manga.data.rank}</p>
            <p>Popularity: {manga.data.popularity}</p>
            <p>Members: {manga.data.members}</p>
          </div>
        </div>

      </div>

      <div className={styles.chaptersControls}>
        <h1>Chapters</h1>
        <Button
          auto
          type="success"
          onClick={handleReverse}
        >
          {reverse ? <BsArrowUp /> : <BsArrowDown/>}
        </Button>
      </div>
      <div className={styles.chaptersContainer}>
          {chapters.map((chapter, index) => (
            <Link key={index} className={styles.chapter} href={`/manga/read/${pid}/${chapter}`}>
              <p>{chapter}</p>
            </Link>
          ))}
      </div>
    </Layout>
  );
}

export default index;
