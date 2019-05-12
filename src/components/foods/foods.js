import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import SideBar from './sidebar'
import FoodList from './foodlist'

import '../styles/foods.less'

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
      ],
      totalFoodList: [],
      currentFoodList: []
    }
  }

  componentDidMount () {
    this.onchangeNavList(1)
  }

  hanldeTabs(current) {
    this.setState({ current })
  }

  onchangeNavList(id) {
    const { totalFoodList } = this.state
    const haveFood = totalFoodList.some(e => e.pid === id)
    if (haveFood) {
      this.setState({
        currentFoodList: totalFoodList.filter(e => e.pid === id)
      })
    } else {
      const mockFood = this.mockFoodList(id)
      this.setState({
        totalFoodList: [...totalFoodList, ...mockFood],
        currentFoodList: mockFood
      })
    }
  }

  mockFoodList(id) {
    const randomIdx = Math.random() * 10 + 1 | 0
    const randomSale = Math.random() * 100 + 1 | 0
    return Array.from(Array(randomIdx), (_, i) => {
      const randomImg = Math.random() * 3 | 0
      return {
        pid: id,
        id: `${id}-${i}`,
        imgName: ['food', 'store'][randomImg],
        title: `分类-${id} 菜品-${i + randomIdx}`,
        price: randomIdx * 3,
        sale: randomSale,
        nums: 0
      }
    })
  }

  render () {
    const { tabList, current, currentFoodList } = this.state
    return (
      <View className="foods-wrap">
        <AtTabs current={current} tabList={tabList} onClick={this.hanldeTabs.bind(this)}>
          <AtTabsPane current={this.state.current} index={0}>
            <View className="food-body">
              <SideBar onchangeNavList={this.onchangeNavList.bind(this)}></SideBar>
              <FoodList currentFoodList={currentFoodList}></FoodList>
            </View>
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