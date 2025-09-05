# NEWK LLC - Website Premium

## 📋 Sobre o Projeto

Website profissional para NEWK LLC, empresa de carpintaria especializada em acabamentos de alta qualidade em Naugatuck, CT. O design foi inspirado no site da Clairmont Remodeling, oferecendo uma apresentação premium dos serviços de carpintaria.

## 🚀 Recursos Implementados

### Design & UI/UX
- ✅ Design premium e responsivo
- ✅ Paleta de cores profissional (amber/dourado + cinzas)
- ✅ Tipografia Inter para aparência moderna
- ✅ Animações suaves e hover effects
- ✅ Layout mobile-first

### Seções do Site
1. **Hero Section** - "Crafting Luxury Homes with Precision and Passion"
2. **About** - "Dream + Design + Build Together"
3. **Process** - 6 etapas profissionais de trabalho
4. **Services** - Carrossel interativo com 6 serviços
5. **Portfolio** - Galeria de projetos com filtros
6. **Testimonials** - Carrossel automático com depoimentos
7. **Contact** - Formulário funcional + informações de contato
8. **Footer** - Completo com links e informações

### Funcionalidades
- ✅ Navegação suave entre seções
- ✅ Menu responsivo para mobile
- ✅ Formulário de contato funcional
- ✅ Carrossel de serviços interativo
- ✅ Carrossel de depoimentos automático
- ✅ Filtros do portfólio
- ✅ SEO otimizado

## 🛠️ Tecnologias Utilizadas

- **React 19.0.0** - Framework frontend
- **Tailwind CSS** - Framework de estilos
- **Shadcn/UI** - Componentes de interface
- **Lucide React** - Ícones
- **React Router DOM** - Navegação
- **Axios** - Requisições HTTP (preparado para backend)

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Passos para instalação:

1. **Extrair o arquivo**
```bash
tar -xzf newk-llc-website.tar.gz
cd frontend
```

2. **Instalar dependências**
```bash
yarn install
# ou
npm install
```

3. **Executar em desenvolvimento**
```bash
yarn start
# ou
npm start
```

4. **Build para produção**
```bash
yarn build
# ou
npm run build
```

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na pasta frontend:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Estrutura do Projeto
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── ui/ (componentes Shadcn)
│   ├── data/
│   │   └── mockData.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── tailwind.config.js
```

## 📱 Informações da Empresa

- **Nome:** NEWK LLC
- **Especialidade:** Fine Carpentry & Custom Woodwork
- **Localização:** Naugatuck, CT e áreas próximas
- **Telefone:** 203-560-5585
- **Email:** newkimprovements@gmail.com

### Áreas de Serviço:
- Naugatuck
- Waterbury
- Middlebury
- Southbury
- Watertown
- Woodbury

## 🎨 Customização

### Cores
As cores principais estão definidas no `tailwind.config.js` e podem ser personalizadas:
- **Primary:** Amber (dourado)
- **Secondary:** Gray (cinzas)
- **Background:** White/Gray-50

### Conteúdo
Os dados mock estão em `src/data/mockData.js` e incluem:
- Informações da empresa
- Serviços oferecidos
- Projetos do portfólio  
- Depoimentos de clientes
- Etapas do processo

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload da pasta build/ para Netlify
```

### Hospedagem Tradicional
```bash
npm run build
# Upload da pasta build/ para seu servidor
```

## 📧 Suporte

Para dúvidas sobre implementação ou customização, entre em contato através do desenvolvimento realizado pela Emergent AI.

## 📄 Licença

Este projeto foi desenvolvido especificamente para NEWK LLC. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Emergent AI**