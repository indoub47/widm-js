class DataTextParser {    
    constructor(rowLength) {
        this._rowLength = rowLength
    }
    
    textToArray(text) {
        var arr = []
        text.split("\n").forEach(row => arr.push(row.split("\t")))
        arr.map(row => row.splice(this._rowLength))
        return arr.filter(row => row.some(c => c.trim() != ""))
    }
    
    get rowLength() {
        return this._rowLength
    }    
}