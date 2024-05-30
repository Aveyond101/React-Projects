//Root Component function called App. Rendered to the DOM when index.js is run
import Navbar from './Navbar';
import Home from './Home';
import Form from './Form';
import ColorPicker from './ColorPicker';




function App() {
  
  return (
    <div className="App">
      
      <Navbar></Navbar>
      
      <div className="content">
        <Home></Home>
        <Form></Form>
        <ColorPicker></ColorPicker>
        
      </div>

      
      
    </div>
  );
}

export default App;
