import ChapterSelect from "@/components/SelectChaptersPage/ChapterSelect";
import DataContainer from "@/components/SelectChaptersPage/DataContainer";

export const metadata = {
  title: "Seleccionar Capitulo - Online Manga",
}

async function getData(manga_id: string) {
  const data = await fetch(process.env.BACKEND_URL + "/manga/" + manga_id);
  return data.json();
}

async function getChapters(manga_id: string) {
  const data = await fetch(process.env.BACKEND_URL_V2 + "/manga/chapters/" + manga_id, {next: {revalidate: 3}});
  return data.json();
}

async function page({ params }: { params: { manga_id: string } }) {
  const mangaData = await getData(params.manga_id);
  const chapters = await getChapters(params.manga_id);
  return (
    <>
        <DataContainer mangaData={mangaData.data} />
        <ChapterSelect chapters={chapters} id={params.manga_id} manga={mangaData.data}/>
    </>
  );
}

export default page;
