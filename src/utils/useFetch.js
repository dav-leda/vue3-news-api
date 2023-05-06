
import { reactive } from 'vue'



export default {

  data: null,
  error: null,
  loading: true,
  url: import.meta.env.VITE_NEWS_API_GH,


  async getData() {

    const controller = new AbortController()
    const { signal } = controller

    try {
      
      // Si el delay del fetch es mayor al timeout el fetch es cancelado
      setTimeout(() => controller.abort(), 5000)
   
      await delay(500) // delay artificial testear el spinner
      
      // Para que funcione el controller el segundo param del fetch
      // debe ser el objeto signal (AbortSignal)
      const res = await fetch(this.url, { signal })
      this.data = await res.json()
      
    } catch (err) { 
      this.error = 'Error de conexión!'
      console.log(err)
      
    } finally {
      this.loading = false
    }
  }
}



/**
 * @param {number} ms
 * @returns {Promise}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
