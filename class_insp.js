class Insp {
    constructor(id, linija, kelias, km, pk, m, siule, salyginis_kodas, suvirino, operatorius, aparatas, tikrinimo_data, kelintas_tikrinimas) {
        this.id = Insp.normal(id)
        this.linija = Insp.normal(linija)
        this.kelias = Insp.normal(kelias)
        this.km = Insp.normal(km)
        this.pk = Insp.normal(pk)
        this.m = Insp.normal(m)
        this.siule = Insp.normal(siule)
        this.skodas = Insp.normal(salyginis_kodas)
        this.suvirino = Insp.normal(suvirino)
        this.operatorius = Insp.normal(operatorius)
        this.aparatas = Insp.normal(aparatas)
        this.tdata = Insp.normal(tikrinimo_data)
        this.kelintas = Insp.normal(kelintas_tikrinimas)
    }
        
    get vk() {
        const ph = "?"
        return "id" + (this.id || ph) + "-" + (this.linija || ph) + "." + (this.kelias || ph) + "." + (this.km || ph) + "." + (this.pk || ph) + "." + (this.m || ph) + "-" + (this.skodas || ph) + "-" + (this.kelintas || ph)
    }
    
    static fromArrayRow(row) {
        return new Insp(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12])
    }
    
    static normal(value) {
        if (value === undefined || (typeof value === "string" && value.trim() === "")) {
            return undefined
        }
        else if (typeof value === "string") {
            return value.trim()
        }
        else return value
    }
}