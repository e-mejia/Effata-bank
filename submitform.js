const projectChargeCode = document.querySelector("#project-charge-code");
const errorChargeCode = document.querySelector("#error-charge-code");
const btn = document.querySelector("button");

//  Add click event to button

function validateProjChargeCode(str) {
  // Instantiate regex object to check that project charge
  // code begins with either 'E, 'I', or 'M'.

  const regex = /[EIM]/;
  const correctChargeCode = new RegExp(regex);

  const result = str.match(correctChargeCode);

  if (!result) {
    errorChargeCode.color = "red";
    errorChargeCode.innerHTML = `Project charge code must begin with either 'E, 'I', or 'M'`;
  } else {
    errorChargeCode.innerHTML = "Good to go";
  }
}
