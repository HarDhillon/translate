import React from 'react';

class LangaugeSelector extends React.Component {
  render() {
    return (
      <div>
        Select a Langauge:
        <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
        <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')} />
      </div>
    )
  }
}

export default LangaugeSelector;