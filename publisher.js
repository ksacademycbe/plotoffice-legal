// PLOT OFFICE publisher details. privacy.html and terms.html read these values.
// Keep them identical to the legal entity shown in App Store Connect.
// The App Store Connect account is an individual developer account (Account Holder
// "Saravanakumar K", team 89V35M8WQL), so the seller shown on the App Store is the person,
// trading as KS Academy. The address is the registered address on the Paid Apps agreement.
window.PLOT_OFFICE_PUBLISHER = {
  legalName: 'Saravanakumar K, trading as KS Academy',
  address: '9, Poonthotam Nagar, Saravanampatti, Coimbatore, Tamil Nadu 641035, India',
  privacyEmail: 'ksacademy.cbe@gmail.com',
  supportEmail: 'ksacademy.cbe@gmail.com',
  jurisdiction: 'India, State of Tamil Nadu',
  courts: 'Coimbatore',
  effectiveDate: '9 November 2026',
  year: '2026'
};

// Replaces every [data-publisher] element with the matching value. Mail links get a
// matching mailto: address. An empty value keeps the highlighted placeholder visible.
document.addEventListener('DOMContentLoaded', () => {
  const values = window.PLOT_OFFICE_PUBLISHER || {};
  document.querySelectorAll('[data-publisher]').forEach(element => {
    const value = String(values[element.dataset.publisher] ?? '').trim();
    if (!value) return;
    element.textContent = value;
    element.classList.remove('placeholder');
    if (element.tagName === 'A' && /email$/i.test(element.dataset.publisher)) element.href = 'mailto:' + value;
  });
});
