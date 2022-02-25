import * as React from "react";
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {EventCreate, EventEdit, EventIcon, EventList} from "./events";
import {UserCreate, UserEdit, UserIcon, UserList} from "./users";
import {PlaceCreate, PlaceEdit, PlaceIcon, PlaceList} from "./places";
import {TypeCreate, TypeEdit, TypeIcon, TypeList} from "./types";

const dataProvider = jsonServerProvider('http://localhost:3000');

const App = () => (
        <Admin dataProvider={dataProvider}>
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
            <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} icon={EventIcon}/>
            <Resource name="places" list={PlaceList} edit={PlaceEdit} create={PlaceCreate} icon={PlaceIcon}/>
            <Resource name="event_types" list={TypeList} edit={TypeEdit} create={TypeCreate} icon={TypeIcon}/>
        </Admin>
    );

export default App;

//
// import React from "react";
// import { Routes ,Route } from 'react-router-dom';
// import {Switch} from "react-router-dom";
// import Admin from "./components/Admin/App";
//
// function App() {
//     return (
//         <Switch>
//             {/*<Route exact path='/' component={Customer} />*/}
//             <Route path='/admin' element={<Admin/>} />
//         </Switch>
//     );
// }
//
// export default App;
