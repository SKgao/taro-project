import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import Topbar from './topbar'
import Activity from './activity'

import '../styles/header.less'

class Header extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      store: {
        title: '川湘居',
        notice: '欢迎光临～',
        tags: ['川菜', '湘菜', '味道不错～']
      }
    }
  }

  render () {
    const { store } = this.state
    return (
      <View className="header">
        <Topbar></Topbar>
        <Image className="main-bg" src={require('../../assets/img/back.jpg')}/>
        <View className="stroe-wrap">
          <Image className="stroe-img" src={require('../../assets/img/store.jpg')}/>
          <View className="stroe-text">
            <Text className="stroe-title-text">{ store.title }</Text>
            <Text>{ store.notice }</Text>
            <View>
              {
                store.tags.map((item, index) => {
                  return <Text className="stroe-tags-text" key={index}>{ item }</Text>
                })
              }
            </View>
          </View>
        </View>

        <Activity></Activity>
      </View>
    )
  }
}

export default Header