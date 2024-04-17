import React, { useContext, useEffect, useState } from "react";
import './style.scss'
import { MyContext } from "../../context/MyContext";
import { IBook } from "../../types/types";

export const ShowBook: React.FC = React.memo(({ }): JSX.Element => {
    const { books, deleteBookById, genres, authors } = useContext(MyContext)

    const [clone, setClone] = useState<IBook[]>([...books])
    useEffect(() => {
        setClone([...books])
    }, [books])

    return (<div>
        <h2>Show Book</h2>
        <select className="form-control">
            {
                genres.map((elm) => {
                    return (
                        <option value={elm.name} key={elm.id}>{elm.name}</option>
                    )
                })
            }
        </select>

        <select className="form-control">
            {
                authors.map((elm) => {
                    return(
                        <option value={elm.username} key={elm.id}>{elm.name} {elm.surname} -- {elm.username}</option>
                    )
                } )
            }
        </select>
        <table className="table table-primary table-bordered table-hover">
            <thead>
                <tr>
                    <th>title</th>
                    <th>description</th>
                    <th>genres</th>
                    <th>authors</th>
                    <th>img</th>
                    <th>price</th>
                    <th>&times;</th>
                </tr>
            </thead>
            <tbody>
                {
                    clone.map((elm) => {
                        return(
                        <tr>
                            <td>{elm.title}</td>
                            <td>{elm.description}</td>
                            <td>{elm.genres}</td>
                            <td>{elm.authors}</td>
                            <td><img src={elm.img} width={100} alt="" /></td>
                            <td>{elm.price}</td>
                            <td><button className="btn btn-light" onClick={() => deleteBookById(elm.id)}>&times;</button></td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>


    </div>)
})