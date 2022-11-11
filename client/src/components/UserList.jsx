import React from 'react'
import {List, Datagrid, TextField,Filter, SearchInput} from 'react-admin'

const CustomerFilter = (props) => (<Filter {... props}>
    <SearchInput placeholder='Customer Email' source = 'email' ></SearchInput>
</Filter>)

const UserList = (props) => {
  return (
    <List {...props} filters={<CustomerFilter />}>
        <Datagrid>
            <TextField source='username'/>
            <TextField source='email'/>
            <TextField source='city'/>
            <TextField source='phone'/>
        </Datagrid>
    </List>
  )
}

export default UserList