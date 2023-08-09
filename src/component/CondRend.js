import React from 'react'


export default function CondRend( obj) {
    const m =[
        { name:"devansh",branch:"csds"},
        {name:"saksham",branch:"cse"},
        {name:"aditya",branch:"csds"}
    ]
  return (
    
    <div>{
        m.map(
            (obj)=> {
                return(
                <p> name of student is {obj.name} and branch is {obj.branch} </p>

                )
                

            }

        )
}
    

    </div>
        
    
  )
}

