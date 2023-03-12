import FullscreenButton from "@/components/ReadPage/FullscreenButton";
import PrevAndNextButtons from "@/components/ReadPage/PrevAndNextButtons";

async function getMangaData(manga_id: number) {
  const data = await fetch(process.env.BACKEND_URL + "/manga/" + manga_id);
  return data.json();
}

export async function generateMetadata({params}: {params: {manga_id: number, chapter_id: number}}) {
  const data = await getMangaData(params.manga_id);
  return {
    title: data.data.title + " - Capítulo " + params.chapter_id + " - Online Manga",
  };
}

async function getData(manga: number, chapter: number) {
  const data = await fetch(process.env.BACKEND_URL + "/manga/chapters/" + manga + "/" + chapter);
  return data.json();
}

async function page({params}: {params: {manga_id: number, chapter_id: number}}) {
    const data = await getData(params.manga_id, params.chapter_id);
  return (
    data.length === 0 ? <h1>El Capitulo no esta disponible</h1> : (
    <FullscreenButton images={data}>
        <PrevAndNextButtons currentChapter={params.chapter_id} currentManga={params.manga_id} />
    </FullscreenButton>
  )
);
}

export default page;