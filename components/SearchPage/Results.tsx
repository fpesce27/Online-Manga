'use client'
import { Manga, Mangas} from '@/constants/mangas';
import { Image } from '@nextui-org/react';
import Link from 'next/link'
import { MangaCard } from '../Globals/MangaCard';
import styles from "./styles/search.module.css";

function Results({results} : {results : Mangas}) {
    return (
        <div className={styles.resultsContainer}>

            {results.data?.map((manga : Manga, index : number) => (
                <MangaCard manga={manga} key={index} />
            ))}

            {results.data?.length === 0 && (
                <h4>No results found</h4>
            )}
        </div>
    )
}

export default Results