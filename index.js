const csv = require('csvtojson')

function main() {
    const masterEmailFileName = './csvs/emails3.csv' // NICK: Change this to whatever your master email list is
    const testEmailFileName = './csvs/emails1.csv' // NICK: Change this to wahtever you want to remove duplicates in here

    csv({delimiter:','})
    .fromFile(masterEmailFileName)
    .then((masterEmails)=>{
        const passedEmails = []
        csv({delimiter:','})
        .fromFile(testEmailFileName)
        .then((testEmails) => {
            // filter emails1JSON and remove the object if it matches something in json
            testEmails.forEach((testEmail) => {
                let matchFound = false
                masterEmails.forEach((masterEmail) => {
                    if (testEmail.email === masterEmail.email) { // NICK: these lines do the comparison between the two values. 
                        // testEmail and masterEmail have each line in the csv, 
                        // and you can access the values by doing testEmail.email to get emails, or testEmail.name to get names
                        matchFound=true
                    }
                })
                if (!matchFound) {
                    passedEmails.push(testEmail)
                }
            })

        console.log(passedEmails.length)
        })
})}
main()