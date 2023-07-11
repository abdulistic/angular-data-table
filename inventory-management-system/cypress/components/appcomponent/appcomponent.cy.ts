import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { httpRequestService } from "src/app/Services/httpRequest.service";
import { AppComponent } from "src/app/app.component";
import { UsersComponent } from "src/app/pages/users/users.component";

describe('App Component Test', () => {
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [httpRequestService]
  }));
    
    it('Component Open Successfully', () => {
        cy.mount(AppComponent)
    });

    it('should click a button and perform an action', () => {
      cy.mount(AppComponent)
      cy.get('.a-button')
        .should('contain', 'USERS').click({ multiple: true });
    });
    
    it('should have router-outlet element to render the components', () => {
      cy.mount(AppComponent);
      cy.get('router-outlet')
        .should('exist');
    });
});