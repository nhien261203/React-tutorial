import React from 'react'
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Checks from '../Todos/Checks.jsx';


function TodoLists() {
    

    return (
        <>
            <Row style={{ height: 'calc(100% - 40px)' }}>
                <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                    <Checks name='Learn React' prioriry='High' />
                    <Checks name='Learn Redux' prioriry='Medium' />
                    <Checks name='Learn JavaScript' prioriry='Low' />
                </Col>
                <Col span={24}>
                    <Input.Group style={{ display: 'flex' }} compact>
                        <Input
                            placeholder='Nhap ten todo'
                            type='text'
                            
                        />

                        <Select defaultValue="Medium">
                            <Select.Option value='High' label='High'>
                                <Tag color='red'>High</Tag>
                            </Select.Option>
                            <Select.Option value='Medium' label='Medium'>
                                <Tag color='blue'>Medium</Tag>
                            </Select.Option>
                            <Select.Option value='Low' label='Low'>
                                <Tag color='gray'>Low</Tag>
                            </Select.Option>
                        </Select>
                        <Button type='primary'>
                            Add
                        </Button>
                    </Input.Group>
                </Col>
            </Row>
        </>

    );
}

export default TodoLists
