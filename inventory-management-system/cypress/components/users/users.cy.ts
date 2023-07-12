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

        cy.get('.user-component')
          .should('contain', 'USERS');
      });
});