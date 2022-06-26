import React from 'react'
import QueryCard from './QueryCard'
import './QueryCardCollectionGen.css'
import { useNavigate } from 'react-router-dom'

function QueryCardCollectionGen() {
  
  const navigate = useNavigate();

  return (
    <div className='cards'>
        <h1>General Options</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>

              <li 
              onClick={()=>{navigate("/");}}
              >
              <QueryCard src='images/classroom-info.png '
                text = 'Get Information About A Room'
                 label = 'Room Information'
                />
                </li>

                <li 
                  onClick={()=>{navigate("/");}}
                >
              <QueryCard src='images/teacher-routine.png '
                text = "Get Information About A Teacher's Class Schedule"
                label = "Teacher's Schedule"/>
                </li>

                <li 
                  onClick={()=>{navigate("/");}}
                >
              <QueryCard src='images/courses-info.png '
                text = "Get Information About A Course"
                label = "Course Information"/>
                </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default QueryCardCollectionGen