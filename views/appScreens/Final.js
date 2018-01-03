const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;
const TextView = require("presto-ui").views.TextView;
const ScrollView = require("presto-ui").views.ScrollView;
const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/appScreens/Final');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');

class Final extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.state = state;
		this.HINT = Accessibility();
//	console.log("state = > ",state);
	}

	onPop = () => {}

	render = () => {
		this.layout = (
			<ScrollView
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				background = {Color.A__FF000000}>
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				padding="22,173,23,0"
				background={Color.A__FF000000}
				cornerRadius="0"
				root={true}
				style={this.style_Final}>
					<LinearLayout
						width="match_parent"
						height = "wrap_content"
						gravity = "center_horizontal"
						orientation = "vertical">
				<ImageView
					id={this.idSet.Bitmap}
					height="264"
					width="190"
					garvity = "center_horizontal"
					imageUrl="bitmap1"
					style={this.style_Bitmap} />
				<TextView
					id={this.idSet.InfoText}
					height="134"
					width="280"
					gravity="center_horizontal"
					margin="0,50,0,0"
					text={"Your order for "+this.state.contents[1]+" in "+this.state.contents[0]+" has been successfully placed ."}
					textSize={FontSize.A_25}
					color={FontColor.A__FFFFFFFF}
					fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
					gravity="center"
					style={this.style_InfoText} />
					</LinearLayout>
				 </LinearLayout>
				</ScrollView>

		);
		return this.layout.render();
	}

};

module.exports = Final;
