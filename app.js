var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'viraj.phanse0303@gmail.com',
	pass:'Virajphanse@123'
  }
});

var mailOptions = {
  from: 'viraj.phanse0303@gmail.com',
  to: 'virajaphanse@gmail.com',
  subject: 'Email using Node.js',
  text: 'That was easy part!',
   html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});