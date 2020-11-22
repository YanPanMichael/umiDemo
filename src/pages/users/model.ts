import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import getRemoteData from './services';
export interface UsersModelState {
  name: string;
}
export interface UsersModelType {
  namespace: 'index';
  state: UsersModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<UsersModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}
const UsersModel: UsersModelType = {
  namespace: 'users',
  state: {
    name: '',
  },
  effects: {
    *query(action, { put, call }) {
      const dataSource = yield call(getRemoteData);
      console.log('aaa',dataSource);
      yield put({
        type: 'save',
        payload: {
          data: dataSource,
        },
      });
    },
  },
  reducers: {
    save(state, {type, payload}) {
      return payload;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'query',
          })
        }
      });
    }
  }
};
export default UsersModel;