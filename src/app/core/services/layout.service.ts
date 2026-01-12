import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    isSidebarVisible = signal(false);

    toggleSidebar() {
        this.isSidebarVisible.update(v => !v);
    }

    closeSidebar() {
        this.isSidebarVisible.set(false);
    }

    showSidebar() {
        this.isSidebarVisible.set(true);
    }
}
