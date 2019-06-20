import React, {Fragment} from 'react';
import Item from './Item'
//import axios from 'axios'
import './App.css'
import store from './store'
//import {CHANGE_INPUT_TYPE, ADD_ITEM, DELETE_ITEM} from './store/actionTypes'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator'

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
    this.handleStoreChange = this.handleStoreChange.bind(this)
    //console.log(store.getState())
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  // 组件被渲染
  render() {
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
    // axios.post('/api/list')
    // .then((res) => {
    //   console.log(res.data)
    //   this.setState({
    //     list: [...res.data]
    //   })
    // })
    // .catch(() => {
    //   console.log('error')
    // })
  }


  showItem() {
    return this.state.list.map((item,index) => {
      return (
        <Item key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
      )
    })
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }
  
}

export default App;
