import { createAction } from "@reduxjs/toolkit";

export const initUserId = createAction("family/initUserId");

export const fatchFamilyRequest = createAction("family/fatchFamilyRequest");
export const fatchFamilySuccess = createAction("family/fatchFamilySuccess");
export const fatchFamilyError = createAction("family/fatchFamilyError");

export const setFamilyRequest = createAction("family/setFamilyRequest");
export const setFamilySuccess = createAction("family/setFamilySucces");
export const setFamilyError = createAction("family/setFamilyError");

export const deleteFamilyRequest = createAction("family/deleteFamilyRequest");
export const deleteFamilySuccess = createAction("family/deleteFamilySuccess");
export const deleteFamilyError = createAction("family/deleteFamilyError");

export const updateFamilyRequest = createAction("family/updateFamilyRequest");
export const updateFamilySuccess = createAction("family/updateFamilySuccess");
export const updateFamilyError = createAction("family/updateFamilyError");