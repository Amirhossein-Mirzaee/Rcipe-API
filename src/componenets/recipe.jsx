import React from 'react'

 const Recipe = (ingredients,title,calories,image) => {
  return (
    <div>
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>{calories}</p>
        <img src={image} alt="" />
    </div>
  )
}
export default Recipe