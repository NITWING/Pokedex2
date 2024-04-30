const campoBusqueda = document.getElementById('pokemon-name-input')
const resultadoBusqueda = document.getElementById('pokemon')

campoBusqueda.addEventListener('keyup', function() {

    campoBusqueda.addEventListener('keyup', function() {
        const textoBusqueda = campoBusqueda.value.trim();
      
        if (textoBusqueda.length > 0) {
          resultadosBusqueda.style.display = 'block';
        } else {
          resultadosBusqueda.style.display = 'none';
        }
      });
      
})