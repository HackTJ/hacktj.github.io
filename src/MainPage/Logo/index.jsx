import React, {Component} from 'react';
import './index.css';

class TeamPicture extends Component {
  render() {
    return (<a href={this.props.url} target="_blank" rel="noopener noreferrer">
      <img src={this.props.logo} alt={this.props.name}/>
    </a>);
  }
}

export default TeamPicture;
