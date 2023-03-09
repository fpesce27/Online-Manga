'use client'
import { Chapter, Manga } from '@/constants/mangas'
import Link from 'next/link'
import styles from './styles/chapterSelect.module.css'
import Searchbar from '../Globals/Searchbar';
import { Button } from '@nextui-org/react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import {auth, db} from '@/db/firebase'

function ChapterSelect({chapters, id, manga} : {chapters: Chapter[], id: string, manga: Manga}) {

    const [search, setSearch] = useState('')
    const [reverse, setReverse] = useState(false)
    const handleReverse = () => {
        setReverse(!reverse)
        chapters.reverse()
    }
    const [lastChapterRead, setLastChapterRead] = useState(0)

    useEffect(() => {
        if (auth.currentUser){
            const querySnapshot = db.collection('users').doc(auth.currentUser?.uid).collection('continue_reading').get()
            querySnapshot.then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().manga.mal_id === manga.mal_id){
                        setLastChapterRead(doc.data().current_chapter)
                    }
                })
            })
        }
    }, [])

    const saveLastChapter = async (number : number) => {
        let savedChapter = false
        if (auth.currentUser){
            const querySnapshot = await db.collection('users').doc(auth.currentUser?.uid).collection('continue_reading').get()
            querySnapshot.forEach(async (doc) => {
                if (doc.data().manga.mal_id === manga.mal_id){
                    savedChapter = true
                    await db.collection('users').doc(auth.currentUser?.uid).collection('continue_reading').doc(doc.id).update({
                        current_chapter: number
                    })

                }
            })
            if (!savedChapter){
                await db.collection('users').doc(auth.currentUser?.uid).collection('continue_reading').add({
                    manga: manga,
                    current_chapter: number
                })
            }
        }
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
                <Link href={`/read/${id}/${chapter.number}`} key={index} className={styles.chapter} onClick={() => saveLastChapter(chapter.number)}
                    style={{
                        backgroundColor: chapter.number <= lastChapterRead ? `lightgreen` : `var(--nextui-colors-accents0)`,
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