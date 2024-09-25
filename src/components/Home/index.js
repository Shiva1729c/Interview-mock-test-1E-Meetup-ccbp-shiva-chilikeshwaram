import {Component} from 'react'
import UserDetailsContext from '../../context/UserDetailsContext'
import Header from '../Header'

import {
  HomeContainer,
  ResponsiveContainer,
  HomeDescription,
  HomeHeading,
  HomeImage,
  RegisterButton,
} from './styledComponents'

class Home extends Component {
  navigateToRegistration = () => {
    const {history} = this.props
    history.replace('/register')
  }

  renderHomeContent = () => (
    <>
      <HomeHeading>Welcome to Meetup</HomeHeading>
      <HomeDescription>Please register for the topic</HomeDescription>
      <RegisterButton type="button" onClick={this.navigateToRegistration}>
        Register
      </RegisterButton>
      <HomeImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )

  renderRegisteredView = () => (
    <UserDetailsContext.Consumer>
      {value => {
        const {name, topic} = value

        return (
          <>
            <HomeHeading name>Hello {name}</HomeHeading>
            <HomeDescription topic>Welcome to {topic}</HomeDescription>
            <HomeImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </>
        )
      }}
    </UserDetailsContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <ResponsiveContainer>
            <UserDetailsContext.Consumer>
              {value => {
                const {name} = value
                return name
                  ? this.renderRegisteredView()
                  : this.renderHomeContent()
              }}
            </UserDetailsContext.Consumer>
          </ResponsiveContainer>
        </HomeContainer>
      </>
    )
  }
}

export default Home
