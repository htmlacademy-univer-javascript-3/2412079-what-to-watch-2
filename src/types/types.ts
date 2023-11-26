export type FilmCard = {
    id: string;
    name: string;
    previewImage?: string;
    previewVideoLink?: string;
    genre: string;
};

export type Film = FilmCard & {
    posterImage: string;
    backgroundImage: string;
    backgroundColor?: string;
    videoLink: string;
    description?: string;
    rating: number;
    scoresCount?: number;
    director?: string;
    starring?: [string];
    runTime?: number;
    released: number;
    isFavorite: boolean;
};

export type FilmReview = {
    id: string;
    date: string;
    user: string;
    comment: string;
    rating: number;
};

export type AuthData = {
    login: string;
    password: string;
};
