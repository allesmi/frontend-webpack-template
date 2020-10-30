import { MyComponent } from "./my-component/my-component";

export class MyClass {
    constructor() {
        this.message = "Hello World";

        const div = document.querySelector('main');
        this.child = new MyComponent(div);
    }
}