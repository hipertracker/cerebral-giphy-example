import React from 'react'
import ErrorNotification from '../ErrorNotification'
import Modal from '../Modal'
import Pagination from '../Pagination'
import Pictures from '../Pictures'
import Tabs from '../Tabs'

export default function App () {
  return (
    <div className="container is-fluid">
      <Tabs/>
      <ErrorNotification/>
      <Pagination/>
      <Pictures/>
      <Modal/>
    </div>
  )
}


