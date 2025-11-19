import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly maxAttempts = 20;
  private readonly delayBetweenAttempts = 75;

  constructor(
    private readonly router: Router,
    private readonly ngZone: NgZone,
  ) {}

  navigateTo(fragment: string): void {
    if (!fragment) {
      return;
    }

    const currentUrl = this.router.url.split('#')[0];

    if (currentUrl === '/' || currentUrl === '') {
      this.scrollToElement(fragment);
      this.router.navigate([], { fragment });
      return;
    }

    this.router.navigate(['/'], { fragment }).then(() => {
      this.scrollToElement(fragment);
    });
  }

  private scrollToElement(fragment: string, attempt = 0): void {
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        if (typeof document === "undefined") {
          return;
        }
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempt < this.maxAttempts) {
          setTimeout(() => this.scrollToElement(fragment, attempt + 1), this.delayBetweenAttempts);
        }
      });
    });
  }
}


