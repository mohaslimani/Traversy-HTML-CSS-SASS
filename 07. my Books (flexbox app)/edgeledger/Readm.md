#what have we changed in
--- 8. Website Deployment - Shared Host
----- first we added two files
--------- process.php > the script that will run after the form submission
--------- success.html > process.php will send us to success.html page

-------- we specified in ---index.html--- to tell the html what to do after submission <form action="process.php" method="POST">
-------- we also modified ---the main.js--- file that contains //Smooth Scrolling// function, we change it from $('#navbar a', '.btn') to $('#navbar a') only to remove the effect of prevent default, from our button ?????????????
