import React from 'react'
import {List, Datagrid, TextField,Filter, SearchInput} from 'react-admin'

const LocationFilter = (props) => (<Filter {... props}>
    <SearchInput placeholder='Location' source = 'location' ></SearchInput>
</Filter>)

const UserList = (props) => {
  return (
    <List {...props} filters={<CustomerFilter />}>
        <Datagrid>
            <TextField source='name'/>
            <TextField source='location'/>
        </Datagrid>
    </List>
  )
}

export default LocationList