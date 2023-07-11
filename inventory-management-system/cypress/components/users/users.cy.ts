import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersComponent } from "src/app/pages/users/users.component";
import { httpRequestService } from "src/app/Services/httpRequest.service";

describe('Users Component Test', () => {
    beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [httpRequestService],
  }));

    
    it('Component Open Successfully', () => {
        cy.mount(UsersComponent)
    });

    it('should display correct text content', () => {
        cy.mount(UsersComponent)

        cy.get('h1')
          .should('contain', 'USERS');
      });


      it('should have router-outlet element to render the components', () => {
      cy.mount(UsersComponent);
      cy.get('router-outlet')
        .should('exist');
    });
});