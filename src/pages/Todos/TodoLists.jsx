import React, { useState, useCallback } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Checks from '../Todos/Checks.jsx';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions.js";
import { toast } from "react-toastify";

function TodoLists() {
    const [name, setName] = useState("");  // To store the task name
    const [priority, setPriority] = useState("Medium");  // To store the task priority

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todo.todos);
    // const search = useSelector((state) => state.todo.filters.search); // Get search filter from Redux state

    // // Filter todos based on search filter
    // const filteredTodos = todos.filter((todo) =>
    //   todo.name.toLowerCase().includes(search.toLowerCase())
    // );
    

    const handleAdd = useCallback(() => {
        if (!name || !priority) {
            toast.error('Vui long nhap day du thong tin');
            return;
        }

        const newTodo = {
            id: Date.now(),
            name,
            priority,
        };

        dispatch(addTodo(newTodo));  
        setName("");  
        setPriority("Medium");

        toast.success('Them job thanh cong');
    }, [name, priority, dispatch]);

    return (
        <>
            <Row style={{ height: 'calc(100% - 40px)' }}>
                <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                    {/* Render dynamically the todo list from Redux */}
                    {todoList.map(todo => (
                        <Checks key={todo.id} name={todo.name} prioriry={todo.priority} />
                    ))}
                </Col>
                <Col span={24}>
                    <Input.Group style={{ display: 'flex' }} compact>
                        <Input
                            placeholder='Nhap ten todo'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Select value={priority} onChange={(value) => setPriority(value)} style={{ width: 120 }}>
                            <Select.Option value='High'>
                                <Tag color='red'>High</Tag>
                            </Select.Option>
                            <Select.Option value='Medium'>
                                <Tag color='blue'>Medium</Tag>
                            </Select.Option>
                            <Select.Option value='Low'>
                                <Tag color='gray'>Low</Tag>
                            </Select.Option>
                        </Select>
                        <Button type='primary' onClick={handleAdd}>
                            Add
                        </Button>
                    </Input.Group>
                </Col>
            </Row>
        </>
    );
}

export default TodoLists;
