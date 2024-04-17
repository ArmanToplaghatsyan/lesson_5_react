import React from "react"
import { IAuthor, IBook, IGenre } from "../types/types"

export interface IData{
    images: string[]
    genres: IGenre[]
    books: IBook[]
    authors: IAuthor[]
    createAuthor: Function
    createGenre: Function
    createBook: Function
    deleteGenreById: Function
    deleteAuthorById: Function
    deleteBookById: Function
    
}

export const MyContext = React.createContext<IData>({} as IData)