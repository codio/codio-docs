---
title: Courses


---
## Introduction
The following videos cover project units. [Click here](/books) if you have authored a Codio book and want to publish a unit from a part it.

<a name="courseoverview"></a>
### Video - General overview

The following video gives an overview on why you might want to use a course rather than projects. It also explains how to create a course and assign it to a course.

<iframe src="https://player.vimeo.com/video/236456705" width="640" height="436" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<a name="coursevisibility"></a>
### Video - Ownership and visibility
Please watch the following video to understand how to allow people to find your course and modules and also to administer, edit and assign them to course of student.

<iframe src="https://player.vimeo.com/video/236618721" width="640" height="436" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

You can also read how to [control access](/courses/manage/course-public) in the documentation.

<a name="coursestacks"></a>
### Video - Working with stacks in courses
The following video covers the important topic of stack management within a course. Here are some documentation links.

- [About stacks in general](/project/stacks/stack-overview)
- [Stack strategy in courses](/courses/stack-planning)

<iframe src="https://player.vimeo.com/video/236904941" width="640" height="436" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


### Updating courses and collaboration
If you want to allow other teachers in your organization to modify your course structure and unit content then it is important to understand how Codio manages this. Please refer to [Collaborating on project units](/courses/units/course-collaborate/) for details.


### Overview

The most basic way to assign content to students is to create a project and then [assign the project to the course](/classes/unitmanagement/assign-project). Over time, you may end up with a lot of projects in your project list. Each time you come to teach your course, you will find it harder and harder to locate the right project when you need it.


As a result, you should be familiar with the functionality offered by courses, described below, and [books](/books).

A course is a very elegant way of managing and organizing your projects. A course has a very simple hierarchy.

- **Course**: the course is the top level and contains modules.
- **Module**: a module is simply a container for your main project assignments. If you have 50 project assignments in your course then you might want to put collections of assignments into distinct, suitably named modules.
- **Assignment**: an assignment is a Codio project that is some unit of teaching. It is entirely up to you how much material is covered by an assignment. Approaches include putting about a week, a lesson or a lecture's worth of material into a single assignment.

A course assignment typically takes one of two forms.

- **Tutorial**: in this case you would use the [Codio Guides](/content/authoring/guides) or [Codio Books](/books/) tutorial authoring tools to create your tutorial content. [Click here](/content/authoring/3ways) for an overview of the difference.
- **Assignment**: in this case you create a project assignment where everything is set up for the student to tackle a coding assignment or challenge. You can still use guides or books to give instructions, but with assignments, you expect your students will be coding rather than learning.

The above two cases are not fixed concepts in Codio but are typical use cases. You can do whatever you like with a project.


## Working with courses
Working with courses often follows the pattern listed below.

### Setup

1. **Create a new course** and name it.
1. **Create your first module**. You need at least one module to hold your assignments. A module is an organizational item and a) contains assignments and b) can be assigned to a course with all its assignments.

### Assignment Creation

Either

- **Create a new project assignment**  this gives you a dedicated Codio box and behaves like a regular Codio project.

Or

- **Create a new book assignment** which maps to a part of a book. Unlike project assignments, a book has a single Codio box to work with along with a typically large volume of content.

Please [click here](/content/authoring/3ways) for details on how to decide whether to use project assignments or book assignments


### First version
This describes the first time you create a new assignment.

1. **Edit your assignment**. If your assignment is a project assignment, clicking the assignment will take you into the IDE, as with a Codio project, where you can work on your project.
1. **Publish your assignment**. When you think your assignment is in good shape, it is ready to publish. A assignment is not available to the course until you publish. At this point a snapshot is taken of the assignment and it forms a part of the published course.
1. **Assign module to course**. Once you have assignments published, you may want to [assign them to a course](/classes/unitmanagement/assign-module).

You will iterate through the above process as you add more assignments to your course modules.


### Updates
Editing a assignment **does not affect published course content or content assigned to course**. This section describes how you can push your changes out to courses when you are ready.

1. **More edits to a assignment**. After publishing, you may decide to make further changes. These changes do not form a part of the published course assignment until you republish, so you can edit without concern for altering published content.
1. **Republish**. Having made more changes, you can publish the assignment again in order to make those changes available to the course. However, publishing does not update assignments previously assigned to a course.
1. **Update course**. If you had assigned a course module to a course and subsequently updated and published a assignment within that module, then assignments within that module are not automatically updated in the course. You need to explicitly do this by going to the course. You should see a red [**Update Course** button](/classes/unitmanagement/upgradecourse). This allows you to selectively update assignments.



## Stack planning
The following applies to project assignments rather than books. Books require less thought as a book only has one box associated with it and the book assignment will takes its stack setting from the book.

You should be familiar with the concept of [a stack](/project/stacks/stack-overview) before creating CS coursework.

### Minimize the number of stacks
It is important to think about the [stack or stacks](/project/stacks/stack-overview) that your course uses. You should avoid creating a new stack for each assignment. There are very few cases where this is needed. If you unnecessarily create new stacks for each assignment, you will be be less efficient and waste unnecessary time with stack builds.

You should look to use as few stacks as possible, ideally just one, and use that stack for all assignments. There are perfectly valid exceptions, but this is the rule.

### Single stack example
To illustrate a single stack situation, let's assume you are teaching a course "Programming in Java". You could either use our default Java stack or you start with the Java stack and then add additional tools so it has all the components you require to teach all parts of your course.

Whether you have created your own stack or used a default one, you would then point all your assignments to that one, same stack.

If, as you create more assignments in your course, you find you need to install more tools, then you should [update the stack with a new version](/project/stacks/update).

By default, when you choose a stack for your new assignment, it will point to the latest version. So if the underlying stack is updated from any location at all, then any assignment that uses that stack will automatically be set to use it. Students who are using a assignment in a course will also automatically use the latest version when it is updated.

It follows that you should be very careful when pointing to a specific version of a stack, rather than the latest version. If you do this, then you will need to update all assignments that are not set to use the latest version.


### Multiple stack example
Let's say you are teaching a course "Introduction to Programming" and it has 3 modules "Java", "Python" and "Haskell" and each module contains a good number of assignments. In this case, you could still choose the single stack approach, but you would need to install all three languages and their toolsets and then create a stack from it.

A simpler approach would be to use three separate stacks, one for each language. You set the assignments for each language to point to the appropriate language stack.

Other than that, the principles described above still apply.

### Switching stacks
It is possible to change the stack for a assignment. This can be done from either the listing or from within the IDE. However, if this change were to be needed for all assignments then you would have to repeat this for each assignment individually.

It is therefore highly recommended that you start with a stack and stick with it wherever possible.

### Stacks not owned by you
If you were to use one of Codio's default stacks then you are not able to update these yourself as you don't have permissions. However, you might want to start off with, say, the Java stack and then install new components.

In this case, you should plan this ahead of time. You would

- first create the assignment from Codio's Java stack
- install your components
- create a new stack from your assignment ([in the IDE](/project/stacks/update#stackide) or when you [publish](/courses/units/publish))
- make sure your stack is switched to that newly created stack

You now own this stack and so you can update whenever you like down the line. When you create new assignments, you would then choose this new stack.

### Use Latest Version
When you assign a stack to a assignment, it will be set by default to the **Use Latest Version**. If you view the stack settings from the IDE (**Project-Stack Settings**) or from the 3 blue dots menu, you will see that this is the default.

![Unit stack settings](/img/stacksettings.png)

Understanding what **Use Latest Version** means is important. When you work with a assignment as a course author, that assignment is actually using a fixed version. It does not automatically switch to the latest version each time a new version of a stack is created. This could be dangerous as switching a stack resets everything outside the workspace folder. If you want to update to the latest version then you need to go to the stack settings dialog and press the save button.

Where **Use Latest Version** is useful is when you assign a course module and its assignments to a course. In this case, students who have not yet started a assignment **will** get the latest version of the stack.


## Create a course
To create a new course, press the **New Course** button in the top right of the screen. You should then complete the fields in the new course screen.

![authtoken](/img/course_create.png)

### Name, Descriptions, Image & Tags
You are required to enter a name for your course. The Short Description is optional but please add something so others can easily identify it.

A **Long Description** is usually a good idea and helps other users understand the scope of your course. This field support markdown.

You can also add tags that identify the technologies used. An image icon is also suggested.

### Other settings
Please refer to the [next page](/courses/manage/course-add/) for information on how to control access to courses and modules.
## Modules
A course has to have at least one module. A module contains the individual assignments that will be assigned to students.

Modules help you organize your assignments into logical groupings. If your course only contains a few assignments then you may want only a single module. If, on the other hand, your course has a large number of assignments, then dividing them between several suitably named modules may make more organizational sense.

### Creating a module
To create a new, empty module, press the **Create New Module** button. You can also re-use a module that is located in another course as explained below.

### Name, Descriptions, Image & Tags
You are required to enter a name for your module. **Short Description** is optional but please add something so others can easily identify it.

A Long Description is usually a good idea and helps other users understand the scope of your course.

You can also add tags that identify the technologies used. An image icon can also be set.

### Adding a Module
It is possible to add a module to your course that already exists in another course. Press the **Add Module** button.

The Module browser will open for you to search for the module(s) you wish to add.

You can filter from the available options in the tabs, or search by typing into the search field, whereupon Codio will search within all Module names, descriptions and owner fields.

You can also order the list of modules by name or owner and use the **Filter by Course** drop down to view modules in other courses.

![Module Browse](/img/module_browser.png)

### Adding an assignment to a module
Please read the section [Adding assignments](/courses/units/unit-add) for details.
### Controlling access
To control access to a course and its modules, you should understand the difference between public/private and ownership. You can change the access settings by selecting a course or module and then pressing the **Edit** button in the top right.

Both courses and modules need to have their access settings set.

![Edit course](/img/courseedit.png)

### Ownership
The ownership field indicates who is able to make administrative changes. In the case of a module, it also indicates who can add, edit and remove project assignments.

- If you select **My account**, the default, then only you can make changes.
- If you select an organization, by default any teacher within your organization will be able to make changes. If you wish to restrict access to specific teachers, see [restrict teacher access](/courses/manage/restrict-access/)

If you wish to prevent access to other teachers within your organization, then you would select **My account** and would also make it private. However, if you were to leave the organization, then no-one would be able to access and manage the course content. As a result, you would change the ownership to the organization in order to ensure that others are able to continue its management.

**Important**: if you change the ownership of the course or module to an organization, then it will not longer appear in the **My Courses** list. You will find it in the **Organizations** list instead.

![Course tabs](/img/coursestab.png)

### Public and private
This field indicates who is able to view and access courses and modules. If **public**, then any student or teacher can find and view courses. If **private**, then visibility is determined by the ownership setting:

- If ownership is is set to **My account**, the default, then you can find the course or module and only you will be able to assign a module to a course.
- If ownership is set to an organization, then any teacher or student within your organization will be able to find the course. Any teacher within the organization will be able to assign a course module to a course.

### Public course and private modules and vice-versa
If you have different access settings for the course and its modules, then you should make sure you understand the effects of the ownership and public/private settings.

Generally speaking, you would set your modules and course with the same access settings. If you have a public course and private modules, then although users can find the course, it will appear as if there are no modules present if they are set to be private. If a module is private but organization owned, then they will appear normally to organization members.



## Restrict course access
By default when a course is created and set to the owned by the organisation, unless the courses menu item is hidden for your students ([click here](/dashboard/create/dash/) for more information this), they will be able to view the contents of courses and all teachers in the organisation will have access to the course and associated modules. See [controlling access](/courses/manage/course-public/) for more on this.

However, you may want to limit/restrict access to specific courses for teachers and/or students in your organisation.

To do this, select the course and then go the the Course Permissions tab

![Edit course](/img/coursepermissions.png)

By default, the courses are unrestricted but to change this to only allow specific teachers to access the course, select the bottom box and a list of all teachers in the organisation will be shown.

Simply select those teachers who you wish to be able to access the course and the associated modules and assignments.

Students will not be able to access/view the contents in this course even if courses menu item is not hidden

## Deleting courses and modules
You can delete a course or a module by selecting the item from the listing, then pressing the **Delete** button.

Deleting a course does not delete its modules. Similarly, deleting a module does not delete its assignments.

If you delete a course or module any modules and assignments that have already been assigned to a course will remain intact for the lifetime of that course.


## Adding assignments
An assignment behaves like a Codio project except it will not appear in your projects list. This makes it much easier to find your assignment as well as to chronologically arrange the assignments within each module.

You can mix book assignments and project assignments in a course module.

If you have already have a regular project that you want to load into a assignment, then the process is described below.

### Adding a new assignment
You add a new assignment by pressing the large blue **+** button. You now need to choose between

- a project assignment
- a book assignment

[Click here](/content/authoring/3ways) if you are not sure about the difference between project assignments and book assignments.

<a name="projectunit"></a>
### New project assignment
You can create a new assignment in the following ways.

- Create a brand new assignment as you would with a normal Codio project.
- Import an existing project into the assignment. See the image below and read the contents of the **Important** box. A snapshot of the selected project is taken. From that point on you will edit from the assignment, not the project.
- Import from other sources such as GitHub/BitBucket/Mercurial etc. by selecting the **Import** option.

![UnitStart](/img/unitstart.png)

<a name="createbook"></a>

### New book assignment
Creating a new book assignment involves pointing to the parts of a book that you want to map to your assignment. You will seen the following screen.

![Book Unit](/img/newbook.png)

You can now

- specify the book you want to reference. Browse to the books available to you
![Book browse](/img/selectbook.png)
- select the parts of the book you want to include in this assignment
- give the assignment a name.

![Book Mapping](/img/bookmapping.png)


With book assignments, students can look at any part of the book even when assigned a single book assignment. This is ideal for referring back to material covered previously and for general revision and can be set in the course. See [Book Visibility](/classes/classmanagement/bookvisibility)] for more information.


## Publishing
The publish process is slightly different for books and project assignments. As you can see from the screenshot below, a book assignment can be identified in the assignment listing by the book icon that appears next to the assignment name.

### Updating book assignments
Book assignments are published from the books area.

Let's say you have already published a book and created a assignment from a part of that book. If you then make changes to the book and republish the book, those published changes are not automatically reflected in the course. If you want to update the assignment, then need to press the **Update to latest version** button that appears on the right side of the assignment.

![Book update](/img/bookupdate.png)

After pressing this, the books changes will be reflected in the assignment. If you want these changes to be passed through to a course where the assignment was previously added, then please [click here](/classes/unitmanagement/upgradecourse) for details.

## Publishing project assignments

By default a project assignment is not available to others until you explicitly publish it. This ensures that you can make changes, even after publishing, without the published course content being affected.

Publishing the assignment takes a snapshot of the underlying project assignment and assigns it a new version. Once published, you can make further edits to the assignment without changes being visible in the published assignment until you publish it again.

- Select the assignment from the listing and then press **Publish**.

![publishnew](/img/publishnew.png)

- If you have previously published then you will see **Publish new version**

![versions](/img/versions.png)

### Describe changes
You should enter a brief description of the changes you made since the last publish of the assignment. You can see the version history on the  [versions screen](/courses/units/settings/).

### No stack modifications or you switched stack
If, in your project assignment, you have

- only made changes to the code workspace (the workspace is the contents of the file tree in the IDE or `/home/codio/workspace`)
- or you switched stack but did not make any stack modifications since switching,

then you should

1. Enter the changelog text, which is a description of the changes made since the last publish.
1. Press the **Stack unchanged** button.
1. Press the **Publish assignment** button when ready.

![versions](/img/stack_notmodified.png)

### Stack modifications
If you have made any changes to the project's stack then you should press the **Stack modified** button. Please be aware that changes to the stack can be made indirectly by applications as well as manual file changes. For example, if you modified a database's contents that is not configured to live in the workspace area then these count as stack changes.

![versions](/img/stack_modified.png)

You should now decide whether you want to

- create a new version of the stack used by the assignment
- create a brand new stack for this assignment.

### Stack modified : New Stack Version
Note that if the stack you are using is not owned by you or you don't have permissions to modify the stack, then you will not be able to select this option.

You should enter a description of the stack changes made and then press **Publish assignment**. The new stack version will appear in your stacks listing in the normal way.

![versions](/img/stack_newversion.png)

### Stack modified: New Stack
If you do not have permissions to create a new stack version or you want to create a new stack that this and potentially other assignments should use, then select this option.

This will create a new stack with the permissions you specify. To give access only to others within your organization, select **Private** and then select the owner organization from the drop down list below.

It will take a few minutes to prepare the stack, so please be patient. Once it is created, it will be visible your stacks listing.

You should **not** create a new stack for each assignment in your course without good reason. You should instead, create a stack and then point all other assignments that share this stack configuration to point to the new stack.

If you have differing configurations then create one single stack for a given configuration and then point assignments that use that configuration to the new stack.

![versions](/img/stack_newstack.png)

### IMPORTANT: Switching a assignment's stack
Let's say you have one or more assignments and you decide to change the stack that they point to. You can switch the stack either from within the IDE (**Project->Stack settings**) or from the assignments listing (press the 3 blue dots and select **Change stack**).

Once this has been done, you need to publish your assignment again to reflect this change. Having switched stack, you should select **Stack not modified** and then press **Publish assignment**.

## Editing an existing assignment
### Editing a book assignment
If you want to edit book assignment content, then you edit the book from the books listing, not the assignment listing. You would then republish the book after which you will see **Update to latest version** in the assignment listing.

![Book update](/img/bookupdate.png)

If you have added new content then you can also remap the assignment to the book as described on the [adding an assignment](/courses/units/unit-add#createbook) page.


### Editing a project assignment
Editing a project assignment is always done from the assignment listing.  Select the assignment to open in the IDE.

If there is a later version of the assignment that has been published, you will see the following screen and elect to open either the latest published version or the last version you edited.

![publishedversion](/img/publishedversion.png)
## Ordering assignments
You can change the order of the assignments within a module by dragging an assignment into its desired position in the list.

![Unit order before](/img/unitorder1.png)
## Settings menu
Additional actions for the assignment are available by clicking on the 3 vertical blue dots. You will get a different menu depending on whether you have a book assignment or a project assignment.

![Unit settings](/img/unitsettings.png)

For book assignments, you will not see **Change stack** or **Versions**.


### Edit settings

For project assignments, select **Edit settings** to change the assignment title, description and icon.

For book assignments, you can also remap the assignment to the book contents.


### Versions
This allows you to view the version history. You can see

- date/time when the assignment was published,
- name of the person who published the assignment,
- the name and version of the stack assigned to the assignment.

![versions](/img/versiondetails.png)


### Change stack
This option is only available for project assignments. It allows you to switch the stack used by a assignment.

If a stack is set to **Use latest version** then

- when a assignment has been assigned to a course, any student who has not yet started the assignment will use the latest version of the stack.
- the assignment itself will remain on whatever stack version was last assigned. If you want to change it to the latest created stack version then you should click the **Save Changes** button to update it.

### Delete assignment
![deletetab](/img/deletetab.png)
Select **Delete** from the above screen to delete the assignment.

![deleteunit](/img/deleteunit.png)

You are required to enter a confirmation code to proceed and you can then do one of the following

- Select **Convert content to a project** to delete the assignment and its content entirely.
- Select **Delete content** to delete the assignment and save the assignment contents to your projects list.
## Update course

If you publish new course assignment content, then this is not automatically applied to course. It has to be explicitly pulled into the course as [described here](/classes/unitmanagement/upgradecourse).

## Collaborating on project assignments
The ability for other to collaborate on course assignments is controlled from the module settings. Please note that the module permissions override the course permissions, so if a course is public and a module is private, then the assignments will be private.


![Module Edit](/img/moduleedit.png)


The rules for other users to edit a project assignment in a course are as follows.

- **Private** - only you can edit the project assignment.
- **Private but organization is the owner** - any teacher in your organization can edit.
- **Public** - only you can edit.
- **Public but organization is the owner** - any teacher in your organization can edit.


The ability to create public courses/modules can be enabled for the organization. See [Public/Private setttings](/dashboard/create/public_private) for more information.

![authtoken](/img/manage_organization/public_private.png)


If you want 2 or more people to collaborate on a project assignment, you need to understand how Codio manages this process.

The key thing you need to realize is that unless you are familiar with Git, **only one user should make changes at a time**. If User A and User B want to collaborate, then they need to inform each other when they are working on the content. If they fail to do so, then one person will have to surrender their changes later on.

Let's say User A has authored a assignment and has finished work. At this point, User A must publish the assignment for others to be able to carry on from this point.


User B now makes changes to the assignment. When done, User B should inform User A that the changes are complete and published. At this point, when User A opens the assignment for editing, a dialog will appear showing that User B has published new changes.

![publishedversion](/img/publishedversion.png)

![Book update](/img/bookupdate.png)


User A now wants User B to be able to collaborate. User A should inform User B that the assignment is ready to edit. When User B accesses the assignment, Codio will take a **snapshot** of the published assignment and User B can start work on it. In other words, User B is **not** editing User A's assignment, User B has a clone.

User B now makes changes to the assignment. When done, User B should publish the changes in the same way that User A did. User B then informs User A that the changes are complete and published. At this point, when User A opens the assignment for editing, a dialog will appear showing that User B has published new changes. A new snapshot is then taken and User A (or any other user for that matter) can editing.

The important point in this process is that any user who has made changes and wants other to see those changes should publish first.
