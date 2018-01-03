module UI.Flow where

import Prelude

import Engineering.Helpers.Commons (runUI')
import Engineering.Types.App (Flow, liftLeft)
import Product.Types (OrderFailure(..), OrderStatus, Meal, Menu)
import UI.Types (FinalScreen(..), FinalScreenAction(..), SelectMealScreen(..), SelectMealScreenAction(..), SelectMenuScreen(..), SelectMenuScreenAction(..), SplashScreen(..), SplashScreenAction(..))

splashScreen :: Flow OrderFailure SplashScreenAction
splashScreen = do
	action <- runUI' SplashScreen
	case action of
		SplashScreenRendered -> pure SplashScreenRendered

selectMeal :: Flow OrderFailure Meal
selectMeal = do
	action <- runUI' SelectMealScreen
	case action of
		SelectMealScreenRendered meal -> pure meal

selectMenu :: Flow OrderFailure Menu
selectMenu = do
	action <- runUI' SelectMenuScreen
	case action of
		SelectMenuScreenRendered  menu -> pure menu

orderStatus :: Meal -> Menu -> OrderStatus -> Flow OrderFailure FinalScreenAction
orderStatus meal menu payStatus = do
	action <- runUI' (FinalScreen meal menu payStatus)
	case action of
		SuccessResult -> pure SuccessResult
		FinalScreenAbort -> liftLeft UserAbort
