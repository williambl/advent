import "98.css"
import "./App.css"
import { currentDay, updateCompletedChallenges } from "./utils"
import ChallengeComponent from "./pages/ChallengeComponent"
import Window from "./components/Window"
import Calendar from "./pages/Calendar"
import { Auth, AuthProvider } from "./components/Oauth"
import ChallengeDataProvider from './components/ChallengeDataProvider'
import Header from './components/Header'
import { Helmet } from 'react-helmet'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Helmet>
                <meta charset="utf-8" />
                <meta name="description" content="Complete 25 challenges throughout December!" />
                <meta name="og:title" content="The Leaf Lemon Annual Advent Challenge 2020" />
                <meta name="theme-color" content="#008080" />
                <title>The LLAAC 2020</title>
            </Helmet>
            <AuthProvider>
                <ChallengeDataProvider>
                    <Header />
                </ChallengeDataProvider>
            </AuthProvider>
            <Switch>
                <Route path="/challenge/:id" component={ChallengeComponent} />
                <Route exact path="/" component={Calendar} />
            </Switch>
        </Router>
    );
}

export default App;
