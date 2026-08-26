import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.scss',
})
export class ServicesPreview {}
