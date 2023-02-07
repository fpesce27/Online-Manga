import { Image } from "@nextui-org/react";
import Link from "next/link";
import styles from "../../styles/Manga.module.css";

export function Slider({ series, title }) {
  return (
    <>
      <h1>{title}</h1>
      <div className={styles.mangasContainer}>
        {series?.map((manga, index) => (
          <Link key={index} className={styles.manga} href={`/manga/read/${manga.mal_id}`}>
            <Image
              src={manga.images.jpg.image_url}
              alt={manga.title}
              width={300}
              height={300}
              css={{ borderRadius: "25px" }}
              objectFit="cover"
              showSkeleton
            />
            <div className={styles.mangaInfo}>
              <h3>{manga.title}</h3>
              <p>{manga.synopsis}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Slider;