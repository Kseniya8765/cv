

window.addEventListener('DOMContentLoaded', async () => {
  window.refs = {

    // accordion: {
    //   init: () => new Accordion(),
    //   selectors: ['.accordion__slider'],
    // },
  };

  

  Object.keys(window.refs).forEach((ref) => {
    if (
      window.refs[ref].hasOwnProperty('init') &&
      document.querySelectorAll(window.refs[ref].selectors.join(', ')).length >
        0
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});