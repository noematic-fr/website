(function () {
  var KEY = 'noe-theme';
  var ORDER = ['system', 'light', 'dark'];
  var THEME_COLOR = { light: '#f4f7f8', dark: '#0a0e12' };

  function systemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function storedMode() {
    try {
      var value = localStorage.getItem(KEY);
      if (value === 'light' || value === 'dark') return value;
    } catch (e) {}
    return 'system';
  }

  function resolve(mode) {
    return mode === 'system' ? systemTheme() : mode;
  }

  function setThemeColor(resolved, mode) {
    var nodes = document.querySelectorAll('meta[name="theme-color"]');
    if (!nodes.length) return;
    if (mode === 'system') {
      if (nodes.length === 1) {
        nodes[0].setAttribute('content', THEME_COLOR.dark);
        nodes[0].setAttribute('media', '(prefers-color-scheme: dark)');
        var light = document.createElement('meta');
        light.setAttribute('name', 'theme-color');
        light.setAttribute('content', THEME_COLOR.light);
        light.setAttribute('media', '(prefers-color-scheme: light)');
        nodes[0].after(light);
      }
      return;
    }
    nodes[0].setAttribute('content', THEME_COLOR[resolved]);
    nodes[0].removeAttribute('media');
    for (var i = nodes.length - 1; i >= 1; i--) nodes[i].remove();
  }

  function paint(mode) {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    var labels = {
      system: button.getAttribute('data-label-system'),
      light: button.getAttribute('data-label-light'),
      dark: button.getAttribute('data-label-dark'),
    };
    var nextLabels = {
      system: button.getAttribute('data-next-system'),
      light: button.getAttribute('data-next-light'),
      dark: button.getAttribute('data-next-dark'),
    };
    var next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
    var label = button.querySelector('[data-theme-label]');
    if (label) label.textContent = labels[mode];
    var prefix = button.getAttribute('data-prefix') || '';
    button.setAttribute('aria-label', prefix + ' ' + labels[mode] + '. ' + nextLabels[next]);
  }

  function apply(mode) {
    var resolved = resolve(mode);
    var root = document.documentElement;
    root.dataset.theme = resolved;
    root.dataset.themeMode = mode;
    setThemeColor(resolved, mode);
    paint(mode);
  }

  function save(mode) {
    try {
      if (mode === 'system') localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, mode);
    } catch (e) {}
  }

  function bind() {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    apply(storedMode());
    if (button.dataset.bound === '1') return;
    button.dataset.bound = '1';
    button.addEventListener('click', function () {
      var mode = storedMode();
      var next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
      save(next);
      apply(next);
    });
  }

  apply(storedMode());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
    if (storedMode() === 'system') apply('system');
  });

  window.__noeThemeBind = bind;
})();
