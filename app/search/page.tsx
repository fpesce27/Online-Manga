import Results from "@/components/SearchPage/Results";

async function getResults(searchParams: string) {
  const data = await fetch("https://manga-online-api.vercel.app/api/search/" + searchParams, {cache: "no-cache"});
  return await data.json();
}

async function page({ searchParams }: { searchParams: any }) {
  console.log(searchParams.q);
  const results = await getResults(searchParams.q);

  return (
    <Results results={results} />
  );
}
export default page;
