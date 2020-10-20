---
title: Creating Course Content


---

### Updating courses and collaboration
If you want to allow other teachers in your organization to modify your course structure and assignment content then it is important to understand how Codio manages this. Please refer to [Collaborating on project units](/courses/coursemanagement/#collaborating-on-project-assignments) for details.


### Overview


The most basic way to assign content to students is to create a project and then [assign the project to the course](/courses/classes/#assign-a-project-to-the-course). Over time, you may end up with a lot of projects in your project list. Each time you come to teach your course, you will find it harder and harder to locate the right project when you need it.



As a result, you should be familiar with the functionality offered by courses, described below, and [books](/project/books#introduction/).

A course is a very elegant way of managing and organizing your projects. A course has a very simple hierarchy.

- **Course**: the course is the top level and contains modules.
- **Module**: a module is simply a container for your main project assignments. If you have 50 project assignments in your course then you might want to put collections of assignments into distinct, suitably named modules.
- **Assignment**: an assignment is a Codio project that is some unit of teaching. It is entirely up to you how much material is covered by an assignment. Approaches include putting about a week, a lesson or a lecture's worth of material into a single assignment.

A course assignment typically takes one of two forms.

- **Tutorial**: in this case you would use the [Codio Guides](/courses/authoring/) or [Codio Books](/project/books/) tutorial authoring tools to create your tutorial content. [Click here](/courses/authoring/#project-course-assignment-or-book) for an overview of the difference.
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

- **Create a new book assignment** which maps to a part of a book that has already been created. Unlike project assignments, a book has a single Codio box to work with along with a typically large volume of content.

Please [click here](/courses/authoring/#project-course-assignment-or-book) for details on how to decide whether to use project assignments or book assignments



### First version
This describes the first time you create a new assignment.

1. **Edit your assignment**. If your assignment is a project assignment, clicking the assignment will take you into the IDE, as with a Codio project, where you can work on your project.
1. **Publish your assignment**. When you think your assignment is in good shape, it is ready to publish. A assignment is not available to the course until you publish. At this point a snapshot is taken of the assignment and it forms a part of the published course.

It is recommended that you connect your assignments to a remote repo (GitHub/BitBucket etc) where you can push your work. As well as giving you full versioning control it also allows you to 

- easily update assignments where you may use the same content in different courses as you cam make the changes in one assignment, push to the repo and then pull in the changes to the other assignemts to publish.

- collaborate with colleagues who can create their own 'project' by importing from the repo and push their changes to the repo for review before they are pulled into the course assignment and published

**Please note** the code workspace, other than the guides folder, is never updated as this can invalidate work for students who have already started the assignment. Any students who haven't started the assignment will see the updated content but for those that have already started the assignment they will not. 

To enable students who have started the unit to see the new content, the assignment can be **Reset** (see [Actions Area Settings](/courses/classes/#actions-area-settings} for more information) but be aware that any existing work they may have done will be lost.


You will iterate through the above process as you add more assignments to your course modules.


### Updates
Editing an assignment **does not affect published course content or content assigned to course**. This section describes how you can push your changes out to courses when you are ready.


1. **More edits to a assignment**. After publishing, you may decide to make further changes. These changes do not form a part of the published course assignment until you republish, so you can edit without concern for altering published content.
1. **Republish**. Having made more changes, you can publish the assignment again in order to make those changes available to the course. However, publishing does not update assignments previously assigned to a course.



## Stack planning
The following applies to project assignments rather than books. Books require less thought as a book only has one box associated with it and the book assignment will takes its stack setting from the book.

You should be familiar with the concept of [stack](/project/stacks/#what-is-a-stack) before creating content.

### Minimize the number of stacks

It is important to think about the [stack(s)](/project/stacks) that your course uses. You should avoid creating a new stack for each assignment. There are very few cases where this is needed. If you unnecessarily create new stacks for each assignment, you will be be less efficient and waste unnecessary time with stack builds/rebuilds.


You should look to use as few stacks as possible, ideally just one, and use that stack for all assignments. There are perfectly valid exceptions, but this is the rule.

### Single stack example
To illustrate a single stack situation, let's assume you are teaching a course "Programming in Java". You could either use our default Java stack or you start with the Java stack and then add additional tools so it has all the components you require to teach all parts of your course.

Whether you have created your own stack or used a default one, you would then point all your assignments to that one, same stack.


If, as you create more assignments in your course, you find you need to install more tools, then you should [update the stack with a new version](/project/stacks/#updating-a-stack-version).


By default, when you choose a stack for your new assignment, it will point to the latest version. So if the underlying stack is updated from any location at all, then any assignment that uses that stack will automatically be set to use it. Students who are using a assignment in a course will also automatically use the latest version when it is updated.

It follows that you should be very careful when pointing to a specific version of a stack, rather than the latest version. If you do this, then you will need to update all assignments that are not set to use the latest version.


### Multiple stack example
Let's say you are teaching a course "Introduction to Programming" and it has 3 modules "Java", "Python" and "Haskell" and each module contains a good number of assignments. In this case, you could still choose the single stack approach, but you would need to install all three languages and their toolsets and then create a stack from it.

A simpler approach would be to use three separate stacks, one for each language. You set the assignments for each language to point to the appropriate language stack.

Other than that, the principles described above still apply.

### Switching stacks
It is possible to change the stack for an assignment. This can be done from either the assignment listing area from within the IDE. However, if this change were to be needed for all assignments then you would have to repeat this for each assignment individually.

It is therefore highly recommended that you start with a stack and stick with it wherever possible.

### Stacks not owned by you
If you were to use one of Codio's default stacks then you are not able to update these yourself as you don't have permissions. However, you might want to start off with, say, the Java stack and then install new components.

In this case, you should plan this ahead of time. You would

- first create the assignment from Codio's Java stack
- install your components

- create a new stack from your assignment ([in the IDE](/project/stacks/#updating-from-the-ide) or from the [stacks dashboard](/project/stacks/#updating-from-the-dashboard))

- make sure your stack is switched to that newly created stack

You now own this stack and so you can update whenever you like down the line. When you create new assignments, you would then choose this new stack.

### Use Latest Version
When you assign a stack to a assignment, it will be set by default to the **Use Latest Version**. If you view the stack settings from the IDE (**Project-Stack Settings**) or from assignment settings, you will see that this is the default.

![Assignment stack settings](/img/stacksettings.png)

Understanding what **Use Latest Version** means is important. When you work with a assignment as a course author, that assignment is actually using a fixed version. It does not automatically switch to the latest version each time a new version of a stack is created. This could be dangerous as switching a stack resets everything outside the workspace folder. If you want to update to the latest version then you need to go to the stack settings dialog and press the save button.

Where **Use Latest Version** is useful is when you assign a course module and its assignments to a course. In this case, students who have not yet started a assignment **will** get the latest version of the stack.


## Create a course

1. If you are in the IDE, click the Codio icon in the top left corner to take you to the **Courses** screen. If you are in the dashboard, click on **Courses** in the left menu.

1. Click the **blue plus** sign at the top left of the page.
![authtoken](/img/manage_classes/blue_plus.png)

1. Select **Empty Course** , complete the details requested, then click **Create Course**.
![authtoken](/img/manage_classes/create_class/new-class.png)

1. Your new course will appear in your **Courses** area.

### Course Code, Name, Tags & Duration
You are required to enter a name for your course. The other fields are optional.  The **Course Code** field is used so your course can be shared with others (in other organisations) and they can create a course by entering in the code you define here.  The tags field is usually used to identify the technologies used and assist with searching courses but you can create you own tag names as you require if you wish to use for different purposes.


## Modules
A course has to have at least one module. A module contains the individual assignments that will be assigned to students.

Modules help you organize your assignments into logical groupings. If your course only contains a few assignments then you may want only a single module. If, on the other hand, your course has a large number of assignments, then dividing them between several suitably named modules may make more organizational sense.

### Creating a module
To create a new, empty module
- With the course selected, click on the Assignments tab at the top of the page. The list will be empty at this point.
- Now click the **+** button in the top left.
- Select **Empty Module** and create a new module.

### Adding a Module
It is possible to add a module to your course that already exists in another course. Press the **Copy from Existing** button.

The Module browser will open for you to search for the module(s) you wish to add. If there is a relationship already with a 'Parent' course, this will show at the top.

You can filter from the available options in the tabs, or search by typing into the search field, whereupon Codio will search within all Module names available to you.

You can also order the list of modules by name or owner and use the **Filter by Course** drop down to view modules in other courses.

![Module Browse](/img/module_browser.png)

You can also add module content using Share Codes.
To do this, first add a new module using **Add Empty Module**, give it a name (you can always rename it later if required) and then **Add Assignment**, select the **Existing** option and then the **Get by Code** tab and enter the share code for the relevant resource. The share code for Codio Resources can be found [here](/resources/Codio-Resources/)


### Adding an assignment to a module
Please read the section [Assign a project to the course](/courses/classes/#assign-a-project-to-the-course) for details.





## Course access
When a course is created all 'Teachers' in the course have admin access to the content and can edit the content


## Deleting courses and modules
You can delete a course by going to the Admin tab and clicking **Delete Course**.
You can delete a module by clicking the **Delete** button on the courses listing area

Deleting a course will delete all modules within the course. Similarly, deleting a module will delete all assignments within it. 

It is recommended that you connect your assignments to a remote repo (GitHub/BitBucket etc) so you will always be able to restore your work from the repo.



## Adding assignments
An assignment behaves like a Codio project except it will not appear in your projects list. This makes it much easier to find your assignment as well as to chronologically arrange the assignments within each module.

You can mix book assignments and project assignments in a course module.

If you have already have a regular project that you want to load into a assignment, then the process is described below.

### Adding a new assignment
You add a new assignment by pressing the large blue **+** button. You now need to choose between

- a project assignment
- a book assignment


[Click here](/courses/authoring/#project-course-assignment-or-book) if you are not sure about the difference between project assignments and book assignments.


### New project assignment
You can create a new assignment in the following ways.

- Create a brand new assignment as you would with a normal Codio project.
- Import (Copy) an existing project into the assignment. See the image below and click on the **click here** for more options where you can Import (copy) an existing project. A snapshot of the selected project is taken. From that point on you will edit from the assignment, not the project.
- Import from GitHub or a Zip file of an existing Codio project, again, by clicking on the **click here** to select this option.

![UnitStart](/img/project_create.png)


### New book assignment
Creating a new book assignment involves pointing to the parts of a book that you want to map to your assignment. You will seen the following screen.

![Book Unit](/img/newbook.png)

You can now

- specify the book you want to reference. Browse to the books available to you
![Book browse](/img/selectbook.png)
- select the parts of the book you want to include in this assignment
- give the assignment a name.

![Book Mapping](/img/bookmapping.png)

## Publishing
The publish process is slightly different for books and project assignments. 

### Updating book assignments 
Book assignments are published from the books area.

Let's say you have already published a book and created an assignment from a part of that book. If you then make changes to the book and republish the book, those published changes are not automatically reflected in the course. If you want to update the assignment, then go into **Edit** mode in the course and click on the book assignment you wish to update.

![Book update](/img/bookupdate.png)


After pressing this, the book update dialog will open:

![Book update](/img/bookupdate1.png)

Click **Use latest version** and then **Update** for the changes to be made available to your students



## Publishing project assignments

By default a project assignment is not available to others until you explicitly publish it. This ensures that you can make changes, even after publishing, without the published course content being affected.

Publishing the assignment takes a snapshot of the underlying project assignment and assigns it a new version. Once published, you can make further edits to the assignment without changes being visible in the published assignment until you publish it again.

- Select the assignment from the listing and then press **Publish**.

- If you have not previously published then you will see **DRAFT**

![versions](/img/versions.png)


### Describe changes

You should enter a brief description of the changes you made since the last publish of the assignment. You can see the version history on the  [versions screen](/courses/classes/#managing-assignments).


### Publishing options
If, in your project assignment, you have

- only made changes to the code workspace (the workspace is the contents of the file tree in the IDE or `/home/codio/workspace`

then you should


1. Press the **Publish** button when ready.
1. Enter the changelog text, which is a description of the changes made since the last publish and select the **Publish** option

![versions](/img/stack_notmodified.png)

#### Stack modifications
If you have made any changes to the project's stack then you should first press the **Stack** button where you can then change the stack or check/confirm that **Use the latest version** is selected. Please be aware that changes to the stack can be made indirectly by applications as well as manual file changes. For example, if you modified a database's contents that is not configured to live in the workspace area then these count as stack changes.

When done you should

1. Press the **Publish** button when ready.
1. Enter the changelog text, which is a description of the changes made since the last publish and select the **Publish with stack update** option

For more information on how to update/modify stacks, see [Modifying a stack](/project/stacks/#modifying-a-stack)


### IMPORTANT: Switching an assignment's stack
Let's say you have one or more assignments and you decide to change the stack that they point to. You can switch the stack either from within the IDE (**Project->Stack>settings**) or from the assignments listing (press **Stack** icon) but if you use this, when publishing the new version, select the **Publish with stack update** option.

## Editing an existing assignment
### Editing a book assignment
If you want to edit book assignment content, then you edit the book from the books listing, not the assignment listing. You would then republish the book and then in the course, publish the new version. See [Updating book assignments](/courses/coursemanagement/#updating-book-assignments) for more information. 
![Book update](/img/bookupdate.png)


If you have added new content then you can also remap the assignment to the book as described on the [adding an assignment](/courses/coursemanagement/#new-book-assignment) section.



### Editing assignments
See [Managing Assigments](/courses/classes/#managing-assignments)

Editing a project assignment is always done from the assignment listing.  Select the assignment to open in the IDE.

If there is a later version of the assignment that has been published by a colleague since you last opened it, you will see the following screen and elect to open either the latest published version or the last version you edited.

![publishedversion](/img/publishedversion.png)



## Collaborating on project assignments

**It is recommended that you connect your assignments to a remote repo (GitHub/BitBucket etc)** where you can push your work. As well as giving you full versioning control it also allows you to 

- easily update assignments where you may use the same content in different courses as you can make the changes in one assignment, push to the repo and then pull in the changes to the other assignments to publish.

- collaborate with colleagues who can create their own 'project' by importing from the repo and push their changes to the repo for review before they are pulled into the course assignment and published

**Please note** the code workspace can be updated with new files added but existing files will not be updated as this can invalidate work for students who have already started the assignment. Any students who haven't started the assignment will see the updated content but for those that have already started the assignment they will not. 

To enable students who have started the unit to see the new content, the assignment can be **Reset** (see [Actions Area Settings](/courses/classes/#actions-area-settings) for more information) but be aware that any existing work they may have done will be lost.

Other teachers in the course can then collaborate on course assignments by creating their own project in their **My Projects** area and push their changes to the remote repo for review prior to pulling into the course assignment and then publishing the new version


The module assignments can be edited by others directly if required. It is suggested that this is only considered if the changes are very simple and the assignment is not used in other courses.

The rules for other users to edit a project assignment in a course are as follows.

- **Private** - only you can edit the project assignment.
- **Private but organization is the owner** - any teacher in your organization can edit.
- **Public** - only you can edit.
- **Public but organization is the owner** - any teacher in your organization can edit.


The ability to create public courses/modules can be enabled for the organization. See [Public/Private setttings](/dashboard/organisations/#publicprivate-settings) for more information.

![authtoken](/img/manage_organization/public_private.png)


If you want 2 or more people to collaborate on a project assignment directly, you need to understand how Codio manages this process.

The key thing you need to realize is that unless you are familiar with Git, **only one user should make changes at a time**. If User A and User B want to collaborate, then they need to inform each other when they are working on the content. If they fail to do so, then one person will have to surrender their changes later on.

Let's say User A has authored a assignment and has finished work. At this point, User A must publish the assignment for others to be able to carry on from this point.


User B now makes changes to the assignment. When done, User B should inform User A that the changes are complete and published. At this point, when User A opens the assignment for editing, a dialog will appear showing that User B has published new changes.

![publishedversion](/img/publishedversion.png)

![Book update](/img/bookupdate.png)


User A now wants User B to be able to collaborate. User A should inform User B that the assignment is ready to edit. When User B accesses the assignment, Codio will take a **snapshot** of the published assignment and User B can start work on it. In other words, User B is **not** editing User A's assignment, User B has a clone.

User B now makes changes to the assignment. When done, User B should publish the changes in the same way that User A did. User B then informs User A that the changes are complete and published. At this point, when User A opens the assignment for editing, a dialog will appear showing that User B has published new changes. A new snapshot is then taken and User A (or any other user for that matter) can editing.

The important point in this process is that any user who has made changes and wants other to see those changes should publish first.
