import React from 'react'
import { useEffect } from 'react'

const MyComponents = () => {

  useEffect(() => {
    console.log("effecting");
  })

  return (
    <div>MyComponents</div>
  )
}

export default MyComponents