const cargarPeliculas = async ()=>{
    try{const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4bfb455e77dc99ab8360fb3b90c12337&language=es-mx');
    console.log(respuesta);
    if(respuesta.status ===200){
    const datos =  await respuesta.json();
    let peliculas = "";
    datos.results.forEach(pelicula => {
        peliculas += `
        <div class="pelis-div">
            <h3>${pelicula.title}</h3>
            <img src="
            https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="img-fluid img-select">
        </div>
      `
    });
    document.getElementById('contenedor').innerHTML=peliculas;
    }else if(respuesta.status ===401){
        console.log("Pusiste mal la llave")
    }else if(respuesta.status ===404){
        console.log("La pelicula no existe")
    }else{
        console.log("Error desconocido")
    }
} catch(error){
    console.log(error);
}
}


cargarPeliculas();