import React from 'react'
import '../App.css'

export const CardPlayer = ({heading, description, source}) =>{
  return (
    <div className="cardPlayer" style={{backgroundImage: `url(${source})`}}>
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}