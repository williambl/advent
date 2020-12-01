import "98.css"
import "./App.css"
import ChallengeComponent from "./pages/ChallengeComponent"
import Calendar from "./pages/Calendar"
import { AuthProvider } from "./components/Oauth"
import ChallengeDataProvider from './components/ChallengeDataProvider'
import Header from './components/Header'
import { Helmet } from 'react-helmet'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Helmet>
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
