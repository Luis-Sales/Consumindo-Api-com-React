import React,{useState, useEffect} from "react";

import NavBar from "../components/NavBar"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

//axios
import axios from 'axios'

//Params
import { useParams } from 'react-router-dom'

//Hook form
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

    const schema = yup.object({
        title: yup.string().max(20, "Maximo 10 caracterers"),
        description: yup.string(),
        content: yup.string()
       
    }).required();

const Edit = () =>{

    const [postsGet, setPostsGet] = useState([]);

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        if (id) {
          axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => {
              console.log(response.data.data)
              setPostsGet(response.data.data)
            })
            .catch(error => {
              console.error(error);
            });
        }
      }, [id])


    const { register, handleSubmit,  formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    
    const addPost = data => axios.put(`https://reqres.in/api/users/${id}`, data)
            
           .then((response)=>{
            console.log(response);
        })
    

    return(
       <> 
        <NavBar Logo={<ArrowCircleLeftIcon fontSize="large"/>}/>

        <div className='d-flex  justify-content-center mb-3'>    
            <div className="card bg-dark   mt-5" style={{ width: '28rem' }} >
                <h2 className="text-center mt-3" style={{ color: 'White' }} >Criar Postagem</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit(addPost)}>

                        <div className="form-floating mb-3">
                            <input type="text" name='title' {...register("title")} 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="Título" 
                           />

                        <p className="text-danger col-12 mt-3">{errors.title?.message}</p>


                            <label htmlFor="floatingInput">{postsGet.first_name}</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" name='description' {...register("description")} 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Descrição"
                            />

                            <p className="text-danger col-12 mt-3">{errors.description?.message}</p>

                            <label htmlFor="floatingPassword">{postsGet.last_name}</label>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Conteúdo</span>
                            <textarea value={postsGet.last_name} className="form-control" name='content' {...register("content")}aria-label="With textarea"> 
                                
                            </textarea>
                            <p className="text-danger col-12 mt-3">{errors.content?.message}</p>
                            
                        </div>

                        <div className="d-grid gap-2 col-6 mx-auto">
                            
                            <button className="btn btn-success" type="submit">Enviar</button>
                        </div>
                        
                    </form>

                </div>

            </div>
        </div>
        
        </>



    )
}

export default Edit