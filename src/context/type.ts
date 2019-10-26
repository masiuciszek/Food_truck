export const SET_LOADING = 'SET_LOADING';
export const ADD_LOG = 'ADD_LOG';
export const GET_LOGS = 'GET_LOGS';
export const DELETE_LOG = 'DELETE_LOG';
export const LOGS_ERROR = 'LOGS_ERROR';
export const UPDATE_LOG = 'UPDATE_LOG';
export const SET_CURRENT = 'SET_CURRENT';


export enum EContextActionTypes {
  SET_LOADING = 'SET_LOADING',
  ADD_LOG = 'ADD_LOG',
  GET_LOGS = 'GET_LOGS',
  DELETE_LOG = 'DELETE_LOG',
  LOGS_ERROR = 'LOGS_ERROR',
  UPDATE_LOG = 'UPDATE_LOG',
  SET_CURRENT = 'SET_CURRENT',
}

export interface EContextBaseAction {
  type: EContextActionTypes;
}
