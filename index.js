let courseDataTable = []; // Array to store the collected course data
//Get the form details
let courseData = [];


function addCourse(event) {
  event.preventDefault()

  // Get course values
  let course = document.getElementById("course").value
  let level = document.getElementById("level").value
  let language = document.getElementById("language").value
  let startDate = document.getElementById("startdate").value

  //Create course object
  let courses = {
    courseName: course,
    levelName: level,
    languageName: language,
    startDateName: startDate
  }

  // Add course object to the data array
  courseDataTable.push(courses);

  if (course !== "" && level !== "" && language !== "" && startDate !== ""){
    // Create new table row
    let table = document.getElementById('courseTable');
    let newRow = table.insertRow(table.rows.length);

    // Insert values into table cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = course;
    cell2.innerHTML = level;
    cell3.innerHTML = language;
    cell4.innerHTML = startDate;

    // Reset form fields
    document.getElementById('course').value = "";
    document.getElementById('level').value = "";
    document.getElementById('language').value = "";
    document.getElementById('startdate').value = "";
    // document.getElementById('courseForm').reset();

  }
  return false;
}


function previewData(event) {
  event.preventDefault();

  let firstName = document.getElementById("firstname").value
  let middleName = document.getElementById("middlename").value
  let lastname = document.getElementById("lastname").value
  let DOB = document.getElementById("dateofbirth").value
  let studentId = document.getElementById("studentid").value
  let streetAddress = document.getElementById("address").value
  let city = document.getElementById("city").value
  let state = document.getElementById("state").value
  let country = document.getElementById("country").value
  let zipCode = document.getElementById("zipcode").value
  let email = document.getElementById("email").value
  let phoneNumber = document.getElementById("phonenumber").value
  let comment = document.getElementById("comment").value

  courseData.push(firstName)
  courseData.push(middleName)
  courseData.push(lastname)
  courseData.push(DOB)
  courseData.push(studentId)
  courseData.push(streetAddress)
  courseData.push(city)
  courseData.push(state)
  courseData.push(country)
  courseData.push(zipCode)
  courseData.push(email)
  courseData.push(phoneNumber)
  courseData.push(comment)

  let preTag = document.createElement("pre")
    preTag.id = "info"
    document.getElementById("personalInfo").insertBefore(preTag, document.getElementById("modalTable"))
    // preTag.style.fontFamily = "inherit";
    preTag.innerHTML =  ` 
    <b>First Name:</b>              ${firstName}
    <b>Middle Name:</b>          ${middleName}
    <b>Last Name:</b>               ${lastname}
    <b>DOB:</b>                        ${DOB}
    <b>Student Id:</b>               ${studentId}
    <b>Street Address:</b>        ${streetAddress}
    <b>City:</b>                          ${city}
    <b>State:</b>                         ${state}
    <b>Country:</b>                   ${country}
    <b>Zip Code:</b>                  ${zipCode}
    <b>Email:</b>                       ${email}
    <b>Phone Number:</b>        ${phoneNumber}
    <b>Comment:</b>                 ${comment}
    `
  
  // Loop through the course data array and populate the modal table
  for (let i = 0; i < courseDataTable.length; i++) {
    let courseItem = courseDataTable[i];

    if (courseItem.courseName !== "" && courseItem.levelName !== "" && courseItem.languageName !== "" && courseItem.startDateName !== "") {
      // Create new table row
      let table = document.getElementById('modalTable');
      let newRow = table.insertRow(table.rows.length);

      let cell1 = newRow.insertCell(0);
      let cell2 = newRow.insertCell(1);
      let cell3 = newRow.insertCell(2);
      let cell4 = newRow.insertCell(3);

      cell1.innerHTML = courseItem.courseName;
      cell2.innerHTML = courseItem.levelName;
      cell3.innerHTML = courseItem.languageName;
      cell4.innerHTML = courseItem.startDateName;
    }

  }

  

  // Show the modal
  document.getElementById('myModal').style.display = 'block';
  return false;
}

function closeModal() {
  // Close the modal
  let closebtn = document.querySelector('.modal')
  closebtn.style.display = 'none';
  document.querySelector(".form").submit();
  window.scrollTo(0,0);
}





