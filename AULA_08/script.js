var tentativas = 3;

function login() {
    // 1º Acessar o valor digitado nos campos USUARIO e SENHA
    const inputUsuario = document.getElementById("usuario");
    const inputSenha = document.getElementById("senha");

    if (!inputUsuario || !inputSenha) return;

    const cmapo_usuario = inputUsuario.value;
    const campo_senha = inputSenha.value;

    // 2º carregar os valores do localStorange
    const local_usuario = localStorage.getItem("usuario");
    const local_senha = localStorage.getItem("senha");

    // 3º Validar se o valores digitados são iguais aos valores armazenados no localStorage
    if (cmapo_usuario == local_usuario && campo_senha == local_senha) {
        alert("Login realizado com sucesso! 👍");
    } else {
        alert("Usuário ou senha inválidos! 👎");
    }
}


function cadastro() {
    // 1º Carregar os campos de cadastro
    // NOME, USUÁRIO, SENHA, PALAVRA-PASSE
    const inputUsuario = document.getElementById("usuario");
    const inputSenha = document.getElementById("senha");
    const inputNome = document.getElementById("nome");
    const inputChave = document.getElementById("chave");

    if (!inputUsuario || !inputSenha || !inputNome || !inputChave) return;

    const novo_usuario = inputUsuario.value;
    const novo_senha = inputSenha.value;
    const novo_nome = inputNome.value;
    const novo_chave = inputChave.value;

    // 2º Cadastrar os dados no localStorage
    // Ex.: localStorage.setItem("NOME", valor)
    if (novo_usuario === "" || novo_senha === "" || novo_nome === "" || novo_chave === "") {
        alert("Não pode haver campos vazios!");

        inputSenha.value = "";
        inputNome.value = "";
        inputUsuario.value = "";
        inputChave.value = "";
    } 
    else {
        localStorage.setItem("usuario", novo_usuario);
        localStorage.setItem("senha", novo_senha);
        localStorage.setItem("nome", novo_nome);
        localStorage.setItem("chave", novo_chave);

        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html"; 
    }
}


function recuperar() {
    // 1º Carregar os valores dos campos NOME e PALAVRA-PASSE
    const inputUsuario = document.getElementById("usuario");
    const inputChave = document.getElementById("chave");

    if (!inputUsuario || !inputChave) return;

    const recuperar_usuario = inputUsuario.value;
    const recuperar_chave = inputChave.value;

    // 2º Buscar no localStorage os valores de NOME e PALAVRA-PASSE
    const verificar_usuario = localStorage.getItem("usuario");
    const verificar_senha = localStorage.getItem("senha");
    const verificar_chave = localStorage.getItem("chave");


    // 3º Comparar se os valores carregados nos campos da tela
    // são compatíveis com os valores armazenados no localStorage.
    //
    // Se forem iguais, exibir a senha na tela ou em um alert.
    //
    // Se forem diferentes, notificar o usuário na tela ou em um alert
    // informando que os dados não são compatíveis.
    // Além disso, limpar os campos de entrada (inputs).
    if (recuperar_usuario === verificar_usuario && recuperar_chave === verificar_chave) {
        alert("A sua senha eh: " + verificar_senha)
    }
    else {
        tentativas--;
        if (tentativas > 0) {
            alert("Dados incorretos! Tentativas restantes: " + tentativas);
            inputUsuario.value = "";
            inputChave.value = ""; 
        } 
        else {
            alert("Dados incorretos! Bloqueado");
            inputUsuario.disabled = true;
            inputChave.disabled = true;
        }
    }


    // DESAFIO SEM I.AAAAA:
    //
    // Vocês devem implementar um controle de tentativas para a recuperação de senha.
    //
    // REGRAS:
    // Vocês devem validar a quantidade de tentativas incorretas
    // de NOME e PALAVRA-PASSE.
    //
    // Quando o usuário errar 3 vezes, vocês devem bloquear os campos (inputs)
    // e impedir que o usuário realize uma nova tentativa de recuperação de senha.
    //
    // Lembrem-se de salvar a quantidade de erros no localStorage.
}