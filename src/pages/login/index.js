const logar = () => {
  //TODO login de usuário
};

return (
    `
    <div class="login">
        <h1 class="nome-empresa">BURGER QUEEN</h1>
        <h3 class="tipo-pagina">LOGIN</h3>
        <form class="card-login-cadastro">
            <input type="email" name="email" placeholder="E-mail"/>
            <input type="password" name="password" placeholder="Senha"/>
            <button type="submit" onclick={logar}>Entrar</button>
            <a href="/cadastro">Cadastro</a>
        </form>
    </div>
    `
)