import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import '../styles/topbar.less'

class Topbar extends Component {
  render () {
    return (
      <View className="top-wrap">
        <View className="left-icons">
          <Image className="icon" src={require('../../assets/img/left.png')}/>
        </View>
        <View className="right-icons">
          <Image className="icon" src={require('../../assets/img/search.png')}/>
          <Image className="icon" src={require('../../assets/img/collect.png')}/>
          <Image className="icon" src={require('../../assets/img/tuan.png')}/>
          <Image className="icon" src={require('../../assets/img/lue.png')}/>
        </View>
      </View>
    )
  }
}

export default Topbar