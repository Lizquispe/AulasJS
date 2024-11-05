let email = ['liz110quispe@gmailcom','emailteste@gmail.com','lizclaudia@gmail.com']
email.forEach((email, index, array) => {
    console.log(`E-mail enviado para ${email}`);
    console.log(`Seu cadastro é: ${index}`);
    console.log(`E-mails da lista: ${array}`);
    console.log(`-------------------------------`);
})