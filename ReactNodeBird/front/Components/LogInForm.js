import React, {useState,useCallback} from 'react';
import {Input, Button, Form} from 'antd';
import {useInput} from '../pages/signup';
import Link from 'next/link';
import {useDispatch,useSelector} from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

const LogInForm = () => {
    const [id,onChangeId] = useInput('');
    const [password,onChangePassword] = useInput('');
    const dispatch = useDispatch();
    const {isLoggingIn} = useSelector(state=>state.user);

    
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data:{
                userId:id,password,
            },
        });
    },[id,password]);

    return (
        <>
        <Form onSubmit={onSubmitForm} style={{padding:'10px'}} > 
        <div>
            <label htmlFor="user-id">아이디</label>
            <br/>
            <input name="user-id" required onChange={onChangeId}/>
        </div>
        <div>
            <label htmlFor="user-password">비밀번호</label>
            <br/>
            <input name="user-password" type="password" required value={password} onChange={onChangePassword} />
        </div>
        <div style={{marginTop: '10px'}} >
            <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
            <Link href="/signup">
                <a><Button>회원가입</Button></a>
            </Link>
        </div> 
        </Form>
    </>
    )
}
export default LogInForm;