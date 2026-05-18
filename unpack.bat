@echo off
REM 
REM dépaquetage des compendiums du module CSB Diableros
REM le paquet fvtt doit être  installé https://github.com/foundryvtt/foundryvtt-cli
REM
REM /!\ nécessite que l'instance de foundry soit fermée avant de lancer la commande
REM
@echo off
cls
echo * ********************************** *
echo * start unpack compendiums           *
echo * ********************************** *
echo.
echo /// configure environment
call fvtt package workon csb-diableros --type=Module
echo.
echo /// unpack compendium "actor-templates"
call fvtt package unpack -c actor-templates
echo.
echo /// unpack compendium "item-templates"
call fvtt package unpack -c item-templates
echo.
echo /// unpack compendium "specialites"
call fvtt package unpack -c specialites
echo.
echo * ********************************** *
echo * all compendiums have been unpacked *
echo * ********************************** *
echo.
@echo on
