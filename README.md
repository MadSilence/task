# Dictionary
___

### Small introduction
In this small app I've created user interface for searching word definitions.
It allows retrieving information about entered word and listen to its pronunciation. 
___
### Home page 
This is the page where user starts his journey and falls back when for some reason we couldn't find definition.

Nothing fancy just some text a field for user input and a button.
(also working with "Enter")
___
### Result page
Now this is the page where we get after getting user input. From this point we have three phases.

1. Loading

This is a phase when we send get request to the API and while waiting we see loading spinner.
2. Json received

On this point json has arrived. Next step we decompose it and render.
3. And another item.

So, ops... Something went wrong. Maybe you didn't switch your keyboard or mistyped something.

Anyway page will gently tell you that something went wrong and provide a way to go back.

