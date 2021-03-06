import React, {Component} from 'react';
import {Text} from 'react-native'
import {Card,CardSection,Input,Buttons,Spinner} from './common';
import {connect} from 'react-redux';
import { emailChanged,passwordChanged,loginUser } from  '../actions';

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email,password} =this.props;
        this.props.loginUser({email,password});
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return (
            <Buttons onPress={this.onButtonPress.bind(this)}>
                Log In
            </Buttons>
        );
    }

    render(){
        return(
          <Card>
              <CardSection>
                  <Input
                    label="Email"
                    placeholder="email@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                  />
              </CardSection>

              <CardSection>
                  <Input
                    label="Password"
                    placeholder="password"
                    secureTextEntry
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                  />
              </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
              <CardSection>
                  {this.renderButton()}
              </CardSection>

          </Card>
        );
    }
}

const styles={
    errorTextStyle:{
        fontSize:18,
        alignSelf:'center',
        color:'red'
    }
}

const mapStateToProps = state => {
    return {
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    };
}
export default connect(mapStateToProps,{ emailChanged,passwordChanged,loginUser })(LoginForm);