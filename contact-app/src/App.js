import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState ({
      //data에 id를 추가하는 여러가지 방법(원본불변성)

      // information: information.concat({
      //   ...data,
      //   id: this
      // })

      // information: information.concat({
      //   name: data.name,
      //   phone: data.phone,
      //   id: this.id++
      // })

      information: information.concat(Object.assign(
        {}, 
        data, 
        {id: this.id++}
      ))
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={this.state.information} />
      </div>
    );
  }
}

export default App;
