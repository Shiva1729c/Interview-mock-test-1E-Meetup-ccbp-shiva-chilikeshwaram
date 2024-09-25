import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Registration from './components/Registration'
import NotFound from './components/NotFound'
import Home from './components/Home'
import UserDetailsContext from './context/UserDetailsContext'
import './App.css'

const topicsList = [
  {id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture'},
  {id: 'CAREER_AND_BUSINESS', displayText: 'Career and Business'},
  {id: 'EDUCATION_AND_LEARNING', displayText: 'Education and Learning'},
  {id: 'FASHION_AND_BEAUTY', displayText: 'Fashion and Beauty'},
  {id: 'GAMES', displayText: 'Games'},
]

class App extends Component {
  state = {
    name: '',
    topic: '',
  }

  updateName = name => {
    this.setState({name})
  }

  updateTopic = topic => {
    this.setState({topic})
  }

  render() {
    const {name, topic} = this.state
    return (
      <UserDetailsContext.Provider
        value={{
          name,
          topic,
          updateName: this.updateName,
          updateTopic: this.updateTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/register"
            render={props => (
              <Registration {...props} topicsList={topicsList} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </UserDetailsContext.Provider>
    )
  }
}

export default App
