
<template>

  <h1>Tech News</h1>
  
  <div class="cards">

    <div v-if="loading" class="spinner"></div>

    <ErrorMessage v-if="error" :error="error"/>

    <NewsCard v-else
      v-for="(article, index) in articles" :key="index"
      :article="article"
    />

  </div>
</template>

<script>

import useFetch from './utils/useFetch'

import NewsCard from './components/NewsCard.vue'
import ErrorMessage from './components/ErrorMessage.vue'

export default {

  components: {
    NewsCard, ErrorMessage
  },

  data: () => ({ 
    useFetch
  }),

  async created() {
    await this.useFetch.getData()
    console.log('secret', import.meta.env.VITE_SECRET)
  },

  computed: {
    articles() {
      return this.useFetch.data?.articles
    },
    error() {
      return this.useFetch.error
    },
    loading() {
      return this.useFetch.loading
    }
  }
}

</script>

<style scoped>

h1 {
  margin: 2rem auto;
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 2rem auto;
}

.spinner {
  width: 5rem;
  height: 5rem;
  border: 15px solid #a89be6;
  border-top: 15px solid #2c2063;
  border-radius: 100%;
  margin: 10rem auto auto auto;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}


</style>
