import { useState } from 'react'

//import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { Provider } from "./components/ui/provider"
import { VStack } from "@chakra-ui/react"
import { Link as ChakraLink} from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import Checklist from './components/Checklist'


function App() {
  
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation/>}/>
          <Route path="/before" element={<Checklist/>}/>
          <Route path="/during" element={<p>during</p>}/>
          <Route path="/after" element={<p>after</p>}/>
        </Routes>
      </Router>
    </Provider>
  )
}

const Navigation = () => (
  <div>
    <VStack paddingY="100px" >
      <Heading color="black" textStyle="7xl">Where are you right now?</Heading>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="/before">
          Before
        </Link>
      </ChakraLink>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="/during">
          During
        </Link>
      </ChakraLink>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="/after">
          After
        </Link>
      </ChakraLink>
    </VStack>
  </div>
)

export default App
