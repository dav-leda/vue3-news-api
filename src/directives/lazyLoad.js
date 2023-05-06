export default {
  // En Vue 3 usar mounted, no inserted
  mounted: img => {

    // IntersectionObserver toma 2 params: un callback y el margen de interseccion
    const observer = new IntersectionObserver(handleIntersect, 
      // El margen superior debe ser 200px para activarlo cuando el scroll es hacia arriba
      { rootMargin: "200px 0px 0px 0px"} 
    )

    observer.observe(img)
    
    function handleIntersect(images) {
      images.forEach(image => image.isIntersecting && loadImage(image.target))
    }
    
    function loadImage(image) {
      // Al cargar la imagen pasar la opacity de 0 a 1
      image.onload = () => image.style.opacity = 1
      // Una vez cargada la imagen pasar la url de data-src a src
      image.src = img.dataset.src
      image.alt = img.dataset.alt
      // Desconectar el observer para evitar memory leaks
      observer.disconnect()
    }
  }
}
