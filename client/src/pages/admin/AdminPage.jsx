import React from 'react'
import {Admin, Resource} from 'react-admin'
import UserList from '../../components/UserList'
import lb4Provider from 'react-admin-lb4'

const AdminPage = () => {
  return (
    <Admin dataProvider = {lb4Provider('http://localhost:8800')}>
      <Resource name = 'admin/users' list={UserList} />
    </Admin>
  )
}

export default AdminPage