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
    console.log('finish constructor')
  }

  // 组件即将被挂载到页面时被执行
  componentWillMount() {
    console.log('componentWillMount')
  }

  // 组件被渲染
  render() {
    console.log('render')
    return (
      <Fragment>
        123{this.props.name}
        <div>
          <label htmlFor="myInput">输入内容</label>
          <input ref={ (input) => this.input = input } id="myInput" className='input' value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={ (ul) => this.ul = ul }>
          { this.showItem() }
        </ul>
      </Fragment>
    );
  }

  // 组件被挂载到页面后被执行
  componentDidMount() {
    console.log('componentDidMount')
  }

  // 组件 props 变量被修改的时候被执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  // 组件被更新前执行，返回是否需要执行后面的生命周期函数
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  // 组件被更新之间被执行
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  
  // 组件被更新后被执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }


  showItem() {
    return this.state.list.map((item,index) => {
      return (
        <Item key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
      )
    })
  }


  handleInputChange(e) {
    //console.log(e.target)
    //console.log(this.input)
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    },() => {
      //console.log(this.ul.querySelectorAll('div').length)
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
