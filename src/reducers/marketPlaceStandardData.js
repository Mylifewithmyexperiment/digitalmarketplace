import {
  SEARCH_BOX_COMPONENT_DATA,

  SEARCH_BOX_COMPONENT_ID,

} from "../actionTypes";


const marketPlaceStandardData = (state = [], action) => {
  switch (action.type) {
    case SEARCH_BOX_COMPONENT_DATA:
      return {
        ...state,
        searchboxdetails: action.params,
      };

    case SEARCH_BOX_COMPONENT_ID:
      return {
        ...state,
        sendSearchboxComponentIdAction: action.params
      }
    default:
      return state;
  }
};

export default marketPlaceStandardData;
