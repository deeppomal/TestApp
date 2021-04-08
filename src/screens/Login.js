import React, {Component} from 'react';

import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";



class Login extends Component {


    constructor(props){
        super(props)
        this.state={
            userText:'',
            passText:'',
            users :{
    
                "user1":{
                    "name":"deep",
                    "pass":"1234"
                },
                "user2":{
                    "name":"rahul",
                    "pass":"4567"
                }
            
            
        }
        }
    }

    componentDidMount(){
       
    }
     testM=(num)=>{
        this.setState({
            number:this.state.number.push(num)
        })
        this.testM(num+1)
    }
    processLogin=()=>{
       
        if(this.state.userText==this.state.users.user1.name && this.state.passText==this.state.users.user1.pass)
        {
            console.log('logged')
            this.props.navigation.navigate('Home')
        }
        else if(this.state.userText==this.state.users.user2.name && this.state.passText==this.state.users.user2.pass)
        {
            console.log('logged')
            this.props.navigation.navigate('Home')
        }
        else{
            console.log('Error')
        }
    }
    render() {
    
    
    return( 
      <View style={styles.container}>
        <TextInput placeholder={'Please enter user name'} placeholderTextColor='#000' style={{backgroundColor:'lightgrey',marginVertical:20,marginHorizontal:20}}
        value={this.state.userText} onChangeText={(val)=>this.setState({userText:val})}>

        </TextInput>
        <TextInput placeholder={'Please enter password'} placeholderTextColor='#000' style={{backgroundColor:'lightgrey',marginVertical:20,marginHorizontal:20}}
        value={this.state.passText} onChangeText={(val)=>this.setState({passText:val})}>

        </TextInput>
        <TouchableOpacity style={{
            backgroundColor:'grey',
            marginVertical:20,
            marginHorizontal:20,
            padding:20
        }}
        onPress={()=>this.processLogin()}>
            <Text style={{textAlign:'center'}}>
                Login
            </Text>
        </TouchableOpacity>
      </View>
    )
    
  }
}
export default Login;

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    }
})