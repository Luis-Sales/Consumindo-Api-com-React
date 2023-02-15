import React from "react";

import NavBar from "../components/NavBar"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

//axios
import axios from 'axios';

//Hook form
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

    const schema = yup.object({
        content: yup.string().required('Campo  Conteúdo é  Obrigatorio').min(40, "Precisa ter 40 caracterers"),
        title: yup.string().required('Campo Título é Obrigatorio').max(20, "Maximo 10 caracterers"),
        description: yup.string().required('Campo Descrição é Obrigatorio').min(10, "Minímo 10 caracterers"),
    }).required();

const Form = () =>{

    const { register, handleSubmit,  formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    
    const addPost = data => axios.post('https://reqres.in/api/users', data)
            
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


                            <label for="floatingInput">Título</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" name='description' {...register("description")} 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Descrição"
                            />

                            <p className="text-danger col-12 mt-3">{errors.description?.message}</p>

                            <label for="floatingPassword">Descrição</label>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">Conteúdo</span>
                            <textarea className="form-control" name='content' {...register("content")}aria-label="With textarea"> 

                            </textarea>
                            <p className="text-danger col-12 mt-3">{errors.content?.message}</p>
                            
                        </div>

                        <div class="d-grid gap-2 col-6 mx-auto">
                            
                            <button class="btn btn-success" type="submit">Enviar</button>
                        </div>
                        
                    </form>

                </div>

            </div>
        </div>
        
        </>



    )
}

export default Form