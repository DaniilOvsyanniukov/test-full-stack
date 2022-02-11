import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  initUserId,
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

const isLoading = createReducer(false, {
  [fatchFamilyRequest]: () => true,
  [fatchFamilySuccess]: () => false,
  [fatchFamilyError]: () => false,
  [setFamilyRequest]: () => true,
  [setFamilySuccess]: () => false,
  [setFamilyError]: () => false,
  [deleteFamilyRequest]: () => true,
  [deleteFamilySuccess]: () => false,
  [deleteFamilyError]: () => false,
  [updateFamilyRequest]: () => true,
  [updateFamilySuccess]: () => false,
  [updateFamilyError]: () => false,
});

const familyReducer = createReducer([], {
  [fatchFamilySuccess]: (_, { payload }) => payload,
  [setFamilySuccess]: (_, { payload }) => payload,
  [deleteFamilySuccess]: (_, { payload }) => payload,
  [updateFamilySuccess]: (_, { payload }) => payload,
});

const createUserId = createReducer("", {
  [initUserId]: (_, { payload })=> payload.newId,
});

const error = createReducer(null, {});

export default combineReducers({
  family: familyReducer,
  userId: createUserId,
  isLoading,
  error,
});