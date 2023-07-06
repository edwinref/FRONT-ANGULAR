import { Component, OnInit } from '@angular/core';
import {UserService} from './Users.service';
import {Users} from './Users';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
    firstName: string;
    email: string;
    password: string;
    constructor(private userService: UserService) {}

    saveUser() {
        const newUser: Users = {
            id: null,
            prenom: this.firstName,
            email: this.email,
            password: this.password,
            role: 'user'
        };

        this.userService.saveuserY(newUser).subscribe(
            (savedUser) => {
                console.log('saaaaaaaave' + newUser.email);

                console.log('User saved successfully:', savedUser);
                this.firstName = '';
                this.email = '';
                this.password = '';
            },
            (error) => {
                console.error('Error saving user:', error);
            }
        );
    }

    ngOnInit(): void {
    }
}
