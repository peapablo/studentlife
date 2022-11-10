import { Flex, Box, Text, Center, Divider, Stack, useBreakpointValue, Container, UnorderedList, ListItem } from "@chakra-ui/react"
import React from "react"
import ContentBox from "../../../components/shop/ContentBox"
import PageTitle from "../../../components/shop/PageTitle"
import ShopAppBody from "../../../components/shop/ShopAppBody"
import TitleBox from "../../../components/shop/TItleBox"
import { contactInfo, productInfo } from "../../../components/shop/content/sellContactNeedInfo"
const ContactUs = () => {
    return (
        <ShopAppBody>
            <PageTitle title="Contact Us" />
            <Flex direction="column" gap="6">
                <TitleBox title="Contact Us"></TitleBox>
                <ContentBox>
                    <Flex direction="row" justify="space-evenly" gap="3" wrap="wrap">
                        <Flex direction="column" gap="4" p="4">
                            {phoneNo("+(66) 921 979 782")}
                            {phoneNo("+(66) 921 979 782")}
                            {phoneNo("+(66) 921 979 782")}
                        </Flex>
                        <Flex direction="column" justify="center" p="4">
                            {phoneNo("Line Id: khush")}
                        </Flex>
                    </Flex>
                </ContentBox>
                <TitleBox title="Read Me"></TitleBox>
                <ContentBox>
                    <Flex p="6" direction="column" gap="3">
                        <Text>Please send us the following information if you want to sell a product on our platform:</Text>
                        <UnorderedList>
                            {contactInfo.map((contact) => (
                                <ListItem>{contact}</ListItem>
                            ))}
                        </UnorderedList>
                        <Text>And your product information:</Text>
                        <UnorderedList>
                            {productInfo.map((productL) => (
                                <ListItem>{productL}</ListItem>
                            ))}
                        </UnorderedList>
                        <Text>If you have any questions, feel free to contact us.</Text>
                    </Flex>
                </ContentBox>
            </Flex>
        </ShopAppBody>
    )

    function phoneNo(phone: string) {
        return (
            <Box bg="#e9e8e8" p="4" borderRadius="lg">
                <Center>
                    <Text>{phone}</Text>
                </Center>
            </Box>
        )
    }
}

export default ContactUs
