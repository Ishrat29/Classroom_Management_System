import React from 'react'
import QueryCard from './QueryCard'
import './QueryCardCollectionGen.css'

function QUeryCollectionAdv() {
  return (
    <div className='cards'>
        <h1>Advanced Options</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <QueryCard src='images/add-edit-course.png'
                text = 'Add Or Edit A Course'
                label = 'Add/Edit Course'/>
              <QueryCard src='images/add-edit-teacher.png '
                text = "Add Or Edit A Teacher's Information"
                label = "Add/Edit Teacher"/>
              <QueryCard src='images/add-edit-student.png'
                text = "Add Or Edit A Student's Information"
                label = "Add/Edit Student"/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default QUeryCollectionAdv