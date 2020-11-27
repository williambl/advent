import Challenge1 from './pages/challenges/1'

export const isChallengeReady = id => id <= currentDay()

export const currentDay = () => true ? 3 : new Date().getDay()

export const challengeComponents = [
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
    Challenge1,
]

export const challengeStata = new Array(25).fill(false, 0, -1)

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
        challengeStata[id-1] = true

    return value
}

export async function getCompletedChallenges() {
    return fetch("/api/challengesCompleted/").json()
}
