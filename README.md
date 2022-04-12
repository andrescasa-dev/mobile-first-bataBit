# mobile-first-bataBit
Practice project where I apply all my knowledge in responsive design.


# Why is it important to separate css according to the screen size? 
Because we want that the user only download the styles according to their device.

# How can i tell to the PC download a certain css fail with a certain device size?
Note that the property "min-width is used" because is the "min width" to start applying the new css.
''' <link rel="stylesheet" href="./Styles/tablets.css" media="(min-width: 900px)"> '''

# How center a layout without using other layout
Use
''' margin: 0 auto '''
This add a auto margin that center de element horizontally. Note that this doesn't work if the content element fullfil all the space (like a box element)

# How to know that I made a good work? 
Use light house in the chrome dev tools 