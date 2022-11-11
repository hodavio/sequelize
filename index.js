(async ()  => {
    const databese = require('./db');
    const legumes = require('./legumes')
    await databese.sync();

    const newlegumes = await legumes.create ({
        nome: 'alface', 
        preço: '20',
        descricao: 'imprescindivel para sopa'
    })

    const newlegume = await legumes.create({
        nome: 'beteraba',
        preço: '7',
        descricao: 'bom pra saude',
        cores: 'lilas',
    })

    console.log (newlegumes);


}) ();