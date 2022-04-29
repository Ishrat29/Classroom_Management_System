import React from 'react'

function QueryCard(props) {
  return (
    <>
        <li className='cards__item'>
            <figure className='cards__item__pic-wrap'
            data-category={props.label}>
                <img src={props.src} alt = "Query"
                className='cards__item__img'/>
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </li>
    </>
  )
}

export default QueryCard