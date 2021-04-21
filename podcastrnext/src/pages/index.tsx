// SPA
// SSR
// SSG

import {useState} from 'react'

export default function Home() {
	useState ( () => {
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  })
  return (

  	<h1>Index</h1>

  )
}
