import React,{useState, useEffect} from "react"

import NavBar from "../components/NavBar"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'


import axios from "axios"

import { useParams } from 'react-router-dom'


const LerMais = ({nome}) =>{

    const { id } = useParams()
    //Fzer um get, usando o id
    
    const [PostLerMais,setPostLerMais] = useState([])

    
    useEffect(() => {
        if (id) {
          axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => {
              console.log(response.data.data)
              setPostLerMais(response.data.data)
            })
            .catch(error => {
              console.error(error);
            });
        }
      }, [id])
       

    

    return(
        <>
            <>
            <NavBar Logo={<ArrowCircleLeftIcon fontSize="large"/>}/>

            <div className='d-flex  justify-content-center mb-3'>    
            <div className="card  mt-5" style={{ width: '28rem' }} >
                
                <div className="card-body">
                    <h5 className="card-title">{PostLerMais.first_name}</h5><hr/> 
                    <p className="card-text">{PostLerMais.email}.</p>
                    
                </div>
            </div>
        </div>
            </>
        </>

    )
}

export default LerMais