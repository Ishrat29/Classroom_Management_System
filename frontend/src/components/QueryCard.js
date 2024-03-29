import React from 'react'
import { Link } from 'react-router-dom'

function QueryCard(props) {
  return (
    <>
        <li className='cards__item'>
        <Link className='cards__item__link' to={{pathname: props.path}}>
            <figure className='cards__item__pic-wrap'
            data-category={props.label}>
                <img src={props.src} alt = "Query"
                className='cards__item__img'/>
            </figure>
            </Link>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </li>
    </>
  )
}

export default QueryCard