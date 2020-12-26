import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
function Datafetch() {
    const [posts, setPosts] = useState([])
  
    useEffect(()=>{
        axios.get('https://assignment-machstatz.herokuapp.com/planet')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

          

    const handleClick = (value) => () => {
        
        
        console.log(value);
         localStorage.setItem('myfav',JSON.stringify(value));
         window.location.href="./fav"
              
      };

    
    

    return (
        <div>
            
            <div className="container"><h2>Choose your favorite planets</h2>
            
                {posts.map(post=>( <div className="list" key={post.id}>
                <ul>
                <li>{post.name}
                <button
                className="btn"  onClick={handleClick({ post })}>Favorite</button> </li>
              
                </ul>
                  
                </div>))}
                
        
            </div>  
        </div>

    
    )
}

export default Datafetch
