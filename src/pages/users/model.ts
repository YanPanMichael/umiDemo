import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
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
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state, action) {
      const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
      
      return dataSource;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'save',
          })
        }
      });
    }
  }
};
export default UsersModel;