module Product.FoodDelivery where

import Prelude

import Engineering.Types.App (Flow)
import UI.Flow (splashScreen, orderStatus, selectMeal, selectMenu) as UI
import Remote.Flow (pay) as Remote
import Product.Types (OrderFailure)
import UI.Types (FinalScreenAction)

foodFlow :: Flow OrderFailure FinalScreenAction
foodFlow = do
  _            <- UI.splashScreen
  meal         <- UI.selectMeal
  menu         <- UI.selectMenu
  result       <- Remote.pay meal menu
  UI.orderStatus meal menu result
