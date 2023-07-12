import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { httpRequestService } from "src/app/Services/httpRequest.service";
import { DataTableComponent } from "src/app/components/data-table/data-table.component";
import { any } from "cypress/types/bluebird";
import { EventEmitter } from "@angular/core";
import { createOutputSpy } from "cypress/angular";

describe('Table Component Test', () => {
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [httpRequestService]
  }));
    
    it('Component Open Successfully', () => {
        cy.mount(DataTableComponent)
    });

    
    it('Accepts Two Inputs Proper, List of Properties and Data and updateMethod reference for EventEmitter', () => {
      cy.mount(DataTableComponent, {
        componentProperties: {
          columns: [],
          data:  [],
          updateEvent: new EventEmitter<any>()
        },
      })
    })
});