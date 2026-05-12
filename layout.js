/* Injects shared header, drawer, and footer on every inner page.
 * Sets the active nav item from data-page attribute on <body>. */
(function () {
  var page = document.body.dataset.page || '';

  function isActive(slug) {
    return page === slug ? ' class="active"' : '';
  }

  var header =
    '<header class="hdr" id="hdr">' +
      '<div class="hdr-inner">' +
        '<a href="index.html" class="logo">' +
          '<span class="logo-name">Lunetterie des Rois</span>' +
          '<span class="logo-sub">Opticien indépendant · Genève</span>' +
        '</a>' +
        '<nav class="nav" aria-label="Navigation">' +
          '<ul class="nav-list">' +
            '<li class="nav-item"><a href="index.html"' + isActive('home') + '>Accueil</a></li>' +
            '<li class="nav-item">' +
              '<a href="notre-expertise.html"' + isActive('notre-expertise') + '>Notre expertise</a>' +
              '<ul class="drop">' +
                '<li><a href="un-certain-regard.html">Un certain regard</a></li>' +
                '<li><a href="createurs.html">Nos collections</a></li>' +
                '<li><a href="materiaux.html">Matériaux</a></li>' +
              '</ul>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="notre-metier.html"' + isActive('notre-metier') + '>Notre métier</a>' +
              '<ul class="drop">' +
                '<li><a href="conseil.html">Qualité · Conseil · Service</a></li>' +
                '<li><a href="optique.html">Optique</a></li>' +
                '<li><a href="et-aussi.html">Sur mesure et service location</a></li>' +
              '</ul>' +
            '</li>' +
            '<li class="nav-item">' +
              '<a href="notre-magasin.html"' + isActive('notre-magasin') + '>Notre magasin</a>' +
              '<ul class="drop">' +
                '<li><a href="magasin.html">Un lieu</a></li>' +
                '<li><a href="vitrines.html">Vitrines</a></li>' +
                '<li><a href="equipe.html">Équipe</a></li>' +
              '</ul>' +
            '</li>' +
            '<li class="nav-item"><a href="contact.html"' + isActive('contact') + '>Contact</a></li>' +
          '</ul>' +
        '</nav>' +
        '<div class="hdr-actions">' +
          '<a href="contact.html" class="hdr-cta btn">Prendre contact</a>' +
          '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</header>';

  var drawer =
    '<nav class="drawer" id="drawer" aria-hidden="true">' +
      '<ul class="drawer-list">' +
        '<li><a href="index.html">Accueil</a></li>' +
        '<li><a href="notre-expertise.html">Notre expertise</a>' +
          '<ul class="drawer-sub">' +
            '<li><a href="un-certain-regard.html">Un certain regard</a></li>' +
            '<li><a href="createurs.html">Nos collections</a></li>' +
            '<li><a href="materiaux.html">Matériaux</a></li>' +
          '</ul>' +
        '</li>' +
        '<li><a href="notre-metier.html">Notre métier</a>' +
          '<ul class="drawer-sub">' +
            '<li><a href="conseil.html">Qualité · Conseil · Service</a></li>' +
            '<li><a href="optique.html">Optique</a></li>' +
            '<li><a href="et-aussi.html">Sur mesure et service location</a></li>' +
          '</ul>' +
        '</li>' +
        '<li><a href="notre-magasin.html">Notre magasin</a>' +
          '<ul class="drawer-sub">' +
            '<li><a href="magasin.html">Un lieu</a></li>' +
            '<li><a href="vitrines.html">Vitrines</a></li>' +
            '<li><a href="equipe.html">Équipe</a></li>' +
          '</ul>' +
        '</li>' +
        '<li><a href="contact.html">Contact</a></li>' +
      '</ul>' +
      '<div class="drawer-contact">' +
        '<a href="tel:+41223297595"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.27-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> +41 22 329 75 95</a>' +
        '<a href="mailto:info@lunetteriedesrois.ch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> info@lunetteriedesrois.ch</a>' +
      '</div>' +
    '</nav>';

  var footer =
    '<footer class="footer">' +
      '<div class="footer-inner">' +
        '<div class="footer-top">' +
          '<div>' +
            '<p class="f-logo-name">Lunetterie des Rois</p>' +
            '<p class="f-logo-sub">Opticien indépendant · Genève</p>' +
            '<p class="f-tagline">Un regard singulier sur la lunetterie.<br>Conseil, création et caractère depuis 2014.</p>' +
            '<div class="f-social">' +
              '<a href="https://www.facebook.com/lunetteriedesrois/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
              '<a href="https://www.instagram.com/lunetterie_des_rois/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<p class="f-col-title">Navigation</p>' +
            '<nav class="f-nav">' +
              '<a href="notre-expertise.html">Notre expertise</a>' +
              '<a href="createurs.html">Nos collections</a>' +
              '<a href="materiaux.html">Matériaux</a>' +
              '<a href="optique.html">Optique</a>' +
              '<a href="et-aussi.html">Sur mesure</a>' +
              '<a href="notre-magasin.html">Notre boutique</a>' +
              '<a href="equipe.html">L\'équipe</a>' +
              '<a href="contact.html">Contact</a>' +
            '</nav>' +
          '</div>' +
          '<div>' +
            '<p class="f-col-title">Boutique</p>' +
            '<div class="f-info">' +
              '<p>Bd de Saint-Georges 75<br>1205 Genève</p>' +
              '<p><a href="tel:+41223297595">+41 22 329 75 95</a></p>' +
              '<p><a href="mailto:info@lunetteriedesrois.ch">info@lunetteriedesrois.ch</a></p>' +
              '<p>Lun–Ven&nbsp;&nbsp;9h–13h / 14h–18h30<br>Samedi&nbsp;&nbsp;&nbsp;9h–13h</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-btm">' +
          '<p class="f-copy">&copy; 2025 Lunetterie des Rois — Genève</p>' +
          '<nav class="f-legal"><a href="contact.html">Contact</a><a href="notre-magasin.html">Notre magasin</a></nav>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var hdrMount = document.getElementById('layout-header');
  var drwMount = document.getElementById('layout-drawer');
  var ftrMount = document.getElementById('layout-footer');
  if (hdrMount) hdrMount.outerHTML = header;
  if (drwMount) drwMount.outerHTML = drawer;
  if (ftrMount) ftrMount.outerHTML = footer;
})();
