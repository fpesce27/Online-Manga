import MainPageCarousel from "@/components/MainPage/MainPageCarousel";
import RecomendationsRow from "@/components/MainPage/RecomendationsRow";

async function getData() {
  const data = await fetch("https://manga-online-api.vercel.app/api/randomMangas", {next: {revalidate:60} });
  return data.json();
}

async function getRecommendations(filter : string) {
  const data = await fetch('https://manga-online-api.vercel.app/api/' + filter)
  return data.json()
}

export default async function Home() {
  const upcomingMangas = await getData();
  const recommendations = await getRecommendations('recommendations')
  /* const genres1 = await getRecommendations('genres1')
  const genres2 = await getRecommendations('genres2') */

  return (
      <>
        <MainPageCarousel mangas={upcomingMangas} />

        <RecomendationsRow mangas={recommendations.highestRated} title='Mejores Valorados'/>
        <RecomendationsRow mangas={recommendations.mostPopular} title='Más Populares'/>
        {/* <RecomendationsRow mangas={recommendations.manhwa} title='Manhwas'/>
        <RecomendationsRow mangas={genres1.action} title='Acción'/>
        <RecomendationsRow mangas={genres1.adventure} title='Aventura'/>
        <RecomendationsRow mangas={genres1.comedy} title='Comedia'/>
        <RecomendationsRow mangas={genres2.romance} title='Romance'/> */}
      </>
  );
}