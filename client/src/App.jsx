import Register from "./Register"
import axios from "axios";
function App() {  
  axios.defaults.baseUrl = "http://localhost:4040";
  axios.defaults.withCredentials = true;  //used for setting cookies for api

  return (
      <Register/>
      
    
  )
}

export default App
