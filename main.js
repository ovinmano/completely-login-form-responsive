const form = document.querySelector("form");

// ====================first name===================\\

  fField = form.querySelector(".fName"),
  fInput = fField.querySelector("input"),

// =====================last name==================\\

  lField = form.querySelector(".lName"),
  lInput = lField.querySelector("input");

  let maleInput = form.querySelector('.male');
  let femaleInput = form.querySelector('.female');
  let othersInput = form.querySelector('.others');
  genEl=document.querySelector('.p5');

// =================Phone Number=================\\

  nField = form.querySelector(".phoneNum"),
  nInput = nField.querySelector("input"),

// =============Email Address====================\\

  eField = form.querySelector(".email"),
  eInput = eField.querySelector("input"),

// ==================password=====================\\

  pField = form.querySelector(".password"),
  pInput = pField.querySelector("input");

// ===================check box====================\\

let cInput = form.querySelector('.terms'),
conEl=document.querySelector('.p7');



form.onsubmit = (e) => {

  e.preventDefault(); //preventing from form submitting

  //if name ,phonenumber, email and password is blank then add shake class in it else call specified function

  (fInput.value == "") ? fField.classList.add("shake", "error") : checkfName();

  (lInput.value == "") ? lField.classList.add("shake", "error") : checklName();

  (nInput.value == "") ? nField.classList.add("shake", "error") : checkphNum();

  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();

  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(() => { //remove shake class after 500ms
    fField.classList.remove("shake");

    lField.classList.remove("shake");

    nField.classList.remove("shake");

    eField.classList.remove("shake");

    pField.classList.remove("shake");

  }, 500);

  fInput.onkeyup = () => { checkfName(); } //calling check first name function on fName input keyup

  lInput.onkeyup = () => { checklName(); } //calling check last name function on last input keyup

  nInput.onkeyup = () => { checkphNum(); } //calling check phone number function on last input keyup

  eInput.onkeyup = () => { checkEmail(); } //calling checkEmail function on email input keyup

  pInput.onkeyup = () => { checkPass(); } //calling checkPassword function on pass input keyup

//   ===================================First name===========================================\\

  function checkfName() { //check first name function
    if (fInput.value == "") { //if first name is empty then add error and remove valid class

      fField.classList.add("error");
      
      fField.classList.remove("valid");

    } else { //if first name is empty then remove error and add valid class

      fField.classList.remove("error");

      fField.classList.add("valid");
    }
  }

  // ==============================last name ========================================\\

  function checklName() { //check last name function

    if (lInput.value == "") { //if last name is empty then add error and remove valid class

      lField.classList.add("error");

      lField.classList.remove("valid");

    } else { //if last name is empty then remove error and add valid class

      lField.classList.remove("error");

      lField.classList.add("valid");
    }
  }

  // ====================================gender======================================= \\

  maleInput.addEventListener('click',()=>{

    if (maleInput.checked == true) {

      genEl.style.display='none'

  } else {
      genEl.style='block'
      document.querySelector('.p5').innerHTML = '*SELECT ANY ONE*';
  }
  })

  femaleInput.addEventListener('click',()=>{

    if (femaleInput.checked == true) {

      genEl.style.display='none'

  } else {
      genEl.style='block'

      document.querySelector('.p5').innerHTML = '*SELECT ANY ONE*';
  }
  })

 othersInput.addEventListener('click',()=>{

    if (othersInput.checked == true) {

      genEl.style.display='none'

  } else {
      genEl.style='block'
      document.querySelector('.p5').innerHTML = '*SELECT ANY ONE*';
  }
  })
  
  //=============================== phone number==================================\\

  function checkphNum() {

    const phno = document.getElementById('mobileNumber').value;

    if (phno == "") {
      nField.classList.add("error");

      nField.classList.remove("valid");

      document.getElementById('msg').innerHTML = "Phone number can't be blank";
      return false;
    }

    if (isNaN(phno)) { //only numbers
      nField.classList.add("error");

      nField.classList.remove("valid");

      document.getElementById('msg').innerHTML = "Enter only numbers";
      return false;
    }

    if (phno.length < 10) {

      nField.classList.add("error");

      nField.classList.remove("valid");

      document.getElementById('msg').innerHTML = "Number must be 10 digits";
      return false;
    }

    if (phno.length > 10) {

      nField.classList.add("error");

      nField.classList.remove("valid");

      document.getElementById('msg').innerHTML = "Number must be 10 digits";
      return false;
    }

    else { //if phone number is empty then remove error and add valid class
      nField.classList.remove("error");

      nField.classList.add("valid");
    }
  }

  // ================================Email=======================================\\

  function checkEmail() { //checkEmail function

    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email

    if (!eInput.value.match(pattern)) { //if pattern not matched then add error and remove valid class

      eField.classList.add("error");
      
      eField.classList.remove("valid");

      let errorTxt = eField.querySelector(".error-txt");

      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";

    } else { //if pattern matched then remove error and add valid class

      eField.classList.remove("error");

      eField.classList.add("valid");
    }
  }
  // ================================password===================================\\

  function checkPass() { //checkPass function

    if (pInput.value == "") { //if pass is empty then add error and remove valid class

      pField.classList.add("error");

      pField.classList.remove("valid");

    } else { //if pass is empty then remove error and add valid class

      pField.classList.remove("error");

      pField.classList.add("valid");
    }
  }
  // ==============================check box=======================================\\

  cInput.addEventListener('click',()=>{

    if (cInput.checked == true) {

      conEl.style.display='none'

  } else {

      conEl.style='block'

      document.querySelector('.p7').innerHTML = 'Check the box';
  }
  })

  //if eField and pField doesn't contains error class that mean user filled details properly

  if (!fField.classList.contains("error") && !lField.classList.contains("error") && !nField.classList.contains("error")

   && !eField.classList.contains("error") && !pField.classList.contains("error")) {

    window.location.href = form.getAttribute("action");
    
    //redirecting user to the specified url which is inside action attribute of form tag

    alert("Login Success..!");
  }
}

