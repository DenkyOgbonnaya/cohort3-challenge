import React, {useState} from 'react';
import { Form, Row, Col, Modal, Input, DatePicker} from 'antd';
import 'antd/dist/antd.css';
import uuid from 'uuidv4';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_USER, TOGGLE_USER_FORM} from '../../actions/action-types';
import { validateUserInputs } from './helper';
import {message} from 'antd';

const UserForm = () => {
    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[age, setAge] = useState('');
    const[hobby, setHobby] = useState('');
    const[birthday, setBirthday] = useState('');
    const[errors, setErrors]= useState({});

    const FormItem = Form.Item;
    let isVisibleUserForm = useSelector( state => state.user.isVisibleUserForm);
    const dispatch = useDispatch();

    const onAdd = () => {
        if( isValidInputs() ){
            const key = uuid();
            let userObject = {key, firstname, lastname, age, hobby, birthday};
            dispatch({type: ADD_USER, payload: userObject});
            message.info('New user added');
            closeUserForm();
        }else return;
    }
    const onDateChange = (date, dateString) => {
        setBirthday(dateString);
      }
    
    const isValidInputs = () => {
        const validationErrors = validateUserInputs({firstname, lastname, age, hobby, birthday});
        setErrors(validationErrors);

        if(Object.getOwnPropertyNames(validationErrors).length > 0)
            return false;
        return true;
    }
    const closeUserForm = () => {
        dispatch({type: TOGGLE_USER_FORM})
    }
    
    return (
        <Modal
          visible={isVisibleUserForm}
          title="Add a new user"
          okText="Add"
          onCancel={closeUserForm}
          onOk={ () => onAdd()}
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

export default UserForm;