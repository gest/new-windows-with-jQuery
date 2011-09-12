newWindow: a simple plugin for jQuery
=====================================

Introduction
------------

newWindow makes it easy to open new browser windows, from anchor links, in a way that complies with [Success Criterion 3.2.5 of WCAG 2.0](http://www.w3.org/TR/WCAG/#consistent-behavior-no-extreme-changes-context).

It makes use of the methods outlined in [Techniques for WCAG 2.0](http://www.w3.org/TR/2010/NOTE-WCAG20-TECHS-20101014/), namely [SCR24](http://www.w3.org/TR/2010/NOTE-WCAG20-TECHS-20101014/SCR24.html) and [H83](http://www.w3.org/TR/2010/NOTE-WCAG20-TECHS-20101014/H83), as well as adding a couple of extra accessibility enhancements.

How to use
----------

To use newWindow first load jQuery and then the plugin:

<script src="jquery.min.js" type="text/javascript"></script>
<script src="jquery.newwindow.js" type="text/javascript"></script>

Then attach to your links on DOM ready. 

For example, to open links with a class of 'new-window' in a new window, do the following:

  $(document).ready(function() {
    $('a.new-window').newWindow();
  });
  
What it does
------------
  
Using newWindow on a link will do the following:

1. Use the target attribute to open the link destination in a new window. 

Provides a machine-readable indication that a new window will open, allowing the user agent a) to be configured to prevent this from happening or b) to inform the user what will happen. Using javascript to add the target attribute means that this technique can be employed when the document type does not allow the target attribute, e.g. HTML 4.01 Strict or XHTML 1.0 Strict.

2. Append a span element with a class of 'assistive-text', and containing the phrase '(opens in a new window)', to the link text.

Makes sure all users, not only those using assistive technology, are aware the link opens in a new window. The class can be used to style the text in a more pleasing way, see below.

3. If there is a title attribute on the link, the phrase '(Opens in a new window)' is added to the value. If there is no title attribute present, then one is created with the value '(This link opens in a new window)'.

This gives a tooltip if a user hovers over the link.

Styling the assistive text:

Due to design constraints having the text '(opens in a new window)' added to link text is often undesirable. Using the class of 'assistive-text' it is possible to replace this text with an icon, while still making it available to assistive technologies such as screen readers. An example of how this can be done can be found in the file new-window.css

Licensing
---------

Copyright (c) 2011 Gareth Eschild. Licensed under the MIT License