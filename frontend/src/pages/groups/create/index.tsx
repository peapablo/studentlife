import { Box, Text, HStack, Input, Select, Textarea, Tag, Button, Flex, IconButton, TagCloseButton, TagLabel, useDisclosure, Link } from "@chakra-ui/react"
import { FormControl } from '@chakra-ui/react'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from '@chakra-ui/react'
import { ChevronRightIcon, SearchIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { useState } from "react"

import { FaPlus } from "react-icons/fa"
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { MdPublic, MdDesktopWindows } from "react-icons/md"

import { userData } from '../data'
import AppBody from "../../../components/share/app/AppBody"
import FriendInviteList from 'src/components/group/FriendInviteList';
import NavCommunity from 'src/components/group/NavCommunity'

const create = () => {
    const [GroupName, setGroupName] = useState("")
    const textChange = (event: any) => setGroupName(event.target.value)

    const [Describe, setDescrip] = useState("")
    const DesChange = (event: any) => setDescrip(event.target.value)

    const [Privacy, setPrivacy] = useState(false)
    const PriChange = (event: any) => setPrivacy(!event.target.value)

    const PrivacyOnChange = (e: any) => e.target.value == 'true' ? setPrivacy(true) : setPrivacy(false)

    const [changePreview, setPreview] = useState(true)
    const PreviewChange = () => { setPreview(!changePreview) }

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [tagBtn, setTagBtn] = useState(false)


    const handleTagChoose = () => {
        setTagBtn(!tagBtn)
    }

    const handleTagCancel = () => {
        setTagBtn(false)
    }

    return (
        <AppBody>
            <HStack gap={3} mb={4}>
                { /*Create Community*/}
                <Box width={{ sm: "100%", md: "450px" }} borderRadius="md" mt={5} padding={4} background={{ md: 'orange.400', base: '' }} color={{ md: "white", base: 'black' }}>

                    <Breadcrumb display={{ sm: 'none', md: 'block' }} ml={'0.4'} fontSize={'xs'} spacing='1.5px' separator={<ChevronRightIcon color='white' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='http://127.0.0.1:5173/groups'>
                                Community
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>
                                Create Community
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <HStack>
                        <Link href='http://127.0.0.1:5173/groups'>
                            <ChevronLeftIcon
                                display={{ sm: 'block', md: 'none' }}
                                color='black'
                                w={6} h={6}
                            />
                        </Link>
                        <Text fontSize={"xl"} fontWeight={700} >
                            Create Community
                        </Text>
                    </HStack>


                    <Text fontSize={"md"} fontWeight={500}>

                        Name
                        <FormControl >
                            <Input type='Name' value={GroupName} onChange={textChange} background={"white"} color="black" />
                        </FormControl>

                        {/* Tags */}
                        Choose Tags
                        <Button colorScheme={'green'} onClick={onOpen} ml={2} my={2} size='xs'>
                            <FaPlus />
                        </Button>

                        <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader borderBottomWidth='1px'>Tags</DrawerHeader>
                                <DrawerBody>
                                    <HStack gap={2}>
                                        {userData.Tag.map((i) => (
                                            <Button onClick={((handleTagChoose))}
                                                colorScheme={tagBtn ? 'green' : 'yellow'}
                                                variant='solid'
                                                key={i.tagID}
                                                borderRadius="full"
                                                size={"md"}
                                            >{i.tagName}
                                            </Button>
                                        ))}
                                    </HStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>

                        <HStack flexWrap={'wrap'} gap={2} justify={'flex-start'} >
                            {userData.Tag.map((Tags) =>
                                <Tag
                                    fontSize={"md"}
                                    size={"md"}
                                    key={Tags.tagID}
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='green'
                                    sx={{ marginLeft: '0 !important' }}
                                >
                                    <TagLabel>{Tags.tagName}</TagLabel>
                                    <TagCloseButton />
                                </Tag>)}
                        </HStack>

                        {/* Privacy */}
                        <HStack>
                            <Text mr={-1}>Privacy</Text>
                            <MdPublic color="White" />
                        </HStack>

                        <FormControl>
                            <Select onChange={PrivacyOnChange} placeholder='Public' background={"white"} color="black">
                                {/* <option value={'false'}>Public</option > */}
                                <option value={'true'}>Private</option >
                            </Select>
                        </FormControl>

                        Description
                        <FormControl>
                            <Textarea value={Describe} onChange={DesChange} placeholder=" " size='sm' background={"white"} color="black" />
                        </FormControl>

                        <Text mt={2} mb={2}>
                            Add a cover photo
                        </Text>

                        <Button width="100%" color='black' size={"sm"}>
                            + Upload Cover Photo
                        </Button>

                        <Text mt={2} mb={2}>
                            Invite friends to join this community
                        </Text>

                        <Box borderRadius={'md'}>

                            <HStack padding={1}>
                                <IconButton background={'white'} aria-label='Search database' icon={<SearchIcon />} color={'black'} />
                                < Input backgroundColor={'white'} color={'black'} placeholder='Search for friends' />
                            </HStack>

                            <Box background={{ md: 'orange.400', base: '' }}
                                height={'200px'}
                                paddingRight={0.5}
                                sx={{
                                    "-webkit-overflow-scrolling": "touch" /* enables momentum-scrolling on iOS */,
                                    overflowY: "scroll",
                                    scrollBehavior: "smooth",
                                    "::-webkit-scrollbar-track": {
                                        background: "none",
                                    },
                                    "::-webkit-scrollbar-thumb": {
                                        background: "white",
                                    },
                                }}>

                                <Flex gap={1} direction='column' ml={1} >
                                    <Box color={'black'}>
                                        <FriendInviteList userName='Passakorn Puttama' isSelected={false} userProfile={''} />
                                    </Box>
                                    <Box color={'black'}>
                                        <FriendInviteList userName='Patthadol Raksapram' isSelected={false} userProfile={''} />
                                    </Box>
                                    <Box color={'black'}>
                                        <FriendInviteList userName='Vatcharamai Rodring' isSelected={false} userProfile={''} />
                                    </Box>
                                    <Box color={'black'}>
                                        <FriendInviteList userName='Pakkawat Wassa' isSelected={false} userProfile={''} />
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Button width="100%" mt={3} color={{ md: 'black', sm: 'white' }} background={{ md: 'white', sm: 'orange.500' }} size={"md"}>
                            Create
                        </Button>
                    </Text>
                </Box>

                {/* Desktop Preview */}
                <Box background={'orange.400'} borderRadius="md" paddingTop={5} color={'white'} width={changePreview ? '550px' : '375px'} display={{ sm: "none", md: "block" }}>

                    <HStack justifyContent={"space-between"} align={'center'} padding={1} mt={-2} paddingLeft={5} paddingRight={5} >
                        <Text fontSize={"xl"} fontWeight={700} >
                            {changePreview ? "Desktop Preview" : " Mobile Preview"}
                        </Text>
                        <Text display={'flex'} gap={2} >
                            {changePreview ? <HiOutlineDevicePhoneMobile onClick={PreviewChange} /> : <MdDesktopWindows onClick={PreviewChange} />}
                        </Text>
                    </HStack>

                    <Box width="100%" borderRadius="md" padding={5} paddingTop={'5rem'} background={'orange.400'} textColor={"white"}>
                        <Box color={'black'}>
                            <NavCommunity
                                disableBtn={true}
                                communityName={GroupName ? GroupName : "Community Name"}
                                isPrivate={Privacy ? Privacy : false}
                                isMember={false}
                                description={Describe ? Describe : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta vitae non voluptates nisi quisquam necessitatibus doloremque neque voluptatum. Maiores facilis nulla sit quam laborum nihil illum culpa incidunt tempore obcaecati!"}
                                coverPhoto="https://picsum.photos/id/400/800"
                                members={1}
                                communityID={1000}
                                tags={userData.Tag}
                            />
                        </Box>
                    </Box>
                </Box>
            </HStack >
        </AppBody >
    )
}
export default create
