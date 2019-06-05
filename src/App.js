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
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)

  }

  render() {
    return (
      <Fragment>
        123{this.props.name}
        <div>
          <label htmlFor="myInput">输入内容</label>
          <input id="myInput" className='input' value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          { this.showItem() }
        </ul>
      </Fragment>
    );
  }


  showItem() {
    return this.state.list.map((item,index) => {
      return (
        <Item key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
      )
    })
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
