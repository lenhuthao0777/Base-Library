import html from "../js/core.js";
// import { connect } from "../js/store.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";

// const connector = connect();
function App() {
    return html`
    <section class="todoapp">
        ${Header()}
        ${TodoList()}
        ${Footer()}
    </section>
    `;
}
export default App;
