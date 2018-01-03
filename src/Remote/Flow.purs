module Remote.Flow where

import Prelude

import Engineering.Types.App (Flow)
import Product.Types (BillPayFailure, BillPayStatus(..), Meal, Menu)

pay :: Meal -> Menu -> Flow BillPayFailure BillPayStatus
pay meal menu = pure SUCCESS
