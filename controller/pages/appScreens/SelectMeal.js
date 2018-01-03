const View = require("presto-ui").baseView;

class SelectMeal extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
	}

}

module.exports = SelectMeal;
