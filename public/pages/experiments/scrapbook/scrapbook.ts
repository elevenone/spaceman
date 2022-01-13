import PromiseDom from "../../../rsrc/_42/promiseDom.js";


// check if dom is ready
// const dom = new PromiseDom()
// dom.ready.then(() => ___launch('9 8 7 6 5 4 3 2 1 0'))

function ___launch(message): void {
    console.log(message)
    init()
    pagetitle()
    reveal()

    // show page

}
___launch('9 8 7 6 5 4 3 2 1 0')

// init
function init(): void {
    // switch dom elements off
    let _target: NodeListOf<HTMLSpanElement> = document.querySelectorAll('span')
    for (let i = 0; i < _target.length; i++) {
        _target[i].classList.add('off')
    }
}

function pagetitle(): void {
    var pagetitles = [
        'this',
        'that',
        'and the other'
    ]
    var pickpagetitle = Math.floor(Math.random() * pagetitles.length)
    document.title = pagetitles[pickpagetitle]
}

// reveal content on click
function reveal(): void {
    let openedby = document.querySelectorAll('[data-id-reference]')

    for (let i = 0; i < openedby.length; i++) {

        const elem = openedby[i]

        if (elem instanceof HTMLElement) {
            elem.onclick = function () : boolean {
                // let anchortarget = elem.dataset.idReference
                let anchortarget = elem.getAttribute('data-id-reference')
                // select targets by their IDs
                let target = document.getElementById(anchortarget)
                // let target = document.querySelector('[data-id="' + anchortarget + '"]')
                if (target.classList.contains('off')) {
                    target.classList.remove('off')
                    target.classList.add('on')
                } else {
                    target.classList.remove('on')
                    target.classList.add('off')
                }
                // remove anchor tag / select element to unwrap
                unwrap(document.querySelector('[data-id-reference="' + anchortarget + '"]'));
                return false
            } // end onclick
        }

    } // end for
} // end function

// utility functions
function unwrap(wrapper): void {

    // place childNodes in document fragment
    var docFrag = document.createDocumentFragment();

    while (wrapper.firstChild) {
        var child = wrapper.removeChild(wrapper.firstChild);
        docFrag.appendChild(child);
    }

    // replace wrapper with document fragment
    wrapper.parentNode.replaceChild(docFrag, wrapper);
}

