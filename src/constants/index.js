import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  devburguer,
  manoelserra,
  consultora,
  restaurantefood,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "cta",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
  {
    id: "curriculo",
    title: "Currículo",
    href: "https://drive.google.com/file/d/1ft12OYIh8VN4cAHXzbkkCoZTMUoKpynp/view?usp=drive_link",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Figma",
    icon: figma,
    iconBg: "#E6DEDD",
    points: [
      "Criação de protótipos interativos e wireframes para aplicativos e websites.",
      "Desenvolvimento de designs responsivos, garantindo uma experiência consistente em diferentes dispositivos.",
      "Colaboração com equipes de design e desenvolvimento para alinhar visual e funcionalidade.",
      "Uso de componentes reutilizáveis e sistemas de design para manter consistência no produto.",
    ],
  },
  {
    title: "HTML:",
    icon: html,
    iconBg: "#0a0936",
    points: [
      "Estruturação de conteúdo web usando HTML, garantindo acessibilidade e semântica.",
      "Criação de páginas responsivas com uso de tags e atributos HTML5.",
      "Integração de mídia, como imagens, vídeos e áudios, dentro de páginas web.",
      "Utilização de formulários HTML para captura de dados e interação com o usuário.",
    ],
  },

  {
    title: "CSS: ",
    icon: css,
    iconBg: "#E6DEDD",
    points: [
      "Estilização de páginas web com CSS para criar layouts atraentes e funcionais.",
      "Uso de Flexbox e Grid para construção de layouts responsivos e dinâmicos.",
      "Aplicação de transições e animações para melhorar a interatividade e a experiência do usuário.",
      "Personalização de temas e estilos com CSS3, incluindo variáveis e pré-processadores como Sass.",
    ],
  },

  {
    title: "JavaScript:",
    icon: javascript,
    iconBg: "#0a0936",
    points: [
      "Gerenciamento eficiente de estado global em aplicações JavaScript.",
      "Uso de actions e reducers para manipular e atualizar o estado de forma previsível.",
      "Integração com React para facilitar a sincronização de dados entre componentes.",
      "Implementação de middleware como Redux Thunk para lidar com operações assíncronas.",
    ],
  },
  {
    title: "React ",
    icon: reactjs,
    iconBg: "#E6DEDD",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js e tecnologias relacionadas.",
      "Colaboração com equipes multifuncionais para criar produtos de alta qualidade.",
      "Implementação de design responsivo e garantia de compatibilidade entre navegadores.",
      "Participação em revisões de código e fornecimento de feedback construtivo para a equipe.",
    ],
  },

  {
    title: "Git",
    icon: git,
    iconBg: "#0a0936",
    points: [
      "Controle de versão de código-fonte para facilitar o gerenciamento e colaboração.",
      "Uso de branches para desenvolvimento de funcionalidades de forma isolada e sem conflitos.",
      "Integração com plataformas como GitHub para repositórios remotos e colaboração em equipe.",
      "Realização de merge e resolução de conflitos de código durante o processo de integração.",
    ],
  },
  {
    title: "Three JS",
    icon: threejs,
    iconBg: "#E6DEDD",
    points: [
      "Criação de gráficos 3D interativos para aplicações web usando Three.js.",
      "Desenvolvimento de animações 3D e efeitos visuais imersivos.",
      "Integração de modelos 3D, texturas e luzes para ambientes realistas na web.",
      "Otimização de performance para garantir a fluidez em dispositivos diversos.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Eu pensei que fosse impossível criar um site tão bonito quanto o nosso produto, mas Lavinea me provou o contrário.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Eu nunca conheci uma desenvolvedora web que realmente se importe com o sucesso de seus clientes como a Lavinea.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Depois que Lavinea otimizou nosso site, nosso tráfego aumentou em 50%. Não temos palavras para agradecê-la!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const works = [
  {
    name: "Arqt. Manoel Serra",
    description:
      "Site com portfólio de arquitetura, com navegação intuitiva, design clean e otimização para todas as plataformas, destacando seus projetos e expertise.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: manoelserra,
    source_code_link: "https://github.com/devLavinea/arquiteto-manoel-serra",
    path: "/manoelserra",
  },
  {
    name: "Dev Burguer",
    description:
      "Dev Burger é um cardápio online de hambúrgueres, com sistema de carrinho. A navegação é simples e responsiva, proporcionando uma experiência prática.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: devburguer,
    source_code_link: "https://github.com/devLavinea/burguerdev",
    path: "/devburguer",
  },
  {
    name: "Consultora Hyundai",
    description:
      "Site institucional de consultoria de vendas, com design moderno e otimização para todas as plataformas, destacando serviços, veículos disponíveis e soluções personalizadas para clientes.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: consultora,
    source_code_link: "https://github.com/devLavinea/sitequelly",
    path: "/consultora",
  },
  {
    name: "Restaurante Food",
    description:
      "Landing page de restaurante, com design atraente e responsivo, menu interativo, seção de feedbacks de clientes e otimização para uma experiência de usuário intuitiva em todas as plataformas.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: restaurantefood,
    source_code_link: "https://github.com/devLavinea/restaurante-food",
    path: "/restaurantefood",
  },
];

export { technologies, experiences, testimonials, works };
