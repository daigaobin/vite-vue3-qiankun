/*
 * @Author: daigb
 * @Date: 2023-06-29 17:00:51
 * @LastEditors: daigb
 * @LastEditTime: 2023-06-29 17:01:17
 * @FilePath: \vite\main\src\utils\qiankun.js
 * @Description: 
 */

import config from '@/config'
import { registerMicroApps } from 'qiankun'

const { subApps } = config

export function registerApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        app => {
          console.log('before load', app)
        }
      ],
      beforeMount: [
        app => {
          console.log('before mount', app)
        }
      ],
      afterUnmount: [
        app => {
          console.log('before unmount', app)
        }
      ]
    })
  } catch (err) {
    console.log(err)
  }
}
