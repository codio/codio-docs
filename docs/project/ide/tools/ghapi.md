---
title: Git Hub API


---

The Git Hub API can be used with [Git Hub Actions](https://github.com/features/actions) to automate the publication of assignments.

You are able to create your assignments in Codio, connect the box to your GH repo and when merging your branch to master will be able to automatically publish the Codio assignment.

### Set up GitHub API Integration

Create your API integration in the Organisation->Integrations area. This is only available to users with [Admin](/dashboard/organisations/#administrator-role) rights.

![api integration](/img/gh_int.png)

The name of the integration is added to the [version history](/courses/classes/#managing-assignments) record.
There is no limit to the number you can create so you can use the ID's in your individual GH repo or use in your GH account to apply to all repos


### API Integration information

Click on the created integration to view the Client and Secret ID's where you can copy to clipboard to add into your GH account

![api integration](/img/gh_show.png)

The secret ID can be regenerated if required to manage/control access to publishing the codio assignment.

### Adding ID's to GitHub account

In your repo go to Settings -> Secrets and create Client ID and Secret ID copying in from your Codio integration.

![GH secret](/img/gh_secrets.png)

To create your secrets for the Codespace (ie applies for all repos in the account and available for all collaborators), click on **Actions-> Codespaces** or to create just for the individual repo, click on **New repository secret** and create your secret keys.

We recommend you name each key including Client/Secret to identify which key is which and use other names to identify if it is just for this repo or for all repos in the codespace



### Implementing workflow actions

From your repository on GitHub, create a new file in the .github/workflows directory with the extension ```.yml``` and configure for use.

See [Quickstart for GitHub actions](https://docs.github.com/en/actions/quickstart)

#### Example .yml file for publishing project based assignments

```yml
name: codio-publish
# Run this workflow every time a new commit pushed to your repository branch noted below
on:
  push:
    branches:
      - master

jobs:
  build:
  # Set the type of machine to run on - do not change this. Any warnings you may see in workflow actions can be ignored
    runs-on: ubuntu-latest
    steps:
      - name: Log into Codio
        id: codio-login
        uses: codio/codio-auth-action@master
        with:
        # Use the ID's from the secrets below
          client-id: ${{ secrets.CODIO_DEMO_CLIENT_ID }}
          secret-id: ${{ secrets.CODIO_DEMO_SECRET_ID }}
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout
        uses: actions/checkout@v1

      - name: Cleanup
        run: rm -rf .github README.md
      # Recommend you use tar.gz . zip is allowed but it doesn't handle permissions correctly. See example below on how zip can be used
      - name: Archive
        run: tar czf ../data.tar.gz .

      - name: Publish to Codio
        uses: codio/codio-assignment-publish-action@master
        with:
          token: ${{ steps.codio-login.outputs.token }}
          # The course and assignment id of the codio assignment (see below)
          course-id: 004d0c98d345bfa262bfecdd9b510a0d
          assignment-id: dad1b5a4f6a3d5354047e9992ce4c346
          zip: ../data.tar.gz
          changelog: ${{ github.event.head_commit.message }}


```


The course/assignment id's are found from the URL in your browser when opening the assignment when in teacher mode

![Course/assignment id](/img/course_assignment_id.png)

#### Example .yml file for publishing book/book based assignments 

```yml
name: codio-publish
# Run this workflow every time a new commit pushed to your repository branch noted below. Any warnings you may see in workflow actions can be ignored
on:
  push:
    branches:
      - master

jobs:
  build:
  # Set the type of machine to run on - do not change this
    runs-on: ubuntu-latest
    steps:
      - name: Log into Codio
        id: codio-login
        uses: codio/codio-auth-action@master
        with:
         # Use the ID's from the secrets below
          client-id: ${{ secrets.CODIO_DEMO_CLIENT_ID }}
          secret-id: ${{ secrets.CODIO_DEMO_SECRET_ID }}
          # Set the domain you are working on - codio.com or codio.co.uk
          domain: codio.com
# Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout
        uses: actions/checkout@v1

      - name: Cleanup
        run: rm -rf .github README.md
      # Showing how zip can be used but we recommend you use tar.gz (see above example) . zip is allowed but it doesn't handle permissions correctly
      - name: Install Zip
        uses: montudor/action-zip@v0.1.1

      - name: Zip
        run: zip -qq -r ../data.zip .

      - name: Publish to Codio
        uses: codio/codio-book-publish-action@master
        with:
          token: ${{ steps.codio-login.outputs.token }}
          # The id of the codio book
          book-id: 5777e7e3b2ce90d2325e923d981a0a06
          # Set the domain you are workiing on - codio.com or codio.co.uk
          domain: codio.com
          # If using tar.gz see example code above
          zip: ../data.zip
          changelog: ${{ github.event.head_commit.message }}

      - name: Update Codio Course
        uses: codio/codio-course-book-update-action@master
        with:
          token: ${{ steps.codio-login.outputs.token }}
          # The codio course id 
          course-id: 5d2627e6b643887c072eea40
          # The id of the codio book - see above
          book-id: 5777e7e3b2ce90d2325e923d981a0a06
          # Set the domain you are working on - codio.com or codio.co.uk
          domain: codio.com
```

The book id's are found from the URL in your browser when viewing the book properties

![Book ID](/img/book_id.png)

The course id's are found (see above), from the URL in your browser when opening one of the assignments when in teacher mode

### Working with GH API

The basic premise is that when updating your Codio assignment, you connect to your GH repo and create a new branch. Make your required changes and push to your repo. 
When you then merge your branch to the master branch, the GH workflow runs and publishes your Codio assignment. Progress/errors can be reviewed from the **Actions** area in your repo
It is recommended when you merge, that you select the option **Squash and Merge** as you can combine all your merge request’s commits into one and retain a clean history.

### Working with GH API in staging

Your ```.yml``` file is commonly set up to execute against merges into the master branch but can be changed to execute when other branches merged and the codio assignment to be updated can be managed by reviewing/changing the course/assignment ids











