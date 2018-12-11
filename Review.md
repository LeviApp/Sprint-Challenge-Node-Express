# Review Questions

## What is Node.js?

It is an environment for working in backend development. It is the place where servers are built
with data and stored. It is where Javascript can be run outside of the browser.

## What is Express?

Express is a framework that helps with backend development. It contains features that help in building web and mobile apps. It makes it easier to build API requests.

## Mention two parts of Express that you learned about this week.

Express helps with api CRUD operations, such as get(),delete(),put(), and post(). While Node.js can work with the functionality of these operations, express simplifies the process.

Express includes the ability to add Middleware, which works with the data behind the scenes to modify it in someway based on either user input or provided functionality.

Express  includes Routes, which organizes and simplifies the code for API requests.

## What is Middleware?

Middleware is something that takes data, before you get it, modifies it or requires data for authentication, then sends you back the modified data.

## What is a Resource?

Any kind of data you can access is a resource that will help in backend development.

## What can the API return to help clients know if a request was successful?

There are different statuses you can send back

A status of 400 most likely means you forgot to send required information
A status of 404 means that an ID could not be found
A status of 500 is a general failure to get the requested data.
A status of 200 means that it is a good request, and the information could be retrieved.
A status of 201 means new data was successfully created.

## How can we partition our application into sub-applications?

We can use routes four our API CRUD operations. This will allow the main file to be free of unnecessary clutter. At the same time, it brings good organization to the CRUD operations. One way to organize files is by splitting the operations by topic.

## What is express.json() and why do we need it?

express.json() is a way to get back data/modified data/data that matches specific requirements, the data is sent in a format that is preferred by backend developers. 