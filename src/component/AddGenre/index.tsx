import React, { useContext } from "react";
import './style.scss'
import { MyContext } from "../../context/MyContext";
import { useForm } from "react-hook-form";
import { IGenre } from "../../types/types";

export const AddGenre:React.FC = React.memo(({}):JSX.Element => {
    const {genres, createGenre} = useContext(MyContext)
    const {reset, handleSubmit, formState: {errors}, register} = useForm<IGenre>()
    const save = (data:IGenre) => {
        createGenre({...data, id: Date.now()})
        reset()
    } 

    return(<div className="border border-3">
        <h2>Add Genre</h2>

        <form onSubmit={handleSubmit(save)} className="form-control">
            <br />
            <input type="text" placeholder="for name" className="form-control" 
            {...register("name", {
                required: "Invalid name",
                validate:(val)=>{
                const gen = genres.find(elm=>elm.name.toLowerCase()==val.toLowerCase());
                return !gen || "genre has already"
                }
                })}/>
            {errors.name && <p>{errors.name.message}</p>}
            <button className="btn btn-success">save</button>
        </form>
    </div>)
})