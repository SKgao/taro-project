import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import '../styles/activity.less'

class Activity extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      activity: [
        {
          type: 'cut',
          info: [
            {
              total: 48,
              cut: 10
            }, {
              total: 68,
              cut: 20
            }, {
              total: 100,
              cut: 30
            }
          ]
        }
      ]
    }
  }

  getActivityType(type) {
    const map = {
      cut: '减',
      add: '加'
    }
    return map[type]
  }

  getActivityInfo(arr) {
    return arr.map(item => {
      return `满${item.total}减${item.cut}`
    }).join('；')
  }

  render () {
    const { activity: [firstItem] } = this.state
    return (
      <View className="activity-wrap">
        <Text className="activity-type">{ this.getActivityType(firstItem.type) }</Text>
        <Text className="activity-info">{ this.getActivityInfo(firstItem.info) }</Text>
        <Text className="activity-nums">{ firstItem.info.length }个活动</Text>
      </View>
    )
  }
}

export default Activity