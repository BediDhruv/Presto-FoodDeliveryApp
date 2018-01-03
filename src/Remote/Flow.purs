module Remote.Flow where

import Prelude

import Engineering.Types.App (Flow)
import Product.Types (OrderFailure, OrderStatus(..), Meal, Menu)

pay :: Meal -> Menu -> Flow OrderFailure OrderStatus
pay meal menu = pure SUCCESS
