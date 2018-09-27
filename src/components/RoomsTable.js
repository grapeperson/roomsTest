import React ,{ Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class RoomsTable extends Component {

  createTable (width, height, arr) {
    let table = [];
    let newArr = [...arr];
    for (let i = 0; i < height; i++) {
      let children = []
      for (let j = 0; j < width; j++) {
        let number = newArr.shift()
        children.push(
            <td key={`${i}${j}`} className="active-bg">
                {number}
            </td>
        )
      }
      table.push(<tr key={i}>{children}</tr>)
    }
    return table
  }

  render () {
    const { room } = this.props;
    return (
        <table className="room-table">
          <ReactCSSTransitionGroup  component="tbody" transitionName="anim" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            {
              this.createTable(room.width, room.height, room.data)
            }
          </ReactCSSTransitionGroup>
        </table>
    )
  }

};
