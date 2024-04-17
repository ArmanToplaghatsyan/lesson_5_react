import React, { useState } from 'react';
import './App.css';
import { IAuthor, IBook, IGenre } from './types/types';
import { MyContext } from './context/MyContext';
import { Col, Container, Row } from 'react-bootstrap';
import { AddGenre } from './component/AddGenre';
import { ShowGenre } from './component/ShowGenre';
import { AddBooks } from './component/AddBooks';
import { ShowBook } from './component/ShowBooks';
import { AddAuthor } from './component/AddAuthor';
import { ShowAuthor } from './component/ShowAuthor';

function App() {

  const images: string[] = ['/img/2.webp', '/img/1.jpg', '/img/3.jfif', '/img/4.jpg', '/img/5.jpg']
  const [genres, setGenre] = useState<IGenre[]>([
    { id: 1, name: "Drama1" },
    { id: 2, name: "Drama2" },
    { id: 3, name: "Drama3" },
    { id: 4, name: "Drama4" },
    { id: 5, name: "Drama5" },
  ])

  const [authors, setAuthor] = useState<IAuthor[]>([
    { id: 1, name: "Name_1", surname: "Surname_2", username: "username_1" },
    { id: 2, name: "Name_2", surname: "Surname_2.2", username: "username_2" },
    { id: 3, name: "Name_3", surname: "Surname_3", username: "usernaqme_3" },
    { id: 4, name: "Name_4", surname: "Surname_4", username: "usernaqme_4" },
    { id: 5, name: "Name_5", surname: "Surname_5", username: "usernaqme_5" },
  ])

  const [books, setBook] = useState<IBook[]>([
    { id: 1, title: "Title_1", description: "Some descr bout this text, lmao", genres: ["Drama1", "Drama3"], authors: ["username_1", "username_4"], img: '/img/3.jfif', price: 100 },
    { id: 2, title: "Title_2", description: "It's the second body", genres: ["Drama2", "Drama4"], authors: ["username_2", "username_3"], img: '/img/1.jpg', price: 200 },
    { id: 3, title: "Title_3", description: "Descr 3 ", genres: ["Drama5", "Drama2"], authors: ["username_1", "username_3"], img: '/img/2.webp', price: 300 },
    { id: 4, title: "Title_4", description: "Some descr bout this text, lmao", genres: ["Drama1", "Drama3"], authors: ["username_4", "username_5"], img: '/img/4.jpg', price: 400 },
    { id: 5, title: "Title_5", description: "Some descr bout this text, lmao", genres: ["Drama5", "Drama3"], authors: ["username_3", "username_2"], img: '/img/5.jpg', price: 500 },
  ])

  const createAuthor = (data: IAuthor) => {
    setAuthor([...authors, data])
  }

  const createBook = (data: IBook) => {
    setBook([...books, data])
  }

  const createGenre = (data: IGenre) => {
    setGenre([...genres, data])
  }

  const deleteAuthorById = (id: number) => {
    const author = authors.find((elm) => elm.id == id)
    if (author) {
      setAuthor([...authors.filter((elm) => elm.id != id)])
      setBook([...books.map((e) => ({ ...e, authors: e.authors.filter(elm => elm != author.username) }))])
    }
  }

  const deleteBookById = (id: number) => {
    setBook([...books.filter((elm) => elm.id != id)])
  }

  const deleteGenreById = (id: number) => {
    const genre = genres.find((elm) => elm.id == id)
    if (genre) {
      setGenre([...genres.filter((elm) => elm.id != id)])
      setBook([...books.map((e) => ({ ...e, genres: e.genres.filter((e) => e != genre.name) }))])
    }
  }

  return (
    <div className="App">
      <MyContext.Provider value={{images, genres, books, authors, deleteAuthorById, deleteBookById, deleteGenreById, createAuthor, createBook, createGenre}}>
        <Container>
            <Row>
                <Col xs={3}>
                    <AddGenre/>
                    <AddAuthor/>
                    <AddBooks/>
                </Col>
                <Col >
                    <ShowGenre/>
                    <ShowAuthor/>
                    <ShowBook/>  
                </Col>
            </Row>
        </Container>
      </MyContext.Provider>
    </div>
  );
}

export default App;
