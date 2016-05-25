let Wrapper = require('./vote.js');
let React = require('react');
let ReactDOM = require('react-dom');
let node = document.querySelector("[x-react-vote]");
let WrapperCar = require('./car.js');
let node2 = document.querySelector("[x-react-car]");

if (node) {
    ReactDOM.render(
        <Wrapper />, 
        node
    );
};

if (node2) {
    ReactDOM.render(
        <WrapperCar />,
        node2
    );
};