var config = {
    type: Phaser.AUTO, //o navegador escolhe automaticamente o tipo de renderizador
    width: 800, //define a largura
    height: 600, // define a altura

    // define as funções que serão executadas durante o ciclo de vida do jogo
    scene:{
        preload: preload, 
        create: create, 
        update: update 
    }
};
//a variável game guarda nela um "novo jogo phaser"
var game = new Phaser.Game(config);
var peixinho;

//carregar os recursos do nosso jogo
function preload(){
    // load.image - carregar a imagem
    this.load.image("mar", "assets/bg_azul-escuro.png");
    this.load.image("logo", "assets/logo-inteli_branco.png");
    this.load.image("peixe", "assets/peixes/peixinho_laranja.png");
    this.load.image("concha", "assets/peixes/concha.png");

}
//criar e configurar elementos do jogo
function create(){
    // add.image - adicionar imagem
    this.add.image(400, 300, "mar");
    // setScale - realizar alterações no tamanho da imagem
    this.add.image(400, 525, "logo").setScale(0.5);
    // setOrigin - determina a origem daquela imagem
    // setFlip - indica se a imagem deve ser espelhada horizontalmente ou verticalmente
    peixinho = this.add.image(400, 300, "peixe").setOrigin(0.5, 0.5).setFlip(true, false); 
    this.add.image(400, 300, "concha").setOrigin(4, -3); 
    this.add.image(400, 300, "concha").setOrigin(-4, -3); 
    this.add.image(400, 300, "concha").setOrigin(4, 3); 
    this.add.image(400, 300, "concha").setOrigin(-4, 3); 
}
//atualização em tempo real do jogo, como o movimento dos personagens
function update(){
    peixinho.x = this.input.x; // posição horizontal do cursor
    peixinho.y = this.input.y; // posição vertical do cursor

}
