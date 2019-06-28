
import React, {Fragment} from 'react';
import Item from './Item'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreator'
import {connect} from 'react-redux'

class List extends React.Component {
  constructor(props) {
    super(props)
  }

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

  showItem() {
    return this.props.list.map((item,index) => {
      return (
        <Item key={index} content={item} index={index} deleteItem={this.props.handleItemDelete}/>
      )
    })
  }
  
}

const mapStateToProps = (state) => {
  return {
    // inputValue: state.inputValue,
    // list: state.list
    inputValue: state.list.inputValue,
    list: state.list.list


    // inputValue: state.get('inputValue'),
    // list: state.get('list')
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
