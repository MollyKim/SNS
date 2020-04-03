import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);


    return(
        <Card 
            actions={[
                <div key="twit">친구들<br/>{me.post.length}</div>,
                <div key="follwing">내가친구등록한친구<br/>{me.Follwings.length}</div>,
                <div key="follower">나를친구등록한친구들<br/>{me.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar> {me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
);
} ;

export default UserProfile;
