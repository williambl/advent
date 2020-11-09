import logo from './logo.svg';
import "98.css"
import "./App.css"
import Window from "./components/Window"
import Calendar from "./pages/Calendar"
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
            <Switch>
                <Route exact path="/calendar">
                    <Calendar />
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
