import React, { Component } from 'react'
import config from './config.json'
import styles from './greeter.css' //导入

class Greeter extends Component {
  render() {
    // 使用cssModule添加类名的方法
    return <div className={styles.root}>{config.greetText}</div>
  }
}

export default Greeter
