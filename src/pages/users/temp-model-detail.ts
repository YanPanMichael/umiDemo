// import { Reducer, Effect, Subscription } from 'umi';

// interface SomeModelType {
//   namespace: 'some',
//   state: {},
//   reducers: {
//     getList: Reducer,
//   },
//   effects: {
//     query: Effect,
//   },
//   subscriptions: {
//     setup: Subscription,
//   }
// }

// const SomeModel: SomeModelType = {
//   namespace: 'some',
//   state: {
//     initState: '',
//   },
//   reducers: {
//     getList(state, action: { type, payload }) {
//       return {...state, ...payload};
//     }
//   },
//   effects: {
//     *query(action: { type, payload }, effects) {
//       yield call();
//       yield put();
//     }
//   },
//   subscriptions: {
//     setup({ dispatch, history }) {
//       // some things...

//     }
//   }
// };

// export default SomeModel;