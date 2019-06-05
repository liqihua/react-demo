import React, {Fragment} from 'react';
import './App.css'
import Item from './Item'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        123{this.props.name}
        <div>
          <label htmlFor="myInput">输入内容</label>
          <input id="myInput" className='input' value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return (
                <Item key={index} content={item} index={index} deleteItem={this.handleItemDelete.bind(this)}/>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
      const list = [...this.state.list]
      list.splice(index,1)
      this.setState({
        list: list
      })
  }
  
}

export default App;
