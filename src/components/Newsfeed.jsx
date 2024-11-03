import { Heading, VStack } from "@chakra-ui/react"

const Newsfeed = () => {
    return (
      <VStack padding="20px">
        <Heading padding="20px" textStyle={"3xl"}>Stay up to date with the latest ABC News hurricane reports</Heading><iframe
            id="NewsFeed"
            title="ABC News Hurricane Reports"
            width="900"
            height="2000"
            src="https://abcnews.go.com/alerts/hurricanes"></iframe>
      </VStack>
    )
}

export default Newsfeed