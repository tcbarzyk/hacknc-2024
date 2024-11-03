import { useState } from 'react'
//import './App.css'
import { Link, Heading, VStack, Card, HStack, List } from "@chakra-ui/react"


function HurricaneTracker() {
  
  return (
    <VStack padding="30px">
      <HStack>
      <Card.Root width="320px">
        <Card.Body gap="1" bg="#BEBEBE">
          <Card.Title color="black">Useful Links</Card.Title>
          <Card.Description>
            <List.Root>
              <List.Item><Link color="black" href="https://gis-fema.hub.arcgis.com/pages/hurricanes">Explore Map</Link></List.Item>
              <List.Item><Link color="black" href="https://weather.com/">Weather Channel</Link></List.Item>
              <List.Item><Link color="black" href="https://cnrse.cnic.navy.mil/Installations/NS-Mayport/About/Hurricane-Information/Terms/Hurricane-Categories/">Understanding Hurricane Categories</Link></List.Item>
            </List.Root>
          </Card.Description>
        </Card.Body>
      </Card.Root>
      <Heading color="black" textStyle="5xl" padding="20px">Live Hurricane Tracking Interactive Map</Heading>
      </HStack>
      <iframe width="1300" height="700" frameborder="0" scrolling="no" allowfullscreen src="https://arcg.is/9r9uf0" ></iframe>
    </VStack>
  )
}

export default HurricaneTracker