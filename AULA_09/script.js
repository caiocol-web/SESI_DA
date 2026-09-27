let transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

function atualizarTela() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    let saldo = 0;
    let sinal = 0;
    let filtro = document.getElementById('filtro').value;

    let totalReceitas = 0;

for (const t of transacoes) {
    if (t.tipo === 'receita') {
        totalReceitas += t.valor;
    }
}

    for (const t of transacoes) {
        if (filtro !== 'todos' && t.tipo !== filtro) {
            continue;
        }

        let porcentagem = 0;
        if (totalReceitas > 0) {
            porcentagem = (t.valor / totalReceitas) * 100;
        }

        if (t.tipo === 'receita') {
            sinal = '+';
            saldo += t.valor;
             texto = '<li>' + t.descricao + ': ' + sinal + ' R$ ' + t.valor + ' <button onclick="excluir(' + t.id + ')">Excluir</button></li>';
        }
        else {
            sinal = '-';
            saldo -= t.valor;
            texto = '<li>' + t.descricao + ': ' + sinal + ' R$ ' + t.valor + ' (' + porcentagem.toFixed(1) + '%) <button onclick="excluir('+ t.id +')">Excluir</button></li>';
        }
        lista.innerHTML += texto;
    }

    document.getElementById('saldo').textContent = 'R$ ' + saldo;
}
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    transacoes.push({
        id: Date.now(),
        descricao: document.getElementById('descricao').value,
        valor: Number(document.getElementById('valor').value),
        tipo: document.getElementById('tipo').value
    });

    localStorage.setItem('transacoes', JSON.stringify(transacoes));
    atualizarTela();
    e.target.reset();
});

document.getElementById('filtro').addEventListener('change', atualizarTela);

atualizarTela();

function excluir(id) {
    let novaLista = [];

    for (const t of transacoes) {
        if (t.id !== id) {
            novaLista.push(t);
        }
    }

    transacoes = novaLista;
    localStorage.setItem('transacoes', JSON.stringify(transacoes));
    atualizarTela();
}



