import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Service = {
  icon: string;
  title: string;
  text: string;
  tone: string;
};

type PackageItem = {
  title: string;
  items: string[];
  badge: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly whatsapp = '51997234429';
  readonly phoneLabel = '997 234 429';
  readonly whatsappText = encodeURIComponent('Hola Vicshadda Producciones, quiero información para reservar mi evento.');

  readonly services: Service[] = [
    {
      icon: 'bi-stars',
      title: 'Show infantil',
      text: 'Animación, juegos, dinámicas, magia, caritas pintadas y mucha energía para cumpleaños.',
      tone: 'pink'
    },
    {
      icon: 'bi-balloon-heart',
      title: 'Decoración de eventos',
      text: 'Mesas temáticas, globos, fondos, detalles y ambientación para una fiesta soñada.',
      tone: 'blue'
    },
    {
      icon: 'bi-music-note-beamed',
      title: 'Hora loca',
      text: 'Hora loca, hora chola, DJ, bailarines y equipo de sonido para levantar la celebración.',
      tone: 'yellow'
    },
    {
      icon: 'bi-magic',
      title: 'Burbujas y magia',
      text: 'Show de burbujas gigantes, burbujas con humo y trucos de magia para sorprender.',
      tone: 'purple'
    }
  ];

  readonly packages: PackageItem[] = [
    {
      title: 'Celebraciones infantiles',
      badge: 'Niños',
      items: ['Show infantil', 'Muñecos', 'Caritas pintadas', 'Burbujas gigantes']
    },
    {
      title: 'Eventos familiares',
      badge: 'Familia',
      items: ['Baby shower', 'Cumpleaños para adultos', 'Quince años', 'Variedad de eventos']
    },
    {
      title: 'Producción completa',
      badge: 'Full',
      items: ['DJ y sonido', 'Bailarines', 'Decoración', 'Hora loca']
    }
  ];

  readonly gallery = [
    {
      src: 'assets/show1.jpeg',
      alt: 'Servicios de decoración Vicshadda para cumpleaños, baby shower y quince años'
    },
    {
      src: 'assets/show 2.jpeg',
      alt: 'Servicios de show infantil, animación, muñecos y burbujas Vicshadda'
    }
  ];

  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsapp}?text=${this.whatsappText}`;
  }

  packageWhatsappUrl(packageTitle: string): string {
    const message = encodeURIComponent(
      `Hola Vicshadda Producciones, me interesa el paquete "${packageTitle}". Quisiera conocer el precio, la disponibilidad y más detalles.`
    );
    return `https://wa.me/${this.whatsapp}?text=${message}`;
  }
}
