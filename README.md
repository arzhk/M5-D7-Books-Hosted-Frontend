Improve your Bookstore!

In this exercise you are gonna update your own book store!

Start from your previous React Bookstore. We want you to add the functionality to add comments to a single book.
All the users can add comments like a "real" review :

API INFO:

You have a CRUD endpoint for comments on:

https://striveschool-api.herokuapp.com/api/comments/

This means you can GET, DELETE, POST, PUT data from there.

The Comment structure is this:

{
"comment": "A good book but definitely I don't like many parts of the plot",
"rate": 3,
"elementId": "0316438960"
}

Where:

- comment is the comment inserted by the user
- rate is a value between 1 and 5
- elementId is the ASIN of the book
- use usual Authentication (we made some modifications, so please re-log in on https://strive.school/studentlogin to grab a new token)

!IMPORTANT!
You can't get ALL the comments. You have to specify the ElementID / ASIN in the query:

https://striveschool-api.herokuapp.com/api/comments/{ASIN}

Doing so, you'll get all the comments for a specific book

Create a CommentArea component. When the user clicks a book, this component should be displayed.
CommentArea component contains the picture, and two subcomponents: CommentsList and AddComment.

CommentsList holds a list of comments of the selected book, comments are passed as prop. Each comment is a
single Comment component.

AddComment contains a form to add a comment and a rating (1 to 5). This component should allow the user to POST
a new Comment on the selected Book

Add, to each "Comment", a button to DELETE it. Create a request towards
https://striveschool-api.herokuapp.com/api/comments/{comment id}

Create a Loading component. This loading component should appear on the page when an ajax request is ongoing

Create an error handler for the requests. If something goes wrong, an error message should appear!
Publish everything on GitHub

EXTRA

Add to "CommentList" component the capability to filter comments using a text box. The Filter will display only
comments that contains as comment or as author the specified string

M4-D6 TASKS

StriveBooks App

Make sure to refactor the grid of the books list to have the list on the
left and the CommentsArea always visible on the right.

Create the initial state for the CommentsArea for when there's no data
to be displayed.

The CommentsArea behaviour: every time the user clicks on a card a fetch
should be perfomed and comments should update. Pass the single ID
property and let the Component handle the fetch by using
componentDidUpdate method.
