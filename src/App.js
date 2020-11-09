import logo from './logo.svg';
import "98.css"
import "./App.css"

function App() {
    return (
        <header className="App-header">
            <div className="App">
                <div className="title-bar">
                    <div className="title-bar-text">Hey there</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is our test! It uses <strong>React.js</strong>.
                </p>
            </div>
        </header>
    );
}

export default App;
