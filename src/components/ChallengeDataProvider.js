import React, { Component } from 'react'
import { getCompletedChallenges } from '../utils'

export default class ChallengeDataProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            completed: []
        }
    }

    async componentDidMount() {
        const completedChallenges = await getCompletedChallenges()
        this.setState({
            completed: completedChallenges
        })
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
