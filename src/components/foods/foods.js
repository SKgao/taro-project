import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Sidebar from './sidebar'

// import '../styles/foods.less'

class Foods extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [
        {
          title: '点菜'
        }, {
          title: '评价'
        }, {
          title: '商家'
        }
      ]
    }
  }

  hanldeTabs(current) {
    this.setState({ current })
  }

  render () {
    const { tabList, current } = this.state
    return (
      <View className="foods-wrap">
        <AtTabs current={current} tabList={tabList} onClick={this.hanldeTabs.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <Sidebar></Sidebar>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            评价
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            商家
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Foods