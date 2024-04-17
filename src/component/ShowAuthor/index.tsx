import React, { useContext } from "react";
import './style.scss'
import { MyContext } from "../../context/MyContext";

export const ShowAuthor:React.FC = React.memo(({}):JSX.Element => {
    const {authors, deleteAuthorById} = useContext(MyContext)
    
    return(<div>
        <h2>Show Author</h2>

        <table className="table table-dark table-bordered table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Username </th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((elm) => {
                        return(
                        <tr key={elm.id}>
                            <td>{elm.name}</td>
                            <td>{elm.surname}</td>
                            <td>{elm.username}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteAuthorById(elm.id)}>&times;</button></td>
                        </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </div>)
})