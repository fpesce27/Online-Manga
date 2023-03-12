import Results from "@/components/SearchPage/Results";

async function getResults(searchParams: string) {
  const data = await fetch(process.env.BACKEND_URL + "/search/" + searchParams, {cache: "no-cache"});
  return await data.json();
}

async function page({ searchParams }: { searchParams: any }) {
  const results = await getResults(searchParams.q);

  return (
    <Results results={results} />
  );
}
export default page;
