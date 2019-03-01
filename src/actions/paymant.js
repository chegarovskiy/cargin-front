export const IS_SHOW_PAYMENT_VIEW = 'SHOW_PAYMENT_VIEW';

export function isShowPaymentView(isShow) {
    return ({type: IS_SHOW_PAYMENT_VIEW, payload: isShow})
}