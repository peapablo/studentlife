import QAnsAppBody from "src/components/qa/QAnsAppBody"
import { Box, Center, Heading, Text, Stack, Avatar, useColorModeValue, Grid, Input } from "@chakra-ui/react"

const myquestions = () => {
    return (
        <QAnsAppBody>
            <Grid h="4em" templateColumns="repeat(4, 2fr)" gap={"50px"}>
                <Heading as="h1" size="2xl" noOfLines={1}>
                    Q & A
                </Heading>

                {/* <Input type="search" placeholder="🔍  Search..." size="md" id="search" /> */}
            </Grid>
            <Input type="search" placeholder="🔍  Search..." size="md" id="search" />
            <Grid h="1em" templateColumns="repeat(2, 1fr)" gap={"10px"}></Grid>

            <Center py={6}>
                <Box maxW={"445px"} w={"full"} bg={useColorModeValue("white", "gray.900")} boxShadow={"2xl"} rounded={"md"} p={6} overflow={"hidden"}>
                    <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}></Box>
                    <Stack>
                        <Text color={"orange.500"} textTransform={"uppercase"} fontWeight={800} fontSize={"sm"} letterSpacing={1.1}>
                            QA Post
                        </Text>
                        <Heading color={useColorModeValue("gray.700", "white")} fontSize={"2xl"} fontFamily={"body"}>
                            Anybody want to playing football with me at KMUTT?
                        </Heading>
                        <Text color={"gray.500"}>
                            Greetings , My name is Erling Braut Haaland but you can call me Haaland, let me know if somebody want to play football
                            with me at KMUTT, I'm waiting to see you all at football fields. Cheers!
                        </Text>
                    </Stack>
                    <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                        <Avatar src={"https://www.mancity.com/meta/media/233jlh2j/microsoftteams-image-127.png?width=600"} />
                        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                            <Text fontWeight={600}>Erling Haland</Text>
                            <Text color={"gray.500"}>Nov 08, 2022 · 6min read</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Center>
        </QAnsAppBody>
    )
}

export default myquestions
