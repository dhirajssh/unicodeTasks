// To show whether valid or invalid
// takes in the parent element and whether it was a success or fail and the message that needs to be displayed
//this show message is for when submit is clicked
function showMessage(parent,value,message){
  if(value===true){
    parent.children[1].classList.remove('animated');
    parent.children[1].classList.remove('shake');
    parent.classList.remove('fail');
    parent.children[2].classList.remove('fa-exclamation-circle');
    parent.classList.add('success');
    parent.children[2].classList.add('fa-check-circle');
    parent.children[2].innerHTML = `&nbsp;${message}`;
  }else{ 
    parent.children[1].className = 'form-control';
    parent.classList.remove('success');
    parent.children[2].classList.add('fa-check-circle');
    parent.classList.add('fail');
    parent.children[2].classList.add('fa-exclamation-circle');
    parent.children[1].className = 'form-control animated shake';
    parent.children[2].innerHTML = `&nbsp;${message}`;
  }
}

// for blur cases cause do not want to add shake animation for blur
function showMessage1(parent,value,message){
  if(value===true){
    parent.classList.remove('fail');
    parent.children[2].classList.remove('fa-exclamation-circle');
    parent.classList.add('success');
    parent.children[2].classList.add('fa-check-circle');
    parent.children[2].innerHTML = `&nbsp;${message}`;
  }else{ 
    console.log(parent.children[1].className);
    parent.classList.remove('success');
    parent.children[2].classList.add('fa-check-circle');
    parent.classList.add('fail');
    parent.children[2].classList.add('fa-exclamation-circle');
    parent.children[2].innerHTML = `&nbsp;${message}`;
  }
}


// is shown when all the info is not filled
function showAlert(){
  let form = document.querySelector('form')
  if(document.getElementById('alert')){
    return true;
    // let div = document.getElementById('alert');
    // form.removeChild(div)
  }
  let div = document.createElement('div');
  let input = document.getElementById('submit');
  div.className = "rounded bg-danger text-white text-center px-2 py-2 mb-4";
  div.id="alert"
  div.textContent = 'Please fill all your information';
  form.insertBefore(div,input)
  setTimeout(()=>{
    form.removeChild(div);
  },4000)
}

//is when all the info filled is valid
function showSuccess(){
  const div = document.getElementById('page');
  div.innerHTML=`<h1>Your Contact Form has been filled successfully</h1><br>
  <img class="mx-auto" src='gj1.gif' id="GIF">
  `;

  // const name = document.querySelector('#name1');
  // const message = document.querySelector('#message1');
  // const email = document.querySelector('#email1');
  // const phone = document.querySelector('#phone1');

  // name.disabled = true;
  // message.disabled = true;
  // email.disabled = true;
  // phone.disabled = true;


  // let form = document.querySelector('form')
  // if(document.getElementById('success')){
  //   let div = document.createElement('div');
  //   form.removeChild(div)
  // }
  // let div = document.createElement('div');
  // let input = document.getElementById('submit');
  // div.className = "rounded bg-success text-white text-center px-2 py-2 mb-4";
  // div.id="success"
  // div.textContent = 'Your Contact Form has been filled successfully';
  // form.insertBefore(div,input)
}

//blurr events
////blurr for name
document.getElementById('name1').addEventListener('blur',()=>{
  const name = document.querySelector('#name');

  const n_input = name.children[1].value;

  const n_re = /^[a-zA-Z ]{2,30}$/;

  if(n_input === ''){
    showMessage1(name,false,'Please enter your name');
  }
  else if(n_re.test(n_input)){
    showMessage1(name,true,'valid input');
  }else{
    showMessage1(name,false,'invalid input');
  }
});

//blur for message
document.getElementById('message1').addEventListener('blur',() => {
  const message = document.querySelector('#message');

  const m_input = message.children[1].value;

  const m_re = /\w+/;

  if(m_input === ''){
    showMessage1(message,false,'Please enter a message');
  }
  else if(m_re.test(m_input)){
    showMessage1(message,true,'valid input');
  }else{
    showMessage1(message,false,'only alphanumeric characters can be entered');
  }
});

//blur for email
document.getElementById('email1').addEventListener('blur',() => {
  const email = document.querySelector('#email');

  const e_input = email.children[1].value;

  const e_re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(e_input === ''){
    showMessage1(email,false,'Please enter your email id');
  }
  else if(e_re.test(e_input)){
    showMessage1(email,true,'valid email');
  }else{
    showMessage1(email,false,'invalid email');
  }
});
  
//blur for phone
document.getElementById('phone1').addEventListener('blur',() => {
  const phone = document.querySelector('#phone');

  const p_input = phone.children[1].value;

  const p_re = /\+?\d[\d -]{8,12}\d/;

  if(p_input === ''){
    showMessage1(phone,false,'Please enter your phone number');
  }
  else if(p_re.test(p_input)){
    showMessage1(phone,true,'valid phone number');
  }else{
    showMessage1(phone,false,'invalid phone number');
  }
});

//event listener for submit
document.getElementById('submit').addEventListener('click',(e) =>{
  const name = document.querySelector('#name');
  const message = document.querySelector('#message');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');

  const n_input = name.children[1].value;
  const m_input = message.children[1].value;
  const e_input = email.children[1].value;
  const p_input = phone.children[1].value;

  //'+' means it wants to look thru all
  const n_re = /^[a-zA-Z ]{1,30}$/;

  const m_re = /\w+/;

  const e_re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  const p_re = /\+?\d[\d -]{8,12}\d/;

  //this has to be before the blank checking, otherwise the messages are overridden
  if(n_re.test(n_input)){
    showMessage(name,true,'valid input');
  }else{
    showMessage(name,false,'invalid input');
  }

  if(m_re.test(m_input)){
    showMessage(message,true,'valid input');
  }else{
    showMessage(message,false,'only alphanumeric characters can be entered');
  }

  if(e_re.test(e_input)){
    showMessage(email,true,'valid email');
  }else{
    showMessage(email,false,'invalid email');
  }
  
  if(p_re.test(p_input)){
    showMessage(phone,true,'valid phone number');
  }else{
    showMessage(phone,false,'invalid phone number');
  }

  // if the input is blank
  if(n_input==='' || m_input==='' || e_input==='' || p_input===''){
    showAlert();
  }

  if(n_input===''){
    showMessage(name,false,'Please enter your name');
  }

  if(m_input===''){
    showMessage(message,false,'This has to be filled');
  }

  if(e_input===''){
    showMessage(email,false,'Please enter your email id');
  }

  if(p_input===''){
    showMessage(phone,false,'Please enter your phone number');
  }

  //to see whether all the info has been filled successfully
  if(name.classList.contains('success') && message.classList.contains('success') && email.classList.contains('success') && phone.classList.contains('success')){
    showSuccess();
  }

   e.preventDefault();

});