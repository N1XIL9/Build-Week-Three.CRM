export class Fatture {
    id?: number
    numero?: number
    anno?: number
    importo?: number
    stato: string = "NON_PAGATA"
    cliente?: {
      id?: number
    }
    dataInserimento: Date = new Date()
    dataUltimaModifica?: string
}
