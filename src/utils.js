import Challenge1 from './pages/challenges/1'

const apiUrl = "advent-api.artemisvioletta.co.uk"

export const isChallengeReady = id => id <= currentDay()

export const currentDay = () => new Date().getMonth() === 11 ? new Date().getDate() : 0

export const challengeComponents = [
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
    <Challenge1 />,
    <Challenge1 />,
]

var completedChallenges = undefined

var completedChallengesIsDirty = true
var currentCheckingPromise = undefined

export async function updateCompletedChallenges() {
    if (currentCheckingPromise !== undefined) {
        return await currentCheckingPromise
    }
    currentCheckingPromise = fetch(apiUrl+"/api/challengesCompleted", {credentials: 'include'})
    const returnVal = (await currentCheckingPromise).json()
    currentCheckingPromise = undefined
    return returnVal
}

export async function answerChallenge(id, answer) {
    const response = await fetch(
        apiUrl+"/api/check/"+id, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answer: answer
            })
        }
    )

    const value = response.ok && response.json.value

    if (value)
        completedChallengesIsDirty = true

    return value
}

export async function getCompletedChallenges() {
    if (completedChallengesIsDirty || completedChallenges == undefined) {
        await updateCompletedChallenges()
    }
    return completedChallenges
}
