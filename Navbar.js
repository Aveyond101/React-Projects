const Navbar = () => {
    const link = 'https://www.ottawafootysevens.com/home_pickupfeed.seam';
    return (  
       
       <nav className = "navbar">
           <h1> Ottawa Soccer Blog </h1>
           <div className = "links">
                <a href = "/">Home</a>
                <a href = {link} style = {{
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}
                
                >Pickup Games</a>
           </div>
           
           
           
           
       </nav> 
    );
}
 
export default Navbar;
