import {
  fatchFamilyRequest,
  fatchFamilySuccess,
  fatchFamilyError,
  setFamilyRequest,
  setFamilySuccess,
  setFamilyError,
  deleteFamilyRequest,
  deleteFamilySuccess,
  deleteFamilyError,
  updateFamilyRequest,
  updateFamilySuccess,
  updateFamilyError,

} from "./family-actions";

import axios from "axios";

axios.defaults.baseURL = `https://test-full-stack-server.herokuapp.com/api`;



const fatchAllFamily = (userId) => async (dispatch) => {
  dispatch(fatchFamilyRequest());
  try {
    const { data } = await axios.get(`/tree/?id=${userId}`);
    dispatch(fatchFamilySuccess(data));
  } catch (error) {
    dispatch(fatchFamilyError(error));
  }
};

const addMember = (newMember) => (dispatch) => {
  dispatch(setFamilyRequest());
  axios
    .post("/tree", newMember)
    .then(({ data }) => {
     dispatch(setFamilySuccess(data))
    })
    .catch((error) => dispatch(setFamilyError(error)));
};

const deleteMember = ({ memberId }) => (dispatch) => {
  dispatch(deleteFamilyRequest());
  axios
    .delete(`/tree/${memberId}`)
    .then(({ data }) => {
      dispatch(deleteFamilySuccess(data))
    })
    .catch((error) => dispatch(deleteFamilyError(error)));
};

const updateMember = (memberId, newMember) => (dispatch) => {
  dispatch(updateFamilyRequest());
  axios
    .put(`/tree/${memberId}`, newMember)
    .then(({ data }) => {
      dispatch(updateFamilySuccess(data))
    })
    .catch((error) => dispatch(updateFamilyError(error)));
};

const operations = {
  fatchAllFamily,
  addMember,
  deleteMember,
  updateMember,
};

export default operations;