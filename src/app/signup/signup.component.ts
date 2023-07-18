import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    inputText: string; // Property to store the input value

    constructor() { }

    ngOnInit() {}
    onInputChange(event: Event) {
        const message = (event.target as HTMLInputElement).value;
        const fieldRegex = /(\w+)\s+:\s+(.*)/; // Regular expression to match each field and its value

        const fields: { [key: string]: string } = {};

        // Extract fields using regular expression
        const lines = message.split('\n');
        for (const line of lines) {
            const match = line.match(fieldRegex);
            if (match && match.length === 3) {
                const fieldName = match[1].trim();
                const fieldValue = match[2].trim();
                fields[fieldName] = fieldValue;
                console.log(fieldName + '=' + fieldValue);
            }
        }

        // Display the extracted fields
        this.inputText = '';
        for (const fieldName in fields) {
            if (fields.hasOwnProperty(fieldName)) {
                this.inputText += `${fieldName}: ${fields[fieldName]}\n`;
            }
        }
    }

}
