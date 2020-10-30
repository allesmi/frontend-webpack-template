import './my-component.css';

export class MyComponent {
    constructor(el) {
        el.innerHTML = '<div class="red">Hello World</div>';
    }
}