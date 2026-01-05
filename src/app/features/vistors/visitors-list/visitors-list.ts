import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';

interface Visitor {
    id: string;
    name: string;
    gender: string;
    age: number;
    mobile: string;
    targetGroup: 'RE' | 'PIM' | 'PM';
    email: string;
    egcId: string;
    status: 'Active' | 'Deactive';
}

@Component({
    selector: 'app-visitors-list',
    standalone: true,
    imports: [CommonModule, FormsModule, TableModule, ButtonModule, TagModule, InputTextModule, AutoCompleteModule, DatePickerModule],
    templateUrl: './visitors-list.html',
    styleUrl: './visitors-list.css',
})
export class VisitorsListComponent {
    activeDropdownIndex: number | null = null;
    showFilters: boolean = false;

    filterForm = {
        registerFrom: '',
        targetGroup: '',
        ageGroup: '',
        search: '',
        fromDate: null,
        toDate: null
    };

    // AutoComplete variables
    filteredRegisterFromOptions: any[] = [];
    filteredTargetGroupOptions: any[] = [];
    filteredAgeGroupOptions: any[] = [];

    registerFromOptions = [
        { label: 'Website', value: 'Website' },
        { label: 'Mobile App', value: 'Mobile App' },
        { label: 'Walk-in', value: 'Walk-in' }
    ];

    targetGroupOptions = [
        { label: 'RE', value: 'RE' },
        { label: 'PIM', value: 'PIM' },
        { label: 'PM', value: 'PM' }
    ];

    ageGroupOptions = [
        { label: '18-25', value: '18-25' },
        { label: '26-35', value: '26-35' },
        { label: '36-45', value: '36-45' },
        { label: '46+', value: '46+' }
    ];

    searchRegisterFrom(event: any) {
        let query = event.query;
        this.filteredRegisterFromOptions = this.registerFromOptions.filter(option =>
            option.label.toLowerCase().indexOf(query.toLowerCase()) === 0
        );
    }

    searchTargetGroup(event: any) {
        let query = event.query;
        this.filteredTargetGroupOptions = this.targetGroupOptions.filter(option =>
            option.label.toLowerCase().indexOf(query.toLowerCase()) === 0
        );
    }

    searchAgeGroup(event: any) {
        let query = event.query;
        this.filteredAgeGroupOptions = this.ageGroupOptions.filter(option =>
            option.label.toLowerCase().indexOf(query.toLowerCase()) === 0
        );
    }

    visitors: Visitor[] = [
        { id: '1', name: 'Ahmed Mohamed Hassan', gender: 'Male', age: 23, mobile: '+201003465798', targetGroup: 'RE', email: 'a.mohamed@gmail.com', egcId: '356792', status: 'Deactive' },
        { id: '2', name: 'Rana Ahmed Hassan', gender: 'Female', age: 28, mobile: '+201003465799', targetGroup: 'PIM', email: 'rana.ahmed@gmail.com', egcId: '876577', status: 'Active' },
        { id: '3', name: 'Hany Ali Hassan', gender: 'Male', age: 35, mobile: '+201003465800', targetGroup: 'PM', email: 'hany.ali@gmail.com', egcId: '847263', status: 'Deactive' },
        { id: '4', name: 'Lila Raouf Mansour', gender: 'Female', age: 21, mobile: '+201003465801', targetGroup: 'RE', email: 'lila.raouf@gmail.com', egcId: '1235643', status: 'Deactive' },
        { id: '5', name: 'Nermeen Yassen Ashraf', gender: 'Female', age: 32, mobile: '+201003465802', targetGroup: 'RE', email: 'nermeen.y@gmail.com', egcId: '345762', status: 'Deactive' },
        { id: '6', name: 'Yehia Mohamed Hassan', gender: 'Male', age: 40, mobile: '+201003465803', targetGroup: 'RE', email: 'yehia.m@gmail.com', egcId: '346578', status: 'Deactive' },
        { id: '7', name: 'Mona Ibrahim Khalil', gender: 'Female', age: 25, mobile: '+201003465804', targetGroup: 'PIM', email: 'mona.i@gmail.com', egcId: '987456', status: 'Active' },
        { id: '8', name: 'Omar Said Ahmed', gender: 'Male', age: 29, mobile: '+201003465805', targetGroup: 'PM', email: 'omar.s@gmail.com', egcId: '556677', status: 'Active' }
    ];

    toggleDropdown(index: number): void {
        this.activeDropdownIndex = this.activeDropdownIndex === index ? null : index;
    }

    toggleFilters(): void {
        this.showFilters = !this.showFilters;
    }

    resetFilters(): void {
        this.filterForm = {
            registerFrom: '',
            targetGroup: '',
            ageGroup: '',
            search: '',
            fromDate: null,
            toDate: null
        };
    }

    closeDropdown(): void {
        this.activeDropdownIndex = null;
    }

    onMenuItemClick(action: string, visitor: Visitor): void {
        console.log(`${action} for`, visitor.name);

        switch (action) {
            case 'details':
                break;
            case 'change-password':
                break;
            case 'edit':
                break;
            case 'toggle-status':
                const newStatus = visitor.status === 'Active' ? 'Deactive' : 'Active';
                console.log(`Changing status from ${visitor.status} to ${newStatus}`);
                break;
        }

        this.closeDropdown();
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent): void {
        const target = event.target as HTMLElement;
        const isTrigger = target.closest('.action-menu-trigger');
        const isDropdown = target.closest('.custom-dropdown-menu');

        if (!isTrigger && !isDropdown) {
            this.closeDropdown();
        }
    }

    getTagSeverity(group: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
        switch (group) {
            case 'RE': return 'warn';
            case 'PIM': return 'danger';
            case 'PM': return 'info';
            default: return 'secondary';
        }
    }
}