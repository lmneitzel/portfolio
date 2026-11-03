/*
 * CONTEÚDO DO SITE
 * ------------------------------------------------------------------
 * Edite este arquivo para atualizar textos, experiências, projetos,
 * conhecimentos e links. Não é preciso mexer no HTML, CSS ou main.js.
 *
 * Dica: qualquer trecho escrito como [Preencher: ...] aparece no site
 * destacado em tracejado, para lembrar que ainda falta conteúdo real.
 * Substitua o trecho inteiro (inclusive os colchetes) pelo texto final.
 */
window.SITE_CONTENT = {
  /* Dados gerais (usados no site e no currículo gerado em curriculo.html). */
  perfil: {
    nome: "Luis Miguel Neitzel",
    titulo: "Analista e Desenvolvedor de Sistemas",
    local: "Domingos Martins - ES",
    // Endereço publicado do site; aparece no rodapé do currículo. Ex.: "https://usuario.github.io/portfolio/"
    site: "https://lmneitzel.github.io/portifolio/",
    resumo: "Sou Analista e Desenvolvedor de Sistemas, atuando na área de tecnologia desde 2018. Possuo experiência no desenvolvimento e manutenção de sistemas, com forte conhecimento em Administração Pública, análise de negócios e soluções de software. Tenho foco em desenvolvimento backend, arquitetura de sistemas e aprimoramento contínuo dos meus conhecimentos técnicos."
  },

  /* Links de contato. Deixe github/telefone como "" para ocultá-los. */
  contato: {
    email: "luismiguelneitzel@gmail.com",
    linkedin: "https://www.linkedin.com/in/luismiguelneitzel/",
    github: "https://github.com/lmneitzel", 
    telefone: ""
  },

  /* Seção "Sobre mim": cada item vira um parágrafo. */
  sobre: {
    paragrafos: [
      "Sou Analista e Desenvolvedor de Sistemas, com experiência desde 2018 no desenvolvimento, manutenção e evolução de soluções tecnológicas voltadas à Administração Pública.",
      "Ao longo dessa trajetória, tive a oportunidade de contribuir e liderar projetos relevantes para o setor, com destaque para o desenvolvimento de soluções relacionadas às prestações de contas estaduais de diferentes estados, como Espírito Santo, São Paulo, Rondônia e Minas Gerais, entre outros.",
      "Minha experiência foi construída a partir de uma trajetória que passou pelas áreas de atendimento ao cliente, controle de qualidade e desenvolvimento de sistemas. Essa vivência em diferentes etapas do ciclo de desenvolvimento me proporcionou uma compreensão ampla tanto das necessidades dos usuários quanto dos processos e regras de negócio envolvidos, consolidando um conhecimento significativo em Administração Pública, especialmente na área contábil.",
      "Atualmente, atuo como Analista de Sistemas, participando da análise, especificação e implementação de novas funcionalidades, além de contribuir com orientações técnicas e apoio a outros desenvolvedores na construção e evolução das soluções. No dia a dia, trabalho principalmente com PostgreSQL, Java e GWT, além de participar da organização e melhoria de processos.",
      "Paralelamente à minha atuação profissional, desenvolvo projetos pessoais utilizando Java, Spring Boot e APIs REST, buscando aprofundar meus conhecimentos em arquitetura de software, sistemas modulares, segurança, qualidade de código, e modelagem de bancos de dados.",
      "Acredito que meu principal diferencial está na capacidade de unir conhecimento técnico e domínio do negócio. Compreender como os processos funcionam, identificar dificuldades reais dos usuários e transformar essas necessidades em soluções tecnológicas eficientes é o que orienta minha forma de trabalhar e desenvolver sistemas."
    ],
    interesses: [
      "Contabilidade Público",
      "Modelagem de Dados",
      "Arquitetura de Backend",
      "Segurança de Aplicações",
      "Escalabilidade"
    ]
  },

  /* Diferenciais: cartões da seção "Sobre mim" e bloco do currículo. */
  diferenciais: [
    { icone: "landmark", titulo: "Domínio da Contabilidade Pública", texto: "Conhecimento das regras e rotinas contábeis do setor público aplicado ao desenvolvimento de sistemas." },
    { icone: "layers"  , titulo: "Modelagem de Distemas"           , texto: "Atenção à estrutura de dados e ao desenho do sistema desde o início do projeto." },
    { icone: "server"  , titulo: "Escalabilidade"                  , texto: "Sistemas pensados para crescer em volume de dados e de usuários." },
    { icone: "shield"  , titulo: "Segurança"                       , texto: "Preocupação com proteção, controle de acesso e integridade das informações." }
  ],

  /*
   * Linha do tempo da carreira (mais recente primeiro).
   * Para adicionar uma etapa, copie um bloco { ... } inteiro e edite.
   * resumo: uma frase sobre o que aquela etapa representou na sua evolução.
   * tags: áreas/tecnologias daquela etapa.
   */
  experiencias: [
    {
      cargo: "Analista de Sistemas",
      empresa: "EL Produções de Software",
      periodo: "out. 2026 – atual",
      local: "", // opcional, ex.: "Cidade/UF · Presencial"
      resumo: "Atuação na análise de necessidades da administração pública e na transformação de desafios operacionais em soluções de software, integrando conhecimento de gestão pública, legislação, regras de negócio e desenvolvimento de sistemas. A experiência em atendimento, testes, análise funcional e programação permite avaliar demandas sob diferentes perspectivas, compreendendo tanto a necessidade do usuário quanto os impactos funcionais e técnicos das soluções propostas.",
      atividades: [
        "Análise e detalhamento de demandas relacionadas aos sistemas de gestão pública.",
        "Levantamento, interpretação e validação de requisitos funcionais.",
        "Tradução de necessidades de negócio em especificações para desenvolvimento.",
        "Análise de regras de negócio e requisitos legais aplicáveis.",
        "Investigação de inconsistências e avaliação de impactos nos sistemas.",
        "Participação na definição, implementação e validação de soluções.",
        "Utilização de conhecimentos em Java, SQL e PostgreSQL para apoiar análises e decisões técnicas.",
        "Atuação na interface entre usuários, processos administrativos e equipe de desenvolvimento."
      ],
      tags: ["Análise de sistemas", "Análise de negócios", "Requisitos", "Java", "SQL", "PostgreSQL"]
    },
    {
      cargo: "Desenvolvedor de Sistemas",
      empresa: "EL Produções de Software",
      periodo: "set. 2023 – out. 2026",
      local: "",
      resumo: "Atuação direta no desenvolvimento de sistemas, inicialmente com foco em banco de dados e posteriormente ampliando a participação para a implementação e manutenção de funcionalidades em Java. Aplicação conjunta do conhecimento técnico e funcional para investigar problemas, corrigir inconsistências e desenvolver melhorias nos sistemas de gestão pública.",
      atividades: [
        "Desenvolvimento e manutenção de consultas, funções e rotinas SQL.",
        "Análise e manipulação de dados em PostgreSQL.",
        "Implementação e manutenção de funcionalidades em Java.",
        "Investigação e correção de erros em sistemas existentes.",
        "Análise de regras de negócio durante a implementação de soluções.",
        "Contribuição para a evolução e confiabilidade dos sistemas."
      ],
      tags: ["PostgreSQL", "Java", "SQL"]
    },
    {
      cargo: "Analista de Controle de Qualidade",
      empresa: "EL Produções de Software",
      periodo: "set. 2021 – ago. 2023",
      local: "",
      resumo: "Análise e validação de ocorrências identificadas pelos usuários, aprofundando a investigação de problemas que ultrapassavam o escopo do atendimento inicial e qualificando as demandas encaminhadas ao desenvolvimento, para que correções e melhorias fossem direcionadas com maior clareza e precisão.",
      atividades: [
        "Análise e reprodução de erros reportados pelos usuários.",
        "Execução de testes funcionais e validação de cenários.",
        "Investigação de inconsistências e identificação de possíveis causas.",
        "Verificação do comportamento esperado conforme as regras de negócio.",
        "Documentação e encaminhamento de demandas qualificadas para desenvolvimento."
      ],
      tags: ["Modelagem de sistemas", "Resolução de problemas", "Testes funcionais"]
    },
    {
      cargo: "Suporte a Sistemas de Gestão Pública",
      empresa: "EL Produções de Software",
      periodo: "set. 2018 – ago. 2021",
      local: "",
      resumo: "Atendimento e suporte aos usuários de sistemas voltados à contabilidade pública, auxiliando na utilização das funcionalidades e na resolução de dúvidas relacionadas às rotinas da administração pública.",
      atividades: [
        "Atendimento e suporte técnico funcional aos usuários do sistema.",
        "Orientação sobre funcionalidades e procedimentos operacionais.",
        "Identificação de dificuldades e inconsistências relatadas pelos usuários.",
        "Compreensão dos processos de trabalho e das necessidades dos clientes.",
        "Encaminhamento de ocorrências que demandavam análises mais aprofundadas."
      ],
      tags: ["Contabilidade pública", "Resolução de problemas", "Suporte ao usuário"]
    }
  ],

  /* Formação acadêmica e cursos (aparece no currículo). */
  formacao: [
    { curso: "Bacharelado em Administração"                      , instituicao: "Multivix", periodo: "2018-2021" }, 
    { curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas", instituicao: "Multivix", periodo: "2022-2023" }, 
    { curso: "Pós Graduação em Análise e Projetos de Sistemas"   , instituicao: "Multivix", periodo: "2024-2025" }
  ],
  /* Texto exibido logo abaixo da seção "Formação acadêmica" do site. */
  formacaoComplemento: "Complemento minha formação com cursos e certificações em **Java, PostgreSQL, desenvolvimento de software, otimização de bancos de dados, Spring Framework, Git e contabilidade pública**, buscando aprofundar conhecimentos e desenvolver soluções cada vez mais eficientes e bem estruturadas.",

  /*
   * Projetos pessoais.
   * status: "concluido" | "finalizado" | "em-desenvolvimento" | "planejado"
   * imagem: caminho da captura de tela (deixe "" até ter uma real).
   * demo / repositorio: links reais; deixe "" para ocultar o botão.
   * destaque: true exibe o cartão em largura maior.
   */
  projetos: [
    {
      titulo: "FINCONT",
      status: "em-desenvolvimento",
      destaque: true,
      descricao: "O FINCONT é um sistema de gestão empresarial desenvolvido para atender às necessidades de empresas do setor privado, integrando processos, centralizando informações e proporcionando mais organização, controle e eficiência na gestão do negócio.",
      // Ajuste o status de cada funcionalidade conforme o andamento real.
      funcionalidades: [
        { nome: "Cliente e Filiais"            , status: "finalizado" },
        { nome: "Controle de Permissão"        , status: "finalizado" },
        { nome: "Planos Conforme Necessidade"  , status: "finalizado" },
        { nome: "Acompanhamento de Processos"  , status: "finalizado" },
        { nome: "Controle de Receita e Despesa", status: "finalizado" }, 
        { nome: "Controle de Estoque"          , status: "finalizado" },
        { nome: "Folha de Pagamento"           , status: "em-desenvolvimento" },
        { nome: "Gestão Fiscal"                , status: "em-desenvolvimento" },
      ],
      tecnologias: ["Java", "Spring Boot", "API REST", "React", "PostgreSQL"],
      imagem: "assets/img/MEU_SISTEMA_PESSOAL.png",
      demo: "",
      repositorio: ""
    }
    /*
    , {
      titulo: "Nome do projeto",
      status: "concluido",
      destaque: false,
      descricao: "Descrição curta.",
      funcionalidades: [],
      tecnologias: ["Java"],
      imagem: "assets/img/projetos/meu-projeto.webp",
      demo: "https://...",
      repositorio: "https://github.com/..."
    }
    */
  ],

  /*
   * Conhecimentos técnicos.
   * origem: "profissional" (usado no trabalho) | "projetos" (aplicado em projetos pessoais)
   * Um item pode ter as duas: ["profissional", "projetos"].
   */
  conhecimentos: [
    {
      categoria: "Desenvolvimento",
      icone: "code",
      itens: [
        { nome: "Java", origem: ["profissional", "projetos"] }, 
        { nome: "Spring Boot", origem: ["projetos"] }, 
        { nome: "React", origem: ["projetos"] }
      ]
    },
    {
      categoria: "Banco de dados",
      icone: "database",
      itens: [
        { nome: "Modelagem de dados", origem: ["profissional", "projetos"] },
        { nome: "PostgreSQL", origem: ["profissional", "projetos"] }, 
        { nome: "SQL Server", origem: ["profissional"] }
      ]
    },
    {
      categoria: "Sistemas de gestão",
      icone: "layers",
      itens: [
        { nome: "ERP", origem: ["profissional", "projetos"] }, 
        { nome: "Modelagem de Sistemas", origem: ["profissional", "projetos"] }
      ]
    },
    {
      categoria: "Gestão pública",
      icone: "landmark",
      itens: [
        { nome: "Contabilidade Público", origem: ["profissional"] },
        { nome: "Gestão de Materias e Processos", origem: ["profissional"] }
      ]
    }
  ]
};
