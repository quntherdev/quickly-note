const pgtools = require('pgtools');
const { Client } = require('pg');


const config = {
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'postgres',
};

const dbName = 'my_database';
const dbUser = 'my_user';
const dbPass = 'my_password';

function create_database(){
    pgtools.createdb(
        {
            ...config,
            user: config.user,
            password: config.password,
        },
        dbName,
        {
            owner: dbUser,
            encoding: 'utf8',
            template: 'template0',
        },
        function (err, res) {
            if (err) {
                console.error(err);
                process.exit(-1);
            }
            console.log(`Database ${dbName} created with owner ${dbUser}`);

            // create a client instance to the newly created database
            const client = new Client({
                user: dbUser,
                host: config.host,
                port: config.port,
                password: dbPass,
                database: dbName,
            });

            client.connect((err) => {
                if (err) {
                    console.error(err);
                    process.exit(-1);
                }
                console.log('Connected to database:', dbName);

                // create tables or perform other database operations here

                client.end((err) => {
                    if (err) {
                        console.error(err);
                        process.exit(-1);
                    }
                    console.log('Disconnected from database:', dbName);
                });
            });
        }
    );
}