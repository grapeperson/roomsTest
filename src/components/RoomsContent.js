import React, { Component, Fragment } from 'react';
import RoomsTable from './RoomsTable';

export default class RoomsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {room: null};
  }
  componentDidMount() {
    const { loadRoomsData, connectSocket, dataRooms} = this.props;
    if(!dataRooms) {
      connectSocket('ws://localhost:1337');
      loadRoomsData();
    }

  }
  checkSubscribe(name,index){
    const { unsubscribe, subscribe, setRoom} = this.props;
    if(this.state.room){
      unsubscribe(this.state.room);
      subscribe(name);
      this.setState({room: name});
      setRoom(index);
    } else {
      subscribe(name);
      setRoom(index);
      this.setState({room: name});
    }
  }
  render() {
    const { dataRooms } = this.props;
    if(dataRooms){
      return(
        <section className = "rooms-content">
          {
            dataRooms.map((elem,i) => {
              return (
                <article key={ elem.name } className="room-container">
                  <h3 className="room-header">{elem.name}</h3>
                  <RoomsTable room={ elem }  key={ elem.name }/>
                  <button type="button" name="button" className="room-buttn" onClick = { () => {this.checkSubscribe(elem.name,i)}}>Подписаться на {elem.name}</button>
                </article>
              )
            })
          }

        </section>
      )
    } else {
      return(
        <Fragment>
        </Fragment>
      )
    }
  }

}
//i should rework case
