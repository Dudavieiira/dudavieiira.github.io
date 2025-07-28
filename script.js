function aumentarFonte() {
  const currentSize = localStorage.getItem("fonteGrande");
  if (currentSize === "ativo") {
    document.body.style.fontSize = "";
    localStorage.setItem("fonteGrande", "inativo");
  } else {
    document.body.style.fontSize = "1.4rem";
    localStorage.setItem("fonteGrande", "ativo");
  }
}

function modoNoturno() {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");

  if (document.body.classList.contains("bg-dark")) {
    localStorage.setItem("modoNoturno", "ativo");
  } else {
    localStorage.setItem("modoNoturno", "inativo");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("modoNoturno") === "ativo") {
    document.body.classList.add("bg-dark", "text-white");
  }

  if (localStorage.getItem("fonteGrande") === "ativo") {
    document.body.style.fontSize = "1.4rem";
  }
});

function enviarMensagem() {
  const input = document.getElementById("chat-input");
  const mensagem = input.value.trim();
  if (mensagem === "") return;

  adicionarMensagem("Você", mensagem);
  responderMensagem(mensagem.toLowerCase());
  input.value = "";
}

function adicionarMensagem(remetente, texto) {
  const chat = document.getElementById("chat-window");
  const msgDiv = document.createElement("div");

  const classe = remetente === "Você" ? "text-info" : "text-success";
  msgDiv.innerHTML = `<strong class="${classe}">${remetente}:</strong> ${texto}`;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}

function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function responderMensagem(perguntaOriginal) {
  const pergunta = removerAcentos(perguntaOriginal.toLowerCase());

  let resposta =
    "Desculpe, ainda não sei responder isso. Tente outra palavra-chave.";

  if (
    ["oi", "ola", "bom dia", "boa tarde", "boa noite"].some((g) =>
      pergunta.includes(g)
    )
  ) {
    resposta =
      "Olá! 👋 Digite uma palavra-chave sobre sua dúvida, como: 'verificacao', 'whatsapp', 'golpe' ou 'denuncia'.";
  } else if (pergunta.includes("whatsapp")) {
    resposta =
      "Para ativar a verificação em duas etapas no WhatsApp, veja este vídeo: https://youtu.be/JnVyH9O4Yqg";
  } else if (pergunta.includes("google")) {
    resposta =
      "Para ativar a verificação em duas etapas no Google, veja este vídeo: https://youtu.be/X6N2jS5D7V4";
  } else if (pergunta.includes("facebook")) {
    resposta =
      "Para ativar a verificação em duas etapas no Facebook, veja este vídeo: https://youtu.be/9C5dB5HJ1A8";
  } else if (pergunta.includes("verificacao")) {
    resposta =
      "Você pode ativar a verificação em duas etapas nas configurações de segurança da sua conta, como no WhatsApp, Google ou Facebook.";
  } else if (pergunta.includes("denuncia") || pergunta.includes("denunciar")) {
    resposta =
      "Você pode denunciar ligando para o Disque 100, ou registrar um boletim na Delegacia Virtual: https://delegaciavirtual.sids.mg.gov.br";
  } else if (pergunta.includes("procon")) {
    resposta =
      "Para registrar reclamações no Procon, acesse: https://www.consumidor.gov.br";
  } else if (pergunta.includes("golpe")) {
    resposta =
      "Golpes digitais são tentativas de enganar as pessoas por mensagens, ligações ou e-mails. Sempre confirme antes de compartilhar dados ou fazer transferências.";
  } else if (pergunta.includes("senha")) {
    resposta =
      "Evite senhas fracas como datas ou nomes. Use letras maiúsculas, minúsculas, números e símbolos. Veja mais: https://youtu.be/6ejZz1Mz4gc";
  } else if (pergunta.includes("vazamento")) {
    resposta =
      "Verifique se seu e-mail foi vazado em: https://haveibeenpwned.com";
  } else if (pergunta.includes("pix")) {
    resposta =
      "Sempre confirme com a pessoa por ligação antes de fazer transferências por Pix.";
  } else if (pergunta.includes("codigo")) {
    resposta =
      "Nunca compartilhe códigos recebidos por SMS ou WhatsApp. Isso é golpe!";
  } else if (pergunta.includes("ligacao")) {
    resposta =
      "Bancos nunca pedem senhas ou códigos por telefone. Desligue se receber esse tipo de ligação.";
  } else if (pergunta.includes("email")) {
    resposta =
      "Não clique em links suspeitos de e-mails. Verifique o remetente antes de abrir.";
  } else if (pergunta.includes("ajuda")) {
    resposta =
      "Para ajuda urgente, ligue 190 ou Disque 100. Para denunciar online, acesse: https://delegaciavirtual.sids.mg.gov.br";
  } else if (pergunta.includes("cartao")) {
    resposta =
      "Se seu cartão foi clonado, ligue para o número do banco e bloqueie imediatamente.";
  } else if (pergunta.includes("fake news")) {
    resposta =
      "Antes de compartilhar, verifique se a notícia é verdadeira em: https://www.aosfatos.org ou https://www.boatos.org";
  } else if (
    pergunta.includes("celular foi roubado") ||
    pergunta.includes("roubaram meu celular")
  ) {
    resposta =
      "Se o seu celular foi roubado, entre em contato com sua operadora para bloquear o chip e acesse https://celularseguro.mj.gov.br para registrar e bloquear o aparelho!";
  } else if (
    pergunta.includes("telefone clonado") ||
    pergunta.includes("celular clonado")
  ) {
    resposta =
      "Se seu telefone foi clonado, entre em contato com sua operadora, ative a verificação em duas etapas e avise seus contatos imediatamente.";
  } else if (
    pergunta.includes("pix errado") ||
    pergunta.includes("fiz um pix errado")
  ) {
    resposta =
      "Se fez um Pix por engano, entre em contato com o banco o mais rápido possível e registre um boletim de ocorrência.";
  } else if (
    pergunta.includes("whatsapp bloqueado") ||
    pergunta.includes("nao consigo acessar whatsapp")
  ) {
    resposta =
      "Se você não consegue acessar seu WhatsApp, entre no site oficial: https://www.whatsapp.com/contact e selecione 'Perdi acesso à minha conta'.";
  } else if (pergunta.includes("como identificar golpe")) {
    resposta =
      "Desconfie de mensagens que pedem dinheiro, dados ou urgência. Nunca compartilhe códigos ou clique em links desconhecidos.";
  } else if (
    pergunta.includes("site seguro") ||
    pergunta.includes("como saber se site e seguro")
  ) {
    resposta =
      "Verifique se o site começa com 'https://' e tem um cadeado ao lado do endereço. Se não tiver, evite inserir dados pessoais.";
  } else if (
    pergunta.includes("compartilhei codigo") ||
    pergunta.includes("enviei codigo")
  ) {
    resposta =
      "Se você compartilhou um código, sua conta pode ter sido comprometida. Tente recuperar a conta e entre em contato com o suporte imediatamente.";
  } else if (
    pergunta.includes("ligacao do banco") ||
    pergunta.includes("banco ligou")
  ) {
    resposta =
      "Bancos nunca pedem senha ou código por telefone. Desligue e ligue diretamente para o número oficial do banco.";
  } else if (pergunta.includes("cai em golpe")) {
    resposta =
      "Se você caiu em um golpe, registre um boletim de ocorrência na Delegacia Virtual e entre em contato com seu banco.";
  } else if (
    pergunta.includes("fui enganado") ||
    pergunta.includes("me enganaram")
  ) {
    resposta =
      "Você pode denunciar pelo Disque 100 ou registrar um boletim em: https://delegaciavirtual.sids.mg.gov.br";
  } else if (
    pergunta.includes("senha fraca") ||
    pergunta.includes("senha forte")
  ) {
    resposta =
      "Evite usar datas ou nomes como senha. Prefira algo como: Exemplo@123.";
  } else if (pergunta.includes("whatsapp clonado")) {
    resposta =
      "Se seu WhatsApp foi clonado, envie um e-mail para support@whatsapp.com com seu número completo e escreva 'Perdido/roubado: desative minha conta'.";
  }

  adicionarMensagem("Atendente", resposta);
}
