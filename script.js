function startBoost() {
    const username = document.getElementById('username').value;
    const status = document.getElementById('status');
  
    if (!username) {
      status.innerText = "Please enter your Snapchat username.";
      return;
    }
  
    status.innerText = "Sending bots...";
    
    setTimeout(() => {
      status.innerText = `Success! 5 new fans added you on Snapchat. Check your app, ${username}!`;
    }, 2000);
  }
  