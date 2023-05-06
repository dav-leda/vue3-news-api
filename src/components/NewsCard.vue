
<template>
  <article class="card">

    <img 
      v-lazy
      :data-src="article.urlToImage" 
      :data-alt="title"
    />

    <header>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </header>

    <footer>
      <a :href="article.url" target="_blank">
        Ver artículo
      </a>
    </footer>

  </article>
</template>

<script>

export default {

  components: {
  },

  props: {
    article: {
      title: String,
      description: String,
      urlToImage: String,
      url: String
    }
  },

  computed: {

    title() {
      return this.article?.title?.substring(0, 100) + '...'
    },

    description() {
      return this.article?.description?.substring(0, 120) + '...'
    }
  }

}

</script>

<style scoped>

.card {
  position: relative;
  margin: 2rem;
  max-width: 20rem;
  height: 30rem;
  text-align: left;
  border-radius: 1rem;
  background-color: #eee;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
}

article.card img {
  /** Al usar v-lazy NO OLVIDAR
  setear la opacity en 0 en el elemento IMG 
  y la transition para la opacity */
  opacity: 0;
  transition: opacity 0.5s;
  border-radius: 1rem 1rem 0 0;
  width: 100%;
}


article.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  background-color: #fee;
}


article.card header {
  margin: 2rem;
}

article.card h2 {
  font-size: 1.2rem;
}

article.card p {
  font-size: 0.8rem;
}

article.card footer {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 2rem;
}

article.card a {
  font-family: Helvertica, sans-serif;
  text-decoration: none;
  color: white;
  background-color: navy;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  transition: opacity 0.2s ease-in-out;
}

article.card a:hover {
  opacity: 0.8;
}



</style>
