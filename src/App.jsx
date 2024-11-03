import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import { Provider } from "./components/ui/provider"
import { Heading, Box, VStack, Link as ChakraLink } from "@chakra-ui/react"
import Checklist from './components/Checklist'
import EmergencyPlan from './components/EmergencyPlan'
import Newsfeed from './components/Newsfeed'
import HurricaneTracker from './components/HurricaneTracker'
import Localforecast from './components/Localforecast'

function App() {
  return (
    <Provider>
      <Router>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Navigation/>}/>
          <Route path="/before" element={<Before/>}/>
          <Route path="/during" element={<During/>}/>
          <Route path="/after" element={<After/>}/>
          <Route path="/before/before-checklist" element={<Checklist time="before"/>}/>
          <Route path="/before/hurricane-tracker" element={<HurricaneTracker/>}/>
          <Route path="/before/emergency-plan" element={<EmergencyPlan/>}/>
          <Route path="/before/local-forecast" element={<Localforecast/>}/>
          <Route path="/during/emergency-info" element={<Checklist time="during"/>}/>
          <Route path="/after/after-checklist" element={<Checklist time="after"/>}/>
          <Route path="/after/hurricane-news" element={<Newsfeed/>}/>
        </Routes>
      </Router>
    </Provider>
  )
}

const Before = () => {
  return (
    <VStack paddingY="50px">
      <Heading color="black" textStyle="7xl">What do you need help with?</Heading>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="./before-checklist">
          Safety Checklist
        </Link>
      </ChakraLink>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="./hurricane-tracker">
          Hurricane Tracker
        </Link>
      </ChakraLink>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="./emergency-plan">
          Create Emergency Plan
        </Link>
      </ChakraLink>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="./local-forecast">
          Local Forecast
        </Link>
      </ChakraLink>
    </VStack>
  )
}

const During = () => {
  return (
    <VStack paddingY="50px">
      <Heading color="black" textStyle="7xl">What do you need help with?</Heading>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="./emergency-info">
          Emergency Info
        </Link>
      </ChakraLink>
    </VStack>
  )
}

const After = () => {
  return (
    <VStack paddingY="50px">
      <Heading color="black" textStyle="7xl">What do you need help with?</Heading>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="./after-checklist">
          Safety Checklist
        </Link>
      </ChakraLink>
      <ChakraLink asChild color="black" textStyle="6xl">
        <Link to="./hurricane-news">
          Hurricane News
        </Link>
      </ChakraLink>
    </VStack>
  )
}

const TopBar = () => {
  return (
    <Box display="flex" justifyContent="center"backgroundColor="#0092ca" paddingY="10px">
      <Box display="flex" width="1500px">
        <Box textAlign="left">
          <ChakraLink asChild color="black" fontWeight="bold" textStyle="6xl">
            <Link to="/">
              ReadyNow
            </Link>
          </ChakraLink>
        </Box>
      </Box>
    </Box>
  )
}

const Navigation = () => (
  <div>
    <VStack paddingY="50px" >
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
