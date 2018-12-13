+++
title= "Colors"
date= 2018-12-10T11:41:22-06:00
description = ""
author = ""
version = ""
pageType ="components"
componentType = "torq" #Enter the type of component. Standard or Web
lightThumbnail = "/images/lightThumbnails/Colors.png"    #image path for light thumbnail
darkThumbnail = "/images/darkThumbnails/Colors.png"     #image path for dark thumbnail 
lightDemo = "" #Enter HTML for Light version
darkDemo = "" #Enter HTML for Dark version
demoLink = ""
githubLink = ""

+++



#### Setup

##### Installation
Using the command line, install the colors component into your project using the `npm` command.
    
    npm i @torq-design/colors


##### Import Sass Styles
Import the SCSS styles into your base styling file.

    @import "@torq-design/colors/torq-colors";

Make sure your project's SASS compiler is configured to look in the node_modules directory.

\
\


#### Light Theme Classes 

Use these colors when building a light themed UI only

| SCSS Variable |  Usage | Hex Value
|:--|:--|:--|
| `$torq-primary-color` | Call to Action & Items of Importance | `#508BE4` |
| `$torq-background` | Page Background Gradient | `linear-gradient(176.98deg, #F7F9FB 0%, #D6DFEC 100%)` |
| `$torq-title-bar-background` | Title Bar Background | `#FFFFFF` |
| `$torq-top-bar-background` | Top Bar Background | `#F7F7FB` |
| `$torq-card-background` | Card Background | `#FFFFFF` |
| `$torq-outline` | Outlines & Table Borders | `#C7D4DD` |
| `$torq-text-color` | General Purpose Text | `#2C404C` |
| `$torq-header-text-color` | Header Text | `#202028` |
| `$torq-subtext-color` | Sub-text | `#596578` |
| `$torq-chart-text-color` | Chart Text | `#596578` |


\
\
\

#### Dark Theme Classes 

Use these colors when building a dark themed UI only

| SCSS Variable |  Usage | Hex Value
|:--|:--|:--|
| `$torq-primary-color` | Call to Action & Items of Importance | `#508BE4` |
| `$torq-dark-background` | Page Background Gradient | `linear-gradient(185.86deg, #1A2633 0%, #101820 100%)` |
| `$torq-dark-title-bar-background` | Title Bar Background | `#151E26` |
| `$torq-dark-top-bar-background` | Top Bar Background | `#1D2E40` |
| `$torq-dark-card-background` | Card Background | `#1D2E40` |
| `$torq-dark-outline` | Outlines & Table Borders | `#66757F` |
| `$torq-dark-text-color` | General Purpose Text | `#FFFFFF` |
| `$torq-dark-header-text-color` | Header Text | `#FFFFFF` |
| `$torq-dark-subtext-color` | Sub-text | `#A8B5BF` |
| `$torq-dark-chart-text-color` | Chart Text | `#A8B5BF` |

\
\
\

#### Supporting Colors

Supporting colors are the same for both dark and light UI.

##### Status Colors

| SCSS Variable | Hex Value
|:--|:--|
| `$torq-status-red`    | `#F34336` |
| `$torq-status-orange` | `#FF8B3A` |
| `$torq-status-yellow` | `#FEC600` |
| `$torq-status-green`  | `#7FAE1B` |
| `$torq-status-blue`   | `#508BE4` |


##### Data Visualization Colors

| SCSS Variable | Hex Value
|:--|:--|
| `$torq-data-pink`    | `#F97DD8` |
| `$torq-data-purple` | `#9150E4` |
| `$torq-data-cyan` | `#50CCE4` |
| `$torq-data-green`  | `#61D883` |
| `$torq-data-yellow`   | `#E4CB50` |
| `$torq-data-orange`   | `#E4A350` |

