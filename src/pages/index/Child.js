import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import propsType from 'prop-types'

class Child extends Component {

  handleButton = () => {
    this.props.onchangeProps()
  }

  render () {
    return (
      <View>
        <Button onClick={this.handleButton}>change child props</Button>
        <Text>child name is: {this.props.childName}</Text>
      </View>
    )
  }
}

Child.defaultProps = {
  childName: 'this is child',
  onchangeProps: () => {}
}

Child.propsType = {
  childName: propsType.string.isRequired,
  onchangeProps: propsType.func
}

export default Child