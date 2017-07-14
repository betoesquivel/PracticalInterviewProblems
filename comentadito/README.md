
## The problem
You have a comment textarea below, and want to mimic a social network's mentions functionality.

### Task 1 - comment with mentions to comment with mentions and email
The comment that the user types, may contain mentions of other users. We would like to store, not only the mentions but the mentioned user's email as well in the comment text in the server. This way later on, when building search functionality we can search the comments by username or email, and any device that calls the server asking for comments, can get all the mention data in one request. Therefore, your task is to convert the comment typed by the user into a comment with mentions and emails. 

##### environment
In the ```index.js``` file, we have subscribed the function ```updateCommentText``` to the ```input``` event in the comment textarea. Therefore, this function will be called everytime the user changes the input in the comment textarea.
This ```updateCommentText``` function calls ```parseCommentText``` everytime, and writes the result of that function as innerText in the ```<div id="parsed-server-comment">```.
We also have a global variable called ```data```, which is an object simulating our database. 
It contains ```{ 'mention_key': 'mention_email' }```

###### task
Your mission, if you choose to accept it (:P), is to *change* the code in ```parseCommentText``` so that it returns the comment text enriched with the email data of each user mentioned like so:

1. Este es un comentario mencionando a @beto. // user types this
2. Este es un comentario mencionando a @beto\<useremail_goes_here\> // "server" receives this

### Task 2 - server comment to UI comment with styled mentions
After you have done the last part, you should see 2 boxes being filled with your "server" data. In this task, you will change the code of the ```parseServerCommentData``` function so that the innerHTML that is being set in the ```#parsed-server-comment``` div shows the comment text just as the user typed it, but with the mentions in **blue** as **links** to "mailto:email".

3. Este es un comentario mencionando a [@beto](mailto:ppbeto94@gmail.com)

Tips:
* Don't try to over complicate your solution. If something isn't specified you can ask us about it. 
* Essentially all you have to do is convert the comment into a format that is useful in the server for search (search comments that mention a user or his email), and that still makes it possible for you to restore.
* While the server only receives a string, it can be a JSON object as well if you need to pass in more data.
* You can store any additional data as well in the frontend.