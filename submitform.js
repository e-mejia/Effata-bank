const btn = document.querySelector("#btn");
const formError = document.querySelector("#form-error");

//  Validate project name
function validateProjectName() {
  const projName = document.querySelector("#project-name");
  const errorProjName = document.querySelector("#errorProjectName");

  if (!projName.value || projName.value.length < 8) {
    errorProjName.innerHTML =
      "Project name is required and 8 characters minimum.";
    projName.style.border = "3px solid red";
    return false;
  }

  projName.style.border = "3px solid green";
  errorProjName.innerHTML = "";
  return true;
}

function validateProjectChargeCode() {
  const projectChargeCode = document.querySelector("#project-charge-code");
  const errorChargeCode = document.querySelector("#error-charge-code");

  // Create a regex object to check code begins with E, I or M
  const regex = new RegExp(/^[EIM]/i);

  if (
    !projectChargeCode.value.match(regex) ||
    projectChargeCode.value.length < 10
  ) {
    errorChargeCode.innerHTML =
      "Minimum field length is 10 characters, and the first character must start with an E, I or M";
    projectChargeCode.style.border = "3px solid red";
    return false;
  }

  if (projectChargeCode.value.length > 0) {
    projectChargeCode.style.border = "3px solid green";
    errorChargeCode.innerHTML = "";
    return true;
  }
}

// Validate region
const region = document.querySelector("#region");
const errorRegion = document.querySelector("#error-region");

function validateRegion() {
  if (region.value === "chooseregion") {
    errorRegion.innerHTML = "Please choose a region.";
    errorRegion.style.color = "red";
    return false;
  } else {
    region.style.border = "3px solid green";
    errorRegion.innerHTML = "";
    return true;
  }
}

// Validate request type
function validateRequestType() {
  const requestType = document.querySelector("#request-type");
  const requestTypeError = document.querySelector("#request-type-error");
  const other = document.querySelector("#other");

  if (requestType.value === "new" || requestType.value === "enhancement") {
    requestType.style.border = "3px solid green";
    other.style.display = "none";
    requestTypeError.innerHTML = "";
    return true;
  } else if (requestType.value === "choosetype") {
    requestTypeError.innerHTML = "Please choose type of project.";
    requestTypeError.style.color = "red";
    other.style.display = "none";
    return false;
  } else if (requestType.value === "othertype") {
    other.style.display = "block";
    requestTypeError.innerHTML = "";
    return true;
  }
}

//  Validte Date
function validateDate() {
  const dateSelected = document.querySelector("#date-picker");
  const errorDate = document.querySelector("#error-date");

  if (!dateSelected.value) {
    errorDate.innerHTML = "Please choose a date";
    formError.style.display = "block";
    setTimeout(function () {
      formError.style.display = "";
    }, 3000);
    return false;
  } else {
    dateSelected.addEventListener("change", function () {
      const dateChosen = new Date(this.value).toUTCString().substring(0, 3);

      if (dateChosen == "Sun" || dateChosen == "Sat") {
        errorDate.innerHTML = "Weekends are not allowed.";
        return false;
      }
      errorDate.innerHTML = "";
      return true;
    });
  }
}

// Handle Submit event;

function handleClick() {
  if (
    !validateProjectName() ||
    !validateProjectChargeCode() ||
    !validateRegion() ||
    !validateRequestType() ||
    !validateDate()
  ) {
    // formError.style.display = "block";
    // formError.innerHTML = "Please fix form errors.";
    // setTimeout(function () {
    //   formError.style.display = "";
    // }, 3000);
    return false;
  }
  // alert(
  //   "Thank you for submitting a project with our team! We will reach out to discuss the project in more detail"
  // );
}
