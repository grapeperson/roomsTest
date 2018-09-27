import { GET_ROOMS_DATA, GET_ROOMS_DATA_SUCCEED, GET_ROOMS_DATA_FAILED, UPDATE_ROOM, SET_ROOM } from "../constants/getRoomsData";
import { WEBSOCKET_CONNECT, WEBSOCKET_SEND } from "../constants/webSocket";
import { RoomsDataRequest } from '../utils';

export const getRoomsData = () => {
  return async (dispatch) => {
    dispatch({
      type : GET_ROOMS_DATA
    })
    try{
      const result = await RoomsDataRequest();
      dispatch({
        type: GET_ROOMS_DATA_SUCCEED,
        payload: { data: result },
      });
    } catch (e) {
      dispatch({
        type: GET_ROOMS_DATA_FAILED,
        payload: { error: e, loading: false },
      });
    }
  }
};

export const connetToWebSocet = (url) => {
  return({
    type: WEBSOCKET_CONNECT,
    payload: { url }
  })
};

export const subscribeAtRoom = (name) => {
  return({
    type: WEBSOCKET_SEND,
    payload: { type: "SUBSCRIBE", room: name }
  })
};

export const unsubscribeAtRoom = (name) => {
  return({
    type: WEBSOCKET_SEND,
    payload: { type: "UNSUBSCRIBE", room: name }
  })
};

export const setRoomIntoStore = (name) => {
  return({
    type: SET_ROOM,
    payload: { activeRoom: name }
  })
};
