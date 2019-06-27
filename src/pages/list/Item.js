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

}

export default Item;