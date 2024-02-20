// Cuando la pagina carga, se sube el contenido y se aplican estilos
document.addEventListener("DOMContentLoaded", function() {
    // Cargar el título
    var titulo = "Solo Leveling";
    document.querySelector("header h1").innerText = titulo;

    // Cargar el contenido principal
    var contenidoPrincipal = `
        <h2>¿Quien es Sung Jin-Woo?</h2>
        <p>
            Sung Jinwoo (성진우) es el protagonista principal de Solo Leveling.
            Inicialmente, era un cazador de rango E, conocido por su debilidad.
            Sin embargo, su vida cambió cuando fue seleccionado como el Jugador
            del Sistema. Esta elección le otorgó la habilidad única de crecer en
            fuerza sin restricciones
        </p>
        <h3>Descripción y Biografía:</h3>
        <p>
            En resumen, Sung Jinwoo es un personaje complejo que pasó de ser un
            cazador débil a convertirse en una fuerza imparable en la lucha
            contra seres sobrenaturales. Su historia en Solo Leveling es
            emocionante y llena de giros inesperados.
        </p>
    `;
    document.querySelector("main article").innerHTML = contenidoPrincipal;

    // Cargar el contenido secundario
    var contenidoSecundario = `
        <h2>¿Que es "Solo Leveling"?</h2>
        <p>
            "Solo Leveling" es un emocionante manhwa de acción y fantasía
            escrito por Chu-Gong. La historia sigue a Sung Jin-Woo, un cazador
            de rango E que se encuentra atrapado en una mazmorra junto con otros
            cazadores. Sin embargo, su vida da un giro inesperado cuando
            descubre que tiene la habilidad única de subir de nivel y
            convertirse en un cazador de élite. A medida que avanza en las
            mazmorras, enfrenta desafíos, monstruos y secretos oscuros. La trama
            está llena de giros emocionantes y personajes intrigantes.
        </p>
    `;
    document.querySelector("aside section").innerHTML = contenidoSecundario;

    // sección de Pokémon favorito
    var seccionPokemon = document.createElement("section");

    // título
    var tituloPokemon = document.createElement("h3");
    tituloPokemon.textContent = "Mi Pokémon Favorito: Pikachu";

    // descripción
    var descripcionPokemon = document.createElement("p");
    descripcionPokemon.textContent = "Pikachu es mi Pokémon favorito porque es el clásico y más icónico de la serie. Además, me parece adorable.";

    // imagen
    var imagenPokemon = document.createElement("img");
    imagenPokemon.src = "img/pikachu.jpg";
    imagenPokemon.alt = "Imagen de Pikachu";
    imagenPokemon.style.display = "block";
    imagenPokemon.style.margin = "auto";
    imagenPokemon.style.width = "auto";
    imagenPokemon.style.height = "100px"; 

    // Agregar elementos a la sección
    seccionPokemon.appendChild(tituloPokemon);
    seccionPokemon.appendChild(descripcionPokemon);
    seccionPokemon.appendChild(imagenPokemon);

    // Obtener el aside y agregar la sección del Pokémon favorito
    var aside = document.querySelector("aside");
    aside.appendChild(seccionPokemon);

    // Estilos personalizados para la sección del Pokémon favorito
    seccionPokemon.style.backgroundColor = "#f8f8f8"; // Fondo gris claro
    seccionPokemon.style.padding = "20px"; // Añadir espacio alrededor del contenido

    // Crear la lista desde cero - Ejemplo de insertBefore
    var listaDescripcion = document.createElement("ul");
    var aspectoFisico = document.createElement("li");
    aspectoFisico.textContent = "Aspecto físico: Jinwoo es un joven apuesto y musculoso con ojos grises, cabello negro y rasgos faciales afilados. Sus ojos brillan de color púrpura cuando utiliza sus poderes o está agitado. Suele vestir de colores oscuros, especialmente negro.";
    var personalidad = document.createElement("li");
    personalidad.textContent = "Personalidad: A pesar de ser el cazador más fuerte del mundo, Jinwoo no es arrogante. Es educado y tranquilo en persona. Se preocupa profundamente por su familia y tiene una fuerte sed de poder. Es capaz de actos despiadados en la batalla, pero también muestra compasión y valentía al salvar a otros cazadores.";
    var poderesHabilidades = document.createElement("li");
    poderesHabilidades.textContent = "Poderes y habilidades: Como el segundo Monarca de las Sombras, Jinwoo es el cazador más fuerte del mundo. Puede derrotar a enemigos indiscriminadamente y proteger a su familia sin piedad. Su habilidad para crecer en fuerza lo convierte en una figura poderosa y temida.";
    listaDescripcion.appendChild(aspectoFisico);
    listaDescripcion.appendChild(personalidad);
    listaDescripcion.appendChild(poderesHabilidades);

    // Obtener el elemento "Descripción y Biografía"
    var descripcionBiografia = document.querySelector("main article h3");

    // Insertar la lista después del elemento "Descripción y Biografía"
    descripcionBiografia.parentNode.insertBefore(listaDescripcion, descripcionBiografia.nextSibling);




    // Crear la imagen - Ejemplo de uso de appendChild
    var nuevaImagen = document.createElement("img");
    nuevaImagen.src = "img/solo_leveling_portada.jpeg";
    nuevaImagen.alt = "Portada del manga Solo Leveling";
    nuevaImagen.style.display = "block"; // Hacer que la imagen sea un elemento de bloque
    nuevaImagen.style.margin = "auto"; // Centrar horizontalmente


    // Agregar la imagen al artículo en el contenido principal
    var contenidoPrincipal = document.querySelector("main article");
    contenidoPrincipal.appendChild(nuevaImagen);

    // Agregar estilos personalizados
    var header = document.querySelector("header");
    header.style.backgroundColor = "#333";
    header.style.color = "#fff";
    header.style.padding = "20px";

    var aside = document.querySelector("aside");
    aside.style.backgroundColor = "#d3d3d3"; // Fondo gris más oscuro


        var footer = document.querySelector("footer");
        footer.append("Copyright "); //Ejemplo de uso de append
        var span = document.createElement("span");
        span.textContent = "© 2024 Jefferson Esperanza - SMSS132422";
        span.style.color = "#fff"; // Color del texto blanco
        footer.appendChild(span);
        footer.style.backgroundColor = "#666"; // Fondo gris oscuro
        footer.style.color = "#fff"; // Texto blanco
        footer.style.padding = "20px"; // Añadir espacio alrededor del contenido

    var main = document.querySelector("main");
    main.style.display = "flex";
    main.style.flexDirection = "row";
    main.style.backgroundColor = "#f0f0f0"; // Fondo gris claro
});