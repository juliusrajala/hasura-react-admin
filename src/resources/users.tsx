import {
  List,
  Datagrid,
  TextField
} from 'react-admin';

export const UserList = (props: object) => (
  <List bulkActionButtons={false} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="User Id" />
      <TextField source="name" />
      <TextField source="email" />
    </Datagrid>
  </List>
);