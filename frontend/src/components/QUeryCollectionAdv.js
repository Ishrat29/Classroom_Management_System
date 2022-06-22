import React from 'react'
import QueryCard from './QueryCard'
import './QueryCardCollectionGen.css'
import { useNavigate } from 'react-router-dom'

function QUeryCollectionAdv() {

  const navigate = useNavigate();

  return (
    <div className='cards'>
        <h1>Advanced Options</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <QueryCard src='images/add-edit-course.png'
                text = 'Add Or Edit A Course'
                label = 'Add/Edit Course'
                onClick={()=>{navigate("/");}}/>
              <QueryCard src='images/add-edit-teacher.png '
                text = "Add Or Edit A Teacher's Information"
                label = "Add/Edit Teacher"
                onClick={()=>{navigate("/");}}/>
              <QueryCard src='images/add-edit-student.png'
                text = "Add Or Edit A Student's Information"
                label = "Add/Edit Student"
                onClick={()=>{navigate("/");}}/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default QUeryCollectionAdv