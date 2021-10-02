import {
  signInWithFacebook,
  signInWithGoogle,
  signOut,
} from "../../apis/firebase/firebase";
import { UserConstants } from "./userConstants";

function startLoading() {
  return {
    type: UserConstants.START_LOADING,
  };
}
function updateUserData(payload) {
  return {
    type: UserConstants.UPDATE_USER_DATA,
    payload,
  };
}
function updateUserError(payload) {
  return {
    type: UserConstants.UPDATE_USER_ERROR,
    payload,
  };
}

export function loginGoogleUser() {
  return (dispatch) => {
    dispatch(startLoading());

    signInWithGoogle()
      .then((userData) => {
        dispatch(updateUserData(userData.user));
      })
      .catch((error) => {
        dispatch(updateUserError(error));
      });
  };
}

export function loginFacebookUser() {
  return (dispatch) => {
    dispatch(startLoading());

    signInWithFacebook()
      .then((userData) => {
        dispatch(updateUserData(userData.user));
      })
      .catch((error) => {
        dispatch(updateUserError(error));
      });
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(startLoading());

    signOut()
      .then(() => {
        dispatch(updateUserData(null));
      })
      .catch((error) => {
        dispatch(updateUserError(error));
      });
  };
}
