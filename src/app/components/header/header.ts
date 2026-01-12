import { Component } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  constructor(private layoutService: LayoutService) { }

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
