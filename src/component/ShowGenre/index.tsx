import React, { useContext } from "react";
import './style.scss'
import { MyContext } from "../../context/MyContext";

export const ShowGenre: React.FC = React.memo(({ }): JSX.Element => {
    const { genres, deleteGenreById } = useContext(MyContext)

    return (<div>
        <h2>Show Genre</h2>

        <table className="table table-success table-bordered table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    genres.map((elm) => {
                        return (
                            <tr key={elm.id}>
                                <td>{elm.name}</td>
                                <td><button onClick={() => deleteGenreById(elm.id)} className="btn btn-danger">&times;</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>)
})