import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
            {/* rather than static contextType we can use consumer to get information out of the context. Which we pass a function */}
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
    )
  }

  render() {
    return (
      // remember that we can only pass consumers a function, so we cut and pasted the other consumer into the function
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)
        }
        
      </ColorContext.Consumer>
    )
  }
}

export default Button;
