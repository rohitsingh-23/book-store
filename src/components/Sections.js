import React, { useEffect } from 'react'
import CardsList from './CardsList'
import axios from 'axios'

const Sections = ({ category, books }) => {
  return (
      <div>
          <h1>{ category }</h1>
          <CardsList books={books} />
    </div>
  )
}

export default Sections