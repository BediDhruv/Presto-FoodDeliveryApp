module Product.Types where

import Data.Foreign.Class (class Encode)
import Data.Foreign.Generic (defaultOptions, genericEncode)
import Data.Generic.Rep (class Generic)

type Meal = String
type Menu = String

data OrderStatus = SUCCESS | FAILURE
data OrderFailure = FetchOperatorFailure String
					           | OrderFailure String
					           | UserAbort

derive instance genericOrderStatus  :: Generic OrderStatus _
instance encodeOrderStatus :: Encode OrderStatus where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })
