import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Wall from "./components/Wall/Wall";
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2500);
  }

  restartLoadingIcon = () => {
    var svg = React.findDOMNode(this.refs.loadingicon);
    svg[0].setCurrentTime(0);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loading">
          <svg version="1.1" id="LoadingIcon" x="0px" y="0px" viewBox="0 0 1200 1200" width="180px" ref='loadingicon'>
            <g id="Inner_S_Top">
              <defs>
                <linearGradient id="firstLoadingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop className="first" offset="0%">
                    <animate attributeName="stop-color" id="load-color-1" values="black;#173679;" repeatCount="infinite" fill="freeze" dur=".3s" begin="0s;load-color-6.end" />
                    <animate attributeName="offset" id="load-offset-1" values="0;.10;.20;.30;.40;" repeatCount="infinite" fill="freeze" dur=".3s" begin="0s;load-offset-6.end" />
                  </stop>
                  <stop className="second" offset="50%">
                    <animate attributeName="offset" id="load-color-2" values=".50;.60;.70;.80;.90;1" repeatCount="infinite" fill="freeze" dur=".3s" begin=".3s;load-color-1.end" />
                    <animate attributeName="stop-color" id="load-offset-2" values="black;#4888C8;" repeatCount="infinite" fill="freeze" dur=".3s" begin=".3s;load-offset-1.end" />
                  </stop>
                </linearGradient>
                <linearGradient id="secondLoadingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop className="first" offset="0%">
                    <animate attributeName="stop-color" id="load-color-3" values="black;#4888C8;" repeatCount="infinite" fill="freeze" dur=".3s" begin=".6s;load-color-2.end" />
                    <animate attributeName="offset" id="load-offest-3" values="0;.10;.20;.30;.40;" repeatCount="infinite" fill="freeze" dur=".3s" begin=".6s;load-offset-2.end" />
                  </stop>
                  <stop className="second" offset="50%">
                    <animate attributeName="offset" id="load-color-4" values=".50;.60;.70;.80;.90;1" repeatCount="infinite" fill="freeze" dur=".3s" begin=".9s;load-color-3.end" />
                    <animate attributeName="stop-color" id="load-offset-4" values="black;#E8E163;" repeatCount="infinite" fill="freeze" dur=".3s" begin=".9s;load-offset-3.end" />
                  </stop>
                </linearGradient>
                <linearGradient id="thirdLoadingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop className="first" offset="0%">
                    <animate attributeName="stop-color" id="load-color-5" values="black;#E8E163;" repeatCount="infinite" fill="freeze" dur=".3s" begin="1.2s;load-color-4.end" />
                    <animate attributeName="offset" id="load-offset-5" values="0;.10;.20;.30;" repeatCount="infinite" fill="freeze" dur=".3s" begin="1.2s;load-offset-4.end" />
                  </stop>
                  <stop className="second" offset="30%">
                    <animate attributeName="offset" id="load-color-6" values=".40,.50;.60;.70;.80;.90;1" repeatCount="infinite" fill="freeze" dur=".3s" begin="1.5s;load-color-5.end" />
                    <animate attributeName="stop-color" id="load-offset-6" values="black;#DB901C;" repeatCount="infinite" fill="freeze" dur=".3s" begin="1.5s;load-offset-5.end" onend={this.restartLoadingIcon} />
                  </stop>
                </linearGradient>
              </defs>
              <g>
                <polygon className="loading-first" points="366.48,380.25 643.92,107.04 784.51,247.24 607.89,421.18 		" />
              </g>
              <g>
                <path d="M643.89,114.08l133.52,133.14L606.2,415.83l-229.24-38.87L643.89,114.08 M643.94,100L356.01,383.55l253.56,42.99
			l182.04-179.28L643.94,100L643.94,100z"/>
              </g>
            </g>
            <g id="Inner_S_Bottom">
              <g>
                <polygon className="loading-third" points="438.52,958.89 610.34,796.77 843.07,828.02 577,1090.05 		" />
              </g>
              <g>
                <path d="M612.04,802.04l220.25,29.58L576.93,1083.1L445.8,958.9L612.04,802.04 M608.64,791.5l-177.4,167.39L577.07,1097
			l276.78-272.57L608.64,791.5L608.64,791.5z"/>
              </g>
            </g>
            <g id="Inner_S_-_Middle">
              <g>
                <polygon className="loading-second" points="638.86,763.01 311.03,440.17 340.07,410.03 578.34,457.68 897.09,771.58 873.29,798.04 		" />
              </g>
              <g>
                <path d="M341.77,415.47l234.12,46.82l314.28,309.51l-18.81,20.91l-230.16-34.4L318.06,440.08L341.77,415.47 M338.37,404.59
			L304,440.26l332.51,327.45l238.7,35.67L904,771.37L580.78,453.07L338.37,404.59L338.37,404.59z"/>
              </g>
            </g>
          </svg>
          <p>Loading</p>
        </div>
      )
    }

    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/drawwall" component={Wall} />
      </div>
    );
  }
}

export default App;

