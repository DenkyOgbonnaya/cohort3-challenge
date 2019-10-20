import React, {useState} from 'react';
import { Form, Row, Col, Modal, Input, DatePicker} from 'antd';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';
const uuid = require('uuidv4').default;

const UserForm = ({isVisible, handleAdd, handleCancel}) => {
    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[age, setAge] = useState('');
    const[hobby, setHobby] = useState('');
    const[date, setDate] = useState('');
    const[errors, setErrors]= useState({});
    const FormItem = Form.Item;

    const onAdd = () => {
        const err = validateFields();
        if(err){
            return
        }else{
            const key = uuid();
            let userObject = {key, firstname, lastname, age, hobby, date};
            handleAdd(userObject);
        }
    }
    const onDateChange = (date, dateString) => {
        setDate(dateString);
      }
    const validateUser = user => {
        let errors = {};
        if(!user.firstname)
            errors.firstname = 'Please enter your firstname';
        if(!user.lastname)
            errors.lastname = 'Please enter your lastname';
        if(!user.age)
            errors.age = 'Please enter your age';
        if(user.age < 1)
            errors.age = 'Please enter your valid age';
        if(!user.hobby)
            errors.hobby = 'Please enter your hobby';
        if(!user.date)
            errors.date = 'Please select a date';

        return errors;
    }
    const validateFields = () => {
        const validationErrors = validateUser({firstname, lastname, age, hobby, date});
        setErrors(validationErrors);

        if(Object.getOwnPropertyNames(validationErrors).length > 0)
            return 'error';
        return undefined;
    }
    
    return (
        <Modal
          visible={isVisible}
          title="Add a new user"
          okText="Add"
          onCancel={handleCancel}
          onOk={onAdd}
        >
            <Form>
                <Row gutter={10}>
                    <Col span={10}>
                        <FormItem 
                            validateStatus= {errors.firstname ? 'error' : ''} help={errors.firstname && errors.firstname} >
                            <Input  placeholder='firstname' value={firstname} onChange={e => setFirstname(e.target.value)} />
                        </FormItem>
                    </Col>
                    <Col span={10}>
                        <FormItem
                            validateStatus= {errors.lastname && 'error'} help={errors.lastname && errors.lastname}>
                            <Input value={lastname} onChange={e => setLastname(e.target.value)} placeholder='lastname' />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col span={6}>
                        <FormItem
                            validateStatus= {errors.age && 'error'} help={errors.age && errors.age}>
                            <Input type='number' defaultValue={age} onChange={e => setAge(e.target.value)} placeholder='age' />
                        </FormItem>
                    </Col>
                    <Col span= {14}>
                        <FormItem
                            validateStatus= {errors.hobby && 'error'} help={errors.hobby && errors.hobby}>
                            <Input value={hobby} onChange={e => setHobby(e.target.value)} placeholder='hobby' />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={20}>
                        <FormItem
                            validateStatus= {errors.date && 'error'} help={errors.date && errors.date}>
                            <DatePicker onChange = {onDateChange} />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </Modal>
    )
}
UserForm.propTypes = {
    isVisible: propTypes.bool.isRequired,
    handleAdd: propTypes.func.isRequired,
    handleCancel: propTypes.func.isRequired
}
export default UserForm;