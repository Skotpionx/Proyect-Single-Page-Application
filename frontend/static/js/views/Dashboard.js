import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1> Bienvenido de vuelta, Juanmi .</h1>
            <p>
                Esto es un parrafo de prueba en la single page applicacion con Javascript pero sin frameworks.
            </p>        
            <p>
            <a href="/posts" data-link> View recent posts</a>
            </p>
        `;
    }
}