import { useState } from "react";

function Board(){

    let [key,value] =useState(0);
    fetch('http://192.168.7.182/notice/list' , {
            
         }).then((r) => r.json())
         .then((r) => {
            console.log(r)
             value(r)
         })

    return(
         <div>
            <h1>
                list
            </h1>
           {key}
          
          </div>
    );}
export default Board


// export default function Board(){
//     return ( 
//         <a>asdasdasdasdsd</a>
//     )
// }