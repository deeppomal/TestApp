import React, {Component} from 'react';

import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    ToastAndroid
} from "react-native";
import { connect } from 'react-redux';

class Cart extends Component {


    constructor(props){
        super(props)
        this.state={
            prodList:[]
        }
    }
    renderItem=({item})=>{
        
        return(
        <View style={{
            backgroundColor:'lightgrey',
            height:200,
            width:'90%',
            alignSelf:'center',
            marginVertical:20,
            alignItems:'center'
        }}>
            <Image source={{uri:item.image}} style={{height:120,width:120}} />
            <Text>
                {item.title}
            </Text>
            <Text>
                {item.amount}
            </Text>
            <Text>
                {item.quantity}
            </Text>
           
        </View>
        )
    }
    componentDidMount(){
        
      
       
    }
    
    

    render() {
        const { cartItems, cartTotal } = this.props;
    return( 
      <View style={styles.container}>
          <FlatList
                data={cartItems}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />
        <TouchableOpacity style={{
            backgroundColor:'lightblue',
            width:'80%',
            padding:12,
            position:'absolute',
            bottom:20,
            alignSelf:'center'
        }}
        onPress={()=>
            cartItems.length>0?
                ToastAndroid.showWithGravity(
            "Your order is placed",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
            ):
            ToastAndroid.showWithGravity(
                "Please add items first",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
                )
            }>
            <Text style={{color:'#fff',textAlign:'center'}}>
                Place Order
            </Text>
        </TouchableOpacity>
      </View>
    )
    
  }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total
});
export default connect(
    mapStateToProps
)(Cart);

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    }
})