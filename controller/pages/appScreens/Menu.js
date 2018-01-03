const View = require("presto-ui").baseView;

class Menu extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = Menu;
