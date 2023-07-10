import { Component } from '@angular/core';
import { httpRequestService } from 'src/app/Services/httpRequest.service';
import { ResponseStatus } from 'src/app/shared/enums/enums';
import { ClientConstants } from '../../common/common';
import { UserViewModel } from 'src/app/VMs/dataTableVM';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public userList: UserViewModel[] = [];

  constructor(private httpService: httpRequestService){}

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.httpService.get(this.httpService.apiRoutes.user.Users).subscribe({
      next: (response) => {
        this.userList = response as UserViewModel[];
      },
      error: (e) => console.error(e)
    });
  }

  updateUser(data: UserViewModel) {
    debugger
    let userObj = { email: data.email, username: data.username, phone: data.phone };

    this.httpService.updateData(this.httpService.apiRoutes.user.Users, userObj, data.id).subscribe({
      next: (response) => {
        debugger
        // this.userList = response as UserViewModel[];
      },
      error: (e) => console.error(e)
    });
    console.log('Received data from child:', data);
    // Perform any actions in the parent component
  }

}
