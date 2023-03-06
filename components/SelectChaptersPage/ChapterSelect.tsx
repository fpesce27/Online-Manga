'use client'
import { Chapter } from '@/constants/interfaces'
import Link from 'next/link'
import styles from './styles/chapterSelect.module.css'
import Searchbar from '../Globals/Searchbar';
import { Button } from '@nextui-org/react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useState } from 'react';

function ChapterSelect({chapters, id} : {chapters: Chapter[], id: string}) {

    const [search, setSearch] = useState('')
    const [reverse, setReverse] = useState(false)
    const handleReverse = () => {
        setReverse(!reverse)
        chapters.reverse()
    }

    return (
        <>
            <div className={styles.filtersContainer}>
                <Searchbar search={search} setSearch={setSearch} />
                <Button icon={reverse ? <BsArrowUp /> : <BsArrowDown />} onPress={() => handleReverse()} />
            </div>

            {chapters.length > 0 ? (
            <div className={styles.chaptersContainer}>
                {chapters.filter((chapter) => chapter.title.toLowerCase().includes(search.toLowerCase()) || chapter.number.toString().includes(search)).map((chapter, index) => (
                <Link href={`/read/${id}/${chapter.number}`} key={index} className={styles.chapter} 
                    style={{
                        backgroundColor: 'var(--nextui-colors-accents0)',
                        border: `1px solid var(--nextui-colors-accents9)`,
                        boxShadow: `0 0 10px var(--nextui-colors-accents5)`
                    }}>
                    <p>{chapter.title} {chapter.number} </p>
                </Link>
                ))}
            </div>
            ) : (
            <div className={styles.chaptersContainer}>
                <p>No hay capitulos disponibles</p>
            </div>
            )}
        </>
    )
}

export default ChapterSelect