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

export interface watchProvider {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
}
export interface watchProviderResponse {
    id: string;
    results: Array<providerCountry>;
}
export interface providerCountry {
    link: string;
    buy: Array<watchProvider>;
    rent: Array<watchProvider>;
    flatrate: Array<watchProvider>;
}
