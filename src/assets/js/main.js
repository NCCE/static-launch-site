window.addEventListener('load', function() {
  window.cookieconsent.hasTransition = false
  window.cookieconsent.initialise({
    showLink: false,
    autoOpen: true,
    overrideHTML:
      "<div id='global-cookie-message'> <p class='govuk-body'>We uses cookies to make the site simpler. <a class='govuk-link ncce-link__on-light' href='/privacy-policy'>Learn more</a> <a class='cc-btn cc-dismiss govuk-link ncce-link__on-light' href=''>OK</a></p></div>",
    position: 'top',
  })
})
