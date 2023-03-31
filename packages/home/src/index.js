// import Header from 'nav/Header';
// import remoteService from 'nav/remoteService';
import fruit from 'nav/apple.jpg';

console.log(fruit);
const greetings = () => {
    const node = document.createElement('h1');
    node.innerHTML = 'App Shell';
    return node;
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(greetings());
    remoteService.init();
    // console.log(Header());
    // document.body.appendChild(Header());
});

