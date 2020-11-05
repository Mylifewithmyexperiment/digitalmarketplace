import {
  SEARCH_BOX_COMPONENT_DATA,
  SEARCH_BOX_COMPONENT_ID
} from "../actionTypes";

export const sendSearchBoxComponentData = (params) => {
  return {
    type: SEARCH_BOX_COMPONENT_DATA,
    params,
  };
};

export const sendSearchBoxComponentIdAction = (params) => {
  return {
    type: SEARCH_BOX_COMPONENT_ID,
    params
  };
};

 