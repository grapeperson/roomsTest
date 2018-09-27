import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from "react-router";

import { getRoomsData, connetToWebSocet, subscribeAtRoom, unsubscribeAtRoom, setRoomIntoStore } from '../actions/getRoomsData';
import UserContent from '../components/UserContent';
import Home from '../components/Home';
import RoomsContent from '../components/RoomsContent';

const Content = (props) => {
  const { dataUser, loadingUser, loadUserData, loadRoomsData, dataRooms, connectSocket, subscribe, unsubscribe, setRoom } = props
  return (
    <Fragment>
      <Route exact path='/' component={Home}/>
      <Route exact path='/info' component={UserContent} />
      <Route exact path='/flats' render={props => <RoomsContent dataRooms = { dataRooms }
      loadingRooms = { loadingUser } loadRoomsData = { loadRoomsData } subscribe={ subscribe }
      connectSocket = { connectSocket } unsubscribe = { unsubscribe } setRoom={ setRoom }  /> } />
    </Fragment>
  )
}

const mapStateToProps = (state) => {
    return {
        loadingRooms: state.roomsDataReducer.loading,
        dataRooms: state.roomsDataReducer.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRoomsData: () => {
            dispatch(getRoomsData());
        },
        subscribe: (name) => {
            dispatch(subscribeAtRoom(name));
        },
        unsubscribe: (name) => {
            dispatch(unsubscribeAtRoom(name));
        },
        connectSocket: (url) => {
            dispatch(connetToWebSocet(url));
        },
        setRoom: (name) => {
            dispatch(setRoomIntoStore(name));
        }
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Content));
