
let fs = require('fs')

let file = "demo.mp4"

let read = fs.createReadStream(file)
let write = fs.createWriteStream("test.mp4")

fs.stat(file, (err, stat) => {
    let total = stat.size

    let progress = 0

    read.on('data', (chunk) => {
        progress+=chunk.length

        console.log(" J'ai lue " + Math.round(100 * progress/total) + " %")
    })

    read.pipe(write)
    
    write.on('finish',() => {
        console.log('I have finish to copy ' + file )
    })
})


/*
fs.readFile("demo.mp4", (err, data)=> {

    if (err) {
        throw err
    }
    console.log(" le fichier a bien ete lit")
    fs.writeFile("copy2.mp4", data, (err) => {
        if (err) throw err

        console.log(" le fichier a bien ete copié")
    })

})
*/