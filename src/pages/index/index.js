import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

// import Child from './Child'
import Header from '../../components/header/header'
import Foods from '../../components/foods/foods'
import Footer from '../../components/footer/footer'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name: 'Zoro',
    childName: 'Zoro children'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleButton = () => {
    this.setState({
      name: 'Zzz...'
    })
  }

  changeChildProps = () => {
    console.log('child compents clicked callback')
    this.setState({
      childName: 'child changed'
    })
  }

  render () {
    return (
      <View className='index'>
        {/* <Button onClick={this.handleButton}>clike me!</Button>
        <Text>Name: {this.state.name}</Text>
        <Child
          childName={this.state.childName}
          onchangeProps={this.changeChildProps.bind(this)}/> */}
        <Header></Header>
        <Foods></Foods>
        <Footer></Footer>
      </View>
    )
  }
}
