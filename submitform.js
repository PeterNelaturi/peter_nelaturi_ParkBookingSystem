    let attendanceData = [];

    const progress = document.getElementById("progress-bar");
    const progressLabel = document.getElementById("progress-label");
    let step = 1;
    const maxStep = 4;

    const bookBtn = document.getElementById("book-now-btn");
    const formContainer = document.getElementById("user-form-container");


    formContainer.style.display = "none";


    bookBtn.addEventListener("click", () => {
      formContainer.style.display = "block";
      bookBtn.style.display = "none";
      formContainer.scrollIntoView({ behavior: 'smooth' });
    });

    function showStep(stepNumber) {
    document.querySelectorAll(".form-step").forEach(div => div.style.display = "none");
    document.getElementById(`step-${stepNumber}`).style.display = "block";


  if (stepNumber === 5) {
      progress.style.display = "none";
      progressLabel.style.display = "none";
    } else {
      progress.style.display = "block";
      progressLabel.style.display = "block";
      progress.value = stepNumber;
      progressLabel.textContent = `Step ${stepNumber} of ${maxStep}`;
    }

  }



    document.getElementById("next-btn-1").addEventListener("click", () => {
      const attendanceDate = document.getElementById("attendance-date").value;
      const adults = document.getElementById("adults").value;
      const children = document.getElementById("children").value;


      if (!attendanceDate) {
        alert("Please select a date of attendance.");
        return;
      }

      attendanceData.push({ attendanceDate, adults, children });
      console.log("Step 1 data saved:", attendanceData);


      step = 2;
    showStep(step);
  });

  document.getElementById("prev-btn-2").addEventListener("click", () => {
    step = 1;
    showStep(step);
  });


  document.getElementById("next-btn-2").addEventListener("click", () => {
    const contactName = document.getElementById("contact-name").value;
    const contactEmail = document.getElementById("contact-email").value;

    if (!contactName || !contactEmail) {
      alert("Please fill in contact details.");
      return;
    }

    attendanceData.push({ contactName, contactEmail });
    console.log("Step 2 data saved:", attendanceData);

    step = 3;
    showStep(step); 
  });

  document.getElementById("prev-btn-3").addEventListener("click", () => {
    step = 2;
    showStep(step);
  });

  document.getElementById("next-btn-3").addEventListener("click", () => {
    const ticketType = document.getElementById("ticket-type").value;
    const locker = document.querySelector('input[name="locker"]:checked')?.value;

    if (!ticketType) {
      alert("Please select a ticket type.");
      return;
    }


    if (!locker) {
      alert("Please choose whether you want a storage locker.");
      return;
    }

    attendanceData.push({ ticketType, locker });
    console.log("Step 3 data saved:", attendanceData);

    step = 4;
    showStep(step); 
  });

  document.getElementById("prev-btn-4").addEventListener("click", () => {
    step = 3;
    showStep(step);
  });

  document.getElementById("submit-btn").addEventListener("click", () => {
    const agree = document.getElementById("agree-terms").checked;
    if (!agree) {
      alert("You must agree to the terms and conditions to proceed.");
      return;
    }

    attendanceData.push({ agreedToTerms: true });
    console.log("Step 4 data saved:", attendanceData);



    const step1 = attendanceData[0];
    const step2 = attendanceData[1];
    const step3 = attendanceData[2];

    document.getElementById("summary-date").textContent = step1.attendanceDate;
    document.getElementById("summary-adults").textContent = step1.adults;
    document.getElementById("summary-children").textContent = step1.children;
    document.getElementById("summary-name").textContent = step2.contactName;
    document.getElementById("summary-email").textContent = step2.contactEmail;
    document.getElementById("summary-ticket").textContent = step3.ticketType === "whakatere" ? "Whakatere Pass – Premium Entry" : "General Pass";
    document.getElementById("summary-locker").textContent = step3.locker === "yes" ? "Yes" : "No";

  
    step = 5;
    showStep(step);
  });


  showStep(step);

  document.getElementById("return-home-btn").addEventListener("click", () => {
      window.location.href = "index.html";
  });


  document.getElementById("new-booking-btn").addEventListener("click", () => {
      
      attendanceData = [];
      step = 1;
      showStep(step);

    
      document.getElementById("attendance-date").value = "";
      document.getElementById("adults").value = 0;
      document.getElementById("children").value = 0;
      document.getElementById("contact-name").value = "";
      document.getElementById("contact-email").value = "";
      document.getElementById("ticket-type").value = "";
      document.querySelectorAll('input[name="locker"]').forEach(r => r.checked = false);
      document.getElementById("agree-terms").checked = false;
  });

  document.getElementById("home-btn").addEventListener("click", () => {
      window.location.href = "index.html"; 
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
        [4, 6]  // this contains txt5
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




 