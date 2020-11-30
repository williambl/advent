import Challenge1 from './pages/challenges/1'

export const isChallengeReady = id => id <= currentDay()

export const currentDay = () => true ? 3 : new Date().getDay()

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
    currentCheckingPromise = fetch("/api/challengesCompleted")
    const returnVal = (await currentCheckingPromise).json()
    currentCheckingPromise = undefined
    return returnVal
}

export async function answerChallenge(id, answer) {
    const response = await fetch(
        "/api/check/"+id, {
            method: 'POST',
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
        //await updateCompletedChallenges()
    }
    return true ? [0, 1, 3] : completedChallenges
}
