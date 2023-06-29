const mongoose = require(`mongoose`)

mongoose
    .connect(`mongodb+srv://alisiddiquia22:safais34@cluster0.wdrtydb.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        console.log(`Successfully connected to MongoDB!`)
    })
    .catch((e)=>{
        console.error(`Connection Error: `, e.message)
    })

    mongoose.set(`debug`, true)
    const db = mongoose.connection
