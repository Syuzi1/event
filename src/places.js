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

import Place from '@material-ui/icons/Place';
export const PlaceIcon = Place;

export const PlaceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="address" />
            <TextField source="phone" />
            <EditButton basePath="/places" />
        </Datagrid>
    </List>
);

const PlaceTitle = ({ record }) => {
    return <span>Place {record ? `"${record.name}"` : ''}</span>;
};

export const PlaceEdit = (props) => (
    <Edit title={<PlaceTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]}/>
            <TextInput source="address" multiline />
            <TextInput source="phone"/>
        </SimpleForm>
    </Edit>
);

export const PlaceCreate = (props) => (
    <Create title="Create a Place" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]}/>
            <TextInput source="address" multiline />
            <TextInput source="phone"/>
        </SimpleForm>
    </Create>
);