
<template>
  <div class="error">
    <h3>{{ error }}</h3>
    <br>
    <slot/>
  </div>
</template>

<script>

export default {

  props: {
    // El tipo de dato debe ser Error, no Object
    error: Error
  }
}


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
