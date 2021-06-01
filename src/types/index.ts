export interface movieInfo {
    adult?: boolean;
    backdrop_path: string;
    genre_ids?: Array<number>;
    id: string;
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
export interface creditResponse {
    id: string;
    cast: Array<actorInfo>;
}
export interface actorInfo {
    adult: true;
    gender: number;
    id: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}
export interface movieList {
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
export interface genre {
    id: number;
    name: string;
}
export interface detailMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: collectionType;
    budget: number;
    genres: Array<genre>;
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
    videos?: Pick<videoResponse, 'results'>;
    vote_average: number;
    vote_count: number;
}
export interface trailerType {
    tagline: string;
    title: string;
    path: string | undefined;
}
type videoType = 'Trailer' | 'Teaser' | 'Clip' | 'Featurette' | 'Behind the Scenes' | 'Bloopers';
export interface video {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: videoType;
}
export interface videoResponse {
    id: number;
    results: Array<video>;
}
export interface colorType {
    [key: string]: string;
}
export const genreColor: colorType = {
    모험: '#4ec9b0',
    판타지: '#595ab6',
    가족: '#ffa400',
    SF: '#990066',
    드라마: '#3bb33b',
    애니메이션: '#CCFF00',
    코미디: '#0cce6b',
    액션: '#FF0000',
    스릴러: '#336666',
    범죄: '#CC0000',
    로맨스: '#FF3399',
    공포: '#606060',
    미스터리: '#990066',
};
