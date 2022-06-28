import React from 'react'
import QueryCard from './QueryCard'
import { useNavigate } from 'react-router-dom'
import './QueryCardCollectionGen.css'


function QUeryCollectionAdv() {
 
  const navigate = useNavigate();


  return (
    <div className='cards'>
        <h1>Advanced Options</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
               
            <div onClick={()=>{navigate("/AddEditCourse");}}>
              <QueryCard hoverable
                src='images/add-edit-course.png'
                text = 'Add Or Edit A Course'
                label = 'Add/Edit Course'
                onClick="console.log('The link was clicked.')"
                />
               </div>
               <div onClick={()=>{navigate("/AddEditTeacher");}}>
              <QueryCard src='images/add-edit-teacher.png '
                text = "Add Or Edit A Teacher's Information"
                label = "Add/Edit Teacher"
                />
                </div>
                <div onClick={()=>{navigate("/AddEditStudent");}}>
              <QueryCard src='images/add-edit-student.png'
                text = "Add Or Edit A Student's Information"
                 label = "Add/Edit Student"
                />
              </div>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default QUeryCollectionAdv