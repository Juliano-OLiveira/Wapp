const exemplo_de_contato = [
  {
    id: 0,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_0.jpg"),
    nome: "Jorge Antônio"
  },
  {
    id: 1,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_1.jpg"),
    nome: "Ronaldo"
  },
  {
    id: 2,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_2.jpg"),
    nome: "Jorge"
  },
  {
    id: 3,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_3.jpg"),
    nome: "Ilha dos hue"
  },
  {
    id: 4,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_4.jpg"),
    nome: "Antônio"
  },
  {
    id: 5,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_5.jpg"),
    nome: "Pedro fut"
  },
  {
    id: 6,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_6.jpg"),
    nome: "M. Clara"
  },
  {
    id: 7,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_7.jpg"),
    nome: "Carlos"
  },
  {
    id: 8,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_8.jpg"),
    nome: "Caio"
  },
  {
    id: 9,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_9.jpg"),
    nome: "Eduardo"
  },
  {
    id: 10,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_10.jpg"),
    nome: "Família Silva"
  },
  {
    id: 11,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_11.jpg"),
    nome: "João Pereira"
  }
];

const exemplo_de_conversas = [
  {
    id: 0,
    imagem: require("../images/pessoa_0.jpg"),
    nome: "Jorge Antônio",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0,
    numero: "+55 24 99999999"
  },
  {
    id: 1,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_1.jpg"),
    nome: "Ronaldo",
    ultimo_mensageiro: "Ronaldo Anxite",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0
  },
  {
    id: 2,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_2.jpg"),
    nome: "Jorge",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 10
  },
  {
    id: 3,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_3.jpg"),
    nome: "Ilha dos hue",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 99
  },
  {
    id: 4,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_4.jpg"),
    nome: "Antônio",
    ultimo_mensageiro: "Antônio",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 13
  },
  {
    id: 5,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_5.jpg"),
    nome: "Pedro fut",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 5
  },
  {
    id: 6,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_6.jpg"),
    nome: "M. Clara",
    ultimo_mensageiro: "Maria Clara",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0
  },
  {
    id: 7,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_7.jpg"),
    nome: "Carlos",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 20
  },
  {
    id: 8,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_8.jpg"),
    nome: "Caio",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 90
  },
  {
    id: 9,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_9.jpg"),
    nome: "Eduardo",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 18
  },
  {
    id: 10,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_10.jpg"),
    nome: "Família Silva",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0
  },
  {
    id: 11,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_11.jpg"),
    nome: "João Pereira",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0
  }
];

const exemplo_de_ligacoes = [
  {
    id: 0,
    imagem: require("../images/pessoa_0.jpg"),
    nome: "Jorge Antônio",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0,
    numero: "+55 24 99999999",
    call: "call-received",
    data_ligacao: "10 de março 21:30",
    tipo_de_ligacao: "cel"
  },
  {
    id: 1,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_1.jpg"),
    nome: "Ronaldo",
    ultimo_mensageiro: "Ronaldo Anxite",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0,
    call: "call-made",
    data_ligacao: "24 de outubro 21:30",
    tipo_de_ligacao: "video"
  },
  {
    id: 2,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_2.jpg"),
    nome: "Jorge",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 10,
    call: "call-received",
    data_ligacao: "01 de janeiro 21:30",
    tipo_de_ligacao: "cel"
  },
  {
    id: 3,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_3.jpg"),
    nome: "Ilha dos hue",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 99,
    call: "call-made",
    data_ligacao: "24 de novembro 21:30",
    tipo_de_ligacao: "cel"
  },
  {
    id: 4,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_4.jpg"),
    nome: "Antônio",
    ultimo_mensageiro: "Antônio",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 13,
    call: "call-received",
    data_ligacao: "Hoje 12:00",
    tipo_de_ligacao: "video"
  },
  {
    id: 5,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_5.jpg"),
    nome: "Pedro fut",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 5,
    call: "call-made",
    data_ligacao: "24 de outubro 21:30",
    tipo_de_ligacao: "cel"
  },
  {
    id: 6,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_6.jpg"),
    nome: "M. Clara",
    ultimo_mensageiro: "Maria Clara",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0,
    call: "call-made",
    data_ligacao: "19 de outubro 21:30",
    tipo_de_ligacao: "cel"
  },
  {
    id: 7,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_7.jpg"),
    nome: "Carlos",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 20,
    call: "call-received",
    data_ligacao: "28 de outubro 21:30",
    tipo_de_ligacao: "cel"
  },
  {
    id: 8,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_8.jpg"),
    nome: "Caio",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 90,
    call: "call-made",
    data_ligacao: "26 de outubro 21:30",
    tipo_de_ligacao: "video"
  },
  {
    id: 9,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_9.jpg"),
    nome: "Eduardo",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 18,
    call: "call-received",
    data_ligacao: "27 de outubro 21:30",
    tipo_de_ligacao: "cel"
  },
  {
    id: 10,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_10.jpg"),
    nome: "Família Silva",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0,
    call: "call-received",
    data_ligacao: "21 de outubro 21:30",
    tipo_de_ligacao: "video"
  },
  {
    id: 11,
    numero: "+55 24 99999999",
    imagem: require("../images/pessoa_11.jpg"),
    nome: "João Pereira",
    ultimo_mensageiro: "Você",
    ultima_mensagem: "Aonde você está ?",
    horario_ultima_mensagem: "11:45",
    mensagens_nao_lida: 0,
    call: "call-received",
    data_ligacao: "24 de outubro 21:30",
    tipo_de_ligacao: "cel"
  }
];

const exemplo_de_conversa_pessoal = [
  {
    id: 0,
    horario_mensagem: "11:20",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 1,
    horario_mensagem: "11:22",
    usuario: "1",
    mensagem: "Logo logo, combinado?"
  },
  {
    id: 2,
    horario_mensagem: "11:24",
    usuario: "2",
    mensagem: "Beleza sem problema"
  },
  {
    id: 3,
    horario_mensagem: "11:26",
    usuario: "2",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 4,
    horario_mensagem: "11:26",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 5,
    horario_mensagem: "11:28",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 6,
    horario_mensagem: "11:30",
    usuario: "2",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 7,
    horario_mensagem: "12:20",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 8,
    horario_mensagem: "12:25",
    usuario: "2",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 9,
    horario_mensagem: "12:27",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 10,
    horario_mensagem: "12:38",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 11,
    horario_mensagem: "12:40",
    usuario: "2",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 12,
    horario_mensagem: "12:41",
    usuario: "2",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 13,
    horario_mensagem: "12:50",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 14,
    horario_mensagem: "12:51",
    usuario: "2",
    mensagem: "Vamos resolver essa parada :-)"
  },
  {
    id: 15,
    horario_mensagem: "12:52",
    usuario: "1",
    mensagem: "Vamos resolver essa parada :-)"
  }
];

export default {
  exemplo_de_contato,
  exemplo_de_conversas,
  exemplo_de_ligacoes,
  exemplo_de_conversa_pessoal
};
