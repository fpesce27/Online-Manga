import ContinueReading from "@/components/MainPage/ContinueReading";
import MainPageCarousel from "@/components/MainPage/MainPageCarousel";
import RecomendationsRow from "@/components/MainPage/RecomendationsRow";

export const metadata = {
  title: "Home - Online Manga",
  description: "Online Manga is a website where you can read your favorite mangas online for free",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png"
  },
  themeColor: "#000"
}

async function getData() {
  const data = await fetch(process.env.BACKEND_URL + "/randomMangas", { next: { revalidate: 60 } });
  return data.json();
}

async function getRecommendations(filter: string) {
  const data = await fetch(process.env.BACKEND_URL + '/' + filter)
  return data.json()
}

export default async function Home() {
  const upcomingMangas = await getData();
  const recommendations = await getRecommendations('recommendations')

  return (
    <>
      <MainPageCarousel mangas={upcomingMangas} />

      <ContinueReading />
      <RecomendationsRow mangas={recommendations.highestRated} title='Mejores Valorados' />
      <RecomendationsRow mangas={recommendations.mostPopular} title='Más Populares' />
    </>
  );
}