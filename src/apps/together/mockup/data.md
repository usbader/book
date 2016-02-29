---
layout: layout.hbs
---

# Data Models


FixYourStuff data model requires four different objects:
* Users
* Categories
* Fix requests
* Fix solutions

The structure of the data model is described below:
* Users
 * username
  * user id
  * Skill level

* Categories
 * category name
  * category id
  * total number of fix requests
  * total number of fixed requests
  * total number unfixed requests
 
* Fix requests
 * request id
  * content
  * date
  * from
  * to

* Fix solutions
 * fix id
  * content
  * date
  * from
  * to
  
  

# Revision
 * The user screen fits in an iPad screen (768 x 1024) by adding a <code>&lt;meta&gt;</code> tag to the page. A user does not need to scroll.
 * Usera are able to have awareness of what every other user is doing concurrently by displaying who is typing right now. 
 
 
