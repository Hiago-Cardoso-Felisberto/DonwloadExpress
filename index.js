var express = require('express');
var app = express();

app.use('/index', express.static('index.html'))
app.use('/escolherArquivo', express.static('escolherArquivo.html'))
app.use('/yoda', express.static('imagem/yoda.jpg'))

app.get('/download/yoda', (req, res) => {
    res.download('./imagem/yoda.jpg', 'Yoda.jpg');
});

app.get('/download/luke', (req, res) => {
    res.download('./imagem/luke.jpg', 'Luke.jpg');
    res.download('./imagem/luke.jpg', err => {
        if (err) {
            res.status(404).send('Arquivo não encontrado para download!')
        }
    })
});

app.get('/', function(req, res){ 
    res.redirect('/index');
})

app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(3000, function () { 
    console.log("http://localhost:3000");
}); 
