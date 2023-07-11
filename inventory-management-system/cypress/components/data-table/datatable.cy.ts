import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { httpRequestService } from "src/app/Services/httpRequest.service";
import { DataTableComponent } from "src/app/components/data-table/data-table.component";

describe('Table Component Test', () => {
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [httpRequestService]
  }));
    
    it('Component Open Successfully', () => {
        cy.mount(DataTableComponent)
    });

    
});