'use client'
import { Manga } from '@/constants/interfaces'
import { Image } from '@nextui-org/react'
import styles from './styles/dataContainer.module.css'

function DataContainer({mangaData} : {mangaData: Manga}) {
  return (
    <div className={styles.dataContainer}>
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <div className={styles.imageContainer}>
            <Image
              src={mangaData?.images["jpg"].large_image_url}
              alt="Manga"
              width={300}
              height={400}
              css={{ borderRadius: "25px" }}
              objectFit="cover"
            />
          </div>
        </div>

        <div>
          <h1>{mangaData?.title}</h1>
          <p>{mangaData?.synopsis}</p>

          <div className={styles.numbersContainer}>
            <p>Score: {mangaData?.score}</p>
            <p>Rank: {mangaData?.rank}</p>
            <p>Popularity: {mangaData?.popularity}</p>
            <p>Members: {mangaData?.members}</p>
          </div>
        </div>
      </div>
  )
}

export default DataContainer