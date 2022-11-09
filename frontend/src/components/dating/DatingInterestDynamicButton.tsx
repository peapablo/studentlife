import { Button } from "@chakra-ui/react"
import { FC } from "react"

const DatingInterestDynamicButton: FC<{ numOfSelectedInterest: number; selectedInterests: String | String[]; tagIsClicked: boolean }> = ({
    numOfSelectedInterest,
    selectedInterests,
    tagIsClicked
}) => {
    // When you click "Done" button, this function will be triggered.
    function handleSubmit() {
        alert("List of Interest ID: " + selectedInterests)
    }

    function handleSkip() {
        alert("You choose to skip setting tag of interests")
    }

    // If you have not choose any interest tag, the skip button will show up.
    // Else, the done button will show up.
    return (tagIsClicked || numOfSelectedInterest != 0) ? (
        <Button colorScheme="orange" size="lg" borderRadius="full" float="right" onClick={handleSkip}>
            Done
        </Button>
    ) : (
        <Button colorScheme="orange" size="lg" borderRadius="full" float="right" onClick={handleSubmit}>
            Skip
        </Button>
    )
}

export default DatingInterestDynamicButton
