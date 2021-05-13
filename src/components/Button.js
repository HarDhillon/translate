import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  render() {
    return (
      <button className="ui button primary">
        {/* rather than static contextType we can use consumer to get information out of the context. Which we pass a function */}
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;
