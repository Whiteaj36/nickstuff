const csv = require('csvtojson')

function main() {
    const masterEmailFileName = './emails3.csv'
    const testEmailFileName = './emails1.csv'

    csv({delimiter:','})
    .fromFile(masterEmailFileName)
    .then((masterEmails)=>{
        const passedEmails = []
        csv({delimiter:','})
        .fromFile(testEmailFileName)
        .then((testEmails) => {
            console.log(testEmails, 'testEmails')
            // filter emails1JSON and remove the object if it matches something in json
            testEmails.forEach((testEmail) => {
                masterEmails.forEach((masterEmail) => {
                    
                    if (testEmail.Email === masterEmail.email) {
                        console.log('WE MATCHED')

                    }
                    else {
                        passedEmails.push(testEmail)
                    }
                })
            })
        })
        // console.log(passedEmails)
    // return entries;
})}
main()