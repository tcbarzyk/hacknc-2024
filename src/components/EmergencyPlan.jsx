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

const EmergencyPlan = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
      <Box display="flex" justifyContent="center" minHeight="100vh">
        <Box textAlign="left" display="flex" justifyContent="center" padding="20px" width="800px" bg="gray.100">
          <Box textAlign="left">
            <Heading color="black" textStyle="5xl" paddingY="20px">Create Emergency Plan</Heading>
            <form onSubmit={onSubmit}>
              <Stack gap="4" align="flex-start" maxW="sm">
                <Field>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="If a hurricane is forecasted to hit your area, a safe evacuation plan from the area is crucial." />
                    <Text as="label" fontWeight="bold">Evacuation Plan</Text>
                  </Box>
                    <Textarea
                      {...register("location")}
                        />
                </Field>
                <Field>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="You should have someone who you trust to contact in case of emergency." />
                    <Text as="label" fontWeight="bold">Emergency Contact</Text>
                  </Box>
                    <Textarea
                      {...register("contact")}
                        />
                </Field>
                <Field>
                  <Box display="flex" alignItems="center" gap="2">
                    <Info text="In case of a medical emergency, what will you do? Where will you go?" />
                    <Text as="label" fontWeight="bold">Medical Emergency Plan</Text>
                  </Box>
                    <Textarea
                      {...register("medical")}
                        />
                </Field>
                <Button type="submit">Save Plan</Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    )
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