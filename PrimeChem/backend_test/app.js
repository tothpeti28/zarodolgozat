const express = require('express');
const fileupload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const app = express();
const saltRounds = 10;
const bcrypt = require('bcrypt')
const port = 3000;
var mysql = require('mysql');
const session = require('express-session');
//fájlfeltöltés modulok
const filesPayloadExists = require('./middleware/filesPayloadExists');
const fileExtLimiter = require('./middleware/fileExtLimiter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');

//session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

var connection
function dbconnect() {
        connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 's44_db'
    });
    connection.connect();
}

app.use(cors());

app.use(express.json());

app.use(express.static('files'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"admin.html"));
});



//Regisztráció
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    dbconnect()

    connection.query('SELECT * FROM felhasznalok WHERE username = ?', [username], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            return res.status(400).json({ message: 'A felhasználónév már foglalt!' });
        }

        bcrypt.hash(password, saltRounds, (error, hash) => {
            if (error) throw error;

            connection.query('INSERT INTO felhasznalok (id, username, password, role) VALUES (NULL, ?, ?, "user")', [username, hash], (error) => {
                if (error) throw error;

                res.json({message: "Sikeres regisztráció!"});
            });
        });
    });

    connection.end
});

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    dbconnect()
    connection.query('SELECT * FROM felhasznalok WHERE username = ?', [username], (error, results) => {
        if (error) throw error;

        if (results.length === 0) {
            return res.status(400).json({ message: 'A felhasználónév vagy jelszó hibás!' });
        }

        const user = results[0];

        console.log(user.password)
        console.log(password)
        bcrypt.compare(password, user.password, (error, result) => {
            if (error) throw error;
            console.log(result)
            if (!result) {
                return res.status(400).json({ message: 'A felhasználónév vagy jelszó hibás!' });
            }

            console.log("ize")
            req.session.username = username;
            req.session.role = user.role;

            res.json({ username: req.session.username, role: req.session.role });
        });
    });
    connection.end()
});

// Logout
app.post('/logout', (req, res) => {
    dbconnect();
    if (!req.session.username) {
        return res.status(400).json({ message: 'Nincs bejelentkezett felhasználó' });
    }

    req.session.destroy(() => {
        res.json({ message: 'Sikeres kijelentkezés!' });
    });
});
//Kép feltöltés

app.post('/upload',
    fileupload({ createParentPath: true }),
    filesPayloadExists,
    fileExtLimiter(['.png', '.jpg', '.jpeg', '.JPG']),
    fileSizeLimiter,
    (req, res) => {
        const files = req.files;
        console.log(files, "termeknev:" + req.body.termeknev);

        Object.keys(files).forEach(key => {
            const filepath = path.join(__dirname, 'files', files[key].name)
            files[key].mv(filepath, (err) => {
                if (err) return res.status(500).json({ status: "error", message: err })
                console.log(files[key].name);
            })
        })
 		res.header("Access-Control-Allow-Origin", "*");
        return res.status(200).json({ message: "Sikeres feltöltés!" })
    }
);

app.post('/uploadValues', (req, res) => {
    dbconnect()
    connection.query(`INSERT INTO termekek VALUES (NULL, '${req.body.termeknev}', '${req.body.termektipus}', '${req.body.termekleiras}', '${req.body.termekar}', '${req.body.termekkiszereles}', '${req.body.kep}')`,
        function (err, rows) {
            if (err) throw err
            res.send("Sikerült a feltöltés!")
        });
    connection.end();
});


app.get('/kep', (req, res) => {
    
    dbconnect()
    
    connection.query("SELECT * from termekek ", function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    })

    connection.end()
})

app.get('/ablaktisztitok', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from termekek WHERE tipus="Ablaktisztítók"`, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    })

    connection.end()
})

app.get('/apoloszerek', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from termekek WHERE tipus="Ápolószerek"`, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    })

    connection.end()
})

app.get('/felnitisztitok', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from termekek WHERE tipus="Felnitisztítók"`, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    })

    connection.end()
})

app.get('/tisztitoszerek', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from termekek WHERE tipus="Tisztítószerek"`, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    })

    connection.end()
})

app.get('/samponok', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from termekek WHERE tipus="Samponok"`, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    })

    connection.end()
})

app.get('/viaszok', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from termekek WHERE tipus="Viaszok"`, function (err, rows, fields) {
        if (err) throw err
        res.json(rows);
    })

    connection.end()
})

app.get('/termeklista', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from termekek`, function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    })

    connection.end()
})

app.get('/lomtar', (req, res) => {
    
    dbconnect()
    
    connection.query(`SELECT * from lomtar`, function (err, rows, fields) {
        if (err) throw err
        res.send(rows);
    })

    connection.end()
})

app.post('/lomtarba', (req, res) => {
    dbconnect()
    connection.query(`INSERT INTO lomtar VALUES (NULL, '${req.body.id}', (SELECT nev FROM termekek WHERE id='${req.body.id}'), (SELECT tipus FROM termekek WHERE id='${req.body.id}'),(SELECT leiras FROM termekek WHERE id='${req.body.id}'),(SELECT ar FROM termekek WHERE id='${req.body.id}'),(SELECT kiszereles FROM termekek WHERE id='${req.body.id}'),(SELECT kep FROM termekek WHERE id='${req.body.id}'))`,
        function (err, rows) {
            if (err) throw err
            res.send("A termék belekerült a lomtárba!")
        });
    connection.end();
});

app.post('/lomtarba_t', (req, res) => {
    dbconnect()
    connection.query(`DELETE FROM termekek WHERE id='${req.body.id}'`,
        function (err, rows) {
            if (err) throw err
            res.send(rows)
        });
    connection.end();
});

app.post('/lomtarbol', (req, res) => {
    dbconnect()
    connection.query(`INSERT INTO termekek VALUES ((SELECT termek_id FROM lomtar WHERE id='${req.body.id}'), (SELECT nev FROM lomtar WHERE id='${req.body.id}'), (SELECT tipus FROM lomtar WHERE id='${req.body.id}'),(SELECT leiras FROM lomtar WHERE id='${req.body.id}'),(SELECT ar FROM lomtar WHERE id='${req.body.id}'),(SELECT kiszereles FROM lomtar WHERE id='${req.body.id}'),(SELECT kep FROM lomtar WHERE id='${req.body.id}'))`,
        function (err, rows) {
            if (err) throw err
            res.send("A termék kikerült a lomtárból")
        });
    connection.end();
});

app.post('/lomtarbol_t', (req, res) => {
    dbconnect()
    connection.query(`DELETE FROM lomtar WHERE id='${req.body.id}'`,
        function (err, rows) {
            if (err) throw err
            res.send(rows)
        });
    connection.end();
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:3000`);
});