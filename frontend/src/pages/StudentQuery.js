import React from 'react'
import GenNavbar from '../components/Navigation_Bar/GenNavbar'
import QueryCardCollectionGen from '../components/QueryCardCollectionGen'

function StudentQuery() {
  return (
    <div className='StudentQuery'>
      <GenNavbar />
      <QueryCardCollectionGen />
    </div>
  )
}

export default StudentQuery