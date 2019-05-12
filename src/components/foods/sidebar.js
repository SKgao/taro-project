import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import propsType from 'prop-types'
import { getEvent } from '../../utils'

import '../styles/sidebar.less'

const myEvent = getEvent()

class SideBar extends Component {
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

  handleNavlist(navActive) {
    this.setState({ navActive }, () => {
      this.props.onchangeNavList(navActive)
    })
    myEvent.emit('changeNav')
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
              className={this.navListClassName(navActive === id)}
              onClick={this.handleNavlist.bind(this, id)}>
              { name }
            </Text>
          })
        }
      </View>
    )
  }
}

SideBar.defaultProps = {
  onchangeNavList: () => {}
}

SideBar.propsType = {
  onchangeNavList: propsType.func
}

export default SideBar