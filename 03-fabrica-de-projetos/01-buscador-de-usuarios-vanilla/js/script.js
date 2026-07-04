const API_USUARIOS = 'https://dummyjson.com/users';
const TEXTO_NAO_INFORMADO = 'Não informado';

const formularioBusca = document.querySelector('#formulario-busca');
const campoBusca = document.querySelector('#campo-busca');
const botaoLimpar = document.querySelector('#botao-limpar');
const botaoRecarregar = document.querySelector('#botao-recarregar');
const mensagemStatus = document.querySelector('#mensagem-status');
const listaUsuarios = document.querySelector('#lista-usuarios');

let usuariosOriginais = [];
let estaCarregando = false;

function iniciarAplicacao() {
  formularioBusca.addEventListener('submit', (evento) => evento.preventDefault());
  campoBusca.addEventListener('input', filtrarUsuarios);
  botaoLimpar.addEventListener('click', limparBusca);
  botaoRecarregar.addEventListener('click', buscarUsuarios);

  buscarUsuarios();
}

async function buscarUsuarios() {
  mostrarLoading();

  try {
    const response = await fetch(API_USUARIOS);

    if (!response.ok) {
      throw new Error('Não foi possível carregar os usuários neste momento.');
    }

    const dados = await response.json();
    usuariosOriginais = Array.isArray(dados.users) ? dados.users : [];
    campoBusca.value = '';
    renderizarUsuarios(usuariosOriginais);
  } catch (erro) {
    usuariosOriginais = [];
    mostrarErro(erro.message);
  } finally {
    estaCarregando = false;
    atualizarBotoes();
  }
}

function filtrarUsuarios() {
  const termoBusca = campoBusca.value.trim().toLowerCase();

  if (!termoBusca) {
    renderizarUsuarios(usuariosOriginais);
    return;
  }

  const usuariosFiltrados = usuariosOriginais.filter((usuario) => {
    const nomeCompleto = obterNomeCompleto(usuario).toLowerCase();
    return nomeCompleto.includes(termoBusca);
  });

  renderizarUsuarios(usuariosFiltrados);
}

function renderizarUsuarios(usuarios) {
  limparLista();

  if (usuarios.length === 0) {
    mostrarEstadoVazio();
    return;
  }

  const fragmento = document.createDocumentFragment();

  usuarios.forEach((usuario) => {
    fragmento.appendChild(criarCardUsuario(usuario));
  });

  listaUsuarios.appendChild(fragmento);
  mostrarSucesso(usuarios.length);
}

function criarCardUsuario(usuario) {
  const card = document.createElement('article');
  card.classList.add('card-usuario');

  const titulo = document.createElement('h3');
  titulo.textContent = obterNomeCompleto(usuario);

  const listaDetalhes = document.createElement('dl');
  adicionarDetalhe(listaDetalhes, 'E-mail', usuario.email || TEXTO_NAO_INFORMADO);
  adicionarDetalhe(listaDetalhes, 'Telefone', usuario.phone || TEXTO_NAO_INFORMADO);
  adicionarDetalhe(listaDetalhes, 'Cidade', usuario.address?.city || TEXTO_NAO_INFORMADO);
  adicionarDetalhe(listaDetalhes, 'Empresa', usuario.company?.name || TEXTO_NAO_INFORMADO);

  card.append(titulo, listaDetalhes);
  return card;
}

function adicionarDetalhe(listaDetalhes, rotulo, valor) {
  const grupo = document.createElement('div');
  const termo = document.createElement('dt');
  const descricao = document.createElement('dd');

  termo.textContent = rotulo;
  descricao.textContent = valor;

  grupo.append(termo, descricao);
  listaDetalhes.appendChild(grupo);
}

function obterNomeCompleto(usuario) {
  const partesNome = [usuario.firstName, usuario.lastName].filter(Boolean);
  return partesNome.length > 0 ? partesNome.join(' ') : TEXTO_NAO_INFORMADO;
}

function mostrarLoading() {
  estaCarregando = true;
  limparLista();
  atualizarMensagem('Carregando usuários...', 'loading');
  atualizarBotoes();
}

function mostrarErro(mensagem) {
  limparLista();
  atualizarMensagem(`${mensagem} Clique em tentar novamente para recarregar.`, 'erro');
}

function mostrarEstadoVazio() {
  atualizarMensagem('Nenhum usuário encontrado para a busca atual.', 'vazio');
}

function mostrarSucesso(total) {
  const textoUsuario = total === 1 ? 'usuário encontrado' : 'usuários encontrados';
  atualizarMensagem(`${total} ${textoUsuario}.`, 'sucesso');
}

function atualizarMensagem(texto, classeEstado) {
  mensagemStatus.textContent = texto;
  mensagemStatus.className = `mensagem-status ${classeEstado}`;
}

function limparLista() {
  listaUsuarios.replaceChildren();
}

function limparBusca() {
  campoBusca.value = '';
  renderizarUsuarios(usuariosOriginais);
  campoBusca.focus();
}

function atualizarBotoes() {
  campoBusca.disabled = estaCarregando;
  botaoLimpar.disabled = estaCarregando;
  botaoRecarregar.disabled = estaCarregando;
}

iniciarAplicacao();
