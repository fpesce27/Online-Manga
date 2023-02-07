export async function getChapters(manga){

    const cheerio = require('cheerio');
    const axios = require('axios');

    const url = "https://www.leercapitulo.com/manga/" + manga + "/";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const chapters = $('.chapter-list li').map((i, el) => {
        const chapter = $(el).text().replace(/\n/g, "").replace(/\t/g, "");
        const title = chapter.split(": ")[1] || ('')
        const number = chapter.split(" ")[1].replace(/#/g, "")
        return {number, title}
    }).get()

    return chapters
}

export async function getImages(manga, chapter){

    const cheerio = require('cheerio');
    const axios = require('axios');
    
    const url = "https://www.leercapitulo.com/read/" + manga + "/" + chapter + "/#1";
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const images = $('.each-page div').map((i, el) => {
        const image = $(el).find('p').text().split(",").map((image) => image.replace(/\n/g, "").replace(/\t/g, ""))
        return image
    }).get()

    return images
}

export async function getMangas(filter){
    const axios = require('axios');

    const url = 'https://api.jikan.moe/v4/top/manga'

    const response = await axios.get(url, {
        params: {
            page: 1,
            limit: 6,
            filter: filter
        }
    })

    return response.data

}

export async function getMangaById(id){
    const axios = require('axios');

    const url = 'https://api.jikan.moe/v4/manga/' + id

    const response = await axios.get(url)

    return response.data
}

export async function searchMangas(search){
    const url = 'https://api.jikan.moe/v4/manga?q=' + search;
    const response = await fetch(url);
    const data = await response.json();

    const mangas = data.data.map(async (manga) => {
        const url2 = "https://www.leercapitulo.com/manga/" + manga.title.toLowerCase().replace(/ /g, "-") + "/";
        const response2 = await fetch(url2);
        const status = response2.status;

        if (status === 200) {
            return manga;
        }
    });

    const results = await Promise.all(mangas);

    return results.filter(manga => manga !== undefined);
}


export function formatTitle(title){
    return title.toLowerCase().replace(/ /g, "-").replace(/:/g, "").replace(/'/g, "-");
}