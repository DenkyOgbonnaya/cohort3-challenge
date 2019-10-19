import React from 'react';
import { Form, Row, Col, Modal, Input, DatePicker} from 'antd';
import 'antd/dist/antd.css';
import propTypes from 'prop-types';

const UserForm = ({isVisible, handleAdd, handleCancel}) => {
    const FormItem = Form.Item;
    
    return (
        <Modal
          visible={isVisible}
          title="Add a new user"
          okText="Add"
          onCancel={handleCancel}
          onOk={handleAdd}
        >
            <Form>
                <Row gutter={10}>
                    <Col span={10}>
                        <FormItem>
                            <Input placeholder='firstname' />
                        </FormItem>
                    </Col>
                    <Col span={10}>
                        <FormItem>
                            <Input placeholder='lastname' />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col span={6}>
                        <FormItem>
                            <Input placeholder='age' />
                        </FormItem>
                    </Col>
                    <Col span= {14}>
                        <FormItem>
                            <Input placeholder='hobby' />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={20}>
                        <FormItem>
                            <DatePicker  />
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