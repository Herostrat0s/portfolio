function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function copyEmail() {
  const emailLink = document.querySelector('a[href="mailto:herostratosedu@protonmail.com"]');
  const emailText = emailLink.textContent;

  // Create a temporary input element
  const tempInput = document.createElement('input');
  tempInput.value = emailText;
  document.body.appendChild(tempInput);

  // Select the text in the input element
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  // Optionally, you can provide some visual feedback to the user
  alert('Email copied to clipboard: ' + emailText);
}

