import { useState, useEffect } from 'react'
import alertService from "../services/alerts"
import { Heading, Box, Text, VStack, Icon, Card} from "@chakra-ui/react"
import {
  ProgressCircleRing,
  ProgressCircleRoot,
} from "./ui/progress-circle"
import { Avatar } from "./ui/avatar"
import { GoAlertFill } from "react-icons/go"


const Localforecast = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null })
    const [alerts, setAlerts] = useState(null)
    const [points, setPoints] = useState(null)
    const [forecast, setForecast] = useState(null)
    /*
    const testLocation = {
      latitude: "36.7206",
      longitude: "-97.7906"
    }*/

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setError("Location access denied.");
                    console.error(error);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, [])

    useEffect(() => {
      if (location.latitude != null && location.longitude != null) {
        alertService.getAlerts(location).then(returnedAlerts => {
          console.log(returnedAlerts)
          setAlerts(returnedAlerts)
        })
        alertService.getPoints(location).then(returnedPoints => {
          setPoints(returnedPoints)
          alertService.getForecast(returnedPoints).then(returnedForecast => {
            console.log(returnedForecast)
            setForecast(returnedForecast)
          }
          )
        })
      }
    }, [location])

    if (points != null && forecast != null && alerts != null) {
      return (
        <Box display="flex" justifyContent="center" minHeight="100vh">
          <Box textAlign="left" display="flex" justifyContent="center" padding="20px" width="1200px" bg="gray.100">
            <Box textAlign="left">
              <Heading paddingY="20px" textStyle="5xl">Forecast for {points.properties.relativeLocation.properties.city}, {points.properties.relativeLocation.properties.state}</Heading>
              <Box display="flex" flexWrap="wrap" maxWidth="1200px">
                {forecast.properties.periods.filter(period => period.isDaytime).map(period => <WeatherCard period={period}/>)}
              </Box>
              <Heading paddingY="20px" textStyle="5xl">Current Alerts</Heading>
              <AlertDisplay city={points.properties.relativeLocation.properties.city} alerts={alerts.features}/>
            </Box>
          </Box>
        </Box>
      )
    }
    else {
      return (
        <Box display="flex" justifyContent="center" minHeight="100vh">
          <Box textAlign="left" display="flex" justifyContent="center" padding="20px" width="1200px" bg="gray.100">
            <Box textAlign="left">
              <ProgressCircleRoot value={null} size="sm">
                <ProgressCircleRing cap="round" />
              </ProgressCircleRoot>
            </Box>
          </Box>
        </Box>
      )
    }
}

const AlertDisplay = ({ city, alerts }) => {
  const alertsToDisplay = alerts.filter(alert => alert.properties.areaDesc.includes(city))

  if (alertsToDisplay.length === 0) return (<Text textStyle="2xl">No alerts to display</Text>)
  else {
    return (
      <VStack>
        {alertsToDisplay.map(alert => <AlertCard alert={alert}/>)}
      </VStack>
    )
  }
}

const AlertCard = ({ alert }) => {
  const severityColor = alert.properties.severity == "Severe" || alert.properties.severity == "Extreme" ? "red" : "yellow"

  return (
    <Card.Root width="1150px" margin="10px" bg="lightgrey">
      <Card.Body gap="1">
        <Icon fontSize="40px" color={severityColor}>
          <GoAlertFill />
        </Icon>
        <Card.Title color="black" mt="1">{alert.properties.event}</Card.Title>
        <Card.Description color="black">
          {alert.properties.description}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

const WeatherCard = ({period}) => {
  return (
    <Card.Root maxHeight="800px" maxWidth="300px" minWidth="200px" margin="10px" bg="lightgrey">
      <Card.Body gap="1">
        <Avatar
          src={period.icon}
          name="Forecast Icon"
          size="lg"
          shape="rounded"
        />
        <Card.Title color="black" mt="1">{period.name}</Card.Title>
        <Card.Description color="black ">
          {period.detailedForecast}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

export default Localforecast;