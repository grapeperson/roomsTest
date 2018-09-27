import axios from 'axios';
import { WEBSOCKET_CONNECT, WEBSOCKET_SEND, WEBSOCKET_DISCONNECT, WEBSOCKET_OPEN, WEBSOCKET_CLOSE, WEBSOCKET_MESSAGE} from "../constants/webSocket";

export const RoomsDataRequest = () => {
  return axios.get('http://localhost:1337')
  .then((response) => {
    return response.data;
  })
}

export const updateArray = (room,newRooms) => {
  let arr = [...room];
  newRooms.forEach((elem)=>{
    arr[elem[0]]= elem[1]
  });
  return arr
};

export const updatedArrRooms = (state, activeRoom, updatedRoom) =>{
  return state.data.map((elem,i) => {
    if(i===activeRoom){
      let newObj = {...elem, data: updatedRoom}
      return newObj
    } else {
      return elem
    }
  })
};

export const importAll = (r) => {
  let images = [];
  r.keys().map((item, index) => { images.push({ url: r(item), id: index }); });
  return images;
}

let websocket;

export const socketMiddleware = store => next => action => {
  const dispatch = store.dispatch;
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      websocket = new WebSocket(action.payload.url);
      websocket.onopen = () => dispatch({ type: WEBSOCKET_OPEN });
      websocket.onclose = (event) => dispatch({ type: WEBSOCKET_CLOSE, payload: event });
      websocket.onmessage = (event) => dispatch({ type: WEBSOCKET_MESSAGE, payload: event });
      break;

    case WEBSOCKET_SEND:
      websocket.send(JSON.stringify(action.payload));
      break;

    case WEBSOCKET_DISCONNECT:
      websocket.close();
      break;

    default:
      break;
  };

  return next(action);
};
