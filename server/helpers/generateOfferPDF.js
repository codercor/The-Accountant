module.exports = function generatePDF(offer) {
    const today = new Date();
    let result = `<!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>`;
    let companyData = `<div class="invoice-box">
         <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="https://www.sparksuite.com/images/logo.png" style="width:100%; max-width:300px;">
                            </td>
                            <td>
                                Datum : ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            <td>
                        <tr/>
                    <table/>
                </td>
            </tr>
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                        <td>
                        Company: ${offer.customer.companyName} <br>
                        Name: ${offer.customer.name} <br>
                        Address: ${offer.customer.address} <br>
                        UID: ${offer.customer.uid} <br>
                        Telefon: ${offer.customer.telefon} <br>
                        Email: ${offer.customer.email} <br>
                       </td>
                    </tr>
                 </table>
              </td>
           </tr>`
    let products = `
           <tr class="heading">
           <td>Product</td>
           <td>Unit</td>
           <td>Price</td>
        </tr>
        
        `;
    for (let i = 0; i < offer.products.length; i++) {
        const product = offer.products[i];
        products += `<tr class="item">
            <td>${product.title}</td>
            <td>${product.unit}</td>
            <td>€${product.price} </td>
         </tr>`
    }
    result += companyData + products;
    result += ` </table>
    <br /> </div>
    </body>
 </html>`
 return result;

}