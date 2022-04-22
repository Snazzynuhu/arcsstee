import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section>
        <h1>Ooops!!! It's a dead end</h1>
        <button>
        <Link to='./'>Back home</Link>
        </button>
    </section>
  )
}

export default Error