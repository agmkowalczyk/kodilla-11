function Button(text) {
	this.text = text || 'Hello';
}


Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);  // albo // this.$element.appendTo($('body'));
	}
};

var btn1 = new Button('Hello xxx!');

btn1.create();

var btn2 = new Button();
btn2.create();