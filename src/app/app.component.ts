import { AfterViewInit, Component } from '@angular/core';

type Service = { icon: string; title: string; text: string; tone: string };
type PriceOption = { duration: string; price: string };
type PackageItem = {
  category: string;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  prices: PriceOption[];
  note?: string;
};
type PackageCategory = { id: string; title: string; description: string };

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  readonly whatsapp = '51997234429';
  readonly phoneLabel = '997 234 429';
  readonly whatsappText = encodeURIComponent('Hola Vicshadda Producciones, quiero información para reservar mi evento.');
  selectedCategory = 'infantiles';

  readonly services: Service[] = [
    { icon: 'bi-stars', title: 'Show infantil', text: 'Animación, juegos, dinámicas, magia, caritas pintadas y mucha energía para cumpleaños.', tone: 'pink' },
    { icon: 'bi-balloon-heart', title: 'Decoración de eventos', text: 'Mesas temáticas, globos, fondos, detalles y ambientación para una fiesta soñada.', tone: 'blue' },
    { icon: 'bi-music-note-beamed', title: 'Hora loca', text: 'Hora loca, hora chola, DJ, bailarines y equipo de sonido para levantar la celebración.', tone: 'yellow' },
    { icon: 'bi-magic', title: 'Burbujas y magia', text: 'Show de burbujas gigantes, burbujas con humo y trucos de magia para sorprender.', tone: 'purple' }
  ];

  readonly packageCategories: PackageCategory[] = [
    { id: 'infantiles', title: 'Paquetes infantiles', description: 'Desde un show rápido hasta animación con sonido, DJ y burbujas.' },
    { id: 'completos', title: 'Shows completos y personajes', description: 'Bailarinas, muñecos, DJ y producciones de mayor formato.' },
    { id: 'baby-shower', title: 'Baby shower y revelación', description: 'Dinámicas familiares, regalos, bailes, fotos y hora loca.' },
    { id: 'adultos', title: 'Shows para adultos', description: 'Animación, baile, juegos, hora loca y hora chola para celebrar entre adultos.' },
    { id: 'especiales', title: 'Colegios y fuera de Trujillo', description: 'Paquetes para instituciones, visitas sorpresa y eventos fuera de la ciudad.' }
  ];

  readonly packages: PackageItem[] = [
    this.pack('infantiles', 'Paquete Rápido', '1 animadora carismática', 'photo_5008009138352622554_y.jpg', ['Entrada cantando', 'Baile y hora loca', 'Piñata y cumpleaños', 'Sesión de fotos'], [['40 minutos', 'S/50']]),
    this.pack('infantiles', 'Paquete Sonrisas', 'Básico · 1 animadora', 'photo_5008009138352622555_y.jpg', ['Juegos educativos', 'Cantijuegos', 'Hora loca y piñata', 'Micrófono y luces'], [['1 hora', 'S/70'], ['1 h 30 min', 'S/90'], ['2 horas', 'S/120']]),
    this.pack('infantiles', 'Paquete Diversión', 'Animadora y equipo de sonido', 'photo_5008009138352622556_y.jpg', ['Juegos grupales', 'Títeres', 'Hora loca y piñata', 'Sonido incluido'], [['1 hora', 'S/110'], ['1 h 30 min', 'S/130'], ['2 horas', 'S/150']]),
    this.pack('infantiles', 'Paquete Mundo Mágico', 'Animadora, DJ, sonido y burbujas', 'photo_5008009138352622557_y.jpg', ['Burbujas gigantes', 'Juegos y cantijuegos', 'Hora loca', 'DJ y sonido'], [['1 hora', 'S/210'], ['1 h 30 min', 'S/230'], ['2 horas', 'S/250']]),
    this.pack('infantiles', 'Paquete Animación Plus', 'Animadora temática de princesa y DJ', 'photo_5008009138352622558_y.jpg', ['Entrada cantando', 'Juegos y títeres', 'Hora loca y piñata', 'DJ incluido'], [['1 hora', 'S/180'], ['1 h 30 min', 'S/200'], ['2 horas', 'S/220']]),
    this.pack('infantiles', 'Paquete Estrella', 'Animadora y burbujas gigantes', 'photo_5008009138352622559_y.jpg', ['Show de burbujas', 'Juegos educativos', 'Hora loca y piñata', 'Sesión de fotos'], [['1 h 30 min', 'S/150'], ['2 horas', 'S/170']]),
    this.pack('infantiles', 'Animadora + DJ', 'Show infantil con DJ', 'photo_5008009138352622571_y.jpg', ['Animación completa', 'Juegos y títeres', 'Hora loca', 'DJ y luces'], [['1 hora', 'S/140'], ['1 h 30 min', 'S/160'], ['2 horas', 'S/180'], ['2 h 20 min', 'S/200']]),
    this.pack('infantiles', 'Animadora + DJ + sonido', 'Producción con equipo de sonido', 'photo_5008009138352622572_y.jpg', ['Animación completa', 'DJ y equipo de sonido', 'Hora loca', 'Sesión de fotos'], [['1 hora', 'S/170'], ['1 h 30 min', 'S/190'], ['2 horas', 'S/210'], ['2 h 25 min', 'S/230']]),
    this.pack('infantiles', 'Animadora, DJ y burbujas', 'Show con burbujas gigantes', 'photo_5008009138352622575_y.jpg', ['Burbujas gigantes', 'Juegos y cantijuegos', 'Hora loca', 'DJ y luces'], [['1 h 30 min', 'S/170'], ['2 horas', 'S/190'], ['2 h 20 min', 'S/210']]),

    this.pack('completos', 'Paquete Alegría', 'Animadora, bailarina, burbujas y DJ', 'photo_5008009138352622560_y.jpg', ['Bailarina', 'Burbujas gigantes', 'Hora loca', 'DJ incluido'], [['1 h 30 min', 'S/230'], ['2 horas', 'S/250'], ['2 h 30 min', 'S/270']]),
    this.pack('completos', 'Paquete Color y Diversión', 'Animadora y bailarina', 'photo_5008009138352622561_y.jpg', ['Coreografía', 'Juegos educativos', 'Hora loca', 'Sesión de fotos'], [['1 h 30 min', 'S/170'], ['2 horas', 'S/190'], ['2 h 20 min', 'S/200']], 'DJ adicional: S/50'),
    this.pack('completos', 'Paquete Aventura', 'Animadora, 2 bailarinas, burbujas y DJ', 'photo_5008009138352622562_y.jpg', ['Dos bailarinas', 'Burbujas gigantes', 'DJ y hora loca', 'Sesión de fotos'], [['1 h 30 min', 'S/350'], ['2 horas', 'S/370'], ['2 h 20 min', 'Consultar']], 'La última tarifa debe confirmarse por WhatsApp.'),
    this.pack('completos', 'Fiesta K-pop', 'Animadora K-pop, 2 bailarinas y DJ', 'photo_5008009138352622563_y.jpg', ['Coreografías K-pop', 'Juegos', 'Hora loca', 'DJ incluido'], [['1 h 30 min', 'S/350'], ['2 horas', 'S/370'], ['2 h 20 min', 'S/390']]),
    this.pack('completos', 'Show con 2 bailarinas + DJ', 'Animadora, bailarinas y guerra de barras', 'photo_5008009138352622564_y.jpg', ['Dos bailarinas', 'Guerra de barras', 'Hora loca', 'DJ incluido'], [['1 h 30 min', 'S/230'], ['2 horas', 'S/250'], ['2 h 25 min', 'S/270']]),
    this.pack('completos', 'Show completo con muñeco', 'Bailarina, muñeco, burbujas y DJ', 'photo_5008009138352622565_y.jpg', ['Bailarina y muñeco', 'Burbujas gigantes', 'DJ electrónico', 'Hora loca'], [['1 h 30 min', 'S/380'], ['2 horas', 'S/400'], ['2 h 25 min', 'S/420']]),
    this.pack('completos', 'Show con bailarina y burbujas', 'Animadora, bailarina, parlante y DJ', 'photo_5008009138352622566_y.jpg', ['Bailarina', 'Burbujas gigantes', 'Parlante y DJ', 'Hora loca'], [['1 h 30 min', 'S/350'], ['2 horas', 'S/370'], ['2 h 20 min', 'S/390']]),
    this.pack('completos', 'Show con 3 muñecos', 'Animadora, bailarina, 3 muñecos y DJ', 'photo_5008009138352622567_y.jpg', ['Tres muñecos', 'Bailarina', 'DJ electrónico', 'Sesión de fotos'], [['1 h 30 min', 'S/440'], ['2 horas', 'S/460'], ['2 h 20 min', 'S/480']]),
    this.pack('completos', 'Show full con 3 muñecos', 'Bailarina, 3 muñecos, DJ y burbujas', 'photo_5008009138352622568_y.jpg', ['Tres muñecos', 'Burbujas gigantes', 'Bailarina y DJ', 'Hora loca'], [['1 h 30 min', 'S/460'], ['2 horas', 'S/480'], ['2 h 30 min', 'S/500']]),
    this.pack('completos', 'Animadora + muñeco + burbujas', 'Con DJ electrónico', 'photo_5008009138352622569_y.jpg', ['Muñeco sorpresa', 'Burbujas gigantes', 'DJ electrónico', 'Hora loca'], [['1 h 30 min', 'S/270'], ['2 horas', 'S/290'], ['2 h 20 min', 'S/310']]),
    this.pack('completos', 'Animadora + muñeco + DJ', 'Show con personaje', 'photo_5008009138352622570_y.jpg', ['Muñeco sorpresa', 'Juegos y títeres', 'DJ y luces', 'Sesión de fotos'], [['1 h 30 min', 'S/220'], ['2 horas', 'S/240'], ['2 h 25 min', 'S/260']]),
    this.pack('completos', 'Animadora, DJ, sonido y muñeco', 'Producción con personaje', 'photo_5008009138352622573_y.jpg', ['Muñeco sorpresa', 'Equipo de sonido', 'DJ y luces', 'Hora loca'], [['1 hora', 'S/240'], ['1 h 30 min', 'S/260'], ['2 horas', 'S/280'], ['2 h 30 min', 'S/300']]),

    this.pack('baby-shower', 'Baby shower con animadora', 'También para revelación', 'photo_5008009138352622581_y.jpg', ['Dinámicas familiares', 'Entrega de regalos', 'Hora loca', 'Luces LED'], [['1 hora', 'S/100'], ['1 h 30 min', 'S/120'], ['2 horas', 'S/140']]),
    this.pack('baby-shower', 'Baby shower con animadora + DJ', 'También para revelación', 'photo_5008009138352622580_y.jpg', ['Palabras de familiares', 'Juegos grupales', 'Hora loca', 'DJ y micrófono'], [['1 hora', 'S/140'], ['1 h 30 min', 'S/160'], ['2 horas', 'S/180']]),
    this.pack('baby-shower', 'Baby shower con bailarina', 'Animadora, DJ y bailarina', 'photo_5008009138352622582_y.jpg', ['Bailarina', 'Juegos grupales', 'DJ y micrófono', 'Luces o burbujas'], [['1 h 30 min', 'S/230'], ['2 horas', 'S/250']]),
    this.pack('baby-shower', 'Baby shower con muñeco', 'Animadora, DJ y personaje', 'photo_5008009138352622583_y.jpg', ['Muñeco sorpresa', 'Dinámicas familiares', 'DJ y micrófono', 'Luces o burbujas'], [['1 h 30 min', 'S/270'], ['2 horas', 'S/290']]),

    this.pack('adultos', 'Show para adultos', 'Animadora + DJ', 'photo_5008009138352622611_y.jpg', ['Bailes para todos', 'Juegos', 'Hora loca y hora chola', 'Sesión de fotos'], [['1 hora', 'S/160'], ['1 h 30 min', 'S/180'], ['2 horas', 'S/200']], 'Incluye micrófono y bazuca de burbujas.'),

    this.pack('especiales', 'Animadora para jardín o colegio', 'Show para instituciones', 'photo_5008009138352622577_y.jpg', ['Juegos educativos', 'Cantijuegos y títeres', 'Hora loca', 'Sesión de fotos'], [['1 hora', 'S/80'], ['1 h 30 min', 'S/100'], ['2 horas', 'S/120'], ['2 h 15 min', 'S/140']], 'DJ adicional: S/50'),
    this.pack('especiales', 'Visita de muñeco sorpresa', 'Aparición especial para el cumpleaños', 'photo_5008009138352622578_y.jpg', ['Entrada y baile', 'Mini hora loca', 'Piñata y cumpleaños', 'Sesión de fotos'], [['30 minutos', 'S/130'], ['40 minutos', 'S/150'], ['1 hora', 'S/170']]),
    this.pack('especiales', 'Animadora + staff fuera de Trujillo', 'Show infantil fuera de la ciudad', 'photo_5008009138352622576_y.jpg', ['Animación completa', 'Juegos y títeres', 'Hora loca', 'Staff incluido'], [['1 h 30 min', 'S/260'], ['2 horas', 'S/280'], ['3 horas', 'S/300']]),
    this.pack('especiales', 'Animadora + DJ fuera de Trujillo', 'Show con DJ fuera de la ciudad', 'photo_5008009138352622574_y.jpg', ['Animación completa', 'DJ y luces', 'Hora loca', 'Sesión de fotos'], [['1 hora', 'S/240'], ['1 h 30 min', 'S/260'], ['2 horas', 'S/280'], ['2 h 20 min', 'S/300']])
  ];

  readonly extras = [
    { name: 'Burbujas gigantes', price: 'S/55' },
    { name: 'Micrófono', price: 'S/10' },
    { name: 'Bailarines', price: 'S/50' },
    { name: 'Equipo de sonido', price: 'S/50' },
    { name: 'Pistola de burbujas', price: 'S/15' },
    { name: 'DJ', price: 'S/50' }
  ];

  readonly gallery = [
    { src: 'assets/show1.jpeg', alt: 'Servicios de decoración Vicshadda para cumpleaños, baby shower y quince años' },
    { src: 'assets/show 2.jpeg', alt: 'Servicios de show infantil, animación, muñecos y burbujas Vicshadda' }
  ];

  ngAfterViewInit(): void {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0 });
  }

  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsapp}?text=${this.whatsappText}`;
  }

  packagesFor(category: string): PackageItem[] {
    return this.packages.filter(item => item.category === category);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  scrollToPackages(): void {
    window.setTimeout(() => document.getElementById('paquetes')?.scrollIntoView({ behavior: 'smooth' }));
  }

  selectPackage(pack: PackageItem): void {
    this.selectedCategory = pack.category;
    window.setTimeout(() => {
      document.getElementById(this.packageId(pack))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  packageId(pack: PackageItem): string {
    return `paquete-${pack.image.split('/').pop()?.replace('.jpg', '')}`;
  }

  packageWhatsappUrl(pack: PackageItem, option?: PriceOption): string {
    const selection = option ? `, opción ${option.duration} (${option.price})` : '';
    const imageName = pack.image.split('/').pop();
    const flyer = `https://jeanpierelp.github.io/vicshadda-web/preview/assets/packages/${imageName}`;
    const message = encodeURIComponent(`Hola Vicshadda Producciones, me interesa "${pack.title}"${selection}. Quisiera confirmar disponibilidad y detalles.\n\nFlyer: ${flyer}`);
    return `https://wa.me/${this.whatsapp}?text=${message}`;
  }

  private pack(category: string, title: string, subtitle: string, image: string, features: string[], prices: string[][], note?: string): PackageItem {
    return {
      category,
      title,
      subtitle,
      image: `assets/packages/${image}`,
      features,
      prices: prices.map(([duration, price]) => ({ duration, price })),
      note
    };
  }
}
