import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "TestProject";
  username: string = "";
  password: string = "";
  successMsg: string = "";
  errorMsg: string = "";
  CheckLogin( )
  {
    if (this.password == "password")
    {
      this.successMsg = "Successful login";
      this.errorMsg = "";
    }
    else
    {
      this.errorMsg = "Invalid Credentials";
      this.successMsg = "";
    }
  }
}
