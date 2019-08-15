import React, {Component} from 'react';
import '../index.css';
import SocialLinks from '../SocialLinks';

class HistoryPage extends Component {
  render() {
    return (<div style={{
        backgroundColor: '#64d861'
      }}>
      <div className="centered-box relative history">
        <div className="header-section">
          <div className="icon icon-clock"/>
          <h3 className="title">
            A Walk Through Memory Lane
          </h3>
        </div>
        <div className="history-section">
          <div className="action-section">
            <img src="https://hacktj.org/2019/img/logo2.png" style={{
                width: '200px',
                height: '200px'
              }} alt="HackTJ 6.0"/>
            <div className="info-container">
              <h3 className="section-title">
                HackTJ 6.0
              </h3>
              <h4 className="section-year">2019</h4>
              <a className="altbutton" href="https://hacktj2019.devpost.com/" target="_blank" rel="noopener noreferrer">DevPost</a>
            </div>
          </div>
        </div>
        <div className="history-section">
          <div className="action-section">
            <img src="https://hacktj.org/2018/img/favicon.png" style={{
                width: '200px',
                height: '200px'
              }} alt="HackTJ 5.0"/>
            <div className="info-container">
              <h3 className="section-title">
                HackTJ 5.0
              </h3>
              <h4 className="section-year">2018</h4>
              <a className="altbutton" href="https://hacktj2018.devpost.com/" target="_blank" rel="noopener noreferrer">DevPost</a>
            </div>
          </div>
        </div>
        <div className="history-section">
          <div className="action-section">
            <img src="https://hacktj.org/2017/img/favicon.png" style={{
                width: '200px',
                height: '200px'
              }} alt="HackTJ 4.0"/>
            <div className="info-container">
              <h3 className="section-title">
                HackTJ 4.0
              </h3>
              <h4 className="section-year">2017</h4>
              <a className="altbutton" href="https://hacktj2017.devpost.com/" target="_blank" rel="noopener noreferrer">DevPost</a>
            </div>
          </div>
          <div className="action-section">
            <img src="https://hacktj.org/2016/img/favicon.png" style={{
                width: '200px',
                height: '200px'
              }} alt="HackTJ 3.0"/>
            <div className="info-container">
              <h3 className="section-title">
                HackTJ 3.0
              </h3>
              <h4 className="section-year">2016</h4>
              <a className="altbutton" href="https://hacktj2016.devpost.com/" target="_blank" rel="noopener noreferrer">DevPost</a>
            </div>
          </div>
          <div className="action-section">
            <img src="https://hacktj.org/2015/img/favicon.png" style={{
                width: '200px',
                height: '200px'
              }} alt="HackTJ 2.0"/>
            <div className="info-container">
              <h3 className="section-title">
                HackTJ 2.0
              </h3>
              <h4 className="section-year">2015</h4>
              <a className="altbutton" href="https://hacktj2015.devpost.com/" target="_blank" rel="noopener noreferrer">DevPost</a>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks includeHackTJLogo={true}/>
    </div>);
  }
}

export default HistoryPage;
