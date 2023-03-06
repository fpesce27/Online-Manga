'use client';
import { Manga } from '@/constants/interfaces';
import { Image, Text } from '@nextui-org/react';
import Link from 'next/link';
import styles from './styles/mangaCard.module.css';

export function MangaCard({ manga }: { manga: Manga; }) {
    return (
        <Link href={'/' + manga.mal_id} className={styles.cardContent}>
            <Image 
                src={manga.images["jpg"].large_image_url} 
                alt={manga.title} 
                width='20vw' 
                height='300px'
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
