import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""


  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.uname
    var acno=this.acno
    var pswd=this.pswd
    const result=this.ds.register(acno,uname,pswd)
    if(result){                       // if nte akath ulla condition true akumbo mathrame if work akullu, so direct result nnu mathram koduthu
      alert("registered")
      this.router.navigateByUrl('')
    }
    else{
      alert('user already exist')
    }

    // let userDetails=this.ds.userDetails

    // alert('registered')
  }

}
