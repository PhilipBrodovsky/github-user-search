import "./App.css";
import { useState } from "react";



function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Count <code>{count}</code> and save to reload.
                </p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    Learn React
                </button>
                <Button text="text" />
                <Button text="dasdasdas" />
            </header>
        </div>
    );
}

function Button(props: { text: string }) {
    return <button>{props.text}</button>;
}

export default App;
