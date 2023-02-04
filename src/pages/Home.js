import React from "react"

import NavBar from "../components/NavBar"
import Card from '../components/Card'

 
const Home = () => {
    return(
        <>
        <NavBar Logo={'Projeto Crud'} NewPost={true}></NavBar> 

        <div className="container" NewPost={false}>
         <Card/>
        </div>
        </>

    )
}

export default Home

