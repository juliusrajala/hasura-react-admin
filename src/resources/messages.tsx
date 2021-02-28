
import React from 'react';
import {
  Filter,
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  ReferenceField,
  BooleanField,
  DateField,
  ReferenceInput,
  BooleanInput,
  SelectInput,
  SimpleForm,
  TextInput,
  TopToolbar,
  ListButton
} from 'react-admin';

interface Message {
  id: string;
  content: string;
  created_at: Date;
  sender_id: string;
}

const MessageFilter = (props: object) => (
  <Filter {...props}>
    <TextInput label="Search by Title" source="title" alwaysOn />
    <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <BooleanInput source="is_completed" label="Completed?" allowEmpty />
  </Filter>
);

export const MessageList = (props: object) => (
  <List filters={<MessageFilter />} bulkActionButtons={false} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="Message Id" />
      <TextField source="content" />
      <ReferenceField source="sender_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="created_at" />
    </Datagrid>
  </List>
);

const MessageTitle = ({ record }: { record?: { title: string } }) => {
  return <span>Message: {record ? `${record.title}` : ''}</span>;
};

const MessageEditActions = ({ basePath, data }: { basePath?: string, data?: Message }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} label="Back" />
  </TopToolbar>
);

export const MessageEdit = (props: object) => (
  <Edit title={<MessageTitle />} actions={<MessageEditActions />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" label="Message Id" />
      <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <BooleanInput source="is_completed" label="Is Completed?" />
    </SimpleForm>
  </Edit>
);

export const MessageCreate = (props: object) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <BooleanInput source="is_completed" label="Is Completed?" />
    </SimpleForm>
  </Create>
);