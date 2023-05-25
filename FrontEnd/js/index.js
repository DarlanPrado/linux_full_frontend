$(document).ready(function(){

    mostrarMenu();
    mostrarArquivos();

    $('#arquivosButtom').click(function(){
        mostrarArquivos();
    });
    $('#progamasButtom').click(function(){
        mostrarProgamas();
    });
    $('#permissaoButtom').click(function(){
        mostrarPermissao();
    })
    $('#instalacaoButtom').click(function(){
        mostrarInstalacao();
    })
    $('#servidorButtom').click(function(){
        mostrarServidor();
    });

});

function mostrarMenu(){

    let html = ' ';

    html +='<div class="container-md" style="background-color: #00000043; border-radius: 10px;">';
    html +='    <ul class="nav nav-pills" style=" margin: 15px;">';
    html +='        <li class="nav-item">';
    html +='            <button id="arquivosButtom" type="button" class="btn btn-secondary">Arquivos</button>';
    html +='        </li>';
    html +='        <li class="nav-item">';
    html +='            <button id="progamasButtom" type="button" class="btn btn-secondary">Programas</button>';
    html +='        </li>';
    html +='        <li class="nav-item">';
    html +='            <button id="permissaoButtom" type="button" class="btn btn-secondary">Permissão</button>';
    html +='        </li>';
    html +='        <li class="nav-item">';
    html +='            <button id="instalacaoButtom" type="button" class="btn btn-secondary">Instalação</button>';
    html +='        </li>';
    html +='        <li class="nav-item">';
    html +='            <button id="servidorButtom" type="button" class="btn btn-secondary">Servidor</button>';
    html +='        </li>';
    html +='    </ul>';
    html +='    <hr style="color:aliceblue; margin: 2px">';
    html +='    <div id="conteudo"class="container-fluid" style="max-width: 100%;">';
    html +='        ';
    html +='        ';
    html +='    </div>';
    html +='</div>';

    $('#page').html(html);
}

function mostrarArquivos(){
    console.log('Arquivos');

    let html = ' ';

    html += '<h1 id="arquivos-title">Arquivos</h1>';
    html += '<div id="conteudoArquivos">';
    html += '    <h4>Criar Diretórios</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> mkdir </strong> para criar um ou vários diretórios de uma só vez e definir permissões para cada um deles.</p>';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> mkdir </strong> nome_do_diretório </p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Remover Diretórios</h4>';
    html += '    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> rmdir </strong> para excluir permanentemente um diretório vazio.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>rmdir</strong> nome_diretorio</p>';
    html += '    </div>';
    html += '    <h4>Exibir Diretório Atual</h4>';
    html += '    <div id="exibirDiretorioatual" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> pwd </strong> para exibir o diretório atual.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>pwd</strong></p>';
    html += '    </div>';
    html += '    <h4>Copiar Arquivos ou Diretórios</h4>';
    html += '    <div id="copiarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> cp </strong> para copiar arquivos ou diretórios e seu conteúdo.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>cp</strong> nomedoarquivo.txt /home/username/Documents</p>';
    html += '    </div>';
    html += '    <div id="copiarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Para copiar o conteúdo de um arquivo para um novo arquivo no mesmo diretório, digite <strong>cp</strong> seguido do arquivo de origem e do arquivo de destino:</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>cp</strong> nomedoarquivo1.txt nomedoarquivo2.txt</p>';
    html += '    </div>';
    html += '    <h4>Mover Arquivos</h4>';
    html += '    <div id="moverArquivos" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> mv </strong> para mover arquivos.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>mv</strong> nomedoarquivo1.txt /home/username/Documents</p>';
    html += '    </div>';
    html += '    <div id="moverArquivos" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Você também pode usar o comando <strong> mv </strong> para renomear arquivos.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>mv</strong> nomedoarquivo_antigo.txt nome_novo.txt</p>';
    html += '    </div>';
    html += '    <h4>Remover Arquivos</h4>';
    html += '    <div id="removerArquivos" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> rm </strong> para remover arquivos.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>rm</strong> nome_do_arquivo</p>';
    html += '    </div>';
    html += '    <div id="removerArquivos" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Para remover vários arquivos, digite o seguinte comando:</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>rm</strong> nome_do_arquivo1 nome_do_arquivo2 nome_do_arquivo3 </p>';
    html += '    </div>';
    html += '    <h4>Remover Arquivos</h4>';
    html += '    <div id="removerArquivos" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> rm </strong> para remover arquivos.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>rm</strong> nome_do_arquivo</p>';
    html += '    </div>';
    html += '    <h4>Criar Arquivos Vazios</h4>';
    html += '    <div id="criarArquivosvazios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> touch </strong> para remover arquivos.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>touch</strong> nome_do_arquivo</p>';
    html += '    </div>';
    html += '    <h4>Exibir Conteúdo de um Arquivo</h4>';
    html += '    <div id="criarArquivosvazios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> cat </strong> para exibir o conteúdo de um arquivo.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>cat</strong> nome_do_arquivo</p>';
    html += '    </div>';
    html += '    <div id="criarArquivosvazios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>É possivel também usar o comando <strong> less </strong> para exibir o conteúdo de um arquivo de forma paginada.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>less</strong> nome_do_arquivo</p>';
    html += '    </div>';
    html += '    <h4>Exibir Conteúdo de um Arquivo</h4>';
    html += '    <div id="criarArquivosvazios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> cat </strong> para exibir o conteúdo de um arquivo.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>cat</strong> nome_do_arquivo</p>';
    html += '    </div>';
    html += '    <h4>Listar Arquivos e Diretório</h4>';
    html += '    <div id="listarArquivos" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> ls </strong> para listar os arquivos e diretórios em um determinado diretório.</p>';
    html += '        <div class="codigo">';
    html += '        <p> <strong>ls</strong> </p>';
    html += '        </div>';
    html += '        <br>';
    html += '        <p> O comando <strong> ls </strong> possui vários opções que podem ser usadas junto com o comando para obter mais informações dos arquivos.</p>';
    html += '        <br>';
    html += '        <p>  ';
    html += '            <strong>ls -l </strong>: Lista os arquivos e diretórios em formato de lista longa, exibindo detalhes como permissões, proprietário, grupo, tamanho, data de modificação e nome do arquivo.';
    html += '            <br>';
    html += '            <strong>ls -a </strong>: Lista todos os arquivos, incluindo os arquivos ocultos (que começam com um ponto).';
    html += '            <br>';
    html += '            <strong>ls -lh </strong>: Lista os arquivos e diretórios em formato de lista longa com tamanhos legíveis pelo ser humano (por exemplo, 1K, 2M, 3G).';
    html += '            <br>';
    html += '            <strong> ls -R </strong>: Lista os arquivos e diretórios recursivamente, mostrando também o conteúdo dos subdiretórios.';
    html += '            <br>';
    html += '            <strong>ls -t </strong>: Lista os arquivos e diretórios por ordem de data e hora de modificação, do mais recente para o mais antigo.';
    html += '            <br>';
    html += '            <strong> ls -S </strong>: Lista os arquivos e diretórios por ordem de tamanho, do maior para o menor.';
    html += '            <br>';
    html += '            <strong>ls -r </strong>: Lista os arquivos e diretórios em ordem reversa.';
    html += '            <br>';
    html += '            <strong>ls -i </strong>: Lista os arquivos e diretórios com os números de índice (números de inode) exibidos.';
    html += '        </p>';
    html += '    </div>';
    html += '    <h4>Manual</h4>';
    html += '    <div id="Manual" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> man </strong> para obter mais informações de um comando.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '        <p> <strong>man</strong> nome_comando</p>';
    html += '    </div>';
    html += '</div>';

    $('#conteudo').html(html);

}

function mostrarProgamas(){
    console.log('Progamas');
    
    let html = ' ';

    html +='<h1 id="progamas-title">Programas</h1>';
    html +='<div id="conteudoProgamas" >';
    html +='    <h4>Instalar Programas</h4>';
    html +='    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p>O comando <strong> apt </strong>  é usado em distribuições baseadas no Debian, como Ubuntu, para gerenciar pacotes. Aqui estão alguns exemplos de como usar o comando <strong>apt</strong>:</p>';
    html +='        <p> Atualizar a lista de pacotes: Antes de instalar ou atualizar pacotes, é uma boa prática atualizar a lista de pacotes disponíveis. Use o seguinte comando para atualizar a lista: </p>';
    html +='        <div class="codigo">';
    html +='            <p class="pcodigo">sudo <strong> apt </strong>update </p>';
    html +='        </div>';
    html +='        <br>';
    html +='        <p>Instalar um pacote: Para instalar um novo pacote, use o seguinte comando:</p>';
    html +='        <div class="codigo">';
    html +='            <p class="pcodigo"> sudo <strong> apt </strong> install nome_do_pacote </p>';
    html +='        </div>';
    html +='        <br>';
    html +='        <p>Remover um pacote: Para remover um pacote instalado, use o seguinte comando:</p>';
    html +='        <div class="codigo">';
    html +='            <p class="pcodigo"> sudo <strong> apt</strong> remove nome_do_pacote </p>';
    html +='        </div>';
    html +='        <br>';
    html +='        <p>Atualizar os pacotes: Para atualizar todos os pacotes instalados para suas versões mais recentes, use o seguinte comando:</p>';
    html +='        <div class="codigo">';
    html +='            <p class="pcodigo"> sudo <strong> apt </strong> upgrade </p>';
    html +='        </div>';
    html +='        <br>';
    html +='        <p>Pesquisar pacotes: Para pesquisar pacotes com base em palavras-chave, use o seguinte comando:</p>';
    html +='        <div class="codigo">';
    html +='            <p class="pcodigo"><strong> apt </strong> search palavra-chave </p>';
    html +='        </div>';
    html +='        <br>';
    html +='        <p>Mostrar informações de um pacote: Para exibir informações detalhadas sobre um pacote, use o seguinte comando:</p>';
    html +='        <div class="codigo">';
    html +='            <p class="pcodigo"><strong> apt </strong> show nome_do_pacote </p>';
    html +='        </div>';
    html +='    </div>';
    html +='    <h4>Abrir Programas</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p>Para abrir algum programa pelo terminal do Linux, nao tem nenhum segredo ou comando, é necessário somente';
    html +='            que digite o nome do executável do programa que você deseja abrir. ';
    html +='        </p>';
    html +='        ';
    html +='        <div class="codigo">';
    html +='        <p> <strong>nome_do_programa</strong></p>';
    html +='    </div>';
    html +='    <br>';
    html +='    <p>Lembre-se de que alguns programas podem exigir privilégios de superusuário (root) para serem executados. Nesse caso, ';
    html +='        você precisará usar o comando sudo antes do nome do programa e inserir a senha de administrador quando solicitado. Por exemplo:';
    html +='    </p>';
    html +='    <div class="codigo">';
    html +='        <p> <strong>sudo nome_do_programa</strong></p>';
    html +='    </div>';
    html +='</div>'

    $('#conteudo').html(html);

}

function mostrarPermissao(){
    console.log('Permissao');

    let html = ' ';
    
    html += '<h1 id="permissao-title">Permissão</h1>';
    html += '<div id="conteudoPermissao">';
    html += '    <h4>Alterar permissão</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> chmod </strong> é o responsável por alterar as permissões de um arquivo ou pasta. Geralmente este comando é seguido de uma sequência de 3 números.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> chmod </strong> 777 arquivo.txt </p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>\'Super-usuário\'</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> sudo </strong>executa um comando com privilégios de superusuário.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> sudo </strong> apt-get update</p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Entrar como \'super usuário\'</h4>';
    html += '    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>Use o comando <strong> su </strong> para entrar como \'super-usuário\' e adquirir todas suas respectivas permissões.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '        <p> <strong>su</strong></p>';
    html += '    </div>';
    html += '    <h4>Sair do \'super usuário\'</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> exit </strong> é o responsável por sair do modo \'super usuário\' e voltar para seu usuário anterior</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> exit </strong></p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Verificar as permissões do diretório</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> ls -l </strong> é o responsável por listar todos os conteúdos do diretório junto com suas respectivas permissões.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> ls -l </strong> nome_do_diretorio </p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Alterar propietário</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> chown </strong> altera o proprietário de arquivos e diretórios.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> chown </strong> user arquivo.txt</p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Adicionar usuário</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> adduser </strong> é o responsável por criar um novo usuário no sistema.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> adduser </strong> nome_do_novo_usuario </p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Remover usuário</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> deluser </strong> é o responsável por remover um usuário do sistema.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> deluser </strong> nome_do_usuario </p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Alterar senha</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> passwd </strong> é o responsável por alterar a senha do usuário atual ou de outro usuário.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> passwd </strong></p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Definir máscara de permissão</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> umask </strong> define a máscara de permissões padrão para arquivos e diretórios criados por um usuário.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> umask </strong> 022</p>';
    html += '        </div>';
    html += '    </div>';
    html += '    <h4>Alterar grupo</h4>';
    html += '    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html += '        <p>O comando<strong> chgrp </strong> altera o grupo de arquivos e diretórios.</p>';
    html += '        ';
    html += '        <div class="codigo">';
    html += '            <p class="pcodigo"><strong> chgrp </strong>group arquivo.txt</p>';
    html += '        </div>';
    html += '    </div>';
    html += '</div>';

    $('#conteudo').html(html);

}

function mostrarInstalacao(){
    console.log('Instalação');

    let html = ' ';
   
    html +='<h1 id="instalacao-title" >Instalação</h1>';
    html +='<div id="conteudoInstalacao" >';
    html +='    <h4>Advanced Packaging Tool</h4>';
    html +='    <div id="criarDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p><strong> apt-get </strong>: Gerenciador de pacotes usado em sistemas baseados no Debian, como o Ubuntu.</p>';
    html +='        <div class="codigo">';
    html +='            <p class="pcodigo">sudo <strong> apt-get </strong> install nome_do_pacote </p>';
    html +='        </div>';
    html +='    </div>';
    html +='    <h4>Yellowdog Updater, Modified</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p><strong> yum </strong>: Gerenciador de pacotes usado em sistemas baseados no Red Hat, como o CentOS.</p>';
    html +='        <div class="codigo">';
    html +='        <p>sudo <strong>yum</strong> install nome_do_pacote</p>';
    html +='    </div>';
    html +='    <h4>Dandified Yum</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p><strong> dnf </strong>: Gerenciador de pacotes usado em sistemas Fedora, CentOS 8 e versões mais recentes.</p>';
    html +='        <div class="codigo">';
    html +='        <p>sudo <strong>dnf</strong> install nome_do_pacote</p>';
    html +='    </div>';
    html +='    <h4>Advanced Package Tool</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p><strong> apt </strong>: Gerenciador de pacotes usado em sistemas baseados no Debian, como o Ubuntu (versões mais recentes).</p>';
    html +='        <div class="codigo">';
    html +='        <p>sudo <strong>apt</strong> install nome_do_pacote</p>';
    html +='    </div>';
    html +='    <h4>Baixar arquivos da web</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p>Use o comando<strong> wget </strong> para baixar arquivos da web diretamente para o terminal.</p>';
    html +='        <div class="codigo">';
    html +='        <p><strong>wget</strong> URL_do_arquivo</p>';
    html +='    </div>';
    html +='    <h4>Descompactação</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p>Use o comando<strong> tar </strong> para descompactar e compactar arquivos em formato tar.</p>';
    html +='        <div class="codigo">';
    html +='        <p><strong>tar</strong> -xvf arquivo.tar</p>';
    html +='    </div>';
    html +='    <h4>Gerenciamento de pacotes</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p>Use o comando<strong> dpkg </strong>  para gerenciar pacotes no Debian e sistemas relacionados.</p>';
    html +='        <div class="codigo">';
    html +='        <p>sudo <strong> dpkg </strong> -i pacote.deb</p>';
    html +='    </div>';
    html +='    <h4>Compilar programas</h4>';
    html +='    <div id="removerDiretorios" style="letter-spacing: .3px; padding-bottom: 20px;">';
    html +='        <p>Use o comando<strong> make </strong> para compilar e instalar programas a partir do código-fonte.</p>';
    html +='        <div class="codigo">';
    html +='        <p><strong> make && make </strong>  install</p>';
    html +='    </div>';
    html +='</div>';

    $('#conteudo').html(html);
}

function mostrarServidor(){
    console.log('Servidor');

    let html = ' ';

    html +='<h1 id="servidor-title" >Servidor</h1>';
    html +='<div id="conteudoServidor" >';
    html +='    <p>Quando se trata de servidor Web, existem inumeras maneiras de se obter o mesmo, porém o Apache é o mais usado, por ter seu código aberto, ter uma boa estabiliade além de várias outras caracteristicas</p>';
    html +='    <h4>Instalação</h4>';
    html +='    <p>Para instalar o Apache no Ubunto, deve se primeiro atualizar os pacotes com o comando</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo apt <strong>update</strong></p>';
    html +='    </div>';
    html +='    <p>e após atualizar os pacotes, digitar o seguinte comando para instalar o Apache</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo apt <strong> install</strong> apache2</p>';
    html +='    </div>';
    html +='    <h4>Ajustar Firewall</h4>';
    html +='    <p>Agora que temos o Apache instalado, precisamos configurar o Firewall para permitir o acesso externo</p>';
    html +='    <p>para isso temos alguns perfis de configuração:</p>';
    html +='    <ul>';
    html +='        <li>Apache: Abre a porta 80</li>';
    html +='        <li>Apache Full: Abre a porta 80 e porta 443</li>';
    html +='        <li>Apache Secure: Abre a porta 443</li>';
    html +='    </ul>';
    html +='    <p>Lembrando que a porta 80 é para trafego normal e 443 para TLS/SSl que é criptografado</p>';
    html +='    <p>no nosso caso iremos abrir apenas a porta 80, para isso digitamos o comando</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo ufw <strong>allow</strong> \'Apache\'</p>';
    html +='    </div>';
    html +='    <p>e para confirmar, digitamos o comando</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo ufw <strong>status</strong></p>';
    html +='    </div>';
    html +='    <p>Após isso, pode se abrir o navegador na web para testar o servidor</p>';
    html +='    <p>Para que você possa adicionar seus arquivos no servidor, basta utilizar os comandos de manipulação de arquivos do linux, e colocar seus aquivos na pasta "/var/www/wbsite", por exemplo, se fosse criar uma pasta chamada "html", o codigo seria o seguinte</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo <strong>mkdir</strong> /var/www/html</p>';
    html +='    </div>';
    html +='    <h4>Confirar nome do Dominio</h4>';
    html +='    <p>podemos em nosso servidor, determinar um dominio assim ao invez de digitar o IP da maquina, você consiguirá ter acesso pelo dominio qual determinou no servidor</p>';
    html +='    <p>para determinar um nome de dominio, abra seu arquivo de host</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo <strong>nano</strong> /etc/hosts</p>';
    html +='    </div>';
    html +='    <p>e adicione o seguinte no final do arquivo</p>';
    html +='    <div class="codigo">';
    html +='        <p> &nbsp; 127.0.0.1  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; seu-site.com</p>';
    html +='    </div>';
    html +='    <p>substitua "seu-site.com" pelo dominio desejado</p>';
    html +='    <p>após isso, basta digitar o dominio em seu navegador</p>';
    html +='    ';
    html +='    <h4>Comandos que podem ajudar</h4>';
    html +='    <p>iniciar o Apache</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo service apache2 <strong>start</strong></p>';
    html +='    </div>';
    html +='    <p>Parar o Apache</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo service apache2 <strong>stop</strong></p>';
    html +='    </div>';
    html +='    ';
    html +='    <p>Reiniciar o Apache</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo service apache2 <strong>restart</strong></p>';
    html +='    </div>';
    html +='    <p>Verificar o Status do Apache</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo service apache2 <strong>status</strong></p>';
    html +='    </div>';
    html +='    <p>Ver os logs de erro do Apache</p>';
    html +='    <div class="codigo">';
    html +='        <p>sudo <strong>tail</strong> -f /var/log/apache2/error.log</p>';
    html +='    </div>';
    html +='</div>';

    $('#conteudo').html(html);
}
