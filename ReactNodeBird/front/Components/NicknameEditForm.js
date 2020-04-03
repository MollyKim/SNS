import React from 'react';
import {Form, Input,Button} from 'antd';


const NicknameEditForm = () => {
    return (
        <Form style={{marginBottom:'20px', border:'1px solid #d99d9', padding:'20px'}} >
            <Input addonBefore="nickname" />
            <Button type="primary">변경</Button>
        </Form>
    );
};


export default NicknameEditForm;