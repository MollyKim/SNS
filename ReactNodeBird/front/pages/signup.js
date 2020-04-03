import React, {useState, useCallback, useEffect} from 'react';
import {Form, Input, Checkbox, Button} from 'antd';
import propTypes from 'prop-types';
import {useDispatch,useSelector} from 'react-redux';
import {SIGN_UP_REQUEST} from '../reducers/user';
import Router from 'next/router';


export const useInput = (initValue = null) => {
	const [value, setter] = useState(initValue);
	const handler = useCallback((e) => {
		setter(e.target.value);
	}, []);
	return [value, handler];
};


const signup = () => {
	const [passwordcheck, setPasswordChceck] = useState('');
	const [term, setTerm] = useState(false);
	const [PasswordError, setPasswordError] = useState(false);
	const [termError, setTermError] = useState(false);

	const [id, onChangeId] = useInput('');
	const [nickname, onChangeNick] = useInput('');
	const [password, onChangePassword] = useInput('');
	const dispatch = useDispatch();
	const {isSigningUp,me} = useSelector(state=>state.user);

	useEffect(()=>{
		if(me){
			Router.push('/');
		}
	},[me && me.id]);

	const onSubmit = useCallback((e) => {
		e.preventDefault();
		if (password !== passwordcheck) {
			return setPasswordError(true);
		}
		if (!term) {
			return setTermError(true);
		}
		dispatch({
			type:SIGN_UP_REQUEST,
			data:{
      userId: id,
      password,
      nickname:nickname,
		}
		});
	}, [id,nickname,password, passwordcheck, term]);

	const onChangePasswordCheck = useCallback((e) => {
		setPasswordChceck(e.target.value);
		setPasswordError(e.target.value !== password);

	}, [password]);
	const onChangeTerm = useCallback((e) => {
		setTermError(false);
		setTerm(e.target.checked);
	}, []);

	return (
			<>
			< Form onSubmit = {onSubmit}
			style = {{padding:10}} > <div>
				<label html="user-id">id</label>
				<br/>
				<input name="user-id" value={id} required="required" onChange={onChangeId}/>
			</div>
			<div>
				<label html="user-nickname">nickname</label>
				<br/>
				<input
					name="user-nickname"
					value={nickname}
					required="required"
					onChange={onChangeNick}/>
			</div>
			<div>
				<label html="user-password">password</label>
				<br/>
				<input
					name="user-password"
					value={password}
					type="password"
					required="required"
					onChange={onChangePassword}/>
			</div>
			<div>
				<label html="user-password-check">password-check</label>
				<br/>
				<input name="user-password-check" value={passwordcheck} type="password"
						required="required" onChange={onChangePasswordCheck}/> 
						{PasswordError && <div style={{ color: 'red' }}>password incorrect</div>}
			</div>
			<div>
				<Checkbox name="user-term" defaultChecked={term} onChange={onChangeTerm}>약관동의</Checkbox>
				{termError && <div style={{ color: 'red' }}>체크해 주세요!</div>}
			</div>
			<div style={{ marginTop: 10 }}>
				<Button type="primary" htmlType="submit" loading={isSigningUp}>회원가입</Button>
			</div>
	</Form>
</>
	)
};

export default signup;