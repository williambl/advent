import Challenge1 from './pages/challenges/1'
import Challenge2 from './pages/challenges/2'
import Cookies from "universal-cookie";
const apiUrl = "https://advent2020-api.herokuapp.com"

export const isChallengeReady = id => id <= currentDay()

export const currentDay = () => new Date().getMonth() === 11 ? new Date().getDate() : 0

export const challengeComponents = [
    <Challenge1 />,
    <Challenge2 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
    <Challenge1 />,
]

var completedChallenges = undefined

var completedChallengesIsDirty = true
var currentCheckingPromise = undefined

export var challengeCompletionListeners = []

export function removeCompletionListener(item) {
    challengeCompletionListeners = challengeCompletionListeners.filter(it => it !== item)
}

export async function updateCompletedChallenges() {
    if (currentCheckingPromise !== undefined) {
        return await currentCheckingPromise
    }
    currentCheckingPromise = fetch(apiUrl+"/api/challengesCompleted", {headers: {'X-Auth': new Cookies().get("auth")}})
    completedChallenges = (await currentCheckingPromise).json()
    currentCheckingPromise = undefined
}

export async function answerChallenge(id, answer) {
    const response = await fetch(
        apiUrl+"/api/check/"+id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth': new Cookies().get("auth")
            },
            body: JSON.stringify({
                answer: answer
            })
        }
    )

    const value = response.ok && response.json.value

    if (value) {
        updateCompletedChallenges()
        challengeCompletionListeners.forEach(it => it.updateChallenges())
    }

    return value
}

export async function getCompletedChallenges() {
    if (completedChallengesIsDirty || completedChallenges === undefined) {
        await updateCompletedChallenges()
    }
    return completedChallenges
}

