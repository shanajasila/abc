import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  username=""
  Password=""
constructor(private route:Router){}

  readvalues=()=>{
    let log1:any={"username":this.username,"Password":this.Password}
    console.log(log1)
    if(this.username=="admin"&&this.Password=="nestdigital") {
    this.route.navigate(["/course"])
    
  } else {
    alert("Invalid Credentials")
  }
}

}
