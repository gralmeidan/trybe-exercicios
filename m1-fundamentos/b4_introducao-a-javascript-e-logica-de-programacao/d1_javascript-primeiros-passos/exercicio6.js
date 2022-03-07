var peca = 'rainha'.toLowerCase()

switch (peca) {
    case 'bispo':
        console.log('diagonais')
        break;
    case 'cavalo':
        console.log('se move em L')
        break;
    case 'peao':
        console.log('pra frente 1 quadrado por vez, pode se mover 2 no inicio da partida, come até 1 casa na diagonal, pode fazer en passant')
        break;
    case 'torre':
        console.log('se move em linha reta')
        break;
    case 'rei':
        console.log('se move 1 case em qualquer direção')
        break;
    case 'rainha':
        console.log('se move em qualquer direção')
        break;
    default:
        console.log('nao e uma peça de xadrez')
        break;
}