var dnd = require('./assets/js/xframednd.js');

var dragDrop = new dnd({
	draggables: "#dragitemslistcontainer li",
	inFrameCssUrl: "assets/css/inframe.css",
	accepts: [
        {draggable: '*', droppable: '*'}
    ]
});

dragDrop.start();

$('iframe').on('load', function () {



	dragDrop.addFrame({
		target: this, 
		selector: 'p, h1, h2'
	});

});