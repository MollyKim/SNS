import { all, fork,takeLatest,put,delay } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';
import { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE } from '../reducers/post';


//세개의 함수가 세트로!
function addPostAPI() {

}
function* addPost() {
    try{
        yield delay(2000);
        yield put({
            type:ADD_POST_SUCCESS,
        });
    }catch(e){
        yield put({
            type:ADD_POST_FAILURE,
            error:e,
        });
    }
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

//세개의 함수가 세트로!
function addCommentAPI() {

}
function* addComment(action) {
    try{
        yield delay(2000);
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:{postId:action.data.postId,},
        });
    }catch(e){
        yield put({
            type:ADD_COMMENT_FAILURE,
            error:e,
        });
    }
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST,addComment);
}

//생성
export default function* postSaga(params) {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),

    ]);
}