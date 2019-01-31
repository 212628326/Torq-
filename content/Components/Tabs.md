+++
title= "Tabs"
date= 2018-11-21T10:02:44-06:00
description = ""
author = ""
version = ""
pageType ="components"
componentType = "torq" #Enter the type of component. Standard or Web
lightThumbnail = "/images/lightThumbnails/Tabs.png"    #image path for light thumbnail
darkThumbnail = "/images/darkThumbnails/Tabs.png"     #image path for dark thumbnail 
lightDemo = "" #Enter HTML for Light version
darkDemo = "" #Enter HTML for Dark version
demoLink = ""
githubLink = ""

+++



#### Setup

##### Installation
Install the component into your project via npm
    
    insert code here


##### Import
Import the component styles into your sass file


    @import "@torq-design/colors/torq-colors";
    @import "@material/tab/mdc-tab";
    @import "@material/tab-indicator/mdc-tab-indicator";
    @import "@material/tab-bar/mdc-tab-bar";
    @import "@material/tab-scroller/mdc-tab-scroller";


#### HTML Structure 
    <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
                <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__icon material-icons" aria-hidden="true">favorite</span>
                    <span class="mdc-tab__text-label">Favorites</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>
            </div>
            </div>
        </div>
    </div>

#### CSS Classes

| Class Name |  Description |
|:--|:--|
| href | The location href to link to |
| align |  horizontal align button on page |
| theme | `default`, `primary` , `success`,`info`,`warning`,`danger` |


#### Sass Mixins

| Class Name |  Description |
|:--|:--|
| href | The location href to link to |
| align |  horizontal align button on page |
| theme | `default`, `primary` , `success`,`info`,`warning`,`danger` |



#### Javascript Classes

| Class Name |  Description |
|:--|:--|
| href | The location href to link to |
| align |  horizontal align button on page |
| theme | `default`, `primary` , `success`,`info`,`warning`,`danger` |


#### Javascript Attributes

| Class Name |  Description |
|:--|:--|
| href | The location href to link to |
| align |  horizontal align button on page |
| theme | `default`, `primary` , `success`,`info`,`warning`,`danger` |



#### Javascript Functions

| Class Name |  Description |
|:--|:--|
| href | The location href to link to |
| align |  horizontal align button on page |
| theme | `default`, `primary` , `success`,`info`,`warning`,`danger` |


#### Events
| Class Name |  Description |
|:--|:--|
| href | The location href to link to |
| align |  horizontal align button on page |
| theme | `default`, `primary` , `success`,`info`,`warning`,`danger` |
