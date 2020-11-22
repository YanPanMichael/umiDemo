import React, { PropTypes } from 'react'
import { Table } from 'antd';
import { connect } from 'umi';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const MainPage = (props) => {
  return (
    <div>
      <Table dataSource={props.users} columns={columns} />
    </div>
  )
}

MainPage.propTypes = {
  
}

const mapStateToProps = ({users}) => ({
  users,
})


export default connect(mapStateToProps)(MainPage);
