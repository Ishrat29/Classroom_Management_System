import React from 'react'
import GenNavbar from '../components/GenNavbar'
import QueryCardCollectionGen from '../components/QueryCardCollectionGen'
import QUeryCollectionAdv from '../components/QUeryCollectionAdv'

function TeacherQuery() {
  return (
    <div className='TeacherQuery'>
      <GenNavbar />
      <QueryCardCollectionGen />
      <hr></hr>
      <QUeryCollectionAdv />
    </div>
  )
}

export default TeacherQuery