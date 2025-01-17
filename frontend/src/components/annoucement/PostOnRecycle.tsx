import { Flex, Heading, Spacer, Box, Text } from "@chakra-ui/react"
import React, { FC } from "react"

const PostOnRecycle: FC<{
    topic: string
    sender: string
    expired: string,
    onClick:Function,
    id:number,
    status:string
}> = ({ topic, sender, expired,onClick,id,status}) => {
    return (
        <Box height={"5rem"} width={"100%"} p="5" mt="5" backgroundColor="#D9D9D9" rounded="lg" onClick={() => onClick(id,status)}>
            <Flex alignItems={"center"}>
                <Box>
                    <Heading size={"sm"}>{topic}</Heading>
                    <Text fontSize={"xs"}>{sender}</Text>
                </Box>
                <Spacer />
                <Box textAlign={"right"}>
                    <Text fontSize={"xs"} as="b">
                        Expired date
                    </Text>
                    <Text fontSize={"xs"}>{expired}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default PostOnRecycle
