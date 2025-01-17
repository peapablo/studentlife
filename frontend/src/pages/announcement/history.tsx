import React from "react"
import HeaderPage from "../../components/annoucement/HeaderPage"
import AppBody from "../../components/share/app/AppBody"
import PostOnHistory from "../../components/annoucement/PostOnHistory"
import ButtonForEvent from "../../components/annoucement/ButtonForEvent"
import ModalForEvent from "../../components/annoucement/ModalForEvent"
import { Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const history = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const onOpen = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }
    const [showButton, setShowButton] = React.useState(false)
    const [statusPostRequest, setStatusPostRequest] = React.useState("")
    const [selectPost, setSelectPost] = React.useState(Number)
    const onClick = (status: string, postId: number) => {
        setShowButton(true)
        setStatusPostRequest(status)
        setSelectPost(postId)
    }
    // console.log(statusPostRequest)

    const cancelRecover = () => {
        setShowButton(false)
    }
    const modalHistory = {
        topic: "WARNING",
        detail: "This announcement will be kept for 3 days. After these 3 days, you won't be able to recover this announcement.",
        event: "Delete",
    }
    const post = [
        { topic: "hello World", sender: "SAMO-SIT", status: "disapprove", id: 10 },
        { topic: "SIT Esport", sender: "SAMO-SIT", status: "approve", id: 11 },
        { topic: "SIT Valentine", sender: "SAMO-SIT", status: "waiting", id: 12 },
        { topic: "SIT Valentine", sender: "SAMO-SIT", status: "disapprove", id: 13 },
    ]
    const [allPost, setAllPost] = React.useState(post)
    const deleteOrEdit = (status: string) => {
        if (status == "approve" || status == "disapprove") {
            return (
                <>
                    <ModalForEvent
                        isOpen={isOpen}
                        onClose={onClose}
                        topic={modalHistory.topic}
                        detail={modalHistory.detail}
                        status={statusPostRequest}
                        allPost={allPost}
                        setAllPost={setAllPost}
                        selectPost={selectPost}
                        cancelButtonForEvent={cancelRecover}
                    />
                    {showButton && <ButtonForEvent onOpen={onOpen} cancel={cancelRecover} status={statusPostRequest} />}
                </>
            )
        } else if (status == "waiting") {
            return (
                <>
                    {showButton && (
                        <Link to="/announcement/create">
                            <ButtonForEvent onOpen={onOpen} cancel={cancelRecover} status={statusPostRequest} />
                        </Link>
                    )}
                </>
            )
        }
    }

    return (
        <AppBody
            secondarynav={[
                { name: "Announcement", to: "/announcement" },
                { name: "Approval", to: "/announcement/approval" },
                { name: "History", to: "/announcement/history" },
                { name: "Recycle bin", to: "/announcement/recyclebin" },
            ]}
        >
            <Flex alignItems={"center"}>
                <HeaderPage head="History" />
            </Flex>
            {allPost
                .filter((fl) => fl.status == "waiting" || fl.status == "approve" || fl.status == "disapprove")
                .map((el) => {
                    return (
                        <PostOnHistory topic={el.topic} sender={el.sender} status={el.status} onClick={onClick} id={el.id} onSelectPost={onClick} />
                    )
                })}
            {deleteOrEdit(statusPostRequest)}
        </AppBody>
    )
}

export default history
