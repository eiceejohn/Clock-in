
const scriptURL = 'https://script.google.com/macros/s/AKfycbzn6Zeg7CnVBWDxjth0j9n71YkscQFgT7C8BXWgOfwTAyE2TKRjhm5iLkLp7JHSe7YJNA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

var today = new Date();

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  var formattedDate = yyyy + '-' + mm + '-' + dd;

  document.getElementById('presentDate').value = formattedDate;


  function fetchData() {
    let id = document.getElementById('idInput').value;

   
    let data = {
        id: '400',
        name: 'Eicee John Santiago',
        department: 'Log',
    };

    let data = {
      id: '107',
      name: 'Aurelio Abao',
      department: 'Log',
  };

    document.getElementById('nameInput').value = data.name;
    document.getElementById('departmentInput').value = data.department;
}


function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  document.getElementById('clock').value = timeString;
}

setInterval(updateTime, 1000);
updateTime();

