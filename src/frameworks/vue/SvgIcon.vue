<template>
  <svg-icon
    :icon="icon"
    :size="size"
    :color="color"
    :viewBox="viewBox"
    v-bind="$attrs"
  ></svg-icon>
</template>

<script>
import '../../svg-icon.js'; // Import the Web Component

export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 24,
    },
    color: {
      type: String,
      default: 'black',
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
  },
};
</script>
