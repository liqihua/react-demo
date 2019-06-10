import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
        )
    }

    handleClick() {
        this.props.deleteItem(this.props.index)
    }

    // 组件 props 变量被修改的时候被执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps')
    }

    // 组件被更新前执行，返回是否需要执行后面的生命周期函数
    shouldComponentUpdate() {
        console.log('child shouldComponentUpdate')
        return true
    }

    // 组件被更新之间被执行
    componentWillUpdate() {
        console.log('child componentWillUpdate')
    }
  
    // 组件被更新后被执行
    componentDidUpdate() {
        console.log('child componentDidUpdate')
    }

    // 组件被销毁的时候被执行
    componentWillUnmount() {
        console.log('child componentWillUnmount')
    }
}

export default Item;