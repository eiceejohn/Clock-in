
const scriptURL = 'https://script.google.com/macros/s/AKfycbzYQpqI2b6xavwk-sraeDsXWIQLqTAWrTHm3szgyZdvV9MrdA7eAx7j_6dDZpJ3g2VixQ/exec'

const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })

form.addEventListener('submit', e => {
    e.preventDefault();

    // Perform form validation
    if (!form.checkValidity()) {
        // If the form is not valid, show error messages or handle as needed
        // Here's a simple example alert:
        alert("Please fill out all required fields.");
        return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text(); // Assuming the server returns some text message
    })
    .then(data => {
        // Display success message on the webpage
        const successMessage = document.createElement('p');
        successMessage.textContent = "Submitted successfully.";
        form.appendChild(successMessage); // Append message to the form or any other container
        
        // Optional: Reset form fields
        form.reset();

        // Optional: Hide message after some time
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000); // Hide message after 3 seconds (3000 milliseconds)
    })
    .catch(error => console.error('Error!', error.message));

});

var today = new Date();

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();

  var formattedDate = yyyy + '-' + mm + '-' + dd;

  document.getElementById('presentDate').value = formattedDate;


  function fetchData() {
    let id = document.getElementById('idInput').value;


    let data = {
        '400': { 
            name: 'Eicee John Santiago',
            department: 'Log',
        },
        '107': {
            name: 'Aurelio Abao',
            department: 'Log',
        },
        '358': {
            name: 'Christian Andrew Cruz',
            department: 'WPD',
        },
        '100': {
            name: 'Ervin Villanueva',
            department: 'TLL',
        },
    };

    if (data[id]) {
        document.getElementById('nameInput').value = data[id].name;
        document.getElementById('departmentInput').value = data[id].department;
    } else {
        alert('Data not found for ID: ' + id);
    }
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

