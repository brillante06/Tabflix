export interface movieInfo {
    adult?: boolean;
    backdrop_path: string;
    genre_ids?: Array<number>;
    id: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: Date;
    title: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}
export interface popularResponseType {
    page: number;
    results: Array<movieInfo>;
    total_pages: number;
    total_results: number;
}
export interface collectionType {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}
export interface productionCountry {
    iso_3166_1: string;
    name: string;
}
export interface company {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
export interface spokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}
export interface detailMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: collectionType;
    budget: number;
    genres: Array<number>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<company>;
    production_countries: Array<productionCountry>;
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: Array<spokenLanguage>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface watchProvider {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
}
export interface watchProviderResponse {
    id: string;
    results: { [key: string]: providerCountry };
}
export interface providerCountry {
    link: string;
    buy: Array<watchProvider>;
    rent: Array<watchProvider>;
    flatrate: Array<watchProvider>;
}
