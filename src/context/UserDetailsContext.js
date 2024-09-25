import React from 'react'

const UserDetailsContext = React.createContext({
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
})

export default UserDetailsContext
