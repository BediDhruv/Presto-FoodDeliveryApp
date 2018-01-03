const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const ImageView = require("presto-ui").views.ImageView;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/appScreens/SplashScreen');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');

class SplashScreen extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	afterRender = () =>{
		setTimeout(()=> {
			window.__runDuiCallback(JSON.stringify({tag:"SplashScreenRendered"}));
		},3000)
	}

	onPop = () => {}

	render = () => {
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="horizontal"
				gravity="center"
				background={Color.A__FF000000}
				cornerRadius="0"
				root={true}
				style={this.style_SplashScreen}>
				<LinearLayout
					id={this.idSet.Content}
					height="400"
					width="270"
					orientation="vertical"
					style={this.style_Content}>
					<ImageView
						id={this.idSet.Image}
						height="200"
						width="match_parent"
						gravity = "center"
						imageUrl="image0"
						style={this.style_Image} />
					<LinearLayout
						id={this.idSet.Space}
						weight="1"
						style={this.style_Space} />
					<TextView
						id={this.idSet.OrderNow}
						height="95"
						width="230"
						text={this.STR.OrderNow}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						style={this.style_OrderNow} />
				</LinearLayout>
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = SplashScreen;
