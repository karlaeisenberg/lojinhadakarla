# Lojinha da Karla

Catálogo responsivo com busca, filtros, carrinho, promoção de decante, condições especiais para kits e finalização pelo WhatsApp.

## Publicar na Vercel

1. Crie uma conta no GitHub e um repositório novo.
2. Envie **todo o conteúdo desta pasta** para o repositório.
3. Entre em https://vercel.com usando sua conta do GitHub.
4. Clique em **Add New → Project** e selecione o repositório.
5. Em **Framework Preset**, escolha **Other**. A Vercel lerá automaticamente `vercel.json`, executará `npm run build` e publicará a pasta `dist`.
6. Clique em **Deploy**.

### Se o repositório tiver uma pasta chamada `site`

Em **Settings → Build and Deployment → Root Directory**, selecione `site`. Se os arquivos `index.html`, `package.json` e `vercel.json` estiverem diretamente na primeira tela do repositório, deixe o Root Directory vazio.

### Se aparecer erro 404 após uma publicação anterior

Abra o projeto na Vercel, acesse **Deployments**, abra o menu do último envio e escolha **Redeploy**. Desmarque a opção de usar cache, se ela aparecer.

O endereço gratuito será criado automaticamente no formato `nome-do-projeto.vercel.app`.

## Atualizar o catálogo

Os produtos iniciais ficam no arquivo `products.js`. A página `admin.html` demonstra uma área de gestão local: alterações feitas ali ficam apenas no navegador atual. Para gestão permanente por vários aparelhos, conecte esta estrutura a um banco de dados e autenticação antes de colocá-la em uso administrativo real.

## Dados configurados

- WhatsApp: 55 21 99900-0170
- Instagram: @lojinhadakarla_ofc
- Decantes: R$ 35,00 por unidade
- Kits: 15% no Pix ou 5% no cartão em até 6x sem juros
- Promoção: 1 decante de 5 ml a cada 3 perfumes em tamanho regular

## Logo e imagens

A logo está em `assets/logo.jpeg`. Para substituí-la, mantenha o mesmo nome de arquivo. A imagem de destaque foi criada exclusivamente para este projeto.
