+++
title= "Typography"
date= 2018-12-03T10:32:59-06:00
description = ""
author = ""
version = ""
pageType ="components"
componentType = "torq" #Enter the type of component. Standard or Web
lightThumbnail = "/images/lightThumbnails/Typography.png"    #image path for light thumbnail
darkThumbnail = "/images/darkThumbnails/Typography.png"     #image path for dark thumbnail 
lightDemo = "" #Enter HTML for Light version
darkDemo = "" #Enter HTML for Dark version
demoLink = "https://stackblitz.com/edit/torq-typography-demo"
githubLink = ""

+++



#### Setup

##### Installation
Using the command line, install the typography component into your project using the `npm` command.
    
    npm i @torq-design/typography

\
\

##### Import Sass Styles
Import the SCSS styles into your base styling file.

    @import "@torq-design/typography/torq-typography";

Make sure your project's SASS compiler is configured to look in the node_modules directory.

\
\


##### Import Font
Import our default font in your root HTML file.

    <link href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700,800" rel="stylesheet">

Or, import the font in your base styling file.

    @import url('https://fonts.googleapis.com/css?family=Heebo:300,400,500,700,800');



##### Tag Defaults

Using any of the HTML tags listed in the table above will automatically apply the corresponding font characteristics.

    <h4>This is a section header</h4>

##### Font Profile CSS Classes 

Each font profile also has an accompanying CSS class.

    <div class="torq-typ--section-header">This is also a section header.</div>
\
\

#### CSS Classes

| Class Name |  Description |
|:--|:--|
| `torq-h1` | Sets font to Headline 1 |
| `torq-h2` | Sets font to Headline 2 |
| `torq-page__header` | Sets font to Headline 3 |
| `torq-section__header` | Sets font to Headline 4 |
| `torq-title1` | Sets font to Headline 5 |
| `torq-title2` | Sets font to Headline 6 |
| `torq-body1` | Sets font to Body 1|
| `torq-body2`| Sets font to Body 2 |
| `torq-chart__title`| Sets font to Chart Title |

\
\
\

#### Font Weights

| Weight |  Value | CSS Class |
|:--|:--|:--|
| Light | 300 | `weight--light` |
| Regular |  400 | `weight--regular` |
| Medium | 500 | `weight--medium` |
| Bold | 700 | `weight--bold` |
| Extra Bold | 800 | `weight--extra-bold` |

Adjust font weights using the available CSS classes.

    <div class="weight--bold">This is some bold text.</div>

    