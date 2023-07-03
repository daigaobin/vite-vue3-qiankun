<!--
 * @Author: daigb
 * @Date: 2023-06-29 17:01:30
 * @LastEditors: daigb
 * @LastEditTime: 2023-06-29 17:21:50
 * @FilePath: \vite\main\src\components\SubContainer.vue
 * @Description: 
-->
<template>
  <div id="sub-container"></div>
</template>

<script>
import { start } from 'qiankun'
import { registerApps } from '@/utils/qiankun'
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      registerApps()
      start({
        sandbox: {
          experimentalStyleIsolation: true // 样式隔离
        }
      })
    }
  }
}
</script>
