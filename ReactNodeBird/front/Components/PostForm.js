import React, { useCallback, useState ,useEffect } from 'react';
import {Form,Input,Button} from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';
    


const PostForm = () => {
    const dispatch = useDispatch();
    const [text,setText] = useState();
    const {imagePaths,isAddingPost,postAdded} = useSelector(state=>state.post);

    useEffect(()=>{
        setText('');
    },[postAdded==true]);

    const onSubmitForm = useCallback((e)=> {
        e.preventDefault();
        dispatch({
            type:ADD_POST_REQUEST,
            data:{
                text,
            },
        });
    },[]);

    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[]);

    return (
    <Form style={{margin:'10px 0 20px' }}encType="multipart/form-data" onSubmit={onSubmitForm} >
        <Input.TextArea maxLength={140} placeholder="무슨 생각을 하세요?" value={text} onChange={onChangeText} />
        <div>
            <Input  type="file" multiple hidden />
            <Button>이미지 올리기</Button>
            <Button type="primary" style={{float:'right'}} htmlType="submit" loading={isAddingPost}>글올리기</Button>
        </div>
        <div>
            {imagePaths.map((v)=> {
                return(
                <div key={v} style={{display:'inline-block'}}>
                    <img src={'http://localhost:3065/' + v } style={{width:'200px'}} alt={v} />
                    <div>
                        <Button>삭제</Button>
                    </div>
                </div>
                )	
            })}
        </div>
    </Form>
    );
};

export default PostForm;