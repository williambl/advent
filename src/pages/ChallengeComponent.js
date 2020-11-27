import {useParams} from "react-router"
import {challengeComponents} from "../utils"

export default function ChallengeComponent() {
    const { id } = useParams()
    return challengeComponents[id]
}
