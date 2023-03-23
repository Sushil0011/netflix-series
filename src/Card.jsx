import React from 'react'

const Card = ({imgsrc,title, sname,link}) => {
  return (
<>
<div className='card'>
    <img src={imgsrc} alt='' className='card_img'/>
    <div className='card_info'>
      <span  > {title}</span>
      <h3>{sname}</h3>
      <a href={link}  target="_blank"  rel='noreferrer' >
      <button>Watch Now</button>
      </a>
    </div>
  </div>
</>
  )
}

export default Card;