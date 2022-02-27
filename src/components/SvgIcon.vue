<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    :class="className"
  ></div>
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="innerIconName"></use>
  </svg>
</template>
<script setup>
import { defineProps, computed } from 'vue'
import { isExternalIcon } from '@/utils/validate.js'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})

const isExternal = computed(() => isExternalIcon(props.icon))

// 外部图标样式
const styleExternalIcon = computed(() => ({
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
})).value

// 内部图标样式
const innerIconName = computed(() => `#icon-${props.icon}`).value
</script>
<style lang='scss' scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
.svg-external-icon {
  background-color: currentColor;
  -webkit-mask-size: cover !important;
}
</style>
