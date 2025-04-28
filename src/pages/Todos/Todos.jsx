import React, { useCallback, useState } from "react";
import '../Todos/Style1.scss'
import { Typography, Divider } from 'antd';
import Filters from '../Todos/Filters.jsx';
import TodoLists from '../Todos/TodoLists.jsx'

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions.js";
import { toast } from "react-toastify";

const { Title } = Typography;

const Todos = () => {


    return (
        <>
            <div
                style={{
                    width: 500,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: 20,
                    boxShadow: '0 0 10px 4px #bfbfbf',
                    borderRadius: 5,
                    height: '90vh',
                }}
            >
                <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
                <Filters />
                <Divider />
                <TodoLists />
            </div>
        </>

    );
}

export default Todos;