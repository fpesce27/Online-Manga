import puppeteer from "puppeteer";
import jsdom from "jsdom";

export async function getImages(manga, chapter){
    // Abrimos una instancia del puppeteer y accedemos a la url
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = "https://www.leercapitulo.com/read/" + manga + "/" + chapter + "/#1";

    const response = await page.goto(url);
    const body = await response.text();

    // Creamos una instancia del resultado devuelto por puppeter para parsearlo con jsdom
    const {
        window: { document },
    } = new jsdom.JSDOM(body);

    const pages = document
        .querySelector(".each-page")
        .textContent.replace(/\s/g, "")
        .split(",")
        .map((page) => {
        return page.replace(/"/g, "");
        });

    await browser.close();

    return pages;
}

export async function getChapters(manga, reverse){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = "https://www.leercapitulo.com/manga/" + manga + "/";

    const response = await page.goto(url);
    const body = await response.text();

    const {
        window: { document },
    } = new jsdom.JSDOM(body);

    /* leave only the numbers */
    const chapters = document.querySelector(".chapter-list").textContent

    const lines = chapters.split("\n");
    const c = [];
    for (let line of lines) {
      const match = line.match(/Capitulo ([\d.]+)/);
      if (match) {
        c.push(parseFloat(match[1]));
      }
    }

    await browser.close();

    return c;
}

export async function getMangas(filter){
    const url = 'https://api.jikan.moe/v4/top/manga'
    const response = await fetch(url + '?page=1&limit=6&filter=' + filter)
    const data = await response.json()
    return data
}

export async function getMangaById(id){
    const url = 'https://api.jikan.moe/v4/manga/' + id
    const response = await fetch(url)
    const data = await response.json()
    return data
}