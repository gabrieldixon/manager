import firebase from 'firebase';
import { EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL }
 from './types';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
  });

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
  });

export const loginUser = ({ email, password }) => (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().creatUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user));
    });
  };

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
