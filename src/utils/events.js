import { emit } from "cluster";

class Event  {
  constructor() {
    this.events = {}
  }

  on(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName].push(cb)
    } else {
      this.events[eventName] = [cb]
    }
  }

  emit(eventName, param) {
    if (this.events[eventName]) {
      this.events[eventName].map(cb => {
        cb(param)
      })
    }
  }
}

export default Event