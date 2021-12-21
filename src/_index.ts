/**
 * startup
 */
 import PromiseDom from "./_42/promiseDom.js"


 /**
  * domready
  */
 let dom: any = new PromiseDom
 dom.ready.then(__start())
 
 function __start(): void {
     console.info('__42 / dom is ready, starting now')
 }
 
 
 
 
 import { _version, _42 } from "./_42/constants.js"
 
 
 
 
 console.warn(_version)
 console.warn(_42)
 
 
 
 
 import FetchPartial from "./_42/fetchPartial.js"
 dom.ready.then(__partials())
 function __partials(): void {
     const partial = new FetchPartial()
     partial.fetchAll()
 }
 
 
 // pjax
 import * as Pjax from "../package/vendor/brixtol/pjax.esm.js";
 
 export default () => {
 
     Pjax.connect({
         // Define fragments to be replaced here!
            targets: [
                'h1',
                'nav',
                'main'
            ],
             request: {
                 timeout: 30000,
                 poll: 150, // You should leave this alone.
                 async: true,
                 dispatch: 'mousedown'
         },
         prefetch: {
             preempt: undefined, // Accepts [] or { '/path': [] }
             mouseover: {
                 enable: true,
                 threshold: 100,
             },
             intersect: {
                 enable: true,
                 options: {
                     rootMargin: "0px",
                     threshold: 1.0,
                 },
             },
         },
         cache: {
             enable: true,
             reverse: true,
             limit: 50,
             save: true
         },
     })
 
 }
 
 
 
 
 
 
 
 
 
 
 