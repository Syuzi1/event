import * as React from "react";
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    required,
    DateField,
    TextField,
    EditButton,
    TextInput,
    DateTimeInput,
    BooleanInput,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    ImageInput,
    ImageField
} from 'react-admin';

import FavoriteIcon from '@material-ui/icons/Favorite';
import Event from '@material-ui/icons/Event';
export const EventIcon = Event;

export const EventList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField label="Type" source="type_id" reference="event_types">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Place" source="place_id" reference="places">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="price" />
            <DateField source="date" />
            <EditButton basePath="/events" />
        </Datagrid>
    </List>
);

const EventTitle = ({ record }) => {
    return <span>Event {record ? `"${record.title}"` : ''}</span>;
};

export const EventEdit = (props) => (
    <Edit title={<EventTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" validate={[required()]}/>
            <BooleanInput
                source="isActive"
                options={{
                    checkedIcon: <FavoriteIcon />,
                }}
            />
            <BooleanInput
                source="isShownOnSlider"
                options={{
                    checkedIcon: <FavoriteIcon />,
                }}
            />
            <ImageInput source="image" label="Main Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput multiple source="images" label="Images" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ReferenceInput label="Place" source="place_id" reference="places">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Event Type" source="type_id" reference="event_types">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="price" />
            <DateTimeInput label="Date" source="date" type="datetime-local" />
            <TextInput source="description" multiline/>
        </SimpleForm>
    </Edit>
);

export const EventCreate = (props) => (
    <Create title="Create a Event" {...props}>
        <SimpleForm>
            <TextInput source="title" validate={[required()]}/>
            <BooleanInput
                source="isActive"
                options={{
                    checkedIcon: <FavoriteIcon />,
                }}
            />
            <BooleanInput
                source="isShownOnSlider"
                options={{
                    checkedIcon: <FavoriteIcon />,
                }}
            />
            <ImageInput source="image" label="Main Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ImageInput multiple source="images" label="Images" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
            <ReferenceInput label="Place" source="place_id" reference="places">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="Event Type" source="type_id" reference="event_types">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="price" />
            <DateTimeInput label="Date" source="date" type="datetime-local" />
            <TextInput source="description" multiline/>
        </SimpleForm>
    </Create>
);