import React, {Component} from 'react';

import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';
import {getProducts} from '../data'
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Apple Iphone X',
      amount:'$999',
      image:'https://images.unsplash.com/photo-1524293772845-840102eccb82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'OnePlus Node',
      amount:'$699',
      image:'https://images.unsplash.com/photo-1527747471697-174c755627dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Samsung Galaxy 10',
      amount:'$799',
      image:'https://images.unsplash.com/photo-1565967281697-91bfffdb3f37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
    },
  ];

  const mapStateToProps = (state) => ({
    products: state.products.items
})

class Home extends Component {


    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.props.fetchProducts();
       
    }
     testM=(num)=>{
        this.setState({
            number:this.state.number.push(num)
        })
        this.testM(num+1)
    }

    addItemsToCart = (product) => {
        this.props.addToCart(product);
    }
    renderItem=({item})=>{
      
        return(
        <View style={{
            backgroundColor:'lightgrey',
            height:220,
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
            <TouchableOpacity style={{backgroundColor:'grey',marginVertical:10,padding:10}}
            onPress={()=>this.addItemsToCart(item)}>
                <Text>
                    Add to cart
                </Text>
            </TouchableOpacity>
        </View>
        )
    }
   
    render() {
        const prods = getProducts();
       
    
    return( 
      <View style={styles.container}>
           <TouchableOpacity style={{backgroundColor:'lightblue',marginVertical:10,padding:10,width:'80%',alignSelf:'center'}}
           onPress={()=>this.props.navigation.navigate('Cart')}>
                <Text style={{textAlign:'center'}}>
                   Visit Cart
                </Text>
            </TouchableOpacity>
           <FlatList
                data={prods}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
            />
      </View>
    )
    
  }
}
export default connect(mapStateToProps, {addToCart,fetchProducts})(Home);

const styles= StyleSheet.create({
    container:{
        flex:1,
        
    }
})