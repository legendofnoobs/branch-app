import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  constructor(public layoutService: LayoutService) { }
  menuItems = [
    {
      label: 'Visitors',
      hasSubmenu: true,
      expanded: true,
      active: true,
      subItems: [
        { label: 'Visitors List', route: '/visitors-list' },
        { label: 'Register Visitor', route: null },
        { label: 'Pending Visitors', route: null },
        { label: 'Plan Appointments', route: null }
      ]
    },
    {
      label: 'Validator',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { label: 'New Registrations', route: null }
      ]
    },
    {
      label: 'THAMM Plus',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { label: 'THAMM Plus Applicatants', route: null },
        { label: 'Calls Applications', route: null },
        { label: 'THAMM Plus Groups', route: null },
        { label: 'THAMM Plus Sectors', route: null }
      ]
    },
    {
      label: 'Training',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { label: 'Service Providers', route: null },
        { label: 'Training Centers', route: null },
        { label: 'Training Categories', route: null },
        { label: 'Training Topics', route: null },
        { label: 'Courses', route: null },
        { label: 'Rounds', route: null },
        { label: "Rounds' Status", route: null }
      ]
    },
    {
      label: 'Basic Data',
      hasSubmenu: true,
      expanded: false,
      subItems: [
        { label: 'Know EGC', route: null },
        { label: 'Branches', route: '/add-branch' }
      ]
    }
  ];

  footerItems = [
    { label: 'User Management' },
    { label: 'My Account' },
    { label: 'Log out' }
  ];

  toggleSubmenu(item: any) {
    if (item.hasSubmenu) {
      if (!item.expanded) {
        this.menuItems.forEach(m => m.expanded = false);
        item.expanded = true;
      } else {
        item.expanded = false;
      }
    }
  }
}
