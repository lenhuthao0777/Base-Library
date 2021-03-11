import html from "../js/core.js";
// import { connect } from "../js/store.js";

// const connector = connect();
function Footer() {
    return html`
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
    `;
}
export default Footer;
