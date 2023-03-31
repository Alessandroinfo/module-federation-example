import Header from 'nav/Header';

const Greetings = () => {
    const node = document.createElement('h1');
    node.innerHTML = 'App Shell';
    return node;
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(Greetings());
    document.body.appendChild(Header());
});

