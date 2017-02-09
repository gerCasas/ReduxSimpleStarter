//para importar react al archivo, el return <div>Hola!</div>; es JSX y en realidad regresa JS con referencia al modulo de react.
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// como estamos importando un componente que nosostros creamos entonces tenemos que especificar toda la ruta se este componente. A diferencia de los imports de arriba, ya que los imports de arriba son package que instalamos con npm.
import SearchBar from './components/search_bar';

// api key para hacer request a youtube
const API_KEY = 'AIzaSyAPBW29xL-BfL8lHca1yUspMwJBlXvHOxE';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

//crear un nuevo componente. produce HTML
//se puso const en vez de var por que no se piensa cambiar el valors de App
// const App = function(){ y const App = () => {  es lo mismo
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put it on the page (in the DOM)
//para mandar App como instancia en vez de una clase con encapsulamos con < />
// '.container' se refiere a <div class="container"></div> en body del archivo index.html en la raiz del proyecto.
ReactDOM.render(<App />, document.querySelector('.container'));
