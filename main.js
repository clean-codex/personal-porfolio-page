
const showInput = () => {
    let input = document.getElementById("email-message");
    let sendBtn = document.getElementById(`send-btn`);
    
    if (input.style.width == `0px`){
      input.style.width = `270px`;
      input.style.transition = `0.7s`;
    } else {
      input.style.width = `0px`;
      input.style.transition = `0.7s`;
    }
    
    if (sendBtn.style.display == `none`){
      sendBtn.style.display = `block`;
      sendBtn.style.transition = `0.7s`;
    } else {
      sendBtn.style.display = `none`;
      sendBtn.style.transition = `0.7s`;
    }
    
    let screenWidth = screen.width;
    if(screenWidth >= `800px`){
      input.style.width = `600px`;
    }
}

const sendEmail2 = () => {
  let input = document.getElementById("email-message");
  let myMail = `anslem448@gmail.com`;
  
  alert(`Your email has been sent to ${myMail}`);
  
  input.value = "";
}