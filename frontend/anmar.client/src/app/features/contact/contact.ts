import { Component } from '@angular/core';
import { ContactBanner } from './components/contact-banner/contact-banner';
import { QuoteForm } from './components/quote-form/quote-form';
import { MatCardModule } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-contact',
  imports: [ContactBanner, QuoteForm, MatCardModule, MatList, MatListItem, MatDividerModule, MatIconModule, MatListModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
