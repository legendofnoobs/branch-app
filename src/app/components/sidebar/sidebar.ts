import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Visitors',
      hasSubmenu: true,
      expanded: false,
      subItems: ['Active Visitors', 'Visit History', 'Registration']
    },
    {
      label: 'Validator',
      hasSubmenu: true,
      expanded: false,
      subItems: ['Check Status', 'Validator Logs']
    },
    {
      label: 'THAMM Plus',
      hasSubmenu: true,
      expanded: false,
      subItems: ['Program Details', 'Applications']
    },
    {
      label: 'Training',
      hasSubmenu: true,
      expanded: false,
      subItems: ['Available Courses', 'My Trainings']
    },
    {
      label: 'Basic Data',
      hasSubmenu: true,
      expanded: true,
      active: true,
      subItems: ['Branches', 'Offices', 'Governorates']
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
