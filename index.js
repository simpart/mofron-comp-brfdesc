/**
 * @file mofron-comp-brfdesc/index.js
 * @brief brief description component for mofron
 * @license MIT
 */
const Text      = require('mofron-comp-text');
const Frame     = require('mofron-comp-frame');
const loMargin  = require('mofron-layout-margin');
const HrzCenter = require('mofron-layout-hrzcenter');
const ConfArg   = mofron.class.ConfArg;
const comutl    = mofron.util.common;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('brfdesc');
            
	    /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
            super.initDomConts();
            this.title('', { size:'0.3rem' });
            this.frame().config({
                baseColor: 'white',
                size:      new ConfArg('99%',null),
                shadow:    '0.03rem',
                layout:    [ new loMargin('top','0.2rem'), new HrzCenter(90) ]
	    });
            this.child([ this.title(), this.frame() ]);
            this.childDom(this.frame().childDom());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    afterRender () {
        try {
            super.afterRender();
            this.item('','');
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    title (prm,cnf) {
        try {
            if ('string' === typeof prm) {
                this.title().text(prm);
                this.title().config(cnf);
                return;
            }
            return this.innerComp('title', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    frame (prm,cnf) {
        try {
            return this.innerComp('frame', prm, Frame);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    item (name, desc) {
        try {
            this.child(new mofron.class.Component([
                new Text({ size:'0.22rem', weight:700, text:name }),
                new mofron.class.Component(
                    new Text({ size:'0.2rem', text:desc })
                )
            ]));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
/* end of file */
