export async function getChapters(manga){
    var osmosis = require('osmosis');

    const url = "https://www.leercapitulo.com/manga/" + manga + "/";

    var chapters = []

    /* evaluate if url is valid */
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
    const url = 'https://api.jikan.moe/v4/top/manga'
    const response = await fetch(url + '?page=3&limit=6&filter=' + filter)
    const data = await response.json()
    return data
}

export async function getMangaById(id){
    const url = 'https://api.jikan.moe/v4/manga/' + id
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export async function searchMangas(search){
    var results = []
    const url = 'https://api.jikan.moe/v4/manga?letter=' + search
    const response = await fetch(url)
    const data = await response.json()

    const mangas = await data.data.map(async (manga) => {
        const url2 = "https://www.leercapitulo.com/manga/" + manga.title.toLowerCase().replace(/ /g, "-") + "/";
        const response2 = await fetch(url2)
        const status = response2.status

        if (status == 200) {
            results.push(manga)
        }

    })

    await Promise.all(mangas)

    return results
}

export function formatTitle(title){
    return title.toLowerCase().replace(/ /g, "-").replace(/:/g, "").replace(/'/g, "-");
}