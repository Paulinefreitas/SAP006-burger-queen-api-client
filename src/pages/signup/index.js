const signup = () => {
    
  };
  
  return (
      `
    <div class="cadastro">
        <h1 class="nome-empresa">BURGER QUEEN</h1>
        <h3 class="tipo-pagina">Cadastro</h3>
        <form class="card-login-cadastro">
            <input type="text" name="nome" placeholder="Nome Completo"/>
            <input type="email" name="email" placeholder="E-mail"/>
            <input type="password" name="password" placeholder="Senha"/>
            <button type="submit" onclick={logar}>Cadastrar</button>
            <a href="/login">Já tenho cadastro</a>
        </form>
    </div>
      `
  )