import * as React from 'react';
import { Admin, Resource } from 'react-admin';

import {
  PostList,
  // PostEdit,
} from "./posts-CRUD";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  // FirebaseRealTimeSaga
} from 'react-admin-firebase';
import {
  firebaseConfig,
} from '../../config/firebase.config';

const options = {};

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const AdminDashboard: React.FC = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="posts"
        list={PostList}
        // edit={PostEdit}
      />
    </Admin>
  );
}

export default AdminDashboard;