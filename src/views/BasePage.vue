<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import Logic from './logic'

const logic = new Logic()
</script>

<template>
  <HelloWorld msg="You did it!" />
  <button @click="logic.changeColor">change color</button>
</template>
