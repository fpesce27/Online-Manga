'use client';
import { Manga } from '@/constants/mangas';
import { Image, Text } from '@nextui-org/react';
import Link from 'next/link';
import styles from './mangaCard.module.css';

export function MangaCard({ manga, current_chapter }: { manga: Manga, current_chapter: number }) {
    return (
        <Link className={styles.cardContent} href={current_chapter ? `/read/${manga.mal_id}/${current_chapter + 1}` : '/' + manga.mal_id}>
            <Image 
                src={manga.images["jpg"].large_image_url} 
                alt={manga.title} 
                width='100vw' 
                height='100vh'
                css={{ borderRadius: "25px" }}
                objectFit="cover"
            />
        
            <div className={styles.cardContentText}>
                <h3>{manga.title}</h3>
                <p>{manga.synopsis}</p>
            </div>
        </Link>
    );
}
