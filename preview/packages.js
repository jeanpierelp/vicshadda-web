(() => {
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }

  const whatsapp = '51997234429';
  const base = 'assets/packages/';
  const publicBase = 'https://jeanpierelp.github.io/vicshadda-web/preview/assets/packages/';
  const p = (category, title, subtitle, image, features, prices, note = '') =>
    ({ category, title, subtitle, image, features, prices, note });

  const categories = [
    ['infantiles', 'Paquetes infantiles', 'Desde un show rápido hasta animación con sonido, DJ y burbujas.'],
    ['completos', 'Shows completos y personajes', 'Bailarinas, muñecos, DJ y producciones de mayor formato.'],
    ['baby-shower', 'Baby shower y revelación', 'Dinámicas familiares, regalos, bailes, fotos y hora loca.'],
    ['adultos', 'Shows para adultos', 'Animación, baile, juegos, hora loca y hora chola para celebrar entre adultos.'],
    ['especiales', 'Colegios y fuera de Trujillo', 'Paquetes para instituciones, visitas sorpresa y eventos fuera de la ciudad.']
  ];

  const packages = [
    p('infantiles','Paquete Rápido','1 animadora carismática','photo_5008009138352622554_y.jpg',['Entrada cantando','Baile y hora loca','Piñata y cumpleaños','Sesión de fotos'],[['40 minutos','S/50']]),
    p('infantiles','Paquete Sonrisas','Básico · 1 animadora','photo_5008009138352622555_y.jpg',['Juegos educativos','Cantijuegos','Hora loca y piñata','Micrófono y luces'],[['1 hora','S/70'],['1 h 30 min','S/90'],['2 horas','S/120']]),
    p('infantiles','Paquete Diversión','Animadora y equipo de sonido','photo_5008009138352622556_y.jpg',['Juegos grupales','Títeres','Hora loca y piñata','Sonido incluido'],[['1 hora','S/110'],['1 h 30 min','S/130'],['2 horas','S/150']]),
    p('infantiles','Paquete Mundo Mágico','Animadora, DJ, sonido y burbujas','photo_5008009138352622557_y.jpg',['Burbujas gigantes','Juegos y cantijuegos','Hora loca','DJ y sonido'],[['1 hora','S/210'],['1 h 30 min','S/230'],['2 horas','S/250']]),
    p('infantiles','Paquete Animación Plus','Animadora temática de princesa y DJ','photo_5008009138352622558_y.jpg',['Entrada cantando','Juegos y títeres','Hora loca y piñata','DJ incluido'],[['1 hora','S/180'],['1 h 30 min','S/200'],['2 horas','S/220']]),
    p('infantiles','Paquete Estrella','Animadora y burbujas gigantes','photo_5008009138352622559_y.jpg',['Show de burbujas','Juegos educativos','Hora loca y piñata','Sesión de fotos'],[['1 h 30 min','S/150'],['2 horas','S/170']]),
    p('infantiles','Animadora + DJ','Show infantil con DJ','photo_5008009138352622571_y.jpg',['Animación completa','Juegos y títeres','Hora loca','DJ y luces'],[['1 hora','S/140'],['1 h 30 min','S/160'],['2 horas','S/180'],['2 h 20 min','S/200']]),
    p('infantiles','Animadora + DJ + sonido','Producción con equipo de sonido','photo_5008009138352622572_y.jpg',['Animación completa','DJ y equipo de sonido','Hora loca','Sesión de fotos'],[['1 hora','S/170'],['1 h 30 min','S/190'],['2 horas','S/210'],['2 h 25 min','S/230']]),
    p('infantiles','Animadora, DJ y burbujas','Show con burbujas gigantes','photo_5008009138352622575_y.jpg',['Burbujas gigantes','Juegos y cantijuegos','Hora loca','DJ y luces'],[['1 h 30 min','S/170'],['2 horas','S/190'],['2 h 20 min','S/210']]),

    p('completos','Paquete Alegría','Animadora, bailarina, burbujas y DJ','photo_5008009138352622560_y.jpg',['Bailarina','Burbujas gigantes','Hora loca','DJ incluido'],[['1 h 30 min','S/230'],['2 horas','S/250'],['2 h 30 min','S/270']]),
    p('completos','Paquete Color y Diversión','Animadora y bailarina','photo_5008009138352622561_y.jpg',['Coreografía','Juegos educativos','Hora loca','Sesión de fotos'],[['1 h 30 min','S/170'],['2 horas','S/190'],['2 h 20 min','S/200']],'DJ adicional: S/50'),
    p('completos','Paquete Aventura','Animadora, 2 bailarinas, burbujas y DJ','photo_5008009138352622562_y.jpg',['Dos bailarinas','Burbujas gigantes','DJ y hora loca','Sesión de fotos'],[['1 h 30 min','S/350'],['2 horas','S/370'],['2 h 20 min','Consultar']],'La última tarifa debe confirmarse por WhatsApp.'),
    p('completos','Fiesta K-pop','Animadora K-pop, 2 bailarinas y DJ','photo_5008009138352622563_y.jpg',['Coreografías K-pop','Juegos','Hora loca','DJ incluido'],[['1 h 30 min','S/350'],['2 horas','S/370'],['2 h 20 min','S/390']]),
    p('completos','Show con 2 bailarinas + DJ','Animadora, bailarinas y guerra de barras','photo_5008009138352622564_y.jpg',['Dos bailarinas','Guerra de barras','Hora loca','DJ incluido'],[['1 h 30 min','S/230'],['2 horas','S/250'],['2 h 25 min','S/270']]),
    p('completos','Show completo con muñeco','Bailarina, muñeco, burbujas y DJ','photo_5008009138352622565_y.jpg',['Bailarina y muñeco','Burbujas gigantes','DJ electrónico','Hora loca'],[['1 h 30 min','S/380'],['2 horas','S/400'],['2 h 25 min','S/420']]),
    p('completos','Show con bailarina y burbujas','Animadora, bailarina, parlante y DJ','photo_5008009138352622566_y.jpg',['Bailarina','Burbujas gigantes','Parlante y DJ','Hora loca'],[['1 h 30 min','S/350'],['2 horas','S/370'],['2 h 20 min','S/390']]),
    p('completos','Show con 3 muñecos','Animadora, bailarina, 3 muñecos y DJ','photo_5008009138352622567_y.jpg',['Tres muñecos','Bailarina','DJ electrónico','Sesión de fotos'],[['1 h 30 min','S/440'],['2 horas','S/460'],['2 h 20 min','S/480']]),
    p('completos','Show full con 3 muñecos','Bailarina, 3 muñecos, DJ y burbujas','photo_5008009138352622568_y.jpg',['Tres muñecos','Burbujas gigantes','Bailarina y DJ','Hora loca'],[['1 h 30 min','S/460'],['2 horas','S/480'],['2 h 30 min','S/500']]),
    p('completos','Animadora + muñeco + burbujas','Con DJ electrónico','photo_5008009138352622569_y.jpg',['Muñeco sorpresa','Burbujas gigantes','DJ electrónico','Hora loca'],[['1 h 30 min','S/270'],['2 horas','S/290'],['2 h 20 min','S/310']]),
    p('completos','Animadora + muñeco + DJ','Show con personaje','photo_5008009138352622570_y.jpg',['Muñeco sorpresa','Juegos y títeres','DJ y luces','Sesión de fotos'],[['1 h 30 min','S/220'],['2 horas','S/240'],['2 h 25 min','S/260']]),
    p('completos','Animadora, DJ, sonido y muñeco','Producción con personaje','photo_5008009138352622573_y.jpg',['Muñeco sorpresa','Equipo de sonido','DJ y luces','Hora loca'],[['1 hora','S/240'],['1 h 30 min','S/260'],['2 horas','S/280'],['2 h 30 min','S/300']]),

    p('baby-shower','Baby shower con animadora','También para revelación','photo_5008009138352622581_y.jpg',['Dinámicas familiares','Entrega de regalos','Hora loca','Luces LED'],[['1 hora','S/100'],['1 h 30 min','S/120'],['2 horas','S/140']]),
    p('baby-shower','Baby shower con animadora + DJ','También para revelación','photo_5008009138352622580_y.jpg',['Palabras de familiares','Juegos grupales','Hora loca','DJ y micrófono'],[['1 hora','S/140'],['1 h 30 min','S/160'],['2 horas','S/180']]),
    p('baby-shower','Baby shower con bailarina','Animadora, DJ y bailarina','photo_5008009138352622582_y.jpg',['Bailarina','Juegos grupales','DJ y micrófono','Luces o burbujas'],[['1 h 30 min','S/230'],['2 horas','S/250']]),
    p('baby-shower','Baby shower con muñeco','Animadora, DJ y personaje','photo_5008009138352622583_y.jpg',['Muñeco sorpresa','Dinámicas familiares','DJ y micrófono','Luces o burbujas'],[['1 h 30 min','S/270'],['2 horas','S/290']]),

    p('adultos','Show para adultos','Animadora + DJ','photo_5008009138352622611_y.jpg',['Bailes para todos','Juegos','Hora loca y hora chola','Sesión de fotos'],[['1 hora','S/160'],['1 h 30 min','S/180'],['2 horas','S/200']],'Incluye micrófono y bazuca de burbujas.'),

    p('especiales','Animadora para jardín o colegio','Show para instituciones','photo_5008009138352622577_y.jpg',['Juegos educativos','Cantijuegos y títeres','Hora loca','Sesión de fotos'],[['1 hora','S/80'],['1 h 30 min','S/100'],['2 horas','S/120'],['2 h 15 min','S/140']],'DJ adicional: S/50'),
    p('especiales','Visita de muñeco sorpresa','Aparición especial para el cumpleaños','photo_5008009138352622578_y.jpg',['Entrada y baile','Mini hora loca','Piñata y cumpleaños','Sesión de fotos'],[['30 minutos','S/130'],['40 minutos','S/150'],['1 hora','S/170']]),
    p('especiales','Animadora + staff fuera de Trujillo','Show infantil fuera de la ciudad','photo_5008009138352622576_y.jpg',['Animación completa','Juegos y títeres','Hora loca','Staff incluido'],[['1 h 30 min','S/260'],['2 horas','S/280'],['3 horas','S/300']]),
    p('especiales','Animadora + DJ fuera de Trujillo','Show con DJ fuera de la ciudad','photo_5008009138352622574_y.jpg',['Animación completa','DJ y luces','Hora loca','Sesión de fotos'],[['1 hora','S/240'],['1 h 30 min','S/260'],['2 horas','S/280'],['2 h 20 min','S/300']])
  ];

  const escapeHtml = value => String(value).replace(/[&<>"']/g, char =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);

  const whatsappUrl = (pack, option) => {
    const message = `Hola Vicshadda Producciones, me interesa "${pack.title}", opción ${option[0]} (${option[1]}). Quisiera confirmar disponibilidad y detalles.\n\nFlyer: ${publicBase}${pack.image}`;
    return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
  };

  const packageId = pack => `paquete-${pack.image.replace('.jpg', '')}`;
  const card = pack => `
    <article class="package-card" id="${packageId(pack)}">
      <a class="package-image" href="${base}${pack.image}" target="_blank" rel="noopener" title="Ver flyer completo">
        <img src="${base}${pack.image}" alt="Flyer de ${escapeHtml(pack.title)}" loading="lazy">
        <span><i class="bi bi-arrows-fullscreen"></i> Ver flyer</span>
      </a>
      <div class="package-body">
        <p class="package-kicker">${escapeHtml(pack.subtitle)}</p>
        <h4>${escapeHtml(pack.title)}</h4>
        <ul class="package-features">${pack.features.map(feature => `<li><i class="bi bi-check2"></i>${escapeHtml(feature)}</li>`).join('')}</ul>
        <div class="package-notes">
          <p class="package-note"><i class="bi bi-car-front-fill"></i> No incluye movilidad.</p>
          ${pack.note ? `<p class="package-note package-note-special">${escapeHtml(pack.note)}</p>` : ''}
        </div>
        <div class="price-options" aria-label="Precios por duración">
          ${pack.prices.map(option => `<a href="${whatsappUrl(pack, option)}" target="_blank" rel="noopener"><span>${escapeHtml(option[0])}</span><strong>${escapeHtml(option[1])}</strong><i class="bi bi-whatsapp"></i></a>`).join('')}
        </div>
      </div>
    </article>`;

  const catalog = document.querySelector('#packageCatalog');
  const extras = document.querySelector('#adicionales');
  if (!catalog || !extras) return;

  const renderCatalog = categoryId => {
    document.querySelectorAll('[data-package-category]').forEach(button => {
      button.classList.toggle('active', button.dataset.packageCategory === categoryId);
    });
    extras.hidden = categoryId !== 'adicionales';
    if (categoryId === 'adicionales') {
      catalog.innerHTML = '';
      return;
    }
    const category = categories.find(([id]) => id === categoryId);
    if (!category) return;
    const [id, title, description] = category;
    catalog.innerHTML = `
      <section class="package-group" id="${id}">
        <div class="package-group-heading"><div><span>Opciones Vicshadda</span><h3>${title}</h3></div><p>${description}</p></div>
        <div class="package-grid">${packages.filter(pack => pack.category === id).map(card).join('')}</div>
      </section>`;
  };

  document.addEventListener('click', event => {
    const categoryButton = event.target.closest('[data-package-category]');
    if (categoryButton) {
      renderCatalog(categoryButton.dataset.packageCategory);
    }
  });

  renderCatalog('infantiles');
})();
