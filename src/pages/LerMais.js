import React from "react"

import NavBar from "../components/NavBar"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'

import { useParams } from 'react-router-dom'


const LerMais = ({nome}) =>{

    const { id } = useParams()
    //Fzer um get, usando o id
    console.log(id)
    return(
        <>
            <>
            <NavBar Logo={<ArrowCircleLeftIcon fontSize="large"/>}/>

            <div className='d-flex  justify-content-center mb-3'>    
            <div class="card  mt-5" style={{ width: '28rem' }} >
                
                <div class="card-body">
                    <h5 class="card-title">Ariel Gay</h5><hr/> 
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
        </div>
            </>
        </>

    )
}

export default LerMais