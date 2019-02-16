import React, { Component } from 'react';
import TableView from './Componets/Table';
import Schedule from './Class/Table'
class App extends Component {
  render() {
    console.log(Schedule)
    return (
      <div className="App">
        <TableView schedule={Schedule} />
      </div>
    );
  }
}

export default App;
