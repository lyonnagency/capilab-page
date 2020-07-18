// Backend desde node utilizando express para el envio de correos electrónicos
import nodemailer from 'nodemailer'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const multer = require('multer') // v1.0.5
// const upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.post('/echo', (req, res) => {
  console.log(req.body)
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.webfaction.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'page_capilab',
        pass: 'capilab_4LH5a3'
      }
    })

    // setup email data with unicode symbols
    const mailOptions = {
      from: 'page@capilab.com.mx', // sender address
      to: 'fpurecol@gmail.com', // list of receivers hola@capilab.com.mx
      subject: `Solitud desde web de Capilab`, // Subject line
      text: '', // plain text body
      html: '<h2>Se ha solicitado información desde la página de Capilab</h2> <p>Se ha enviado el siguiente correo o teléfono</p> <ul><li><a href="mailto:' + req.body.correo + '">' + req.body.correo + '</a></li></ul>' // html body
    }
    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions)
    console.log('Message sent: %s', info.messageId)
    res.json({ 'respuesta': 'correcto','info': info })
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  main().catch(console.error)
})

module.exports = {
  path: '/api',
  handler: app
}
