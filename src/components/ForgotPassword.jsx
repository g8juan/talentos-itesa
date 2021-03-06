import React from "react";
import {Link} from 'react-router-dom'
import { Form, Input, Button,Alert } from "antd";

export default ({ handleInputChange, handleSubmit, data, form, isLogin, message, error, success }) => {
  
 
  return (
    <div className='login-formContainer'>
      <Form
        onFinish={handleSubmit}
        form={form}
        className='refister-form'>
        <h1 style={{ color: "gray", textAlign: "center" }}>Reset Password</h1>         
        <Form.Item
          name='email'
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your username!",
            },
          ]}>
            <div>
          <Input
            name='email'
            placeholder='Email'
            value={data.email}
            onChange={handleInputChange}
            
          />
          {error && <Alert
            style={{marginTop: '1.5rem'}}
            message={message}
            type="error"
            showIcon
            />
          }
          {success && <Alert
            style={{marginTop: '1.5rem'}}
            message={message}
            type="success"
            showIcon
            />
          }
            </div>
        </Form.Item>
        <Form.Item>
          <Button
            loading={isLogin.loading}
            style={{ backgroundColor: "#a77ffa", border: 0 }}
            shape='round'          
            block
            type='primary'
            htmlType='submit'
            className='register-button'>             
            Reset Password
          </Button>          
        </Form.Item>        
       <div className='register-link' >
       <Link to='/login' style={{ color: "gray" }}>
            Login?
            </Link>
       </div>      
       <div className='register-link'>
            <Link to='/register' style={{ color: "gray" }}>
              Don't have an account? Register
            </Link>   
         </div> 
      </Form>
     
    </div>
  );
};


