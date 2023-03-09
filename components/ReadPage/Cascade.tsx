'use client'
import { ShowMangaPanel } from './ShowMangaPanel'
import styles from './styles/cascade.module.css'

function Cascade({ images } : {images : string[]}) {
  return (
    <div className={styles.cascadeContainer}>
        {images.map((image, index) => (
            <ShowMangaPanel image={image} />
        ))}
    </div>
  )
}

export default Cascade