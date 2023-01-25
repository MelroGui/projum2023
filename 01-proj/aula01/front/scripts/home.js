const uri = 'http://localhost:3000/gestao/pedidos';
var posts = [];

const load = () => {
    const options = { method: 'GET' };
    fetch(uri + '/readAll', options)
        .then(resp => resp.json())
        .then(resp => {
            posts = resp
            let usuario = localStorage.getItem('info');
            usuario = JSON.parse(usuario);
            document.querySelector("#nome").innerHTML = usuario.nome_user;     
            readCards();
        })
        .catch(err => console.error(err));
}

const readCards = () => {
    posts.forEach(e => {
        let post = card.cloneNode(true);
        post.classList.remove("modalpost");
        post.querySelector("#conteudo").innerHTML += e.conteudo;
        post.querySelector("#data").innerHTML += e.data != null ? e.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0] : e.data;
        document.querySelector(".main").appendChild(post);
    });
}