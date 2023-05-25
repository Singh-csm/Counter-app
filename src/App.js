import React, {useState} from 'react';
import "./app.css"
function App() {
 
  const [count, setcount] = useState(0);



  return (
    <div className='count'>
       Count : {count}
       <button style={{color:"red", width:"120px",height:"30px"}} onClick={()=>setcount(coun=>coun+1)}>+</button>
       <button  style={{backgroundColor:"teal", width:"400px", fontWeight:"bold", fontSize:"100px"}} onClick={()=>setcount(0)}>Reset</button>
       <button style={{color:"black", width:"120px",height:"30px",fontWeight:"bold"}} onClick={()=>setcount(coun=>coun-1)}>-</button>
    </div>
  );
}

export default App;