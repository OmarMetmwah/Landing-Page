# Landing Page Project

## Table of Contents

- [Preparing Files](#Preparing_Files)
- [Collecting Data](#Collecting_Data)
- [ِActive If In Viewport](#Active_If_In_Viewport)
- [ِOther Features](#Other_Features)

## Preparing_Files

First of all I have prepared the files I am working on and link 'app.js' file with 'index.html' file.
I checked the values of the attributes of the elements to determine the best way to find them in JS code and determine the best atribute to get information from them.

## Collecting_Data

The best way to name the section is to get its name from 'data-nav' attribute and to anchor to the section I use its id.
I collect all the sections tags in the page and save this NodeList object in a variable 'sections'.
I iterate over this list to make '<li>' elements contaiing anchors '<a>' of class 'menu\_\_link' and href of id of section and with text content the value of 'data-nav' attribute.
Now The Nav_Bar is ready and its dynamiclly maded so that adding or removing any sections will not affect the functionalty of the navbar and the new sections will be automatically aded to it.

## Active_If_In_Viewport

Now the challenge is to find wether the section is in viewport to give it 'your-active-class' or not.
To do so I use built in function '.getBoundingClientRect()' which returns an object of informations about the position of the element according to the viewpord of the browser.
I compare this position with the height of the viewport to give it active class if it withen the viewport range [-0.5 of viewport : 0.5 of viewport]. ANd I use a variableas a flag or indicator to check that there is only one active section even if there is to sections in the viewport this mean the priority will be to the first section in the viewport in the case there is more than one.
I also made a class 'nav_active' and I add this to the navigation items when a section is in the viewport.

And It is clearly obviouse that the event that we listen to call this function is the scroll of the page.
and to make to page scroll not dragig when clicking on section from nav bar I set 'scroll-behavior' of html element to be 'smooth'.

## Other_Features

I made the nav bar disappear after 5 seconds of no scrolling using 'setTimeout' function to make the page looks better.

I also add botton at the top of the page that take the user to the top and this botton only appears whenever the page is not at the top.
