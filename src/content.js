chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'login') {
      const usernameInput = document.querySelector('#Login'); 
      const passwordInput = document.querySelector('#Password');
      const loginButton = document.querySelector('#btnLogin');
  
      if (usernameInput && passwordInput && loginButton) {
        usernameInput.value = 'notmylogin'; // Look into chrome storge api instead to store these credentials..just testing now
        passwordInput.value = 'notmypassword';
        loginButton.click();
      }
    }
  });