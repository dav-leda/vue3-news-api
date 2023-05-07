
<template>
  <div class="error">
    <h3>{{ error }}</h3>
    <br>
    <slot/>
  </div>
</template>

<script>

import { defineComponent } from 'vue' 

export default defineComponent({

  props: {
    error: String
  }
})


</script>

<style>

.error {
  margin: 2rem auto;
  background-color: rgb(203, 25, 25);
  color: snow;
  border-radius: 10px;
  padding: 1rem 2rem;
  text-align: center;
  width: 20rem;
}

</style>
