module UI.Flow where

import Prelude

import Engineering.Helpers.Commons (runUI')
import Engineering.Types.App (Flow, liftLeft)
import Product.Types (BillPayFailure(..), BillPayStatus, Meal, Menu)
import UI.Types (FinalScreen(..), FinalScreenAction(..), SelectMealScreen(..), SelectMealScreenAction(..), SelectMenuScreen(..), SelectMenuScreenAction(..), SplashScreen(..), SplashScreenAction(..))

splashScreen :: Flow BillPayFailure SplashScreenAction
splashScreen = do
	action <- runUI' SplashScreen
	case action of
		SplashScreenRendered -> pure SplashScreenRendered

selectMeal :: Flow BillPayFailure Meal
selectMeal = do
	action <- runUI' SelectMealScreen
	case action of
		SelectMealScreenRendered meal -> pure meal

selectMenu :: Flow BillPayFailure Menu
selectMenu = do
	action <- runUI' SelectMenuScreen
	case action of
		SelectMenuScreenRendered  menu -> pure menu

billPayStatus :: Meal -> Menu -> BillPayStatus -> Flow BillPayFailure FinalScreenAction
billPayStatus meal menu payStatus = do
	action <- runUI' (FinalScreen meal menu payStatus)
	case action of
		SuccessResult -> pure SuccessResult
		FinalScreenAbort -> liftLeft UserAbort
