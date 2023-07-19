// # Instal Angular CLI : npm install - g @angular/cli
// # Starting a New Angular Project : ng new my-app
// # Run the project : ng serve
// # Creating Components : ng generate component MyComponent | shorthand => ng g c MyComponent
// # Components files : **.component.html (view) - **.component.css (stylesheet) - **.component.js (logic/controler) - **.component.spec.js (testing)

/* 
# Lifecycle Hooks:
ngOnChanges: Runs after an input/output binding has been changed.
ngOnInit: Runs after a component has been initialized. Input bindings are ready.
ngDoCheck: Allows developers to perform custom actions during change detection.
ngAfterContentInit: Runs after the content of a component has been initialized.
ngAfterContentChecked: Runs after every check of a component's content.
ngAfterViewInit: Runs after the view of a component has been initialized.
ngAfterViewChecked: Runs after every check of a component's view.
ngOnDestroy: Runs before a component is destroyed.
*/

// # Directives :

// A: Attribute Directives
// ngClass : Adds and removes a set of CSS classes.
<div [ngClass] = "isSpecial ? 'special' : ''" > This div is special</div >

// ngStyle : Adds and removes a set of HTML styles.
<div [ngStyle]="{ 'font-weight': 2 + 2 === 4 ? 'bold' : 'normal',}">
 This div is initially bold.
</div>

// ngModel : Adds two-way data binding to an HTML form element.
// First: this directive requires the FormsModule to be added to the @NgModule() directive.
import { FormsModule } from '@angular/forms';
@NgModule({
 imports: [
   BrowserModule,
   FormsModule // <--- import into the NgModule
 ],
})
export class AppModule { }
// Secondly, we can bind the [(ngModel)] directive on an HTML <form> element and set it equal to the property.
<label for="example-ngModel">[(ngModel)]:</label>
<input [(ngModel)]="currentItem.name" id="example-ngModel">

// B: Structural Directives

// ngIf : A directive that will conditionally create or remove elements from the template.
  <p * ngIf="isActive" > Hello World! < /p>

// ngFor : Loops through an element in a list/array.
< div * ngFor="let item of items" > {{ item.name }}</div>

// ngSwitch 
<ul [ngSwitch]="food">
  <li *ngSwitchCase="'Burger'">Burger</li>
  <li *ngSwitchCase="'Pizza'">Pizza</li>
  <li *ngSwitchCase="'Spaghetti'">Spaghetti</li>
  <li *ngSwitchDefault>French Fries</li>
  < /ul>

// C: Custom Directives
// We're not limited to directives defined by Angular. We can create custom directives with the following command: ng generate directive MyDirective | Shorthand => ng g d MyDirective
// To identify directives, classes are decorated with the @Directive() decorator. Here's what a common directive would look like:
import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appMyDirective]'
})
export class appMyDirective {
  constructor(private elRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }
}


// # Pipes : are known for transforming content but not directly affecting data. They're mainly utilized in templates like so:
// DatePipe : {{ value_expression | date: 'short' }}
// {{ 'Hello world' | uppercase }} \ {{ 'Hello World' | lowercase }} \ {{ 1.3495 | currency:'CAD' }} \ {{ 3.14159265359 | number }}


// # Events :

// - onClick
// view
<button (click)="handleClick()" > Click me < /button>
// controler
import { Component } from '@angular/core';
@Component({
  selector: 'app-component',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class ComponentNameComponent {
  handleClick() {
    // Handle the click event
    console.log('Button clicked!');
    // Add your custom logic here
  }
}




