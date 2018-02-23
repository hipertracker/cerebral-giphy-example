import React from 'react'
import Tab from './Tab'

export default function Tabs () {
  return (
    <div className="tabs is-centered is-boxed is-large">
      <ul>
        <Tab term="Cats"/>
        <Tab term="Dogs"/>
      </ul>
    </div>
  )
}
