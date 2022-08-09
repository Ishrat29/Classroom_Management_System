import React from 'react'
import './tableElement.css'

function TableElement(props) {



  return (
    <>
      <div className='table-wrap' onClick={(e)=>{props.onC(e,props.keyInfo)}}>
        <div className='table-outlay'>
          <div className='table-left'>
            <div className='table-left-dummy'>

            </div>
            <div className='table-left-title'>
              {props.day.toUpperCase()}
            </div>
          </div>
          <div className='table-right'>
            <div className='table-right-title'>
              {props.time+":00"}
            </div>
            <div className='table-right-content'>
              <div className='table-course-code'>{props.courseCode}</div>
              <div className='table-corse-title'>{props.courseTitle}</div>
              <div className='table-course-teacher'>{props.courseTeacher}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableElement