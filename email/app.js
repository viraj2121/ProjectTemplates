var nodemailer = require('nodemailer');
const fs = require('fs')

const hbs=require('nodemailer-express-handlebars');
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'BestifyYourTime@outlook.com',
	pass:'Bestify@123'
  }
});
const handlebarOptions = {
    viewEngine: {
      extName: '.html',
      partialsDir: 'templates',
      layoutsDir: 'templates',
      defaultLayout: '',
    },
    viewPath: '',
    extName: '.html',
  };
transporter.use('compile', hbs(handlebarOptions));
/*transport.use("compile",hbs({
            viewEngine:{
               partialsDir:"D:/email/index.handlebars",
               defaultLayout:""
           },
          viewPath:"D:/email/index.handlebars",
         extName:".hbs"
     });
	 )
*/
var mailOptions = {
  from: 'BestifyYourTime@outlook.com',
  to: 'viraj.phanse0303@gmail.com',
  subject: 'Email using Node.js',
  text: 'That was easy part!',
  template:'index'
   };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

