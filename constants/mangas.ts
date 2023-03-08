export interface Mangas {
    current_chapter: number;
    pagination: Pagination;
    data:       Manga[];
}

export interface Manga {
    mal_id:          number;
    url:             string;
    images:          { [key: string]: Image };
    approved:        boolean;
    titles:          Title[];
    title:           string;
    title_english:   null | string;
    title_japanese:  string;
    title_synonyms:  string[];
    type:            MangaType;
    chapters:        number | null;
    volumes:         number | null;
    status:          Status;
    publishing:      boolean;
    published:       Published;
    score:           null;
    scored:          null;
    scored_by:       null;
    rank:            number;
    popularity:      number;
    members:         number;
    favorites:       number;
    synopsis:        null | string;
    background:      null | string;
    authors:         Author[];
    serializations:  Author[];
    genres:          Author[];
    explicit_genres: any[];
    themes:          Author[];
    demographics:    Author[];
}

export interface Author {
    mal_id: number;
    type:   AuthorType;
    name:   string;
    url:    string;
}

export enum AuthorType {
    Manga = "manga",
    People = "people",
}

export interface Image {
    image_url:       string;
    small_image_url: string;
    large_image_url: string;
}

export interface Published {
    from:   Date | null;
    to:     Date | null;
    prop:   Prop;
    string: string;
}

export interface Prop {
    from: From;
    to:   From;
}

export interface From {
    day:   number | null;
    month: number | null;
    year:  number | null;
}

export enum Status {
    NotYetPublished = "Not yet published",
}

export interface Title {
    type:  TitleType;
    title: string;
}

export enum TitleType {
    Default = "Default",
    English = "English",
    Japanese = "Japanese",
    Synonym = "Synonym",
}

export enum MangaType {
    LightNovel = "Light Novel",
    Manga = "Manga",
    Novel = "Novel",
}

export interface Pagination {
    last_visible_page: number;
    has_next_page:     boolean;
    current_page:      number;
    items:             Items;
}

export interface Items {
    count:    number;
    total:    number;
    per_page: number;
}

export interface Chapter {
    title: string;
    number: number;
}