import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {Col, Input, Menu, Row} from 'antd';
import {useSelector} from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const AppLayout = ({children}) => {
const {isLoggedIn} = useSelector(state => state.user);
return (
    <div>
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <Link href="/"><a>고양이꼬리</a></Link></Menu.Item>
            <Menu.Item key="profile"><Link href="/profile"><a>내상태</a></Link></Menu.Item>
            <Menu.Item key="mail">
        <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
    </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6}>
                {
                    isLoggedIn
                        ? <UserProfile/>
                        : <LoginForm/>
                }
            </Col>
            <Col xs={24} md={12}>
                {children}
            </Col>
            <Col xs={24} md={6}>
                <Link href="https://www.naver.com">
                    <a target="_blank">명희가 만듦!</a>
                </Link>
            </Col>
        </Row>
    </div>
);
};

AppLayout.propTypes = {
children: PropTypes.node
};

export default AppLayout;