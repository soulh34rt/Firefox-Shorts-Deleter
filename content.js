(function() {
  'use strict';
  
  // CSS to hide all shorts elements including nav
  const css = document.createElement('style');
  css.textContent = `
    ytd-rich-shelf-renderer[is-shorts],
    ytd-reel-shelf-renderer,
    ytd-rich-section-renderer[is-shorts],
    [is-shorts],
    .ytp-shorts-button,
    #nav a[href*="shorts"],
    #nav paper-tab a[href*="shorts"],
    #bottom-nav a[href*="shorts"],
    ytd-toolbar-bottom-nav-renderer a[href*="shorts"],
    a[href*="/shorts/"],
    a[href*="/reels/"],
    button[aria-label*="Shorts"],
    button[aria-label*="reel"]
    {display: none !important;}
  `;
  document.head.appendChild(css);
  
  function hideShorts() {
    // Find and hide ALL elements containing shorts in any navigation
    var nav = document.querySelector('#nav, #bottom-nav, ytd-app');
    if (nav) {
      nav.querySelectorAll('a, paper-tab, li').forEach(function(el) {
        var href = el.href || '';
        var text = el.textContent || '';
        var aria = el.getAttribute('aria-label') || '';
        if (href.includes('shorts') || text.toLowerCase().includes('shorts') || aria.toLowerCase().includes('shorts')) {
          el.style.display = 'none';
        }
      });
    }
    
    // Hide shorts links in content
    document.querySelectorAll('a[href*="/shorts/"], a[href*="/reels/"]').forEach(function(a) {
      a.style.display = 'none';
    });
    
    // Hide by aria-label
    document.querySelectorAll('[aria-label*="Shorts"]').forEach(function(el) {
      el.style.display = 'none';
    });
  }
  
  hideShorts();
  setInterval(hideShorts, 2000);
})();