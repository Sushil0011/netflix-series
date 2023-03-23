
import './App.css';
import React from 'react'
import Card from './Card'
import Sdata from './data';
import './responsive.css'
console.log(Sdata)
const App = () => {
  return (

    <>
      <h1 className='heading'> Top Netflix Series</h1>
      <div className='cards'>
      
       {
        Sdata.map((data,index)=>{
return(    <Card
          key={index}
          imgsrc={data.imgsrc}
          title={data.title}
          sname={data.sname}
          link={data.links}
        />
)
        })
       }
       
      </div>



    </>
  )
}

export default App