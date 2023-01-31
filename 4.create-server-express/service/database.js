const sql = require('mssql/msnodesqlv8')



const config = {
    user: 'sa',
    password: 'Sql132',
    database: 'School',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        trustedConnection: true,
        useUTC: true
    }
}

sql.on('error', function (err) {
    // ... error handler
    console.log('sql error on show : ' + err);

})





// query

async function query(id) {
  //  console.log('/** query start **/');
 try{
    var pool= await sql.connect(config);
    var result=await pool.request().input('id', sql.Int, id).query('select * from dbo.Student where id = @id');
    // console.log('/** query end **/'); 
     return result.recordset;
 }
 catch(error)
 {console.log(`query error : ${error}`);  }
  
}

//insert

function insert(name, department) {
    console.log('/** insert start **/');
    sql.connect(config).then(connection => {
        // Query
        console.log('connect show : ');
        var poolrec = connection.request();
        var q = poolrec.query(`insert into Student (student_name,department) values ('${name}','${department}')`)
        return q;

    }).then(result => {
        console.log('inserted rows count: ' + result.rowsAffected);
    }).catch(err => {
        // ... error checks
        console.log('catch show : ' + err);
    });

    console.log('/** insert end **/');
}


// insert using transaction

function insert_trans(id, department) {
    const pool = new sql.ConnectionPool(config);
    const transaction = new sql.Transaction(pool)
    transaction.begin(err => {
        // ... error checks

        const request = new sql.Request(transaction)
        request.query('insert into Student (department) values (' + department + ') where id=' + id, (err, result) => {
            // ... error checks
            
            transaction.commit(err => {
                // ... error checks

                console.log("Transaction committed.")
            })
        })
    })
}


// update

function update(id, department) {
    console.log('/** update start **/');

    sql.connect(config).then(connection => {
        // Query
        var count = 0;
        const request = new sql.Request()
        request.stream = true
        return request.input('id', sql.Int, id).query(`update Student set department='${department}' where id=@id`);

    }).then(result => {
        console.log('update result rows count : ' + result.rowsAffected);

    }).catch(err => {
        // ... error checks
        console.log('catch show : ' + err);
    });
    console.log('/** update end **/');
}



//insert('jack','biology');
//update(3,'oop');
//query(2).then(result=>{console.log(result) ;});



module.exports = { query, insert, update };
 