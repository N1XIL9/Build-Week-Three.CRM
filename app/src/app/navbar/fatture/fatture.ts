export class Fatture {
    id?: number
    data?: string
    numero?: number
    anno?: number
    importo?: number
    stato: string = "NON PAGATA"
    cliente?: {
      id?: number
    }
    dataInserimento?: string
    dataUltimaModifica?: string
    quantita?: number
    servizo?: string
}
