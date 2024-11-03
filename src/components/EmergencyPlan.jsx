import { Field } from "./ui/field"
import { useForm } from "react-hook-form"
import { Heading, VStack, Box, Link, Strong, Button, Input, Stack } from "@chakra-ui/react"
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
            <Heading color="black" textStyle="5xl">Create Emergency Plan</Heading>
            <form onSubmit={onSubmit}>
              <Stack gap="4" align="flex-start" maxW="sm">
                <Field label="Meeting Location">
                  <Info text="You should have a meeting location"/>
                    <Input
                      {...register("location")}
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
        <Button size="xs" variant="ghost">
          <LuInfo />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent maxWidth="240px">
        <HoverCardArrow />
        <Box>
          {text}
        </Box>
      </HoverCardContent>
    </HoverCardRoot>
  )
}


export default EmergencyPlan