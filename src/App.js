import logo from './logo.svg';
import "98.css"
import "./App.css"
import { currentDay, challengeComponents } from "./utils"
import Window from "./components/Window"
import Calendar from "./pages/Calendar"
import { Auth, AuthProvider } from "./components/Oauth"
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

function App() {

    const challenges = []

    for (let i = 0; i < currentDay(); i++) challenges.push(<Route path={i+1} component={challengeComponents[i]} />)

    return (
        <Router>
            <AuthProvider>
                <Header />
            </AuthProvider>
            <Switch>
                <Route exact path="/calendar">
                    <Calendar />
                </Route>
                <Route path="/challenge">
                    {challenges}
                </Route>
                <Route>
                    <Window width={300} height={260} title={"Test!!"}>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            This is our test! It uses <strong>React.js</strong>.
                        </p>
                    </Window>
                    <Window width={300} height={260} title={"Test 2!!"}>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            This is our test! It uses <strong>React.js</strong>.
                        </p>
                    </Window>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
