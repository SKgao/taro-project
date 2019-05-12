import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { getAllFoods, getEvent } from '../../utils'

import '../styles/footer.less'

const myEvent = getEvent()

class Footer extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      totalNums: 1,
      totalPrice: 0,
      sendPrice: 3,
      minCost: 100,
      supportTake: true
    }
  }

  componentDidMount() {
    this.setState(getAllFoods())
    myEvent.on('arrOrcutFood', () => {
      this.setState(getAllFoods())
    })
  }

  render () {
    const { totalNums, sendPrice, supportTake, minCost, totalPrice } = this.state
    const imgName = totalNums ? 'foodstore' : 'emptystore'
    return (
      <View className="footer-wrap">
        <View className="footer-body">
          {
            totalNums && <Text className="food-num">{ totalNums }</Text>
          }
          <Image className="buy-icon" src={
            totalNums ?
            require('../../assets/img/foodstore.png') :
            require('../../assets/img/emptystore.png')
          }/>
          <View className="footer-info">
            {
              totalPrice ?
                <Text className="total-price">总金额￥{ totalPrice } | </Text> :
                <Text>另需配送费￥{ sendPrice } | </Text>
            }

            {
              supportTake && <Text>支持自取</Text>
            }
          </View>
          <View className="footer-submit">
            {
              totalPrice >= minCost ?
                <Text className="go-pay">去结算</Text> :
                <Text>满￥{ minCost }起送</Text>
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Footer