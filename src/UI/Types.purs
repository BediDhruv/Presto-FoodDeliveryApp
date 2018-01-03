
module UI.Types where

import Control.Monad.Eff.Exception (Error)
import Data.Foreign.Class (class Decode, class Encode)
import Data.Foreign.Generic (defaultOptions, genericDecode, genericEncode)
import Data.Generic.Rep (class Generic)
import Presto.Core.Flow (class Interact, defaultInteract)
import Product.Types (OrderStatus,Meal,Menu)

data InitScreen = InitScreen
data InitScreenAction = InitScreenRendered

data SplashScreen = SplashScreen
data SplashScreenAction = SplashScreenRendered


data FinalScreen = FinalScreen Meal Menu OrderStatus
data FinalScreenAction = SuccessResult | FinalScreenAbort

data SelectMealScreen = SelectMealScreen
data SelectMealScreenAction = SelectMealScreenRendered Meal

data SelectMenuScreen = SelectMenuScreen
data SelectMenuScreenAction = SelectMenuScreenRendered Menu


instance finalScreenInteract :: Interact Error FinalScreen FinalScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance genericFinalScreen  :: Generic FinalScreen _
instance encodeFinalScreen :: Encode FinalScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericFinalScreenAction  :: Generic FinalScreenAction _
instance decodegenericFinalScreenAction :: Decode FinalScreenAction where
  decode = genericDecode defaultOptions

instance selectMealScreenInteract :: Interact Error SelectMealScreen SelectMealScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance genericSelectMealScreen  :: Generic SelectMealScreen _
instance encodeSelectMealScreen :: Encode SelectMealScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericSelectMealScreenAction  :: Generic SelectMealScreenAction _
instance decodegenericSelectMealScreenAction :: Decode SelectMealScreenAction where
  decode = genericDecode defaultOptions

instance selectMenuScreenInteract :: Interact Error SelectMenuScreen SelectMenuScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance genericSelectMenuScreen  :: Generic SelectMenuScreen _
instance encodeSelectMenuScreen :: Encode SelectMenuScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericSelectMenuScreenAction  :: Generic SelectMenuScreenAction _
instance decodegenericSelectMenuScreenAction :: Decode SelectMenuScreenAction where
  decode = genericDecode defaultOptions

-- Interact typeclass to tie input and output of the screen
instance splashScreenInteract :: Interact Error SplashScreen SplashScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance genericSplashScreen  :: Generic SplashScreen _
instance encodeSplashScreen :: Encode SplashScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericSplashScreenAction  :: Generic SplashScreenAction _
instance decodegenericSplashScreenAction :: Decode SplashScreenAction where
  decode = genericDecode defaultOptions

instance initScreenInteract :: Interact Error InitScreen InitScreenAction where
  interact x = defaultInteract x

derive instance genericInitScreen  :: Generic InitScreen _
instance encodeInitScreen :: Encode InitScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

derive instance genericInitScreenAction  :: Generic InitScreenAction _
instance decodegenericInitScreenAction :: Decode InitScreenAction where
  decode = genericDecode defaultOptions
