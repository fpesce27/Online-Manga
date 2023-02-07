export async function getChapters(manga){
    var osmosis = require('osmosis');

    const url = "https://www.leercapitulo.com/manga/" + manga + "/";

    var chapters = []

    const a = await new Promise ((resolve, reject) => {
        osmosis
        .get(encodeURI(url))
        .find('.chapter-list')
        .set({ 'elements' : ['li'] })
        .log(console.log)
        .error(console.log)
        .data(function(data) {
            chapters.push(data.elements)
        })
        .done(function() {
            
            try{
                chapters = chapters[0]?.map((chapter) => {
                    const title = chapter.split(": ")[1] || ('')
                    const number = chapter.split(" ")[1].replace(/#/g, "")
                    return {number, title}
                })
                resolve(chapters)
            } catch (e) {
                reject([])
            }

        })
    })
    
    return a
}

export async function getImages(manga, chapter){
    var osmosis = require('osmosis');

    const url = "https://www.leercapitulo.com/read/" + manga + "/" + chapter + "/#1";

    var images = []

    await osmosis
        .get(url)
        .find('.each-page div')
        .set({ 'images' :  ['p']})
        .data(function(data) {
            images.push(data.images.map((image) => image.split(",")))
        })
        .log(console.log)
        .error(console.log)
    
    return images[0][0]
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