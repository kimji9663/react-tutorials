import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    information: [
      {
        id: 0,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: 1,
        name: '김00',
        phone: '010-0000-0002'
      },
      {
        id: 2,
        name: '이∆∆',
        phone: '010-0000-0003'
      }
    ], //name, phone
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
    //console.log(information); //name, phone 원래 값
    //console.log(data); //name, phone 새로운 값
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data, //name: data.name, phone: data.phone,
            }
          }
          return info;
        }
      )
    })
  }
  
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList 
          data={this.state.information} //name, phone
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
