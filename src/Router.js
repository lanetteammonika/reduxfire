import React from 'react';
import { Scene,Router,Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

const RouterComponent = () => {
    return(
        <Router sceneStyle={{paddingTop:65}}>
            <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key="main">
            <Scene key="employeeList"
                   onRight={() => Actions.employeeCreate()}
                   rightTitle="Add"
                   component={EmployeeList} title="Employees" initial  />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create" />
                <Scene key="employeeEdit" component={EmployeeEdit} title="Employee Edit" />
            </Scene>
        </Router>
    );
}
export default RouterComponent