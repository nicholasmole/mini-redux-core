# Mini Redux Core

Mini Redux Core Code with Combined Reducer

## Usage

```

import {
	createStore,
	combineReducers
} from '@nmole/mini-redux-core';

const COMBINED_REDUCER = combineReducers({
	YOUR_REDUCER
});

const store = createStore(COMBINED_REDUCER);

store.dispatch(SOME_REDUCER_FUNCTION()),

console.log(store.state);

```