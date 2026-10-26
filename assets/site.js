(() => {
  document.body.classList.add('js');
  const pages = [...document.querySelectorAll('.page')];
  function route() {
    const id = location.hash.slice(1) || 'professional';
    const target = document.getElementById(id);
    const area = target?.closest('.page')?.id || (id === 'main' ? pages.find(page => !page.hidden)?.id : null) || 'professional';
    pages.forEach(page => { page.hidden = page.id !== area; });
    document.querySelectorAll('[data-area]').forEach(link => {
      if (link.dataset.area === area) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = `Patryk Pospiech — ${area === 'wip' ? 'Work in Progress' : 'Professional'}`;
    if (target && target !== document.getElementById(area)) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelectorAll('[data-kind]').forEach(item => {
        item.hidden = button.dataset.filter !== 'all' && item.dataset.kind !== button.dataset.filter;
      });
    });
  });
})();
