const userPayload = () => {
    const createUserPayload = {
        "name": "Test", "job": "leader"
    };
    return createUserPayload;
};

const scanInInvalidPayload = () => {
    const scanInOrderPayload = {
        "order_id":"@!£","user":"user"
    };
    return scanInOrderPayload;
};

const invalidGiftCardPayload = () => {
    const invalidCardPayload = {
        "order_id":"@!£","user":"tester.user"
    };
    return invalidCardPayload;
};
const addNotePayload = () => {
    const notePayload = {
        "description":"Note","order_number":"300000003"
    };
    return notePayload;
};

const missRefundPayload = () => {
    const missedRefundOrderPayload = {
        "refundType":"MISC","refundAmount":"30.40","orderId":"900000003","user":"testuser","items":["123456"]
    };
    return missedRefundOrderPayload;
};

const invalidAmountGiftCardPayload = () => {
    const giftCardPayload = {
        "customerEmailAddress":"ugulgl","amount":"0","reference":"16"
    };
    return giftCardPayload;
};

export default {userPayload,scanInInvalidPayload,invalidGiftCardPayload,addNotePayload,missRefundPayload,invalidAmountGiftCardPayload}
