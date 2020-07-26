const express = require('express');
const session = require('express-session');
const app = express();
const port = 5000;

app.use(
  session({
    store: new session.MemoryStore(),
    secret: 'a secret to sign the cookie',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000
    }
  })
);

app.use(function (req, res) {
    console.log(req.session);

    res.set('content-type', 'text/plain');
    var newPage = 'Currently on route: '
    
    if (req.session.example == undefined) {
        req.session.example = [];
        req.session.example.push(req.url);
        req.session.example.join('\n')
        res.send(res.send(newPage+req.session.example+'\n'+'Welcome to http://localhost:'+port+req.url));
        
    }
    else {   
        req.session.example.push(req.url);
        req.session.example.join('\n')
        res.send(newPage+req.url+'\n'+'Previously Visited: '+'\n'+req.session.example.join('\n'));
        //console.log(req.session.example.)
    }
   
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});