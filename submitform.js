
  const homeButton = document.getElementById("home-btn");
  
  
  homeButton.addEventListener("click", () => {
      window.location.href = "index.html"; 
  });




  const butt = document.getElementById("book-btn");

  const container = document.createElement("div")

  container.setAttribute("id", "stepid")

  const step1 = 
  ` <label class="progress-label">Step 1 of 4</label><br>
      <progress class="progress-bar" value="1" max="4"></progress>

  <div class="headings"><h3>Enter Booking Details</h3></div><br>
  <div class="testing"><label for="date">Date of Attendence:</label>
  <input type="date" id="date" name="attendence_date" required></div>
  <div class="testing"><label for="adults">Adults:</label>
  <input type="number" id="adults" name="adults" value="0" min="1" required></div>
  <div class="testing"><label for="children">Children:</label>
  <input type="number" id="children" value="0" min="1" required></div>

  <button id="next1">Next</button>

  `;


  const step2 = 

  `<label class="progress-label">Step 2 of 4</label><br>
   <progress class="progress-bar" value="2" max="4"></progress>

   <div class="headings"><h3>Contact Information</h3></div>
   <div class="step2-fields"><label for="contact-name">Full Name:</label>
   <input type="text" id="contact-name" name="contact_name" required></div>
   <div class="step2-fields"><label for="contact-email">Email Address:</label>
   <input type="email" id="contact-email" name="contact_email" required></div>

   <div class="step2-btns"><button type="button" id="prev-btn-2">Previous</button>
   <button type="button" id="next2">Next</button></div>
  `;

  const step3 = 

  `<label class="progress-label">Step 3 of 4</label><br>
   <progress class="progress-bar" value="3" max="4"></progress>

        <div class="headings"><h3>Ticket Options</h3></div>
        <div class="step3-fields">

        <div class="ticselection">
        <label for="ticket-type">Choose Ticket Type:</label>
        <select id="ticket-type" name="ticket_type" required>
        <option value="">-- Select a Ticket --</option>
        <option value="Whakatere Premium Pass">Whakatere Pass - Premium Entry</option>
        <option value="General Pass">General Pass</option>
        </select></div>

        <div class="lockerselec">
        <label>Optional Storage Locker:</label>
        <div class="radio-group">
          <label for="locker-yes">Yes</label>
          <input type="radio" id="locker-yes" name="locker" value="Yes" required>
    
        <label for="locker-no">No</label>
        <input type="radio" id="locker-no" name="locker" value="No"></div></div>
    

    </div>
    <br><br>
    
        <div class="step3-btns">  
        <button type="button" id="prev-btn-3">Previous</button>
        <button type="button" id="next3">Next</button></div>
  `;

  const step4 =
  ` <label class="progress-label">Step 4 of 4</label><br>
      <progress class="progress-bar" value="4" max="4"></progress>

  <div class="headings"><h3>Terms and Conditions</h3></div>
        
        <div class="step4-fields">
        <label for="agree-terms">I agree to the terms and conditions</label>
        <input type="checkbox" id="agree-terms" name="agree_terms" required>
        </div>
        <br><br>

        <div class="step4-btns">
        <button type="button" id="prev-btn-4">Previous</button>
        <button type="button" id="submit-btn">Submit</button>
        </div>
  `;

  function step5() { 
  return`
    <div id="final-heading"><h3>Booking Summary</h3></div>
    <div class="finaldisp">
    <p><strong>Full Name:</strong><span>${state.name}</span></p>
    <p><strong>Email Address:</strong> <span>${state.email}</span></p>
    <p><strong>Ticket Type:</strong> <span>${state.tickettype}</span></p>
    <p><strong>Optional Storage Locker:</strong> <span>${state.locker}</span></p>
    <p><strong>Date of Attendance:</strong> <span>${state.date}</span></p>
    <p><strong>Adults:</strong> <span>${state.adults}</span></p>
    <p><strong>Children:</strong> <span>${state.children}</span></p>
    <p><strong>Terms & Conditions:</strong><span>${state.termsconditions?"Agreed" : "Not Agreed"}</span></p></div>
    <br>
    <button type="button" id="another">Make Another Booking</button>
    <button type="button" id="return-hm">Return To Home Screen</button>
  `;
  }

  const state = {

      name: "",
      email: "",
      started: false,
      formDispay: false,
      tickettype: "",
      locker: "",
      termsconditions: false,
      step: 1,
      date: "",
      adults: 0,
      children: 0
      
  };

  document.body.append(container);


  function render() {

      butt.style.display = state.started ? "none" : "block";
      container.style.display = state.formDispay ? "block" : "none";

      if (state.step === 1) {
        
      container.innerHTML = step1;
    
      document.getElementById("date").value = state.date 
      document.getElementById("adults").value = state.adults 
      document.getElementById("children").value = state.children 

    }

    if (state.step === 2) {

      container.innerHTML = step2;
    
      document.getElementById("contact-name").value = state.name;
      document.getElementById("contact-email").value = state.email;

      
    }

    if (state.step === 3) {
      container.innerHTML = step3;

        document.getElementById("ticket-type").value = state.tickettype;

          if (state.locker) {

      document.querySelector(`input[name="locker"][value="${state.locker}"]`).checked = true;

  }


    }

    if (state.step === 4) {
      container.innerHTML = step4;
    }


    if (state.step === 5) {
      container.innerHTML = step5();
    }
      
  }


  document.addEventListener("input" , (e)=>{

      if(e.target.id === "date"){

          state.date = e.target.value;
      }

  if(e.target.id === "adults") {

      state.adults = Number(e.target.value);
  }

  if(e.target.id === "children") {

      state.children = Number(e.target.value);
  }

  if (e.target.id === "contact-name") {
      state.name = e.target.value;
  }

  if (e.target.id === "contact-email") {
      state.email = e.target.value;
  }

  if (e.target.id === "ticket-type") {
      state.tickettype = e.target.value;
  }


  })


  document.addEventListener("change", (e) => {

      if (e.target.name === "locker") {
          state.locker = e.target.value;
      }

      if (e.target.id === "agree-terms") {
          state.termsconditions = e.target.checked;
      }

  });



  butt.addEventListener("click", () => {

      state.started = true;
      state.formDispay = true;
      state.step = 1;
      render();
  });


  container.addEventListener("click", (e) => {

      if (e.target.id === "next1") {

          if (!state.date || state.adults < 1 || state.children < 1) {
          alert("Please provide Date, Number of Adults, Number of Children");
          return;
      }
  
      state.step = 2;
      render();
    }



    if (e.target.id === "next2") {

      if (!state.name || !state.email) {
          alert("Please Enter Name and Email");
          return;
      }

      state.step = 3;
      render();
    }

    if (e.target.id === "next3") {

      if (!state.tickettype) {
      alert("Please Enter Ticket Type");
      return;
  }

  if (!state.locker) {
      alert("Please Select Storage Locker Option");
      return;
  }

      state.step = 4;
      render();
      
    }

    if (e.target.id === "submit-btn") {
      
      if (!state.termsconditions) {
          alert("You must agree to the terms and conditions to continue.");
          return;
      }

      

      state.step = 5;
      render();
      
    }


    if(e.target.id === "prev-btn-2"){
      state.step = 1;
      render();
    
    }


    if(e.target.id === "prev-btn-3"){
      state.step = 2;
      render();
    
    }


    if(e.target.id === "prev-btn-4"){
      state.step = 3;
      render();
    
    }


    if (e.target.id === "another") {
      state.started = true;
      state.step = 1;

      state.name = "";
      state.email = "";
      state.tickettype = "";
      state.locker = "";
      state.date = "";
      state.adults = 0;
      state.children = 0;
      state.termsconditions = false;

      render();
  }


  if(e.target.id === "return-hm"){

    window.location.href = "index.html";
  }


    
  });

    
  const scenes = [];

  window.addEventListener("DOMContentLoaded", () => {
      scenes.push(document.querySelector("#scene1"));
      scenes.push(document.querySelector("#scene2"));
      scenes.push(document.querySelector("#scene3"));
      scenes.push(document.querySelector("#scene4"));
      scenes.push(document.querySelector("#scene5"));
      scenes.push(document.querySelector("#scene6"));
      scenes.push(document.querySelector("#scene7"));
      animateFlipbook();
  });

  function showScenes(sceneIndexes) {
    
      for (let i = 0; i < scenes.length; i++) {
          scenes[i].style.visibility = "hidden";
      }

      
      sceneIndexes.forEach(index => {
          if (scenes[index]) {
              scenes[index].style.visibility = "visible";
          }
      });
  }


function animateFlipbook() {
    let sequence = [
        [0, 1], 
        [2, 3], 
        [4, 5], 
        [4, 6]  
    ];

    let step = 0;

    showScenes(sequence[step]);

    let timer = setInterval(() => {
        step++;
        if (step >= sequence.length) {
            clearInterval(timer);
            return;
        }

        showScenes(sequence[step]);

        // Show replay button immediately when last scene containing txt5 is shown
        if (step === sequence.length - 1) {
            adReplayBtn.style.opacity = 1;
        }
    }, 2000);
}

    

  function adReplay() {
      
      scenes.forEach(scene => scene.style.visibility = "hidden");
      adReplayBtn.style.opacity = 0;
      animateFlipbook();
  }


    const adReplayBtn = document.getElementById('adReplay');
    adReplayBtn.style.opacity = 0;    // Make it invisible initially



