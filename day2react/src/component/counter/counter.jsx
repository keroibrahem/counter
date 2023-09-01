 
import React , {useState}from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Counter = () =>{
    let [counter , setCounter] = useState(0)
    let [isShow , setIsShow] = useState(true)
    
    const Increment = () => {
        setCounter(counter + 1);
      };
      
      const Decrement = () => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      };

      const toggleMessage = () => {
        setIsShow(!isShow);
      };

return (
  <div className='d-flex flex-column justify-content-center align-items-center'
  style={{
    height:'100vh'
  }}>
<h2>{counter}</h2>
{
    isShow && <h4> you clickeed {counter} times</h4>
}
        <div className='d-flex gap-3'>
          <button  className='py-2 px-5 btn btn-outline-secondary' onClick={Increment}>+</button>
          <button  className='py-2 px-5 btn btn-outline-danger' onClick={Decrement}>-</button>
          </div>
          <button className={`py-2 my-4  fw-bold px-5 btn ${isShow ? ' btn-info ': 'btn-danger'}`} onClick={toggleMessage} >
            {isShow ? "Hide" : "Show"}
          </button>
        </div>
    
  
);
};

export default Counter