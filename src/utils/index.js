import Taro from '@tarojs/taro'
import Event from './events'

const myEvent = new Event()
const foodkey  = 'FOOD_KEY'

export const getFoodNums = (food) => {
  const stroe = Taro.getStorageSync(foodkey) || {}
  return stroe[food.id] && stroe[food.id].nums || 0
}

export const setFoodNums = (food, nums, type, cb) => {
  const stroe = Taro.getStorageSync(foodkey) || {}
  if (type === 'cut') {
    if (nums === 1) {
      delete stroe[food.id]
    } else {
      stroe[food.id].nums--
    }
  } else if (type === 'add') {
    if (stroe[food.id]) {
      stroe[food.id].nums++
    } else {
      stroe[food.id] = {
        ...food,
        nums: 1
      }
    }
  }
  Taro.setStorageSync(foodkey, stroe)
  cb && cb()
}

export const getAllFoods = () => {
  const stroe = Taro.getStorageSync(foodkey) || {}
  let totalPrice = 0
  let totalNums = 0
  Object.keys(stroe).forEach(key => {
    totalPrice += stroe[key].nums * stroe[key].price
    totalNums += stroe[key].nums
  })
  return { totalPrice, totalNums }
}

export const getEvent = () => myEvent