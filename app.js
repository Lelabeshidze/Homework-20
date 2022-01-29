const modalBg = document.querySelector('.modal-form')
const modalBtn = document.querySelector('.newuser-btn')
const modalClose = document.querySelector('.modal-close')
modalBtn.addEventListener('click' , function(){
  modalBg.classList.add('bg-active');
} );
modalClose.addEventListener('click' , function(){
  modalBg.classList.remove('bg-active')
})



const signupForm = document.querySelector('#user-signup-form');
const email = document.querySelector('#email').value
const personal_number = document.querySelector('#personal_number').value
const mobile_number = document.querySelector('#mobile_number').value
const first_name = document.querySelector('#first_name').value
const last_name = document.querySelector('#last_name').value
const zip = document.querySelector('#zip').value
const gender = document.querySelector('#gender').value
const status = document.querySelector('#status').value
const user_id = document.querySelector('#user_id').value


const formEl = document.querySelector("form")
const tbodyEl = document.querySelector("tbody")
const tableEl = document.querySelector('table')


function getUsers() {
const getUsersRequest = fetch ('http://api.kesho.me/v1/user-test');
  getUsersRequest.then(response => {
    return response.json();
  }).then(data => {
      console.log(data)
  })

function createUser(userData){
  const createUserRequest = fetch ('http://api.kesho.me/v1/user-test/create' , {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  createUserRequest.then(response => {
    return response.json();
  }).then(data => {
      console.log(data)
  })
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const userData = {
      id: user_id.value,
      first_name: first_name.value,
      last_name: last_name.value,
      zip: zip.value,
      mobile: mobile_number.value,
      pn: personal_number.value,
      gender: gender.value,
      email: email.value,
      status: status.value,
    };
    console.log(userData);
  });
tbodyEl.innerHTML += `
<tr>
 <td>${email.value}</td>
 <td>${personal_number.value}</td>
 <td>${mobile_number.value}</td>
 <td>${first_name.value}</td>
 <td>${last_name.value}</td>
 <td>${zip.value}</td>
 <td>${gender.value}</td>
 <td>${status.value}</td>
 <td><button class="deleteBtn">Delete</button></td>
</tr>`;
 }
}
 createUser()
 getUsers()
 function onDeleteRow(e) {
    if (!e.target.classList.contains('deleteBtn')) {
      return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
 }


 formEl.addEventListener('submit',getUsers);
 tableEl.addEventListener('click' , onDeleteRow);




