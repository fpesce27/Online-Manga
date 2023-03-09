import Carrousel from "@/components/ReadPage/Carrousel";
import FullscreenButton from "@/components/ReadPage/FullscreenButton";
import PrevAndNextButtons from "@/components/ReadPage/PrevAndNextButtons";

async function getData(manga: number, chapter: number) {
  const data = await fetch("https://manga-online-api.vercel.app/api/manga/" + manga + "/" + chapter);
  return data.json();
}

async function page({params}: {params: {manga_id: number, chapter_id: number}}) {
    const data = await getData(params.manga_id, params.chapter_id);
  return (
    data.length === 0 ? <h1>No images found Sorry </h1> : (
    <FullscreenButton>
        <Carrousel images={data} />
        <PrevAndNextButtons currentChapter={params.chapter_id} currentManga={params.manga_id} />
    </FullscreenButton>
  )
);
}

export default page;