'use client'
import { Manga, Mangas} from '@/constants/interfaces';
import { Image } from '@nextui-org/react';
import Link from 'next/link'
import styles from "./styles/search.module.css";

function Results({results} : {results : Mangas}) {
    console.log(results)
    return (
        <div className={styles.resultsContainer}>

            {results.data?.map((manga : Manga, index : number) => (
            <Link key={index} href={`${manga.mal_id}`}>
                <div className={styles.manga}>
                <Image
                    src={manga.images.jpg.image_url}
                    alt={manga.title}
                    width={300}
                    height={300}
                    css={{ borderRadius: "25px" }}
                    objectFit="cover"
                />
                <div className={styles.mangaInfo}>
                    <h3>{manga.title}</h3>
                    <p>{manga.synopsis}</p>
                </div>
                </div>
            </Link>
            ))}

            {results.data?.length === 0 && (
                <h4>No results found</h4>
            )}
        </div>
    )
}

export default Results