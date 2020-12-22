---
title: How to use starter packs


---

Starter Packs are a very powerful way to create and manage templated projects. Please read the following sections for full details.

## What is a starter pack?
Starter Packs are a very powerful way to create and manage templated projects that include

- The base Ubuntu operating system. This is always present so you don't need to think about this really.
- A [Stack](/project/stacks/) (base software dependencies such as databases, languages and other system components). This is entirely optional, but Codio's Stack features ensure that you don't have to laboriously configure the Stack.
- Any code present in your Project. It's entirely up to you what you include. It could be a Wordpress site, or a front-end framework or some working code examples.

With Starter Packs, you can organize and share your own Starter Packs as well as find Codio Certified Packs and even Packs published by others.
## Certified packs
To save you as much time as possible, we include a range of Codio certified Starter Packs. These have been tried and tested by the Codio team. We are adding to these all the time.

To access these, click on the **Certified** header. You can then use the search field to look for technologies.

![Packs Certified](/img/packs_certified.png)
## Requesting additional packs
If you want additional Starter Packs, you can easily create your own. However, if you feel that we should add a new Codio Certified Pack, then please email us at help@codio.com with full details and we'll try to get it added for you.
## Selecting a pack
Once you have found the Starter Pack you want to use, you can create a new Project based on this in either of these ways

1. Click on the name of the pack  to see full details about this Pack before pressing the `Use Pack` button in the top right of the information panel.


You will then be transferred to the [Create Project](/project/projects/#creating-and-importing-a-project) dialog, so Codio can create a new Project for you based on the selected Starter Pack.

![Packs Info](/img/packs_info.png)

## Creating a pack
You can create a new Starter Pack by pressing the **New Pack** button. Please refer to the [Pack Guidelines](/project/packs/#pack-guidelines) for details in how to approach Starter Pack creation.

### Selecting the Source
You need to tell Codio where to get its source code from. There are two options

- **Codio** : you have a Codio project where your code is located
- **Git/Mercurial** : you can specify a Git or Mercurial repo that gets pulled in afresh each time someone creates a new Project based on your Starter Pack.  **Please Note**: We strongly advise that you use the HTTPS URL to the repository. If you use the SSH URL any users that do not have their Codio SSH Key uploaded to the remote will not be able to create a project from this Starter Pack.

### Selecting a Stack
Each Starter Pack requires a [Stack](/project/stacks/). If you only need a base Ubuntu Box, then you do not need to specify a Stack.

Please be aware that a Starter Pack is simply a Codio Stack plus a code workspace. If you based your Starter Pack on a Project that has had the Box modified (additional Box components installed, npm global install etc.), then these will not be present in a Project created from the Starter Pack.

### Description Details
You can add short and long descriptions as well as an image and tags. Tags are important and will allow you and others to find Packs in a more targeted fashion.

### Visibilty
By default, Starter Packs are kept private to your account until you make them public, at which point they will appear in the **Popular** and **All** Packs listings for all Codio Users.

If you are a member of an Organization, the Organization owner can disable the ability for you to create public starter packs. See [Public/Private Settings](/dashboard/organisations/#publicprivate-settings).

If you want to keep your Starter Pack private to your Organization, you can select the Private option and set the Owner option to your Organization.

**Important** : please do not make your Packs public unless they are tried, tested and fit for public consumption so as not to fill the **All** listing with junk.

### Ownership
You can specify whether other Codio Users within your Organization are able to access and Administer your Packs. If you are not a member of an Organization, this cannot be used.

##Write a tutorial
[Codio guide](/courses/authoring/) is a very powerful content authoring feature that lets you write course content that is fully integrated into the IDE. So if you are creating a starter pack for tuition purposes, this is extremely useful and easy to use.
## Pack guidelines
When creating a Starter Pack, here are some ideas on strategy and how to make them as useful as possible.

### Starting Stack
When you create a Pack, you should first create a new Project from the closest Stack that meets your requirements. You can also use the Base Stack and then [install your own components](/project/ide/boxes/#installing-software-packages).

### .codio file
It is often helpful to create a `.codio` file in the root of your project so that running common terminal commands and previewing can be accessed quickly and easily. [Information on this can be found here](/project/ide/boxes/#customizable-run-menu).

To enable your project to preview inside a Codio tab, you will need to configure the preview to run over https. We recommend this as being the default behavior as it will run both inside Codio and in a new browser tab this way. This will require you to configure any services to run on any port between 9500 and 9000.

The following `.codio` file is typical:

```json
{
// Configure your Run and Preview buttons here.

// Run button configuration
  "commands": {
        "Start Express Server": "npm start"
  },

// Preview button configuration
  "preview": {
        "Preview": "https://{{domain}}:9500/"
  }
}
```

Configuring the correct port in the range of 9500 to 9999 depends on the server side technology you are using.

### Create a new Stack
If you have installed or configured any components that are not a part of the code workspace, then you may want to create a special Stack that your Starter Pack uses. If you don't do this, then Projects that are created from the Starter Pack will need to have these modifications performed after Project creation. This might be an `npm install` if you are using Node.


### Use GitHub
Although you can use Codio as the source for your Starter Pack, we recommend pushing your Project to a Git remote. This gives better version control over time. The creation process is also somewhat faster.

When you create the Starter Pack, you can specify the Git url.

### Long Description
You should include a full description of your Starter Pack that appears when someone clicks on it within the Starter Packs listing. Check out some of Codio Certified Pack long descriptions.


### Write a Codio Guide
[Codio Guides](/courses/authoring/) is a very powerful content authoring feature that lets you write course content that is fully integrated into the IDE. So if you are creating a Starter Pack for tuition purposes, a Guide is extremely useful and easy to use.

### README.md file
You should create a `README.md` file in the root of your project that displays helpful information the user can see when they open the project.

Below is a template you could use.

```markdown
# Title
Put the name of your Pack here containing the primary technology or technologies with a version number, along with a short description.

## Using the Pack
Describe how the user should get started. Point to your `.codio` menu options if you have created any.

## How the Pack was prepared
It can be helpful to others or even to you later on to describe how you built the Pack. What we often do is to include a set of instructions that can be pasted into a Bash script to recreate the Pack with a single command.

**Example** : This Starter Pack was built on the Node+Grunt+MongoDB Stack. We than ran the following commands before creating the Pack.

npm install -g express
npm install -g express-generator
express .
npm install

## Useful Links

- [Express site](http://expressjs.com/)
- [Node](http://nodejs.org/)
- [npm](https://www.npmjs.org/)
- [Grunt](http://gruntjs.com/)
- [MongoDB](https://www.mongodb.org)

```

## Updating a pack
The best way to update an existing Starter Pack is to follow these steps

1. Either a) create a new Project from your Starter Pack or b) locate an existing Project that you wish to use for your Starter Pack.
1. Locate the Starter Pack again the main listing.
1. Press Edit.
1. In the `SOURCE` field, locate the correctly configured Project.
1. Press `CREATE` at the bottom of the form.

Codio does not support versioning for Starter Packs.

### Changing the source in the Starter Pack Edit screen
When you edit your Starter Pack, the Source field is enabled if

1. You are the owner of the source Project
1. The Project is present and has not been deleted.

If someone else owns the Project or if you have deleted the underlying Project, then you can still edit the Project data fields below the Source field and the original Project that was used will be retained.
## Deleting a pack
To delete a Starter Pack, first locate and select the pack. You can then press the red 'Delete' icon at the bottom right of the information screen. You will be required to enter a confirmation code before it is finally deleted.

Any projects that were created from a Starter Pack will not be impacted.