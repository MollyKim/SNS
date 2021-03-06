export const initialState = {
    mainPosts:[{
        id:1,
		User:{
			id:1,
			nickname:'명희',
		},
		content:'첫번째 컨텐츠',
		img:'https://www.pngitem.com/pimgs/m/15-152712_cat-kitten-clip-art-cat-icon-transparent-background.png',
        Comments:[],
    }],//화면에 보일 포스트들
    imagePaths: [],//미리보기 이미지 경로
    addPostErrorReason:'',//포스트 업로드 실패 이유
    isAddingPost:false,//포스트 업로드 중
    postAdded:false,//포스트업로드성공
    isAddingComment:false,
    addCommentErrorReason:'',
    commentAdded:false,
};

const dummyPost = {
    id:2,
    User:{
        id:1,
        nickname:'고순'
    },
    content:'더미 포스트입니다.',
    Comments:[],
};

const dummyComment = {
    User:{
        id:1,
        nickname:'고돌이',
    },
    createdAt: new Date(),
    content:'더미 댓글입니다.',
};

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
//이미지 업로드 액선
export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE';
//동기
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

const ADD_DUMMY = 'ADD_DUMMY';

export default(state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            {
                return {
                    ...state,
                    isAddingPost: true,
                    addPostErrorReason: '',
                    postAdded: false
                };
            }
        case ADD_POST_SUCCESS:
            {
                return {
                    ...state,
                    isAddingPost: false,
                    mainPosts: [dummyPost, ...state.mainPosts],
                    postAdded: true
                };
            }
        case ADD_POST_FAILURE:
            {
                return {
                    ...state,
                    isAddingPost: false,
                    addPostErrorReason: action.error
                };
            }
        case ADD_COMMENT_REQUEST:
            {
                return {
                    ...state,
                    isAddingComment: true,
                    addCommentErrorReason: '',
                    commentAdded: false
                };
            }
            case ADD_COMMENT_SUCCESS: {
                const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
                const post = state.mainPosts[postIndex];
                const Comments = [...post.Comments, dummyComment];
                const mainPosts = [...state.mainPosts];
                mainPosts[postIndex] = { ...post, Comments };
                return {
                    ...state,
                    isAddingComment: false,
                    mainPosts,
                    commentAdded: true,
                };
                }
        case ADD_COMMENT_FAILURE:
            {
                return {
                    ...state,
                    isAddingComment: false,
                    addCommentErrorReason: action.error
                };
            }
        default:
            {
                return {
                    ...state
                };
            }
    }
};