const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.site-footer p');

if (footerText) {
  footerText.textContent = `© ${currentYear} Template Base Vanilla.`;
}
