import React,{useState, useEffect} from "react"
import axios from "axios"

import NavBar from "../components/NavBar"
import Card from '../components/Card'

 
const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2")
        .then(response => {
            
            setPosts(response.data.data)
        })
          .catch(error => {
            console.error(error);
        })
    }, [])


    //console.log(posts)
    return(
        <>
        <NavBar Logo={'Projeto Crud'} NewPost={true}></NavBar> 

        <div className="container" NewPost={false}>
         <Card data={posts}/>
        </div>
        </>

    )
}

export default Home

