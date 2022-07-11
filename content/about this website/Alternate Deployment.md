---
title: Alternate Deployment
draft: true
---

What is this about?

Changing the deplyment service from github pages to netlify.

Why? 

- Github pages needs the repository to be **public** in order to host the site as a github page.
	- As Quartz has the feature of storing drafts within the working directory  which will not be published, having a public repository would then defeat the purpose as the drafts would still be publicly accessible.
- *Contact me page* 
	- In an effort to maintain my privacy and not host my email address on my website, I would like to create a *contact me* page wherein users could simply supply their name and email address to reach them at in order to establish contact with me.
	- This would be an HTML form on the front-end but would also require backend processing in order for me to be notified when the form is filled out.
	- Github pages does not feature lambda functions in order for me to take advantage of the same.


What I did:

### 01 - Deploy the site on Netlify

- Relatively straightforward
	- Set the production branch as master
	- set branch deploys as only the production branch
