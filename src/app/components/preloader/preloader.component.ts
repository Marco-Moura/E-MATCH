import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const tl = gsap.timeline();

      tl.to('#preloader .logo img', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scale: 1.2,
      });

      tl.to('#preloader .logo img', {
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: 'power2.in',
        scale: 0.8,
      });

      tl.to('#preloader', {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          const preloader = document.getElementById('preloader');
          if (preloader) preloader.style.display = 'none';
        }
      });
    }
  }

}
