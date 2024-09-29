import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormCardC from './components/FormCard_C'
import FormCard_D from './components/FormCard_D'
import Main from './screens/Main'
// import FormCard_A from './components/FormCard_A'
// import FormCard_B from './components/FormCard_B'
// import FormCard_C from './components/FormCard_C'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FormCard_D/> */}
      <Main/>
    </>
  )
}

export default App
