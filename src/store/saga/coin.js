// import { put } from "redux-saga/effects";

// import * as actions from "../action";
// import * as actionTypes from "../action/actionTypes";

// // Get all
// export function* getAll() {
//   try {
//     // Call auth start to showing loading spinner in webapp
//     yield put(actions.coinStart());

//     // Logic

//     // Call auth start to showing loading spinner in webapp
//     yield put(actions.coinSuccess());

//   } catch (err) {
//     console.log(err.message);

//     // Call authFail to store error message in state
//     yield put(actions.coinFail(err.message));
//   }
// }

// // Auth login saga function generator
// export function* authLoginSaga(action) {
//   // Call auth start to showing loading spinner in webapp
//   yield put(actions.authStart());

//   try {
//     // Call api to login user
//     const res = yield axios.post(
//       `${proxy}https://sahil-task-manager.herokuapp.com/users/login`,
//       {
//         email: action.email,
//         password: action.password,
//       }
//     );

//     console.log("from loginAuth", res);

//     // Set token into localstorage
//     setToken(res.data.token);

//     // Call authSuccess to store data in state
//     yield put(actions.authSuccess(res.data.token, res.data.user));
//   } catch (err) {
//     console.log(err.message);

//     // Call authFail to store error message in state
//     yield put(actions.authFail(err.message));
//   }
// }

// // Auth signup saga function generator
// export function* authSignupSaga(action) {
//   // Call auth start to showing loading spinner in webapp
//   yield put(actions.authStart());

//   try {
//     // Call api to signup user
//     const res = yield axios.post(
//       `${proxy}http://sahil-task-manager.herokuapp.com/users`,
//       {
//         name: action.name,
//         email: action.email,
//         password: action.password,
//       }
//     );

//     console.log("form signupAuth", res);

//     // Set token into localstorage
//     setToken(res.data.token);

//     // Call authSuccess to store data in state
//     yield put(actions.authSuccess(res.data.token, res.data.user));
//   } catch (err) {
//     console.log(err.message);

//     // Call authFail to store error message in state
//     yield put(actions.authFail(err.message));
//   }
// }

// // Auth token saga function generator
// export function* authTokenSaga() {
//   let token = null;

//   // Get token from localstorage
//   token = getToken();

//   if (token) {
//     // Call auth start to showing loading spinner in webapp
//     yield put(actions.authStart());

//     try {
//       // Get user data from database using token
//       const res = yield axios.get(
//         `${proxy}https://sahil-task-manager.herokuapp.com/users/me`,
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       console.log("from loginAuth", res);

//       // Call authSuccess to store data in state
//       yield put(actions.checkAuthToken(token, res.data));
//     } catch (err) {
//       console.log(err.message);

//       // Call authSuccess to store data in state
//       yield put(actions.checkAuthToken(null, null));

//       // Call authFail to store error message in state
//       yield put(actions.authFail(err.message));
//     }
//   }
// }
