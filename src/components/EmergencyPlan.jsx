import { VStack } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Button, Input, Stack, Box } from "@chakra-ui/react"
import { Field } from "./ui/field"
import { useForm } from "react-hook-form"

const EmergencyPlan = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
            <VStack width="400px" spacing="8px">
                <Heading paddingX="50px" color="black" textStyle="5xl">Create Emergency Plan</Heading>
                <form onSubmit={onSubmit}>
                    <Stack gap="4" align="flex-start" maxW="sm">
                        <Field label="Location">
                            <Input
                                {...register("location")}
                            />
                        </Field>
                        <Button type="submit">Save Plan</Button>
                    </Stack>
                </form>
            </VStack>
        </Box>
    )
}

export default EmergencyPlan