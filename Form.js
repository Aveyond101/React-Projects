import { useState } from 'react';





const Form = () => {
    
   
    const [word, setWord] = useState('');
    
    const [syn, setSyn] = useState([]);
    
    
    const handleWord = (e) => setWord(e.target.value);
  
   

   const handleFetch = (e) =>{
       
        e.preventDefault();
        fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
        .then(res =>{
            
            return res.json();
            
        })
        .then(data =>{
            console.log(data);
            setSyn(data);
            
        })
    }; 
    
    
    
    return ( 
        
        <div className = 'form'>
            
            <form onSubmit = { handleFetch }>
                <label for = "word_input">Enter Word Here</label>
                <input
                    value = {word}
                    onChange = {handleWord}
                    id = "word_input"
                ></input>
                <button>Submit</button>
            </form>
            
            
            {syn.map((syns) =>(
                <div className = "Synonyms" key = {word}>
                    {<h2>{syns.word}</h2>}
                    
                    
                </div>
            ))}


        </div>

        
        

    );
}
 







export default Form;
