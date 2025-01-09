export const content = {
    0: `<div class="container-menu">
              <h2 class="mt-4">Guia de Desenvolvimento VR com Meta Quest 2 e Unity</h2>
              <p class="ps-5 mt-2 pe-5">
                  Explore este guia prático e detalhado sobre como integrar o Meta Quest 2 à Unity para criar experiências imersivas em realidade virtual. Este site é dividido em duas seções principais:
              </p>
              <ul>
                  <li></li>
              </ul>
              <div class="row mt-5 mx-auto d-flex justify-content-center">
                  <div class="col-sm-5">
                      <div class="card">
                          <div class="card-body">
                              <h1 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-unity" viewBox="0 0 16 16"><path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8z"/></svg></h1>
                              <p class="card-text">Unity: Configuração do ambiente de desenvolvimento.</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-5">
                      <div class="card">
                          <div class="card-body">
                              <h1 class="card-title"><i class="bi bi-meta custom-icon"></i></h1>
                              <p class="card-text">Meta Quest 2: Configuração do dispositivo e integração com a Unity.</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`,
    1: `<div class="container-menu">
                <header class="text-Black text-center pt-4">
                    <h2>Guia de Desenvolvimento para Horizon OS no Unity</h2>
                </header>

                <div class="container my-5 px-5 text-start ms-5">
                    <section>
                        <h2>Introdução</h2>
                        <p>Neste guia, você aprenderá como desenvolver aplicativos de <strong>realidade estendida (XR)</strong> para o <strong>Meta Horizon OS</strong> no <strong>Unity</strong>. Este fluxo de trabalho inclui requisitos, ferramentas e práticas recomendadas para criar experiências imersivas com suporte a <strong>Meta Quest</strong>.</p>
                    </section>

                    <section class="mt-5">
                        <h2>Requisitos para o Desenvolvimento</h2>
                        <ul>
                            <li><strong>Fone de ouvido Meta Quest</strong> compatível.</li>
                            <li>Computador com <strong>Windows 10+</strong> (64 bits) ou <strong>macOS Sierra 10.10+</strong>.</li>
                            <li><strong>Unity Editor 2021 LTS ou superior</strong>, com os seguintes módulos instalados:
                                <ul>
                                    <li>Suporte para <strong>Android Build</strong>.</li>
                                    <li><strong>OpenJDK</strong>.</li>
                                    <li><strong>Android SDK e NDK</strong>.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section class="mt-5">
                        <h2>Fluxo de Trabalho de Desenvolvimento</h2>

                        <h3>1. Pacotes do Meta XR SDK</h3>
                        <p>A Meta fornece pacotes essenciais para facilitar o desenvolvimento, incluindo:</p>
                        <ul>
                            <li><strong>Meta XR Core SDK</strong>: Rig XR personalizado, suporte para entrada de controle e rastreamento de dispositivos.</li>
                            <li><strong>Meta XR Interaction SDK</strong>: Componentes personalizáveis para interações com o usuário.</li>
                        </ul>

                        <h3>2. Configuração da Cena XR</h3>
                        <p>Utilize o <strong>XR Origin</strong> para mapeamento de dados de rastreamento e controle da movimentação da câmera.</p>

                        <h3>3. Manipulando Entrada do Usuário</h3>
                        <ul>
                            <li>Entrada da cabeça e das mãos para criar experiências imersivas.</li>
                            <li>Interações customizadas com APIs do <strong>Meta XR Core SDK</strong>.</li>
                        </ul>

                        <h3>4. Rastreamento Corporal e Facial</h3>
                        <p>Use o <strong>Meta XR Movement SDK</strong> para integrar movimentos do corpo e do rosto dos usuários.</p>

                        <h3>5. Entrada de Texto e Voz</h3>
                        <ul>
                            <li><strong>Teclado</strong>: Suporte para entrada de texto via teclado físico ou virtual.</li>
                            <li><strong>Entrada de Voz</strong>: Use o <strong>Meta XR Voice SDK</strong> para comandos de voz e interações baseadas em fala.</li>
                        </ul>

                        <h3>6. Gerenciamento de Entrada Bruta</h3>
                        <p>Acesse e manipule dados do controlador e do headset para criar gestos personalizados.</p>
                    </section>

                    <section class="mt-5">
                        <h2>Ferramentas e Testes</h2>

                        <h3>1. Ferramentas de Teste</h3>
                        <ul>
                            <li><strong>Link</strong>: Transmita seu aplicativo para o headset via USB-C ou Wi-Fi (Windows).</li>
                            <li><strong>Meta XR Simulator</strong>: Simula o ambiente XR no computador (Windows e macOS).</li>
                            <li><strong>Immersive Debugger</strong>: Ferramenta para depuração no editor Unity.</li>
                        </ul>

                        <h3>2. Gerenciamento de Dispositivos</h3>
                        <p>Use o <strong>Meta Quest Developer Hub (MQDH)</strong> para:</p>
                        <ul>
                            <li>Gerenciar dispositivos de teste.</li>
                            <li>Visualizar logs e capturar vídeos do headset.</li>
                            <li>Implantar aplicativos diretamente no dispositivo.</li>
                        </ul>
                    </section>

                    <section class="mt-5">
                        <h2>Explorando Novos Recursos</h2>
                        <p>Use o <strong>Building Blocks</strong> do <strong>Meta XR Core SDK</strong> para explorar recursos e exemplos, ou teste novos recursos com os prefabs fornecidos.</p>
                    </section>

                    <section class="mt-5">
                        <h2>Conclusão</h2>
                        <p>Com ferramentas como <strong>Meta XR Core SDK</strong>, <strong>Meta XR Interaction SDK</strong>, e <strong>Meta Quest Developer Hub</strong>, o desenvolvimento para o <strong>Horizon OS</strong> se torna mais acessível e eficiente. Siga as práticas recomendadas para criar experiências imersivas e de alta qualidade.</p>
                    </section>
                </div>
          </div>`,
    2: `
        <div class="container-menu align-items-start">
            <h2 class="mt-4 mx-auto">Comece com o Meta Quest Developer Hub</h2>
            <section class="mt-2 mx-5">
                <p class="ps-5 ">
                Configure seu ambiente de desenvolvimento com o Meta Quest Developer Hub (MQDH). Siga os passos para preparar seu dispositivo e iniciar o desenvolvimento em realidade virtual.
            </p>

            <div class="text-start px-5 mx-2 mt-5 ">
            <ul>
                <li><strong>Pré-requisitos:</strong> 
                    <ul>
                        <li>Conta de desenvolvedor Meta</li>
                        <li>Fone de ouvido Meta Quest</li>
                        <li>Cabo USB-C</li>
                        <li>Dispositivo Android ou iOS</li>
                    </ul>
                </li>
                <li><strong>Instalação:</strong>
                    <ul>
                        <li>Baixe e instale o MQDH para <a target="_blank" href="https://developers.meta.com/horizon/downloads/package/oculus-developer-hub-mac">macOS</a> ou <a target="_blank" href="https://developers.meta.com/horizon/downloads/package/oculus-developer-hub-win">Windows</a></li>
                        <li>Faça login com sua conta de desenvolvedor Meta</li>
                    </ul>
                </li>
                <li><strong>Conectando o Fone de Ouvido:</strong>
                    <ul>
                        <li>Ative o Modo Desenvolvedor no aplicativo Meta Horizon</li>
                        <li>Conecte o headset ao computador usando USB-C</li>
                        <li>Aceite as permissões para depuração USB</li>
                    </ul>
                </li>
                <li><strong>Verificação da Conexão:</strong>
                    <ul>
                        <li>Acesse "Gerenciador de Dispositivos" no MQDH</li>
                        <li>Verifique o status da conexão e selecione o dispositivo ativo</li>
                    </ul>
                </li>
                <li><strong>Atualização do MQDH:</strong>
                    <ul>
                        <li>Atualizações regulares garantem novos recursos e correções</li>
                        <li>O MQDH suporta atualização automática</li>
                    </ul>
                </li>
            </ul>
            </div>
            </section>
        </div>    
    `,
    3: `
    <div class="container-menu align-items-start text-start">
        <header class="text-Black mx-auto py-4">
            <h2 class="mx-auto">Gerencie seu fone de ouvido com MQDH</h2>
        </header>
 
        <section class="mb-4 ms-5 ps-5" >
            <h2>Alterar o Apelido do Dispositivo</h2>
            <p>Para dar um apelido ao seu dispositivo:</p>
            <ol>
                <li>Selecione <strong>Gerenciador de dispositivos</strong> no painel de navegação esquerdo.</li>
                <li>Em <strong>Dispositivos</strong>, selecione o ícone de engrenagem ao lado do dispositivo.</li>
                <li>Em <strong>Geral</strong>, selecione <strong>Alterar</strong> ao lado de Apelido do dispositivo.</li>
                <li>Insira um novo apelido e selecione <strong>Salvar</strong>.</li>
            </ol>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Desligar o Sistema de Limites</h2>
            <p>Para desativar o sistema de limites:</p>
            <ol>
                <li>Selecione <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Desative a opção <strong>Limite</strong> em <strong>Ações do dispositivo</strong>.</li>
            </ol>
            <p>Alternativamente, use o atalho <code>CTRL + Shift + G</code> para ativar ou desativar.</p>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Desligar o Sensor de Proximidade</h2>
            <p>Para manter o dispositivo ativo e facilitar o desenvolvimento, desative o sensor de proximidade:</p>
            <ol>
                <li>Selecione <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Em <strong>Ações do dispositivo</strong>, desative o <strong>Sensor de proximidade</strong>.</li>
            </ol>
            <p>Use o atalho <code>CTRL + Shift + P</code> para ligar ou desligar.</p>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Habilitar ADB via Wi-Fi</h2>
            <p>Para usar ADB sem fio:</p>
            <ol>
                <li>Abra <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Em <strong>Ações do dispositivo</strong>, ative a opção <strong>ADB over Wi-Fi</strong>.</li>
                <li>Desconecte o cabo USB para usar o dispositivo sem fio.</li>
            </ol>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Configurar Link</h2>
            <p>Para habilitar o Link:</p>
            <ol>
                <li>Abra <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Selecione o modo de conexão (Cabo ou Air Link) ao lado de <strong>Meta Quest Link</strong>.</li>
            </ol>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Configurar as Definições do MQDH</h2>
            <p>Para visualizar e atualizar as configurações:</p>
            <ol>
                <li>Abra o MQDH.</li>
                <li>Selecione <strong>Configurações</strong> no painel esquerdo.</li>
                <li>Escolha entre as guias: <strong>Geral</strong>, <strong>Sobre</strong>, <strong>Notificações</strong>, ou <strong>Interno</strong> para editar as configurações.</li>
            </ol>
        </section>
    </div>
    `,
    4:`
    <div class="container-menu mt-4">
    <header class="text-center">
        <h2>Introdução à Unity</h2>
    </header>

    <section class="mt-5 mx-5 px-5 text-start">
        <h2 class="text-center mb-2">O que é a Unity?</h2>
        <p>A Unity é uma plataforma de desenvolvimento multiplataforma que permite criar jogos, simuladores e experiências interativas. Inicialmente voltada para o desenvolvimento de jogos em 2D e 3D, a Unity se expandiu para suportar uma variedade de plataformas e dispositivos, incluindo realidade virtual (VR), realidade aumentada (AR), dispositivos móveis, consoles e PC.</p>

        <p>Com uma interface intuitiva e fácil de aprender, a Unity é uma das ferramentas mais acessíveis tanto para desenvolvedores iniciantes quanto para profissionais experientes. Sua poderosa engine de física, gráficos de alta qualidade, e a flexibilidade do código em C# tornam a Unity uma escolha popular para a criação de experiências imersivas.</p>
    </section>

    <section class="mt-5 mx-5 px-5 text-start">
        <h3>Principais Características da Unity</h3>
        <ul>
            <li><strong>Multiplataforma:</strong> Unity permite que você crie experiências que podem ser distribuídas em diversas plataformas, como Windows, macOS, Android, iOS, PlayStation, Xbox, VR e muito mais.</li>
            <li><strong>Facilidade de uso:</strong> Com uma interface amigável, a Unity torna o desenvolvimento acessível para iniciantes, ao mesmo tempo que oferece ferramentas poderosas para desenvolvedores experientes.</li>
            <li><strong>Suporte a C#:</strong> A Unity utiliza C# como sua principal linguagem de programação, o que torna o desenvolvimento flexível e eficiente, com fácil integração de scripts e recursos personalizados.</li>
            <li><strong>Asset Store:</strong> A Unity oferece uma loja de recursos onde você pode comprar ou baixar gratuitamente uma vasta gama de modelos 3D, texturas, scripts e ferramentas para acelerar o desenvolvimento de seu projeto.</li>
            <li><strong>Ferramentas de VR e AR:</strong> A Unity é amplamente utilizada no desenvolvimento de experiências de realidade virtual (VR) e aumentada (AR), proporcionando suporte robusto para dispositivos como o Meta Quest 2, HTC Vive, Oculus Rift e outros.</li>
        </ul>
    </section>

    <section class="mt-5 mx-5 px-5 text-start">
        <h2>Por que escolher a Unity?</h2>
        <p>A Unity é amplamente adotada pela comunidade de desenvolvedores devido a suas inúmeras vantagens:</p>
        <ul>
            <li><strong>Documentação abrangente:</strong> A Unity possui uma extensa documentação oficial, tutoriais e fóruns comunitários onde você pode aprender e solucionar problemas facilmente.</li>
            <li><strong>Comunidade ativa:</strong> A comunidade global da Unity é vibrante, com milhares de desenvolvedores contribuindo com tutoriais, plugins e outros recursos úteis.</li>
            <li><strong>Escalabilidade:</strong> De jogos simples a grandes experiências de VR, a Unity pode ser usada para criar projetos de qualquer tamanho, desde protótipos rápidos até jogos de grande escala.</li>
            <li><strong>Futuro promissor:</strong> A Unity continua a evoluir, com novos recursos e melhorias a cada atualização, garantindo que você tenha acesso às tecnologias mais recentes e poderosas no campo do desenvolvimento.</li>
        </ul>
    </section>

    <section class="mt-5 mx-5 px-5 text-start">
        <h2>Unity no Desenvolvimento de Realidade Virtual (VR)</h2>
        <p>Nos últimos anos, a Unity se tornou uma das principais plataformas para o desenvolvimento de experiências imersivas de realidade virtual. Sua integração com dispositivos VR, como o Meta Quest 2, oferece aos desenvolvedores as ferramentas necessárias para criar mundos virtuais de alta qualidade e totalmente interativos.</p>

        <p>Com a Unity, é possível:</p>
        <ul>
            <li><strong>Desenvolver ambientes 3D imersivos:</strong> Crie mundos virtuais detalhados e interativos que respondem aos movimentos do jogador, proporcionando uma experiência imersiva.</li>
            <li><strong>Integrar dispositivos de entrada VR:</strong> Conecte e utilize controladores VR e sensores de movimento para criar interações naturais dentro do ambiente virtual.</li>
            <li><strong>Testar e otimizar:</strong> A Unity permite que você teste e otimize suas experiências VR em tempo real, garantindo que o desempenho e a fluidez sejam mantidos em dispositivos como o Meta Quest 2.</li>
        </ul>
    </section>

</div>
    `,
    5:`
    <div class="container-menu mt-2">
    <header class="text-center">
        <h2>Área de Downloads</h2>
    </header>

    <section class="mt-2">
        

        <section class="mt-5 mx-5 px-5 text-start">
        <h2>Instruções de Instalação do Unity</h2>
        <p>Após o download, siga as instruções abaixo para instalar e configurar o ambiente de desenvolvimento Unity:</p>
        <ul>
            <li><strong>Unity Installer:</strong> Baixe o instalador adequado para o seu sistema operacional (Windows ou macOS). Você pode acessar o instalador mais recente no [site oficial da Unity](https://unity.com/download).</li>
            <li><strong>Iniciar Instalação:</strong> Após o download, abra o arquivo de instalação. No caso do Windows, basta clicar duas vezes no arquivo .exe. Para macOS, basta abrir o arquivo .dmg.</li>
            <li><strong>Escolher Componentes:</strong> Durante a instalação, você será solicitado a escolher os componentes que deseja instalar, como a versão do Unity, suporte a plataformas específicas (Android, iOS, etc.), e o Visual Studio (recomendado para edição de scripts).</li>
            <li><strong>Configuração Inicial:</strong> Após a instalação, abra o Unity Hub. O Hub é a interface centralizada para gerenciar seus projetos e versões do Unity. Você precisará fazer login com uma conta Unity ou criar uma nova se ainda não tiver.</li>
            <li><strong>Criar um Novo Projeto:</strong> Após configurar o Unity Hub, clique em "New Project" e escolha o template adequado para o seu projeto (2D, 3D, ou VR).</li>
        </ul>
        </section>
        <h3>Downloads Disponíveis</h3>
        <!-- Exemplo de download de Unity -->
        <div class="row mt-3 py-5">
            <div class="col-md-6 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Unity Installer</h5>
                        <p class="card-text">Baixe o instalador da Unity para configurar seu ambiente de desenvolvimento. A versão mais recente do Unity está disponível para Windows e macOS.</p>
                        <a target="_blank" href="https://unity.com/pt/download" class="btn btn-primary" target="_blank">Baixar Unity</a>
                    </div>
                </div>
            </div>
    </section>
    </div>
    `,
    6:`
    <section class="mt-5 mx-5 px-5 text-start">
    <h2>Passo a Passo: Criando Seu Primeiro Projeto de Realidade Virtual (VR) na Unity</h2>
    <p>Siga estas etapas para criar seu primeiro projeto de realidade virtual utilizando Unity. Este guia assume que você já tenha a Unity instalada e configurada conforme as instruções anteriores.</p>
    <ol>
        <li><strong>Criação do Novo Projeto:</strong>
            <ul>
                <li>Abra o Unity Hub e clique em "New Project".</li>
                <li>Escolha o template "3D" para o projeto.</li>
                <li>Escolha um nome para o projeto e um local onde ele será salvo. Clique em "Create".</li>
            </ul>
        </li>
        <li><strong>Configuração para Realidade Virtual:</strong>
            <ul>
                <li>Com o projeto aberto, vá até o menu "Edit" e selecione "Project Settings".</li>
                <li>Na janela que abrir, clique em "Player" no painel da esquerda.</li>
                <li>Na seção "XR Settings", marque a opção "Virtual Reality Supported" para ativar o suporte a VR.</li>
                <li>Adicione o dispositivo VR desejado na lista de "Virtual Reality SDKs". Para Oculus, por exemplo, selecione "Oculus".</li>
            </ul>
        </li>
        <li><strong>Importação do Pacote XR Interaction Toolkit:</strong>
            <ul>
                <li>Vá para o "Window" no menu superior e clique em "Package Manager".</li>
                <li>No Package Manager, procure por "XR Interaction Toolkit" na lista de pacotes disponíveis.</li>
                <li>Selecione o pacote "XR Interaction Toolkit" e clique em "Install". Esse pacote oferece ferramentas essenciais para interação em VR.</li>
            </ul>
        </li>
        <li><strong>Configuração da Câmera para VR:</strong>
            <ul>
                <li>Na Hierarquia, clique com o botão direito do mouse e selecione "XR" > "XR Rig".</li>
                <li>Isso criará uma nova "XR Rig" na cena, que inclui a câmera e os controladores de VR, configurados para movimento e interação.</li>
                <li>Verifique a posição da "XR Rig" na cena. Normalmente, ela deve estar posicionada no (0, 0, 0) para começar a experiência de VR no centro.</li>
            </ul>
        </li>
        <li><strong>Adicionar Interação com o Controlador:</strong>
            <ul>
                <li>Na "XR Rig", você verá os objetos "LeftHand Controller" e "RightHand Controller". Cada um representa o controlador de mão no VR.</li>
                <li>Adicione interações com objetos criando "Grabbables" ou outros tipos de interação dentro da cena. Para isso, crie objetos e adicione componentes do tipo "XR Grab Interactable".</li>
                <li>Esses objetos agora poderão ser pegados e manipulados pelo usuário dentro da experiência de VR.</li>
            </ul>
        </li>
        <li><strong>Testar o Projeto:</strong>
            <ul>
                <li>Conecte seu headset VR ao computador e certifique-se de que está ligado e configurado corretamente.</li>
                <li>No Unity, clique em "Play" para iniciar a cena e testar a experiência de realidade virtual.</li>
                <li>Se tudo estiver configurado corretamente, você deverá ver a cena na perspectiva do VR e interagir com os objetos com os controladores de mão.</li>
            </ul>
        </li>
        <li><strong>Construir para o dispositivo VR:</strong>
            <ul>
                <li>Quando o projeto estiver pronto, você pode construir para o seu dispositivo VR.</li>
                <li>Vá em "File" > "Build Settings" e selecione a plataforma adequada (por exemplo, Android para Oculus Quest).</li>
                <li>Clique em "Build and Run" para criar o aplicativo e testá-lo diretamente no seu dispositivo VR.</li>
            </ul>
        </li>
    </ol>
</section>
    `,
    7:`
     <section class="mt-5 mx-5 px-5 text-start">
    <h2 class="text-center">Entendendo o XR Interaction Toolkit</h2>
    <p>O XR Interaction Toolkit da Unity é uma poderosa ferramenta que permite criar experiências imersivas de realidade virtual (VR) e realidade aumentada (AR) de forma fácil e eficiente. Ele oferece uma série de componentes e funcionalidades que facilitam a interação com objetos no ambiente virtual, tornando mais simples a criação de interações como pegar, soltar, empurrar e muito mais.</p>
    
    <h3>O que é o XR Interaction Toolkit?</h3>
    <p>O <strong>XR Interaction Toolkit</strong> é um pacote da Unity que fornece uma estrutura pronta para interações em projetos de realidade virtual e aumentada. Ele facilita a criação de interações entre o usuário e os objetos da cena, utilizando controladores de VR, mãos virtuais e gestos.</p>
    
    <h3>Principais Componentes do XR Interaction Toolkit</h3>
    <ul>
        <li><strong>XR Rig:</strong> O XR Rig é a estrutura principal para a interação do jogador no espaço 3D. Ele inclui a câmera e os controladores de movimento. Ao adicionar o XR Rig à cena, você garante que a posição e os movimentos do usuário sejam atualizados automaticamente, criando uma experiência mais realista.</li>
        <li><strong>XR Controller:</strong> Representa os controladores do dispositivo de VR. Eles permitem que o usuário interaja com objetos virtuais através de ações como agarrar, apontar e pressionar botões.</li>
        <li><strong>XR Grab Interactable:</strong> Com esse componente, você pode fazer objetos na cena interagirem com os controladores do usuário. Adicionando esse componente a um objeto, ele se torna "pegável", permitindo que o usuário o pegue, mova e solte.</li>
        <li><strong>XR Ray Interactor:</strong> Este componente cria um feixe (raycast) que permite ao usuário interagir com objetos a distância. É útil para selecionar objetos sem precisar tocá-los fisicamente.</li>
        <li><strong>Action-based Input:</strong> O XR Interaction Toolkit usa um sistema de input baseado em ações. Isso permite que você mapeie entradas de dispositivos de VR (como pressionar um botão ou movimentar um controlador) para ações específicas dentro do jogo.</li>
    </ul>

    <h3>Como Utilizar o XR Interaction Toolkit</h3>
    <ol>
        <li><strong>Instalar o XR Interaction Toolkit:</strong>
            <ul>
                <li>Abra o "Package Manager" no Unity.</li>
                <li>Pesquise por "XR Interaction Toolkit" e clique em "Install".</li>
            </ul>
        </li>
        <li><strong>Configurar o XR Rig:</strong>
            <ul>
                <li>Na sua cena, adicione um "XR Rig" através do menu "GameObject" > "XR" > "XR Rig".</li>
                <li>Isso criará um novo objeto com a câmera e os controladores de movimento prontos para uso.</li>
            </ul>
        </li>
        <li><strong>Adicionar Interações com Objetos:</strong>
            <ul>
                <li>Para fazer um objeto interativo, selecione o objeto na cena e adicione o componente "XR Grab Interactable".</li>
                <li>Agora, o objeto poderá ser agarrado e manipulado pelo jogador utilizando os controladores de VR.</li>
            </ul>
        </li>
        <li><strong>Configuração de Inputs (Ações):</strong>
            <ul>
                <li>No Unity, crie um novo arquivo de "Input Actions" para mapear as entradas dos controladores de VR.</li>
                <li>Você pode definir ações como pressionar um botão ou ativar um gatilho e associá-las a funções dentro do seu projeto.</li>
            </ul>
        </li>
        <li><strong>Testar Interações:</strong>
            <ul>
                <li>Conecte o seu dispositivo de VR ao computador e clique em "Play" para testar as interações na sua cena.</li>
                <li>Você poderá ver as interações dos controladores de VR, como pegar objetos, apontar para botões e mais.</li>
            </ul>
        </li>
    </ol>
    
    <h3>Exemplo Prático</h3>
    <p>Imagine que você queira criar um objeto que o jogador possa pegar e lançar. Com o XR Interaction Toolkit, você só precisa adicionar o componente "XR Grab Interactable" ao objeto e ele será automaticamente interativo. Quando o jogador aproximar o controlador do objeto e pressionar o botão para agarrá-lo, ele poderá segurá-lo e lançá-lo.</p>

    <h3>Conclusão</h3>
    <p>O XR Interaction Toolkit simplifica a criação de interações em projetos VR e AR, permitindo que você se concentre mais na experiência do usuário do que em complexas lógicas de interação. Com os componentes e ferramentas fornecidos, você pode criar interações realistas, como agarrar objetos, pressionar botões e muito mais, de forma simples e eficaz.</p>
    </section>
    `,
    8:`
    <section class="mt-5 mx-5 px-5 text-start">
    <h2 class="text-center">Links Oficiais e Recursos Úteis</h2>
    <p>Aqui você encontra links oficiais e recursos úteis para começar a trabalhar com Unity, explorar assets, e aprimorar suas habilidades no desenvolvimento de experiências em VR.</p>

    <h3>Links Oficiais</h3>
    <ul>
        <li><strong><a href="https://unity.com" target="_blank">Site Oficial da Unity</a></strong>: Acesse o site principal da Unity para baixar o software, acessar a documentação e muito mais.</li>
        <li><strong><a href="https://docs.unity.com" target="_blank">Documentação Oficial da Unity</a></strong>: Explore a documentação detalhada sobre todos os aspectos da Unity, desde a instalação até as técnicas avançadas.</li>
        <li><strong><a href="https://unity.com/learn" target="_blank">Unity Learn</a></strong>: Plataforma oficial de aprendizado da Unity com tutoriais e cursos gratuitos para iniciantes e desenvolvedores avançados.</li>
        <li><strong><a href="https://store.unity.com" target="_blank">Unity Asset Store</a></strong>: Acesse a loja oficial de assets, onde você pode comprar e baixar modelos 3D, scripts, plugins e mais para os seus projetos Unity.</li>
    </ul>

    <h3>Recursos e Dicas para Desenvolvedores</h3>
    <ul>
        <li><strong><a href="https://learn.unity.com/tutorial/welcome-to-the-pathway?uv=2022.3&pathwayId=627c12d8edbc2a75333b9185&missionId=62554983edbc2a76a27486cb#" target="_blank">Criando um Jogo 3D</a></strong>: Curso passo a passo para iniciantes na criação de jogos 3D com Unity.</li>
        <li><strong><a href="https://www.raywenderlich.com/unity" target="_blank">Ray Wenderlich - Unity Tutorials</a></strong>: Uma coleção de tutoriais de qualidade para Unity, com foco em jogos, VR, AR e muito mais.</li>
        <li><strong><a href="https://github.com/Unity-Technologies" target="_blank">GitHub da Unity Technologies</a></strong>: Explore repositórios oficiais da Unity, incluindo projetos open-source, exemplos e templates.</li>
        <li><strong><a href="https://www.youtube.com/user/Unity3D" target="_blank">Canal Oficial no YouTube</a></strong>: Canal da Unity com vídeos tutoriais, apresentações e demonstrações sobre as últimas funcionalidades e novidades.</li>
        <li><strong><a href="https://forum.unity.com" target="_blank">Fórum Oficial da Unity</a></strong>: Um lugar para interagir com a comunidade Unity, tirar dúvidas e compartilhar conhecimento.</li>
    </ul>

    <h3>Assets Gratuitos e Recursos de VR</h3>
    <ul>
        <li><strong><a href="https://assetstore.unity.com" target="_blank">Unity Asset Store</a></strong>: Acesse uma vasta coleção de assets, incluindo recursos gratuitos para começar o seu projeto.</li>
        <li><strong><a href="https://www.vrready.com" target="_blank">VR Ready</a></strong>: Recursos gratuitos e pagos para desenvolver experiências de VR, incluindo modelos e scripts específicos para VR.</li>
        <li><strong><a href="https://www.turbosquid.com" target="_blank">TurboSquid</a></strong>: Plataforma que oferece modelos 3D gratuitos e pagos, muitos dos quais podem ser usados em projetos VR com Unity.</li>
        <li><strong><a href="https://sketchfab.com" target="_blank">Sketchfab</a></strong>: Um repositório de modelos 3D interativos e gratuitos, ideal para uso em projetos Unity, incluindo VR.</li>
    </ul>

    <h3>Dicas de Desenvolvimento VR</h3>
    <ul>
        <li><strong><a href="https://developers.meta.com/horizon/documentation/unity/unity-tutorial-hello-vr" target="_blank">Oculus - Começando com Unity</a></strong>: Documentação oficial do Oculus para integrar seus dispositivos VR com Unity.</li>
        <li><strong><a href="https://developer.vive.com/resources/" target="_blank">Vive Developer Resources</a></strong>: Recursos da HTC Vive para desenvolver aplicações VR com Unity, incluindo SDKs e guias de integração.</li>
    </ul>

    <h3>Redes Sociais e Comunidades</h3>
    <ul>
        <li><strong><a href="https://www.reddit.com/r/Unity3D/" target="_blank">Reddit - r/Unity3D</a></strong>: A comunidade Unity no Reddit, onde você pode discutir tópicos, tirar dúvidas e compartilhar experiências com outros desenvolvedores.</li>
        <li><strong><a href="https://discord.com/invite/unity" target="_blank">Discord - Unity Official</a></strong>: Canal oficial no Discord para interagir com outros desenvolvedores Unity, trocar ideias e receber suporte.</li>
    </ul>
    </section>
    `
  };
  