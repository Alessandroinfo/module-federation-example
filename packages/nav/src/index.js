const greetings = () => {
    const node = document.createElement('div');
    node.innerHTML = 'Header';
    node.style = 'padding: 1em; box-sizing: border-box;display: flex;background: aquamarine;font-family:sans-serif;'
    return node;
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(greetings());
});
