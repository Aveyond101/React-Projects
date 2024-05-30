import { useState, useEffect } from 'react';
import BlogList from './BlogList';

//Using props we can pass data from a parent component to a child component
//Home is the parent component and BlogList is the child component

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    //Runs on every render to the DOM
    //inside the dependency array, the value name is watched and if its
    //value changes, useEffect fires the function
    //This is how to fetch data from an API
    useEffect(() =>{
        console.log('useEffect ran');
       /* fetch('http://localhost:8000/blogs')
        .then(res =>{
            return res.json()
        })
        .then(data=>{
            
            setBlogs(data);
            setIsPending(false);
        })*/
    }, []);
    
    
    
    return (  
        <div className = "home">
            { isPending && <div> Loading... </div>}
           {blogs && <BlogList blog = {blogs} title = "All Blogs!" ></BlogList>}
           
        </div>
        
    );
}
 
export default Home;