const SomeModel = {
  namespace: 'some',
  state: {
    initState: '',
  },
  reducers: {
    getList(state, action: { type, payload }) {
      return {...state, ...payload};
    }
  },
  effects: {
    *query(action: { type, payload }, effects) {
      yield call();
      yield put();
    }
  },
  subscriptions: {
    somefunc({ dispatch, history }) {
      // some things...
    }
  }
};

export default SomeModel;