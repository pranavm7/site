---
title: Alternate Deployment
draft: true
---

What is this about?

Changing the deployment service from github pages to netlify.

Why?

- Quartz supports [[hosting#^6ae136|Github Pages]] deployment out of the box. However, Github Pages needs the repository to be **public** in order to host the site as a github page.
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
  - That did not work out. As the website was not being built every time I pushed to github, netlify would simply copy and serve the previously built pages.
- Research
  - Learnt about the github [deployment workflow](https://github.com/jackyzha0/quartz/blob/hugo/.github/workflows/deploy.yaml) detailed in quartz
  - Understood the build steps.
- First attempt
  - I realized that the most straightforward method would be to replicate the workflow in a `netlify.toml` file as netlify performs the build steps detailed in this file.
  - In order to replicate the workflow, I looked into the steps that it used. I understood that it used [github actions](https://github.com/features/actions) to setup and run quartz and hugo in order to generate static pages.
  - While I was looking at details of github actions and implementing them in netlify, I came across [this medium post](https://dev.to/dancurtis/ci-cd-pipeline-with-netlify-and-github-actions-bcm) that talked about the same.
- Second attempt
  - I realized that there are github actions which can be used to generate the Static Site on Github and deploy on Netlify.
  - I chose to use [this](https://github.com/netlify/actions/blob/master/cli/README.md) action by [Netlify](https://github.com/netlify) in order to deploy at first.
    - This step involved experimenting with the `deploy.yaml` file located at `PROJECT_ROOT/.github/workflows/deploy.yaml` and creating [secrets](https://docs.github.com/en/rest/actions/secrets) for the actions.
  - Stop autodeployment from Netlify
  - Get secrets from Netlify
  - Create secrets within the repository on Github.
  - Created a test deployment

## 02 - The Code

Run through the deploy.yaml file here.
