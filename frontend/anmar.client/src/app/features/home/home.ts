import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { ServicesPreview } from './components/services-preview/services-preview';

@Component({
  selector: 'app-home',
  imports: [Hero, ServicesPreview],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
