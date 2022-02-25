import * as React from "react";
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    AutocompleteInput,
    TextField,
    EditButton,
    TextInput,
    required,
} from 'react-admin';
import AccountCircle from '@material-ui/icons/AccountCircle';
export const UserIcon = AccountCircle;

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="password" />
            <TextField source="role" />
            <EditButton basePath="/users" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>Users {record ? `"${record.name}"` : ''}</span>;
};

const roles = [
    { role: 'user', full_name: 'User' },
    { role: 'admin', full_name: 'Admin' },
];

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]}/>
            <TextInput source="email" validate={[required()]}/>
            <TextInput source="password" validate={[required()]}/>
            <AutocompleteInput source="role" choices={roles} optionText="full_name" optionValue="role" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create a User" {...props}>
        <SimpleForm>
            <TextInput source="name" validate={[required()]}/>
            <TextInput source="email" validate={[required()]}/>
            <TextInput source="password" validate={[required()]}/>
            <AutocompleteInput source="role" choices={roles} optionText="full_name" optionValue="role" />
        </SimpleForm>
    </Create>
);