
import React, {Fragment} from 'react';
import Item from './Item'
import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator'
import {connect} from 'react-redux'

class List extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   inputValue: '',
    //   list: []
    // }
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.handleBtnClick = this.handleBtnClick.bind(this)
    // this.handleItemDelete = this.handleItemDelete.bind(this)
    // this.handleStoreChange = this.handleStoreChange.bind(this)
    // this.state = store.getState()
    // store.subscribe(this.handleStoreChange)
  }

  // 组件被渲染
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="myInput">输入内容</label>
          <input ref={ (input) => this.input = input } id="myInput" value={this.props.inputValue} onChange={this.props.handleInputChange}/>
          <button onClick={this.props.handleBtnClick}>提交</button>
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
    return this.props.list.map((item,index) => {
      return (
        <Item key={index} content={item} index={index} deleteItem={this.props.handleItemDelete}/>
      )
    })
  }

  // handleStoreChange() {
  //   this.setState(store.getState())
  // }

  // handleInputChange(e) {
  //   const action = getInputChangeAction(e.target.value)
  //   store.dispatch(action);
  // }

  // handleBtnClick() {
  //   const action = getAddItemAction()
  //   store.dispatch(action);
  // }

  // handleItemDelete(index) {
  //   const action = getDeleteItemAction(index)
  //   store.dispatch(action);
  // }
  
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action);
    },
    handleBtnClick() {
      const action = getAddItemAction()
      dispatch(action);
    },
    handleItemDelete(index) {
      const action = getDeleteItemAction(index)
      dispatch(action);
    }
  }
}


//export default List;
export default connect(mapStateToProps, mapDispatchToProps)(List);
