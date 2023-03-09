'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import styles from './styles/buttons.module.css'
import { useRouter } from 'next/navigation'

function PrevAndNextButtons({currentChapter, currentManga}: {currentChapter: any, currentManga: number}) {
    const router = useRouter()
    const prevChapter = () => {
        router.push(`/read/${currentManga}/${(parseInt(currentChapter) - 1)}`)
    }

    const nextChapter = () => {
        router.push('/read/' + currentManga + '/' + (parseInt(currentChapter) + 1))
    }

  return (
    <div className={styles.buttonsContainer}>
        <Button color="primary" auto onClick={prevChapter}>
            Anterior
        </Button>
        <Button color="primary" auto onClick={nextChapter}>
            Siguiente
        </Button>
    </div>
  )
}

export default PrevAndNextButtons