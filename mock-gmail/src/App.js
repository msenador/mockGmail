import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import AllMessages from './components/AllMessages'
import Home from './components/Home'
import SearchAll from './components/Search'
import ComposeEmail from './components/SendEmails'
import MessageDetails from './components/MessageDetails'
// import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emails: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/emails')
    .then(response => response.json())
    .then(data => this.setState({emails: data}))
  }

  // componentDidMount(){
  //   axios.get('http://localhost:3001/emails')
  //     .then(response => {
  //       this.setState({emails: response.data})
  //     })
  // }

  render(){
    return (
      <>
      <Router>
        <ul><Link to='/'>Home</Link></ul>
        <h1>Click on links!</h1>
        <ul><Link to='/AllMessages'>View All Messages</Link></ul>
        <ul><Link to='/Search'>Search</Link></ul>
        <ul><Link to='/SendEmail'>Send Emails</Link></ul>
      
      <Switch> 
          <Route exact path='/'><Home/></Route>
          <Route exact path='/AllMessages'><AllMessages allEmails={this.state.emails}/></Route>
          <Route path='/AllMessages/:personId'><MessageDetails info={this.state.emails}/></Route>
          <Route exact path='/Search'><SearchAll search={ this.state.emails }/></Route>
          <Route exact path='/SendEmail'><ComposeEmail props={this.state.emails}/></Route>

      </Switch>
      </Router>
      </>
    )
  }
}

export default App;