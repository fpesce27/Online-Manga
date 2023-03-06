import ChapterSelect from "@/components/SelectChaptersPage/ChapterSelect";
import DataContainer from "@/components/SelectChaptersPage/DataContainer";

async function getData(manga_id: string) {
  const data = await fetch("https://manga-online-api.vercel.app/api/manga/" + manga_id);
  return data.json();
}

async function getChapters(manga_id: string) {
  const data = await fetch("https://manga-online-api.vercel.app/api/" + manga_id + "/chapters");
  return data.json();
}

async function page({ params }: { params: { manga_id: string } }) {
  const mangaData = await getData(params.manga_id);
  const chapters = await getChapters(params.manga_id);
  return (
    <>
        <DataContainer mangaData={mangaData.data} />
        <ChapterSelect chapters={chapters} id={params.manga_id}/>
    </>
  );
}

export default page;
