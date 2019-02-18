import React, { Component } from 'react';
import TableView from './Componets/Table';
import Schedule from './Class/Table'
import ItemSchedule from './Class/ItemSchedule'
import {getData} from './ServiceData'
class App extends Component {
  constructor(props: any){
    super(props)
    this.state = {
      schedule: Schedule
    }
  }

  async addSchedule(){
    let data = await getData()
    console.log('enter here', data)
    // let scheduleItem = new ItemSchedule('Introduccion a la Programacion', 'red', 'lunes', '6:45-8:15');
    // Schedule.insertElement(scheduleItem)
    // this.setState({
    //   schedule: Schedule
    // })
  }
  
  render() {
    console.log(Schedule)
    return (
      <div className="App">
        <button onClick={this.addSchedule.bind(this)}>Click Me</button>
        <TableView schedule={Schedule} />
      </div>
    );
  }
}

export default App;
