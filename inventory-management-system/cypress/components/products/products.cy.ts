import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { httpRequestService } from "src/app/Services/httpRequest.service";
import { ProductsComponent } from "src/app/pages/products/products.component";

describe('Products Component Test', () => {
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [httpRequestService]
  }));
    
    it('Component Open Successfully', () => {
        cy.mount(ProductsComponent)
    });
});