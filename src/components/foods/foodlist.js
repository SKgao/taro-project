import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import propsType from 'prop-types'
import AddCut from '../addcut/addcut'

import '../styles/foodlist.less'

class FoodList extends Component {
  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  render () {
    const { currentFoodList } = this.props
    return (
      <View className="food-wrap">
        <Text className="food-list-title">商品列表</Text>
        <View className="food-list">
          {
            currentFoodList.map(item => {
              return (
                <View className="food-item" key={item.id}>
                  <Image
                    className="food-item-img"
                    src={
                      item.imgName === 'food' ?
                      require('../../assets/img/food.jpg') :
                      require('../../assets/img/store.jpg')
                    }/>
                  <View className="food-item-info">
                    <Text>{ item.title }</Text>
                    <Text>月售： { item.sale }</Text>
                    <Text className="food-price">￥{ item.price }</Text>
                    <AddCut food={item}></AddCut>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

FoodList.defaultProps = {
  currentFoodList: []
}

FoodList.propsType = {
  currentFoodList: propsType.array
}

export default FoodList