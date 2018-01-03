const View = require("presto-ui").baseView;
const dom = require("presto-ui").doms;

const LinearLayout = require("presto-ui").views.LinearLayout;
const TextView = require("presto-ui").views.TextView;

const Config = require('./../../globalConfig');
const Controller = require('./../../controller/pages/appScreens/Menu');
const Strings = require('./../../res/string');
const Accessibility = require('./../../res/accessibility');
const Font = require('./../../res/fontStyle');
const Color = require('./../../res/color');
const FontSize = require('./../../res/fontSize');
const FontColor = require('./../../res/fontColor');

class Menu extends Controller {

	constructor(props, children, state) {
		super(props, children, state);
		this.STR = Strings();
		this.HINT = Accessibility();
	}

	onMenuClick = (menu) => {
		console.log("selected Meal =>",menu)
    window.__runDuiCallback(JSON.stringify({tag:"SelectMenuScreenRendered",contents:menu}))
  }

	onPop = () => {}

	render = () => {
		this.layout = (
			<LinearLayout
				height="match_parent"
				width="match_parent"
				orientation="vertical"
				padding="20,40,19,80"
				background={Color.A__FF000000}
				cornerRadius="0"
				root={true}
				style={this.style_Menu}>
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
						text={this.STR.menu_M}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						style={this.style_Menu} />
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Sandwich}
					height="33"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					margin="0,270,0,0"
					style={this.style_Sandwich}>
					<TextView
						id={this.idSet.Sandwich}
						height="32"
						width="match_parent"
						text={this.STR.Sandwich}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						onClick={()=>{this.onMenuClick("SANDWICH")}}
						style={this.style_Sandwich} />
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Space}
					weight="1"
					style={this.style_Space} />
				<LinearLayout
					id={this.idSet.RiceBowl}
					height="33"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					style={this.style_RiceBowl}>
					<TextView
						id={this.idSet.RiceBowl}
						height="32"
						width="match_parent"
						text={this.STR.RiceBowl}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						onClick={()=>{this.onMenuClick("RICEBOWL")}}
						style={this.style_RiceBowl} />
				</LinearLayout>
				<LinearLayout
					id={this.idSet.Space}
					weight="1"
					style={this.style_Space} />
				<LinearLayout
					id={this.idSet.Dosa}
					height="33"
					width="match_parent"
					orientation="horizontal"
					gravity="center"
					style={this.style_Dosa}>
					<TextView
						id={this.idSet.Dosa}
						height="32"
						width="match_parent"
						text={this.STR.Dosa}
						onClick={()=>{this.onMenuClick("DOSA")}}
						textSize={FontSize.A_25}
						color={FontColor.A__FFFFFFFF}
						fontStyle={Font.SOURCESANSPRO_SEMIBOLD}
						gravity="center"
						style={this.style_Dosa} />
				</LinearLayout>
			</LinearLayout>
		);
		return this.layout.render();
	}

};

module.exports = Menu;
