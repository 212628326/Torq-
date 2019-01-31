+++
title= "Button"
author = "Daniel Thompson"
date= 2018-10-02T16:37:05-05:00
description = " Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience."
pageType="components"
componentType="torq"
lightThumbnail = "/images/lightThumbnails/Button.png"  #image path for light thumbnail
darkThumbnail = "/images/darkThumbnails/Button.png"     #image path for dark thumbnail 
demoLink = "https://stackblitz.com/edit/js-4mdc6h"
githubLink = ""

+++



#### Setup

##### Installation
Using the command line, install the button component into your project using the `npm` command.
    
    npm install @torq-design/button


##### Import Sass Styles
Import the component into your sass file 

    import @torq-design/button




#### HTML Structure 
##### Primary Button

    <button class='torq-button'>
        Primary Button
    </button>


##### Secondary Button

    <button class='torq-button--secondary'>
        Secondary Button
    </button>


##### Primary Outlined

    <button class='torq-button--primary-outlined torq-button--outlined'>
        Primary Outlined
    </button>


##### Secondary Outlined
    <button class='torq-button--secondary-outlined torq-button--outlined'>
        Secondary Outlined
    </button>







#### CSS Classes

| Class Name |  Description |
|:--|:--|
| `mdc_button`| Mandatory. Defaults to a text button that is flush with the surface. |
| `mdc_button--raised` |  Optional. Styles a contained button that is elevated above the surface. |
| `mdc_button--unelevated`| Optional. Styles a contained button that is flush with the surface. |
| `mdc-button--outlined`| Optional. Styles an outlined button that is flush with the surface. |
| `mdc-button__icon`| Optional. Indicates an icon element.|

#### Sass Mixins

| Class Name |  Description |
|:--|:--|
| `mdc-button-container-fill-color($color)`| ### Sets the container fill color to the given color.|
| `mdc-button-icon-color($color)`|  Sets the icon color to the given color.|
| `mdc-button-ink-color($color)` | Sets the ink color to the given color, and sets the icon color to the given color unless `mdc-button-icon-color` is also used. |
|`mdc-button-icon-color($color)`|  Sets the icon color to the given color.|
|`mdc-button-horizontal-padding($padding)`|  Sets horizontal padding to the given number.|
|`mdc-button-outline-color($color)`|  Sets the outline color to the given color.|
|`mdc-button-outline-width($width, $padding)`|  Sets the outline width to the given number (defaults to 2px) and adjusts padding accordingly. `$padding` is only required in cases where `mdc-button-horizontal-padding` is also included with a custom value.|

