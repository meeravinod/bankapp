import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim='Your perfect banking partner'
  acnt='enter your account number'

  acno=''
  psw=''
  
  // userDetails:any={
  //   1000:{acno:1000,username:"amal",password:123,balance:100000},
  //   1001:{acno:1002,username:"anu",password:123,balance:200000},
  //   1002:{acno:1002,username:"joyal",password:123,balance:150000},
  //   1003:{acno:1003,username:"anaga",password:123,balance:100000}
    
  // }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  login(){
    var acnum=this.acno
    var psw=this.psw
    
    const result=this.ds.login(acnum,psw)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
}


// login(a:any,b:any){
// console.log(a.value);
// console.log(b.value);



//using event binding using template rendering method
//   var acnum=a.value
//   var psw=b.value

//   let userDetails=this.userDetails
//   if(acnum in this.userDetails){
//   if(psw==userDetails[acnum]['password']){
//     alert('login success')
//   }
//   else{
//     alert('incorect password')
//   }
// }
// else{
//   alert('user not exist or incorrect ac number')
// }
// }


  // login(){
  //   alert('login clicked')
  // }
  

}




