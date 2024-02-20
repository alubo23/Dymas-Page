window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");

  if (window.scrollY > 100) {
      navbar.classList.add("solid");
  } else {
      navbar.classList.remove("solid");
  }
});


document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.getElementById('video-container');
  
    // Lista de videos de YouTube con detalles adicionales
    const videoList = [
      {
        title: 'Fantasía',
        videoId: '7Dny4oXgTpo',
        releaseDate: '01 de diciembre de 2023',
        artists: 'Dymas, Allek Sey, J Blaster, Sophia',
        genere: 'Kizoomba, Dancehall',
      },
      {
        title: 'Tal Vez',
        videoId: 'YD0I5Q6JGvw',
        releaseDate: '17 de agosto 2022',
        artists: 'Dymas, Allek Sey, Sophia ',
        genere: 'Reggae',
      },
      {
        title: 'Parchar',
        videoId: 'QesdyrEZFEU',
        releaseDate: '11 de marzo de 2021',
        artists: 'Dymas, Dyzi, David Franco',
        genere: 'Reggaeton',
      },
      // Agrega más proyectos según sea necesario
    ];
  
    // Crea tarjetas de video con detalles
    videoList.forEach(video => {
      const card = document.createElement('div');
      card.className = 'card';
  
      const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
  
      card.innerHTML = `
        <img src="${thumbnailUrl}" alt="${video.title}">
        <div class="card-details">
          <h3>${video.title}</h3>
          <p><strong>Fecha de Lanzamiento:</strong> ${video.releaseDate}</p>
          <p><strong>Artistas:</strong> ${video.artists}</p>
          <p><strong>Género:</strong> ${video.genere}</p>
          <a onclick="loadVideo('${video.videoId}')">Ver Video</a>
        </div>
      `;
  
      videoContainer.appendChild(card);
    });
  
    // Función para cargar el video en el contenedor
    window.loadVideo = function (videoId) {
      videoContainer.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `;
    };
  });
  