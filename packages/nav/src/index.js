const greetings = () => {
    const node = document.createElement('h1');
    node.innerHTML = 'App Shell';
    return node;
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(greetings());
});
