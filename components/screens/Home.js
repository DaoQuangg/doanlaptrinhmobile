import { View,StatusBar,ScrollView,TouchableOpacity,Text, TextInput,Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { Items} from '../database/Database';


const Home = ({navigation}) => {
  // export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);
  
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getDataFromDB()})
  //     return unsubscribe;
  // }, [navigation])
  useEffect(() => {
      getDataFromDB()
  }, [])
    
    const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
      for (let index = 0; index < Items.length; index++) {
        if (Items[index].category === "product"){
              productList.push(Items[index]);
            } else if (Items[index].category === 'accessory') {
              accessoryList.push(Items[index]);
            }
        }
      setProducts(productList)  ;
      setAccessory(accessoryList);
    }
    
  
  ///////////////////////////////////////////////////////////////////////////
  const ProductCard =({data})=>{
    return(
      <TouchableOpacity 
      onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
      style={{
        width: '48%',
        marginVertical: 14,}}>
        <View
        style={{
          width: '100%',
          height: 150,
          borderRadius: 10,
          backgroundColor: '#F0F0F3',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
        }}>
          
          <Image source={data.productImage} 
          style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}/>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.productName}
        </Text>
        {data.category=='accessory'? null : null}
        <Text>&#8377;{data.productPrice}</Text>


      </TouchableOpacity>
    )
  }
  
  return (
    <View 
    style={{
      width:'100%',
      height:'100%',
      backgroundColor:'#ffffff'
    }}>
      <StatusBar barStyle="light-content" backgroundColor="blue" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View
          style={{
            width:'100%',
            flexDirection:'row',
            
            padding:16,
          }}>
            {/* <TouchableOpacity>
              <Entypo name="shopping-bag" 
              style={{
                fontSize: 18,
                color: 'B9B9B9',
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor:'F0F0F3',
                }} />
            </TouchableOpacity> */}
            <View
            style={{
              width:'80%',
              flexDirection:'row',
              height:50,
              alignItems:'center',
              marginHorizontal:10,
              paddingHorizontal:10,
              borderRadius:10,
              backgroundColor:'#F5F6FB',
            }}>
             <Image source={require('../database/icons/search.png')}
            style={{
              width:20,
              height:20,
              tintColor:'gray',
            }} />
            <TextInput
              style={{
                marginLeft:12,
                // fontFamily: "Roboto-Regular", 
                fontSize: 22,
                lineHeight: 22,
              }}
              placeholderTextColor="gray"
              placeholder="search products"
            />
            </View>

            <View
            style={{
              width:'13%',
              justifyContent:'flex-end',
            }}>
            <TouchableOpacity>
              <FontAwesome name="shopping-cart" 
              style={{
                fontSize: 18,
                color: 'B9B9B9',
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'F0F0F3',}} />
            </TouchableOpacity>     
            </View>  
        </View>


        

        <View
        style={{
          marginBottom:10,
          bottom:16,
        }}>
          <Text
          style={{
            fontSize: 26,
            color:'black',
            fontWeight: '500',
            letterSpacing: 1,
            marginBottom: 10,
            }}>
            Quang Huy Shop & Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Watch shop on Ha Noi.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Sản phẩm bán chạy
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'blue',
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>

        </View>

        <View 
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
          {products.map(data=>{
              return <ProductCard data={data} key={data.id}/>;
            })}
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Sản phẩm khác
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'blue',
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>


      </ScrollView>
  </View>
  )
}

export default Home


