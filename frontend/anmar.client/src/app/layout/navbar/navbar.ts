import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  
  menuOpen = signal(false);

  toggleMenu(){
    this.menuOpen.update(open => {
      const newValue = !open;

      document.body.classList.toggle('menu-open', newValue);
      return newValue;
    });
  }

  closeMenu() {
    this.menuOpen.set(false);
      document.body.classList.remove('menu-open');
  }
}
