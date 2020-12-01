import React, { Component } from 'react'
import { getCompletedChallenges, challengeCompletionListeners, removeCompletionListener } from '../utils'

export default class ChallengeDataProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: []
        }
    }

    async componentDidMount() {
        await this.updateChallenges()
        challengeCompletionListeners.push(this)
    }

    async updateChallenges() {
        const completedChallenges = await getCompletedChallenges()
        this.setState({
            completed: completedChallenges
        })
    }

    async componentWillUnmount() {
        removeCompletionListener(this)
    }

    render() {
        const props = Object.assign({ completedChallenges: this.state.completed }, {children: undefined, ...this.props})
        const modifiedChildren = React.Children.map(this.props.children, child => {
            return React.isValidElement(child) ?
                React.cloneElement(child, props)
                :
                child
        })
        return modifiedChildren
    }
}
