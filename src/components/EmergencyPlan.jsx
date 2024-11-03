import { Field } from "./ui/field"
import { useForm } from "react-hook-form"
import { Heading, VStack, Box, Link, Strong, Button, Input, Stack, Text, Textarea } from "@chakra-ui/react"
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "./ui/hover-card"
import { useState } from "react"
import { LuInfo } from "react-icons/lu"
import { PDFDownloadLink } from '@react-pdf/renderer'
import EmergencyPlanPdf from '../EmergencyPlanPdf.jsx'

const EmergencyPlan = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [plan, setPlan] = useState(null)
    const onSubmit = data => {
      console.log(data)
      
      setPlan(data)
    }

    return (
      <Box display="flex" justifyContent="center" minHeight="100vh">
        <Box textAlign="left" display="flex" justifyContent="center" padding="20px" width="800px" bg="gray.100">
          <Box textAlign="left">
            <Heading color="black" textStyle="5xl" paddingY="20px">Create Emergency Plan</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap="4" align="flex-start" maxW="sm">
                <Field required>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="Select two family meeting locations where your family can reunite after a disaster." />
                    <Text as="label" fontWeight="bold">Meeting Locations</Text>
                  </Box>
                    <Textarea
                      {...register("location")}
                        />
                </Field>
                <Field required>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="Identify someone who you trust to contact in case of emergency." />
                    <Text as="label" fontWeight="bold">Emergency Contact</Text>
                  </Box>
                    <Textarea
                      {...register("contact")}
                        />
                </Field>
                <Field required>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="Establish a method and route of evacuation." />
                    <Text as="label" fontWeight="bold">Evacuation Plan</Text>
                  </Box>
                    <Textarea
                      {...register("evac")}
                        />
                </Field>
                <Field required>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="Designate a safe room in your house and identify emergency supplies." />
                    <Text as="label" fontWeight="bold">Shelter-in-place Plan</Text>
                  </Box>
                    <Textarea
                      {...register("shelter")}
                        />
                </Field>
                <Field required>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="Identify contacts, supplies, and needs in the case of a medical emergency." />
                    <Text as="label" fontWeight="bold">Medical Emergency Plan</Text>
                  </Box>
                    <Textarea
                      {...register("medical")}
                        />
                </Field>
                <Button type="submit">Save Plan</Button>
                <DownloadLink plan={plan}/>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    )
}

const DownloadLink = ({plan}) => {
  const planName = `emergencyplan.pdf`
  if (plan != null) return (
    <PDFDownloadLink document={<EmergencyPlanPdf plan={plan}/>} fileName={planName}>
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
    </PDFDownloadLink>
  )
  else return
}

const Info = ( {text} ) => {
  const [open, setOpen] = useState(false)
  return (
    <HoverCardRoot size="sm" open={open} onOpenChange={(e) => setOpen(e.open)}>
      <HoverCardTrigger asChild>
        <Button size="xs" variant="ghost" color="black">
          <LuInfo />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent maxWidth="240px">
        <HoverCardArrow />
        <Box color="white">
          {text}
        </Box>
      </HoverCardContent>
    </HoverCardRoot>
  )
}


export default EmergencyPlan