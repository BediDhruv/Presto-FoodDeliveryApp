const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;
const ImageView = require("presto-ui").views.ImageView;
const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/appScreens/SelectMeal');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');

class SelectMeal extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onPop = () => {}


	onMealClick = (meal) => {
		console.log("selected Meal =>",meal)
    window.__runDuiCallback(JSON.stringify({tag:"SelectMealScreenRendered",contents:meal}))
  }

	render = () => {
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				gravity="center_horizontal"
				padding="20,40,20,80"
				background={Color.A__FF000000}
				cornerRadius="0"
				root={true}
				style={this.style_SelectMeal}>
				<LinearLayout
					id={this.idSet.Header}
					height="32"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					style={this.style_Header}>
					<TextView
						id={this.idSet.Menu}
						height="32"
						width="match_parent"
						text={this.STR.Menu}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						style={this.style_Menu} />
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Breakfast}
					height="32"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					margin="0,270,0,0"
					style={this.style_Breakfast}>
					<TextView
						id={this.idSet.Breakfast}
						height="32"
						width="match_parent"
						text={this.STR.Breakfast}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						onClick={()=>{this.onMealClick("BREAKFAST")}}
						style={this.style_Breakfast} />
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Space}
					weight="1"
					style={this.style_Space} />
				<LinearLayout
					id={this.idSet.Lunch}
					height="33"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					style={this.style_Lunch}>
					<TextView
						id={this.idSet.Lunch}
						height="32"
						width="match_parent"
						text={this.STR.Lunch}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						onClick={()=>{this.onMealClick("LUNCH")}}
						gravity="center"
						style={this.style_Lunch} />
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Space}
					weight="1"
					style={this.style_Space} />
				<LinearLayout
					id={this.idSet.Dinner}
					height="33"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					style={this.style_Dinner}>
					<TextView
						id={this.idSet.Dinner}
						height="32"
						width="match_parent"
						text={this.STR.Dinner}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						onClick={()=>{this.onMealClick("DINNER")}}
						style={this.style_Dinner} />
				</LinearLayout>
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = SelectMeal;
