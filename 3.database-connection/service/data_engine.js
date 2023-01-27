

const transaction = new sql.Transaction(/* [pool] */)
transaction.begin(err => {
    // ... error checks

    const request = new sql.Request(transaction)
    request.query('insert into mytable (mycolumn) values (12345)', (err, result) => {
        // ... error checks

        transaction.commit(err => {
            // ... error checks

            console.log("Transaction committed.")
        })
    })
})




//transaction
const transaction = new sql.Transaction(/* [pool] */)
transaction.begin(err => {
    // ... error checks

    let rolledBack = false

    transaction.on('rollback', aborted => {
        // emited with aborted === true

        rolledBack = true
    })

    new sql.Request(transaction)
    .query('insert into mytable (bitcolumn) values (2)', (err, result) => {
        // insert should fail because of invalid value

        if (err) {
            if (!rolledBack) {
                transaction.rollback(err => {
                    // ... error checks
                })
            }
        } else {
            transaction.commit(err => {
                // ... error checks
            })
        }
    })
})