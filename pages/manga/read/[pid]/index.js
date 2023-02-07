/* eslint-disable react-hooks/rules-of-hooks */
import { getChapters, getMangaById, formatTitle } from "@/pages/api/functions";
import { Button, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import styles from "../../../../styles/SelectChapter.module.css";
import { BsArrowDown, BsArrowUp, BsFillPlayFill } from "react-icons/bs";
import React from "react";
import Link from "next/link";


export async function getServerSideProps(context) {
  const { pid } = context.query;
  const manga = await getMangaById(pid);
  let chapters = await getChapters(formatTitle(manga.data.title)) || null;

  if (chapters === null){
    for (const title of manga.data.titles) {
      try {
        chapters = await getChapters(formatTitle(title.title)) || null;
        if (chapters !== null) {
          break;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

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

  const handleReverse = () => {
    setReverse(!reverse);
    chapters.reverse();
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
        {chapters?.map((chapter, index) => (
          <Link href={`/manga/read/${pid}/${chapter.number}`} key={index} className={styles.chapter}>
            <p>{chapter.number} {chapter.title}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default index;
