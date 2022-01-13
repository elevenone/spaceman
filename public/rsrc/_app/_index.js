/**
 * startup
 */
/**
 * PromiseDom
 */
import PromiseDom from "../_42/promiseDom.js";
let dom = new PromiseDom;
dom.ready.then(__start());
function __start() {
    console.info('__42 / dom is ready');
}
/**
 * constants
 */
import { _version, _42 } from "../_42/constants.js";
console.warn(_version);
console.warn(_42);
/**
 * FetchPartial
 */
import FetchPartial from "../_42/fetchPartial.js";
dom.ready.then(__partials());
function __partials() {
    const partial = new FetchPartial();
    partial.fetchAll();
}
/**
 * pjax
 */
import * as Pjax from "../vendor/brixtol/pjax.esm.js";

Pjax.connect({ 
    targets: [
        'h1',
        'nav',
        'main'
    ],
    cache: {
      enable: true,
      reverse: true,
      limit: 50
    },
    requests: {
      timeout: 30000,
      async: true,
      poll: 150 // You should leave this alone.
    },
    prefetch: {
      preempt: undefined, // Accepts [] or { '/path': [] }
      mouseover: {
        enable: true, // You want the speed? leave this as true.
        trigger: 'attribute',
        threshold: 100,
      },
      intersect: {
        enable: true,
        options: {
          rootMargin: "0px 0px 0px 0px",
          threshold: 1.0,
        },
      },
    },
    progress: {
      enable: true,
      threshold: 500,
      options: {
      enable: true,
      threshold: 850,
      style: {
        render: true,
        colour: 'black',
        height: '2px'
      },
      options: {
        minimum: 0.1,
        easing: 'ease',
        speed: 225,
        trickle: true,
        trickleSpeed: 225,
        showSpinner: false
      }
    }
}

  });



    
//  }
// // called when a prefetch is triggered
// document.addEventListener("pjax:prefetch");
// // called when a mousedown event occurs on a link
// document.addEventListener("pjax:trigger");
// // called before a page is fetched over XHR
// document.addEventListener("pjax:request");
// // called before a page is cached
// document.addEventListener("pjax:cache");
// // called before a page is rendered
// document.addEventListener("pjax:render")
// // called after a page has rendered
// document.addEventListener("pjax:load");
// // called when a module is loaded
// document.addEventListener("pjax:module");
// hides and shows the content



// let el = document.getElementById("content");
// document.addEventListener("pjax:request", function () {
//     console.log('document.addEventListener pjax:request');
// });
// document.addEventListener("pjax:trigger", function () {
//     console.log('document.addEventListener pjax:trigger');
//     el.classList.remove('show');
//     el.classList.add('hide');
// });
// document.addEventListener("pjax:render", function () {
//     console.log('document.addEventListener pjax:render');
//     el.classList.remove('hide');
//     el.classList.add('show');
// });



//# sourceMappingURL=_index.js.map