import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => { //data = this.state
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
    //console.log(data);
  }
  
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        {JASON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
