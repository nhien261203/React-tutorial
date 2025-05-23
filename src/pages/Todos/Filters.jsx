import React from 'react'
import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { setSearchFilter, setStatusFilter, setPriorityFilter } from '../../redux/actions';
import { useDispatch } from 'react-redux';
const { Search } = Input;


function Filters() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    dispatch(setSearchFilter(searchText)); // Dispatch action to update search filter
  };

  const handleStatusChange = (e) => {
    dispatch(setStatusFilter(e.target.value));
  };

  const handlePriorityChange = (values) => {
    dispatch(setPriorityFilter(values));
  };
  
  

  return (
    <>
      <Row justify='center'>
        <Col span={24}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
          >
            Search
          </Typography.Paragraph>
          <Search placeholder='input search text'
            onChange={handleSearchChange}
            enterButton="Search"
            allowClear
          />
        </Col>
        <Col sm={24}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
          >
            Filter By Status
          </Typography.Paragraph>
          <Radio.Group onChange={handleStatusChange}>
            <Radio value='All'>All</Radio>
            <Radio value='Completed'>Completed</Radio>
            <Radio value='Todo'>To do</Radio>
          </Radio.Group>
        </Col>
        <Col sm={24}>
          <Typography.Paragraph
            style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
          >
            Filter By Priority
          </Typography.Paragraph>
          <Select
            mode='multiple'
            allowClear
            onChange={handlePriorityChange}
            placeholder='Please select'
            style={{ width: '100%' }}

          >
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
        </Col>
      </Row>
    </>

  );
}

export default Filters
