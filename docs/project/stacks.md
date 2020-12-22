---
title: Stacks


---


Codio projects are mounted to software configuration templates, known as Codio stacks.

You can use our pre-configured stacks or create your own. This template approach makes Codio easy to use, configure and adapt.

Codio’s templates deliver fully preconfigured servers in less than 5 seconds, no matter how complex the configuration.

## What is a stack?
It is very important to understand how Stacks work in Codio, especially when working with courses. Incorrect usage can result in a project working when being edited but failing when run by students.

A stack refers to the software configuration of a project server (Box). This incorporates everything on the server outside the code workspace (`/home/codio/workspace`) that you see in the IDE's file tree.

You can [snapshot a box's stack](/project/stacks/#creating-a-stack) at any point and add it to the **Stacks** template library as we explain later.


### How a Codio project works.
When you create a new Codio project, course assignment or book, you always specify a stack. The specified stack will contain the operating system (always) and other components such as languages, databases and tools.


### Stack modifications
You will often want to make changes to the software on your server. Any such changes you, or an application, makes outside the workspace folder represents a stack change. Whether such changes are made using `sudo apt-get install`, manually editing a config file, changes to a database due to application usage etc., these changes all represent stack modifications.

Any modifications you make will work fine on the project you are working on as the owner, but as soon as run by students, the modifications will not be transferred.

In order to address this, you need to ensure that any project with a modified stack first has a clean stack created that includes your modifications and that the project points to that clean stack.

The process for [creating a stack](/project/stacks/#creating-a-stack) and [switching the project to point to the new stack](/project/stacks/#switching-a-projects-stack) is straightforward.

### Use Case
Let’s consider a MySQL database use case. If the database data location is in the usual place within the stack (`/var/lib/mysql/`) then when the project is assigned to the course, each student gets their own database, independent of others students, as you would expect.

However, if the stack is changed for any reason (you, as project owner, change the stack or stack version of stack for an already assigned assignment) then all database data would be reset to the state of the new stack as the database data folder is not a part of the workspace.

If you want to keep the database independent of the stack, then you would need to locate the database file in the workspace folder itself (by editing `/etc/mysql/mysql.conf.d/mysqld.cnf`. This way, you could update the database software via a stack change but the database data remains intact when you switch stacks.

In summary, you should remember the following …

- Assignment = Selected Stack + Stack Changes + Workspace Folder
- When run by students in the course then at the point of the assignment: Assignment = Selected Stack + Workspace (no stack modifications)
- Stack modifications in the source project or assignment are **not transferred** when launched by students

Once the project or assignment is run by students, if they happen to make changes to their stacks, then each one is individually handled so there are no issues unless you or they select a new stack from **Project->Stacks->Settings**.

### Stacks and Stack Versions
When you create a brand new stack or a new stack version, in both cases you are creating a new stack internally. The only difference between a stack and a stack version is that the stack versions are nicely organized under an already named stack. This makes them easy to find and prevents your stack list getting unnecessarily long.

So, when referring to a stack in the documentation, we mean either a single stack or a stack version. Assigning a different stack version will also reset all project contents outside the workspace folder to those of the new stack version.

### What to do prior to assigning to a course
If you have modified the stack in any way, then there are a few use-cases that commonly occur when working with modified stacks prior to assigning to a course.

- **Projects**: generally speaking, if you have made any modifications then you should [create a new stack](/project/stacks/#creating-a-stack) and [switch your project to the new stack](/project/stacks/#switching-a-projects-stack) once it is created. This ensures maximum efficiency and speed. If you have not yet created a new stack to incorporate the modifications then you can create a new one by going to **Project->Stack->Create New** before you publish the assignment. It is good practice to go to your project and set it to point to this stack as soon as possible. It is however, much better practice to update the stack before you publish the assignment in the course module.
- **Course assignments** : you should always first [create a custom stack](/project/stacks/#creating-a-stack) and then [switch the assignment’s stack](/project/stacks/#switching-a-projects-stack), and any other assignments that use the same configuration, to the newly created stack. You can then [assign a course module](/courses/classes/#assign-resource-modules-to-the-course) (which assigns all its assignments) to the course.
- **Books** : if you are working with a book then the Book points to a stack. If you make any modifications, you have to create a new stack version (or new stack if appropriate) and then [switch your stack settings](/project/stacks/#switching-a-projects-stack) to point to the new stack version. Once this has been done, you should publish a new version of your book. The final step is to update the course to update all assignments that point to a book.

### Switching Stacks
Remember, when you [switch a project’s stack](/project/stacks/#switching-a-projects-stack) from **Project->Stack->Settings**, all stack modifications that you may have made relative to the original stack will be replaced by the new stack. Usually this is fine as you would have first created the new stack from the project before switching.

### Books
Codio Books are somewhat different. There is an explanation above on handling stack modifications for Books. You can [refer to the main Books section](/project/books/#publishing-and-the-stack).


## Modifying a stack
A Codio project, course assignment or book always has a stack associated with it. When you create a new project you specify the stack. You can also [switch a project's stack](/project/stacks/#switching-a-projects-stack) at any time.

You can modify the stack at any time. You do not do this directly. Instead, you open up a project, course assignment or book and make the stack changes from the [command line](/project/ide/boxes/#terminal-window). The concepts behind this are explained in detail on the [What is a stack?](/project/stacks/#what-is-a-stack) section.

To modify a stack you should be aware of the following rules.

### You are the owner or have write access
If you are the stack owner or have write access to the stack then you are able to create new versions of an existing stack. See [visibility settings](/project/stacks/#visibility-and-ownership) for information on ownership.

### You are not the owner and do not have write access
If you do not have write access to the stack, which is the case for the Codio certified stacks, then you will first need to create a new stack. After this you can create your own versions from that stack as you will be the owner.

If the stack is **Private** and the owner is set to an organization of which you are a member, then you will have write access and will be able to create new versions of that stack. See [visibility settings](/project/stacks/#visibility-and-ownership) for information on ownership.

## Creating a stack
Please make sure you have read [What is a stack?](/project/stacks/#what-is-a-stack) as this contains important concepts and information.

This page explains how to create a new stack or a new stack version from a project or assignment in a course. 

### Create new stack from the IDE
With the project open in the IDE, select the menu option **Project->Stack->Create New**. This will allow you to create a new stack or a new version of an existing stack you have the rights to update. By default it will be private to you. If you wish to make it available to others, please refer to the **Visibility** information below. We would recommend you set the owner to your organization.

![Stacks Create New](/img/stacks_createnew.png)

### Create new stack from the dashboard
From the dashboard, click on the **Stacks** item on the left hand side. On the stacks listing page, press the large blue **New Stack** button to create a new stack. You then point to your project.
![Stacks Create](/img/stacks_create.png)

When you have completed the required fields and pressed the `Create` button, we will generate a Stack image for you. This can take a few minutes, depending on the size of the Stack image. You do not need to remain on this screen while the Stack is created, so feel free to continue to other parts of Codio. The source project will not be accessible until the stack has been created.

- **Stack Blueprint**: you should specify is the Codio project that you want to use for your Stack blueprint. Enter any part of your Project name and you will see them listed in a dropdown.
- **Name and Description**: next, add a short name for your Stack and a longer description. You can also add a more detailed overview of your Stack by selecting the "add a long description" link. You can write this long description in Markdown.
- **Image**: you can also add an image to make your Stack more instantly recognizable in the listing. This should be a square image, which will be reduced in size and will appear in a circle as shown below.
- **Tags**: you can also add tags to your Stack. The tags should be component names ideally. There is an autocomplete function that will help you to use already defined tags to avoid tag duplication and ensure maximum efficiency when searching.

## Stack Guidelines
When creating a Stack, here are some ideas on strategy and how to make them as useful as possible.

### Starting Stack
When you create a Stack, you should first create a new Project from the closest Stack that meets your requirements. You can also use the Base Stack and then [install your own components](/project/ide/boxes/#installing-software-packages).


### Long Description
You should include a full description of your Stack that appears when someone clicks on it within the Stacks listing. This information will also be available to users in Projects by going to `Project->Stack->Info` in their Project, which should open automatically. Check out some of Codio Certified Pack long descriptions.

Below is a template you could use.

```markdown
# Title
Put the name of your Stack here.

## Using the Stack
Describe how the user should get started.

## Starter Pack
If there are related Starter Packs you have created from this Stack that include code files, detail them here.

## Components Installed
It can be helpful to others or even to you later on to describe the installed Components and versions.

## Configuration Files
Detail where any component configuration files can be found. As you install components from `Tools>Install Software` a log file of all this information will be opened.

## General Information
Include any general information on the use and operation of any installed components.

## Codio Documentation
We recommend you include useful links to the Codio Documentation.

##Stack Specific Links
Provide useful links on the Stack components.
```

## Example (from Codio Certified LAMP Stack)

```markdown
# LAMP

## Using this Stack
This Codio Stack gives you a complete **LAMP** stack ready to use and with all services up and running.

## Related Stacks & Starter Packs
There are various other Stacks and Starter Packs that may be of interest. Please search the listing for

- Stack : **LEMP**
- Stack : **LAPP**
- Stack : **LAMP** + Composer
- Starter Pack : **Laravel** (LAMP + Composer + Laravel)

## Components Installed
This Stack contains the following major component versions

- **PHP** 5.5.9
- **Apache** 2.4.7
- **MySQL** 14.14 Distrib 5.5.46

## Configuration Files
You can find configuration files in the following locations

- **PHP config file** : `/etc/php5/apache2/php.ini`
- **Apache config** : `/etc/apache2/apache2.conf`
- **MySQL default config file** :  `/etc/mysql/my.cnf`

## General Information

# Apache Server
Apache should be started by default. You can manually start, stop and restart it using the following terminal commands:

$ sudo service apache2 start
$ sudo service  apache2 stop
$ sudo service  apache2 restart


# MySQL

## Start, Stop, Restart the MySQL server
MySQL should be started by default. You can manually start, stop and restart the MySQL server using the following terminal commands:

$ sudo service mysql start
$ sudo service mysql stop
$ sudo service mysql restart


## Connecting to the MySQL monitor
Assuming the MySQL server is started, you can connect to it using `mysql` from the terminal. Exit using `ctrl+c`.

## Root Password
If you want to set the root password, use the following command from the terminal

mysqladmin -u root password NEWPASSWORD`


## Codio Documentation
Please be aware of the following useful links

- [How to Access your Box](/prpject/ide/boxes/)
- [If your firewall only allows access to port 80](/project/ide/boxes/ext-access/)
- [Creating Codio menu items to avoid repetitive terminal commands](/project/ide/boxes/runmenu/)
- [Using Git in Codio](/project/ide/editing/git/)
- [Customizing the IDE settings](/project/ide/customization/)
- [Restarting your Box](/project/ide/boxes/restart-reset/)
- [Creating multiple code editing panels in the IDE](/project/ide/panels/)

## Stack Specific Links

- [PHP](http://php.net)
- [Apache](http://httpd.apache.org)
- [MySQL](http://dev.mysql.com)

## Updating Components
If this Stack is not using any of the latest components, please email support@codio.com and we will update it.
```
## Visibility and Ownership

- By default, Stacks are kept private to your account. They can be made public, at which point they will appear in **All** Stacks listings for all Codio Users.

- If you set the owner of the Stack to your Organization, they will appear in the **My Stacks** listing for members of your Organization shown as owned by the organization.

- If you are an owner in the Oranization, you can enable the ability for you to create public Stacks. See [Public/Private Settings](/dashboard/organisations/#publicprivate-settings).

- If you want to keep your Stack private to your Organization, select the Private option and set the Owner option to your Organization. We would recommend this option especially if you may want to [collaborate](/courses/coursemanagement/#collaborating-on-project-assignments) with other teachers in authoring/editing content.


### Owner
By default, you will be the owner of this Stack and only you can edit it and [create new versions](/project/stacks/#updating-a-stack-version) of the Stack.

If you want to allow others to see and administer your Stack, you can assign it to another organization.
## Switching a project's stack
There are various reasons why you might want to switch your project's stack to a new one.

- **Created new stack** : this is the most important and common use case. If you have modified your stack and then created a new stack (or a new version) from it then it makes sense to point your project to it once it has been created.
- **Mistake** : you specified the wrong stack when you created the project.
- **New stack version** : a new version of a stack has been created and you want to point to the latest one.

### Important
You should remember that when you switch a stack, everything outside the workspace folder you see in the tree (`/home/codio/workspace`) will be replaced by the new stack. This is discussed at length in the [What is a stack?](/project/stacks/#what-is-a-stack) section.

### From the projects listing
Select the gear icon for the project from the main projects listing. You will then be able to change the stack or the stack version.

## Updating a stack (version)
Having created a new stack, you may later want to update the Stack properties or take another stack snapshot from a Codio project.

You can update your stack

- from the **Stacks** area of the Codio dashboard
- from the IDE

### Updating from the dashboard

<img alt="Stacks Dashboard" src="/img/stackdetails.png" course="simple"/>

To update the Stack, first select it from the stack list. You can then update the stack name or description fields by pressing the **Edit** button.

To create a new version of a stack, press the **New Version** button. Then choose the project from which the stack should be generated from the **Source** field. Add a comment describing what has changed since the last version. At that point, a new version will be generated. This can take a few minutes.

<a name="stackide"></a>
### Updating from the IDE
It is often simpler to update a stack from within the IDE and the project that you are currently working on. After you have finished making changes to your box (installing new components etc.) you can create a new stack version from the **Projects->Stack->Create New** menu.

<img alt="Stacks New Version" src="/img/stacknewversion.png" course="simple"/>

You should now press the **New Version** button and enter some text to describe the stack changes since the last version.

It will take a few minutes to build the new version. If your stack is pointing to the latest version then you need not do anything more. If it is pointing to a specific stack version, then you will need to change the stack to point to either the 'latest version' or to the version of the stack that was just built. You do this from the the **Project->Stack->Settings** menu item.

### Viewing version history
You can view the version history of a stack by from the **Stacks** area of the Codio dashbaord. Select the stack from the listing and then click on the **Versions** link at the top of the page.

<img alt="Stacks Versions" src="/img/stacks_versions.png" course="simple"/>
## Using a stack
You can select a stack

- when a new project is created
- or by [switching the stack](/project/stacks/#switching-a-projects-stack) if the project is already created
- or directly from the stacks listing, as explained below.


To create a new project from the Stack listing, you should first locate your Stack. You can select from My Stacks, Certified or All.

![Stacks List](/img/stacks_list.png)

To search for a Stack, enter appropriate search text in the search field. This will typically be the name of the main Stack component(s) you are searching for. This will search the Stack name and description as well as any tags used.

Having located a Stack, you can click on the item to get more detailed information. If you want to create a new Project immediately without seeing any further detailed information, click on the icon on the right hand side of the Stack item. If there are multiple versions of this Stack, it will use the latest.

Once you select a Stack, you will be taken to the Create Project dialog and your chosen Stack will be pre-selected. The latest version of the stack will always be used. If you want to choose a specific version of the stack, then read the following section.

### Stack Versions
By default, Codio will use the latest version of the selected Stack. Codio Stacks also supports versioning.

There are a number if ways to use a version but setting to **Use the latest version** is recommended.

1. Click on the body of a Stack item, which takes you to the information screen for the selected stack. On the top right of the information panel, you can drop down the Use Stack button and select a Stack version.
1. You can also select the **Versions** link above the main listing and see information about each version.
1. If used in an assignment in a course, go to the **Stack** button when in **Edit** mode and you can set the version to use there.

![Stacks Versions](/img/stacks_versions.png)

## Stack listings
Codio Stacks lets you create and manage the combination of a Codio Box and installed system level components (languages, databases, web servers etc.) so that you can instantly create new Projects and Boxes from Stack libraries.

![Stacks List](/img/stacks_list.png)

Stacks are divided up into the following searchable areas within the Stacks listing

- **My Stacks** are Stacks that were created by you or set to be owned by the organisation.
- **Certified** are Stacks that are approved by Codio and cover a wide range of common stack configurations.
- **All** gives you a searchable repository of all Stacks, whether created by you, others as well as Codio Certified Stacks.

If you cannot find a Stack that meets your needs, then you can configure your own Stack and add it to your Stack library [as described here](/project/stacks/#creating-a-stack).

## Excluding files & folders
When you create a Stack, it will base the Stack on the contents of the `/home/codio` folder but omit your code workspace.

If you want to exclude other files or folders then you should follow these steps

- Create a file `~/.codio/stack_exclusions` in the Project you will be basing the Stack on.
- add the paths to any file or folder you wish to be excluded from the Stack
- add the full path to the file (when in the folder, run `readlink -f <filename>` to get the full path)
- currently, globbing and wildcards are not supported
- one path per line




