// import react and react dom libraries
import React from "react"; 
import ReactDOM from "react-dom";

const App = () => {
    const buttonText = {text: 'Click Me!'};

    return (
        <div>
            <label className= "label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style= {{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
        </div>
    );
};
// create a react component 



// Take the react component and display
ReactDOM.render(
    <App />, 
    document.querySelector("#root")
);