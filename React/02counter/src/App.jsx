import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterWithoutState from './components/counterWithoutState/CounterWithoutState'
import CounterWithState from './components/counterWithState/CounterWithState'
function App() {

  return (
    <>
      <h1>Hello Counter React</h1>
      <CounterWithoutState />
      <CounterWithState />
    </>
  )
}

export default App
