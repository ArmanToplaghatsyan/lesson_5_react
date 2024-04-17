export interface IGenre{
    id: number;
    name: string;
}

export interface IAuthor{
    id: number;
    name: string;
    surname: string;
    username: string; 
}

export interface IBook {
    id: number;
    title: string;
    description: string;
    genres: string[];
    authors: string[];
    img: string;
    price: number;

}