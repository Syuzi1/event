import * as React from "react";
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    required,
    TextField,
    EditButton,
    TextInput
} from 'react-admin';

import Type from '@material-ui/icons/VoiceChat';
export const TypeIcon = Type;

export const TypeList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton basePath="/event_types" />
        </Datagrid>
    </List>
);

const TypeTitle = ({ record }) => {
    return <span>Place {record ? `"${record.name}"` : ''}</span>;
};

export const TypeEdit = (props) => (
    <Edit title={<TypeTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);

export const TypeCreate = (props) => (
    <Create title="Create a Event Type" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]}/>
        </SimpleForm>
    </Create>
);