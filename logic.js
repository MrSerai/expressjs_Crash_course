let docService = require('/docService')
let logicService = {
    calculateVAT: (value, percent) => {
        return value * percent / 100;
    },
    generateInvoice: (purchaseRow) => {
        // message the document service
        docService.generate(row["customer name"])
        let documentId = 12345;
        return documentId;
    }
}
module.exports = logicService;