import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' }

  // providing call back to allow language change
  onLanguageChange = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      // ... creates a new object and adds whatever you want.
      <Context.Provider value={{...this.state, onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;