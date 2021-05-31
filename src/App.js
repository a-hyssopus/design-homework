import React, {useState} from "react"
import Header from "./Header/Header"
import Content from "./Content/Content"

function App() {
    const [passengerClicked, setPassengerClicked] = useState("")
    const width = window.innerWidth;

    return (
        <div className="App">
            <Header width={width} passengerClicked={passengerClicked} setPassengerClicked={setPassengerClicked}/>
            <Content width={width} passengerClicked={passengerClicked} setPassengerClicked={setPassengerClicked}/>
        </div>
    );
}

export default App;
