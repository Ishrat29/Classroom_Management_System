import React from 'react'
import QueryCard from './QueryCard'
import './QueryCardCollectionGen.css'

function QueryCardCollectionGen() {
  return (
    <div className='cards'>
        <h1>General Options</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <QueryCard src='images/classroom-info.png '
                text = 'Get Information About A Room'
                label = 'Room Information'/>
              <QueryCard src='images/teacher-routine.png '
                text = "Get Information About A Teacher's Class Schedule"
                label = "Teacher's Schedule"/>
              <QueryCard src='images/courses-info.png '
                text = "Get Information About A Course"
                label = "Course Information"/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default QueryCardCollectionGen