module Product.BillPay where

import Prelude

import Engineering.Types.App (Flow)
import UI.Flow (splashScreen, billPayStatus, selectMeal, selectMenu) as UI
import Remote.Flow (pay) as Remote
import Product.Types (BillPayFailure)
import UI.Types (FinalScreenAction)

foodFlow :: Flow BillPayFailure FinalScreenAction
foodFlow = do
  _            <- UI.splashScreen
  meal         <- UI.selectMeal
  menu         <- UI.selectMenu
  result       <- Remote.pay meal menu
  UI.billPayStatus meal menu result
