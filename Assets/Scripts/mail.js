const sendBtn = document.querySelector('#mailSubmitBtn');
const form = document.querySelector('#mailForm');
const cfs = document.querySelector('#contactFormSection');


const sendEmail = (event) => {
    event.preventDefault();
    
    let { name, email, subject, message } = form.elements;
    if(name.value === '' || email.value === '' || subject.value === '' || message.value === '') return;
    let data = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    };
    
    let mailSubject = `${data.name} - ${data.subject}`;
    let body = `
                    Name : <b>${data.name}</b><br/>
                    Subject : <b>${data.subject}</b><br/>
                    Email : <b>${data.email}</b><br/><br/>
                    ${data.message}
                `;

    sendBtn.classList.add('bg-yellow-500', 'text-white', 'hover:bg-yellow-600');
    sendBtn.innerHTML = 'On The Way! <i class="spinner fa-solid fa-spinner"></i>';
    const randomSeconds = Math.round(Math.random() * (3000 - 1000) + 1000);


    setTimeout(function(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "query.studiohr@gmail.com",
            Password : "0E7EC3A1D8323E841DB9B3A3A193574A64D8",
            To : 'connect@studiohr.in',
            From : "query.studiohr@gmail.com",
            Subject : mailSubject,
            Body : body,
        }).then(
            cfs.innerHTML = `<p class="lg:px-64 md:px-20 px-8 bg-gray-100 mt-10 rounded-xl text-gray-300 font-black lg:text-7xl text-5xl  py-24 lg:leading-tight leading-tight text-center">
                        Thanks for reaching out to us. <span class="text-green-400">We've recieved your mail</span> and we'll get back to you soon.<br/><span class="text-indigo-800">PEACE <i class="fa-solid fa-hand-peace"></i></span>
                    </p>`
        );
    },randomSeconds)

}

sendBtn.addEventListener('click', sendEmail);