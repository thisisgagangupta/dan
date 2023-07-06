document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('testForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
    
      // Get form values
      var childName = document.getElementById('child-name').value;
      var dateOfBirth = document.getElementById('date-of-birth').value;
      var nationality = document.getElementById('nationality').value;
      var diagnosis = document.getElementById('diagnosis').value;
    
      // Save form values to local storage (or you can send them to a server)
      localStorage.setItem('childName', childName);
      localStorage.setItem('dateOfBirth', dateOfBirth);
      localStorage.setItem('nationality', nationality);
      localStorage.setItem('diagnosis', diagnosis);
    
      // Redirect to the questionnaire page
      window.location.href = 'test-form.html';
    });
    

  let previousChecked = null;

  function handleCheckboxChange(currentCheckbox) {
    if (previousChecked !== null && previousChecked !== currentCheckbox) {
      previousChecked.checked = false; // Uncheck the previously checked checkbox
      previousChecked.parentNode.classList.remove('selected'); // Remove the highlight from the previously selected checkbox
    }
    
    if (currentCheckbox.checked) {
      currentCheckbox.parentNode.classList.add('selected'); // Add highlight to the selected checkbox
    } else {
      currentCheckbox.parentNode.classList.remove('selected'); // Remove the highlight if the checkbox is unchecked
    }

    previousChecked = currentCheckbox.checked ? currentCheckbox : null;
  }
});

