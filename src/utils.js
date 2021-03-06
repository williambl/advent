import Challenge1 from './pages/challenges/1'
import Challenge2 from './pages/challenges/2'
import Challenge3 from './pages/challenges/3'
import Challenge4 from './pages/challenges/4'
import Challenge5 from './pages/challenges/5'
import Challenge6 from './pages/challenges/6'
import Challenge7 from './pages/challenges/7'
import Challenge8 from './pages/challenges/8'
import Challenge9 from './pages/challenges/9'
import Challenge10 from './pages/challenges/10'
import Challenge11 from './pages/challenges/11'
import Challenge12 from './pages/challenges/12'
import Challenge13 from './pages/challenges/13'
import Cookies from "universal-cookie";
const apiUrl = "https://advent2020-api.herokuapp.com"

export const isChallengeReady = id => id <= currentDay()

export const currentDay = () => new Date().getMonth() === 11 ? new Date().getDate() : 0

export const challengeComponents = [
    <Challenge1 />,
    <Challenge2 />,
    <Challenge3 />,
    <Challenge4 />,
    <Challenge5 />,
    <Challenge6 />,
    <Challenge7 />,
    <Challenge8 />,
    <Challenge9 />,
    <Challenge10 />,
    <Challenge11 />,
    <Challenge12 />,
    <Challenge13 />,
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
    await fetch(
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

    updateCompletedChallenges()
    challengeCompletionListeners.forEach(it => it.updateChallenges())
}

export async function getCompletedChallenges() {
    if (completedChallengesIsDirty || completedChallenges === undefined) {
        await updateCompletedChallenges()
    }
    return completedChallenges
}

