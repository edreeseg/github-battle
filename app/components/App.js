const React = require('react');
const Popular = require('./Popular');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');

class App extends React.Component{
    render(){
      return (
        <Router>
          <div className='container'>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/popular" component={Popular} />
              <Route exact path="/battle" component={Battle} /> {/*Has an exact prop so that if we later pass '/battle/result' it doesn't route to this one*/}
              <Route render={() => {
                return <p>Not found</p>;
              }} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

  module.exports = App;