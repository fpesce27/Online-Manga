import {
  getChapters,
  getImages,
  getMangas,
  getMangaById,
  searchMangas,
  formatTitle,
} from "./functions";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const { manga, chapter, filter, id, search } = req.query;
      switch (req.url) {
        case "/api/chapters":
          const chapters = await getChapters(manga);
          res.status(200).json({ chapters });
          break;
        case "/api/images":
          const images = await getImages(manga, chapter);
          res.status(200).json({ images });
          break;
        case "/api/mangas":
          const mangas = await getMangas(filter);
          res.status(200).json({ mangas });
          break;
        case "/api/manga":
          const mangaDetail = await getMangaById(id);
          res.status(200).json({ mangaDetail });
          break;
        case "/api/search":
          const results = await searchMangas(search);
          res.status(200).json({ results });
          break;
        default:
          res.status(404).json({ message: "Route not found" });
          break;
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
};
