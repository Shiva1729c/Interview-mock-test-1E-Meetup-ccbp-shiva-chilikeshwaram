import {Component} from 'react'
import UserDetailsContext from '../../context/UserDetailsContext'
import Header from '../Header'
import {
  RegistrationContainer,
  ResponsiveContainer,
  ImageContainer,
  FormHeading,
  FormContainer,
  FormDetailsContainer,
  LabelText,
  NameInput,
  DropdownContainer,
  TopicOption,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

class Registration extends Component {
  state = {
    name: '',
    selectedOption: '',
    topicsList: [],
    errorMsg: '',
  }

  componentDidMount() {
    const {topicsList} = this.props
    const selectedOption = topicsList[0].displayText
    this.setState({topicsList, selectedOption})
  }

  onSubmitForm = (event, updateName, updateTopic) => {
    event.preventDefault()
    const {name, selectedOption} = this.state

    if (name.trim() === '') {
      this.setState({errorMsg: 'Please enter your name'})
    }

    if (name) {
      updateName(name)
      updateTopic(selectedOption)
      const {history} = this.props
      history.replace('/')
    }
  }

  onChangeInputName = event => {
    this.setState({name: event.target.value})
  }

  onChangeSelectOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  renderNameInput = () => {
    const {name} = this.state
    return (
      <>
        <LabelText htmlFor="name">NAME</LabelText>
        <br />
        <NameInput
          type="text"
          placeholder="Your name"
          id="name"
          value={name}
          onChange={this.onChangeInputName}
        />
        <br />
      </>
    )
  }

  renderDropdownTopics = () => {
    const {selectedOption, topicsList} = this.state
    return (
      <>
        <LabelText htmlFor="topics">TOPICS</LabelText>
        <br />
        <DropdownContainer
          as="select"
          value={selectedOption}
          onChange={this.onChangeSelectOption}
        >
          {topicsList.map(topic => (
            <TopicOption key={topic.id} value={topic.displayText}>
              {topic.displayText}
            </TopicOption>
          ))}
        </DropdownContainer>
        <br />
      </>
    )
  }

  render() {
    const {errorMsg} = this.state
    return (
      <UserDetailsContext.Consumer>
        {value => {
          const {updateName, updateTopic} = value
          return (
            <>
              <Header />
              <RegistrationContainer>
                <ResponsiveContainer>
                  <ImageContainer
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <FormDetailsContainer>
                    <FormHeading>Let us join</FormHeading>
                    <FormContainer
                      onSubmit={event =>
                        this.onSubmitForm(event, updateName, updateTopic)
                      }
                    >
                      {this.renderNameInput()}
                      {this.renderDropdownTopics()}
                      <RegisterNowButton type="submit">
                        Register Now
                      </RegisterNowButton>
                      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                    </FormContainer>
                  </FormDetailsContainer>
                </ResponsiveContainer>
              </RegistrationContainer>
            </>
          )
        }}
      </UserDetailsContext.Consumer>
    )
  }
}

export default Registration
