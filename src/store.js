/**
 * Created by josephbosire on 09/05/2016.
 */
import {createStore} from 'redux';
import reducer from './reducer';

export default function makeStore() {
    return createStore(reducer);
}