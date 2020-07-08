// Combining all reducers into a big one
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer,
});
