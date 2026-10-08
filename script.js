const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav-links');
if(menu) menu.onclick=()=>nav.classList.toggle('open');
document.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));

const date=document.getElementById('date');
const today=new Date(); date.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split('T')[0];

document.getElementById('bookingForm').addEventListener('submit',e=>{
e.preventDefault();
const name=document.getElementById('name').value, service=document.getElementById('service').value;
const d=document.getElementById('date').value, t=document.getElementById('time').value;
const msg=document.getElementById('bookingMessage');
msg.className='message success';
msg.innerHTML=`Appointment request received for <strong>${name}</strong> — ${service}, ${d} at ${t}. This is a demo booking form. Connect Web3Forms, Formspree or a backend for real email bookings.`;
e.target.reset();
date.min=new Date().toISOString().split('T')[0];
});
