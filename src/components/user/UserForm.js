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
    const[birthday, setBirthday] = useState('');
    const[errors, setErrors]= useState({});
    const FormItem = Form.Item;

    const onAdd = () => {
        const err = valibirthdayFields();
        if(err){
            return
        }else{
            const key = uuid();
            let userObject = {key, firstname, lastname, age, hobby, birthday};
            handleAdd(userObject);
        }
    }
    const onDateChange = (date, dateString) => {
        setBirthday(dateString);
      }
    const valibirthdayUser = user => {
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
        if(!user.birthday)
            errors.birthday = 'Please select a birthday';

        return errors;
    }
    const valibirthdayFields = () => {
        const validationErrors = valibirthdayUser({firstname, lastname, age, hobby, birthday});
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
                            validateStatus= {errors.birthday && 'error'} help={errors.birthday && errors.birthday}>
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