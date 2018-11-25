const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component{
  render(){
    return (
      <div>
        <h1>Testing</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);