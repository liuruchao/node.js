module.exports = function (playerAction) {
    if (['rock', 'scissor', 'paper'].indexOf(playerAction) == -1) {
        throw new Error('invalid playerAction');
    }
    // 计算电脑出的东西
    var computerAction;
    var random = Math.random() * 3
    if (random < 1) {
        computerAction = 'rock'

    } else if (random > 2) {
        computerAction = 'scissor'

    } else {
        computerAction = 'paper'

    }

    if (computerAction == playerAction) {
        console.log('平局')
        return 0;

    } else if (
        (computerAction == 'rock' && playerAction == 'scissor') ||
        (computerAction == 'scissor' && playerAction == 'paper') ||
        (computerAction == 'paper' && playerAction == 'rock')
    ) {
        console.log('你输了')
        return -1;

    } else {
        console.log('你赢了')
        return 1;
    }
}