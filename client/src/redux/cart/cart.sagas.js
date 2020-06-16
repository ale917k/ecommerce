import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnAction() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnAction);
}

export function* onPaymentSuccess() {
    yield takeLatest(UserActionTypes.PAYMENT_SUCCESS, clearCartOnAction);
}

export function* cartSagas() {
    yield (all([
        call(onSignOutSuccess),
        call(onPaymentSuccess)
    ]));
};