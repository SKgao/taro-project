import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import '../styles/sidebar.less'

class Sidebar extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      navActive: 1,
      navList: [
        {
          id: 1,
          name: '专场'
        }, {
          id: 2,
          name: '热销'
        }, {
          id: 3,
          name: '折扣'
        }, {
          id: 4,
          name: '主食'
        }, {
          id: 5,
          name: '热炒'
        }, {
          id: 6,
          name: '凉菜'
        }, {
          id: 7,
          name: '饮料'
        }
      ]
    }
  }

  navListClassName(isActived) {
    const actived = isActived ? 'actived' : ''
    return 'nav-text ' + actived
  }

  render () {
    const { navList, navActive } = this.state
    return (
      <View className="sidebar-wrap">
        {
          navList.map(item => {
            const { id, name } = item
            return <Text
              key={id}
              className={this.navListClassName(navActive === id)}>
              { name }
            </Text>
          })
        }
      </View>
    )
  }
}

export default Sidebar