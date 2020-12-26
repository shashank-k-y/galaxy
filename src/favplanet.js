




function Favplanet() {

    var item =JSON.parse(localStorage.getItem('myfav'));





    const handleClick = (value) => () => { 

        delete value.item
        
        console.log(value)
    
              
      };
    

    
  
   
    return (
        <div>
        <div className="container"><h2>My Favorite Planets</h2>
            
       <div className="list">
        <ul>
        <li>{item.post.name}
        <button
        className="btn"  onClick={handleClick({item })}>remove</button> </li>
      
        </ul>
          
        </div>
        

    </div> 
        </div>
    )
}

export default Favplanet



   