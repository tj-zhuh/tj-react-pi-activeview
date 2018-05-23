import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PiActiveView from '../src/index.js';

class App extends Component {

  constructor() {
    super();
    
  }

  render() {

    const url = 'http://localhost:9905/kanban.PDI';

    return (
      <div style={{width: "1300px", height:"800px"}}>
        <PiActiveView url={url} />
        <iframe/>
        <i>浮动在上面的内容</i>
      </div>
    );
  }
  
}

ReactDOM.render(<App />, document.getElementById('root')); 