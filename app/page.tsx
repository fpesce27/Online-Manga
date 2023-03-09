import ContinueReading from "@/components/MainPage/ContinueReading";
import MainPageCarousel from "@/components/MainPage/MainPageCarousel";
import RecomendationsRow from "@/components/MainPage/RecomendationsRow";

export const metadata = {
  title: "Home - Online Manga",
  description: "Online Manga is a website where you can read your favorite mangas online for free",
}

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

  return (
      <>
        <MainPageCarousel mangas={upcomingMangas} />

        <ContinueReading />
        <RecomendationsRow mangas={recommendations.highestRated} title='Mejores Valorados'/>
        <RecomendationsRow mangas={recommendations.mostPopular} title='Más Populares'/>
      </>
  );
}