import React, {Component} from "react";
import styles from 'assets/scss/styles.scss';
import Main from './Main'

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <Main />
        </div>
    );
  }
}

export default App;
