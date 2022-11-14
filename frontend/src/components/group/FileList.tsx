import { Text, Box, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal } from '@chakra-ui/react'
import React, { FC } from 'react'
import { BsFillFileEarmarkTextFill, BsThreeDots } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa'
import { RiDeleteBinFill } from 'react-icons/ri'

const FileList: FC<{ fileName: string; owner: string; date: string; type: string }> = ({ fileName, owner, type, date }) => {
    return (

        <Flex direction={"row"} justify="space-between" alignItems={"center"} mt={2}  >
            <Flex width={"100%"} direction="row" alignItems={"center"}>
                <BsFillFileEarmarkTextFill size={"30px"} />
                <Flex width={"100%"} flexDirection={{ base: "column", md: "row" }}>
                    <Text fontSize={"sm"} width={{ base: "100%", md: "39%" }} ml={{ base: 2 }}>{fileName}</Text>
                    <Flex ml={{ base: 2, md: 0 }} gap={{ base: 1, md: "none" }} width={"100%"} direction={"row"}>
                        <Text fontSize={"sm"} width={{ base: "auto", md: "46%" }}>{owner}</Text>
                        <Text fontSize={"sm"} display={{ base: "none", md: "block" }} width={{ base: "100%", md: "14%" }}>{type}</Text>
                        <Text as={"b"} display={{ base: "none", sm: "block", md: "none" }}> · </Text>
                        <Text fontSize={"sm"} width={{ base: "auto", md: "35%" }} display={{ base: "none", sm: "block" }} >{date}</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Popover>
                <PopoverTrigger>
                    <Box _hover={{ cursor: "pointer" }} p={2} borderRadius="md">
                        <BsThreeDots fontSize={"25px"} />
                    </Box>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent width="180px">
                        <PopoverBody>
                            <Box gap={1} _hover={{ cursor: "pointer" }} display="flex" alignItems={"center"}>
                                <FaDownload />
                                <Text>Download</Text>
                            </Box>
                            <Box gap={1} _hover={{ cursor: "pointer" }} display="flex" alignItems={"center"}>
                                <RiDeleteBinFill />
                                <Text>Delete</Text>
                            </Box>

                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
        </Flex>
    )
}

export default FileList