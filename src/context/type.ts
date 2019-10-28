/* eslint-disable import/prefer-default-export */


export enum EContextActionTypes {
  SET_LOADING = 'SET_LOADING',
  ADD_LOG = 'ADD_LOG',
  ADD_TECH = 'ADD_TECH',
  GET_LOGS = 'GET_LOGS',
  DELETE_LOG = 'DELETE_LOG',
  LOGS_ERROR = 'LOGS_ERROR',
  UPDATE_LOG = 'UPDATE_LOG',
  SET_CURRENT = 'SET_CURRENT',
  GET_TECHS = 'GET_TECHS',
  TECH_ERROR = 'TECH_ERROR',
  DELETE_TECH = 'DELETE_TECH',
}

export interface EContextBaseAction {
  type: EContextActionTypes;
}
