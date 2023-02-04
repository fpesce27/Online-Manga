import { getChapters, getImages, getMangaByName } from "./functions";

export default async function handler(req, res) {
    const { pid } = req.query;
    switch(pid){
        case "getMangaImages": {
            const { manga, chapter } = req.body;
            try {
                const pages = await getImages(manga, chapter);
                res.status(200).json(pages);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
        case "getMangaPhoto": {
            const { manga } = req.body;
            try {
                const result = await getMangaByName(manga);
                res.status(200).json(result);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
        case "getMangaChapters": {
            const { manga } = req.body;
            try {
                const result = await getChapters('one-piece');
                res.status(200).json(result);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
    }
}
