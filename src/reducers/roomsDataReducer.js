import { GET_ROOMS_DATA, GET_ROOMS_DATA_SUCCEED, GET_ROOMS_DATA_FAILED, SET_ROOM } from "../constants/getRoomsData";
import { WEBSOCKET_MESSAGE } from "../constants/webSocket";
import { updateArray, updatedArrRooms } from "../utils/index";

const initialState = {
    data: null,
    loading: false
};



export function roomsDataReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ROOMS_DATA:
      return ({...state, loading: true})
      break;
    case GET_ROOMS_DATA_SUCCEED:
      return ({...state, loading: false, data: action.payload.data})
      break;
    case GET_ROOMS_DATA_FAILED:
      return ({loading: false, data: null})
      break;
    case SET_ROOM:
      return ({...state, activeRoom: action.payload.activeRoom})
      break;
    case WEBSOCKET_MESSAGE:
      const data = JSON.parse(action.payload.data);
      let activeRoom = state.activeRoom;
      let room = state.data[activeRoom].data;
      let updatedRoom = updateArray(room, data);
      let newRooms = updatedArrRooms(state, activeRoom, updatedRoom)
      return ({ data:[...newRooms],activeRoom: activeRoom })
      break;
    default:
      return state;
  }
}
