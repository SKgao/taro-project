import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import propsType from 'prop-types'
import { getFoodNums, setFoodNums, getEvent } from '../../utils'

import '../styles/addcut.less'

const myEvent = getEvent()

class AddCut extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      nums: 0
    }
  }

  componentDidMount() {
    this.setState({ nums: getFoodNums(this.props.food) })

    myEvent.on('changeNav', () => {
      this.setState({ nums: getFoodNums(this.props.food) })
    })
  }

  CutFoodNums() {
    const { nums } = this.state
    if (nums) {
      setFoodNums(this.props.food, nums, 'cut', () => {
        this.setState({
          nums: getFoodNums(this.props.food)
        })
        myEvent.emit('arrOrcutFood')
      })
    } else {
      console.log('菜品数量已经为0')
    }
  }

  AddFoodNums() {
    const { nums } = this.state
    setFoodNums(this.props.food, nums, 'add', () => {
      this.setState({
        nums: getFoodNums(this.props.food)
      })
      myEvent.emit('arrOrcutFood')
    })
  }

  render () {
    return (
      <View className="add-cut">
        <Image
          className="action-icon"
          src={require('../../assets/img/cut.png')}
          onClick={this.CutFoodNums.bind(this)}/>
        <Text className="food-num">{ this.state.nums }</Text>
        <Image
          className="action-icon"
          src={require('../../assets/img/add.png')}
          onClick={this.AddFoodNums.bind(this)}/>
      </View>
    )
  }
}

AddCut.defaultProps = {
  food: {}
}

AddCut.propsType = {
  food: propsType.object.isRequired
}

export default AddCut