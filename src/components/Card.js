import React from "react"

import { Link } from "react-router-dom"

 
const Card = () =>{
    return(
        
        <div className='d-flex  justify-content-center mb-3'>    
            <div class="card  mt-5" style={{ width: '28rem' }} >
                
                <div class="card-body">
                    <h5 class="card-title">Card title</h5><hr/>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <button type="button" class="btn btn-info  mx-3 col-3">Edit</button>
                    <Link to={`lermais`}><button type="button" class="btn btn-success mx-3  col-3">Ler Mais</button></Link>
                    <button type="button" class="btn btn-danger mx-3  col-3">Excluir    </button>
                </div>
            </div>
        </div>
    )
}

export default Card