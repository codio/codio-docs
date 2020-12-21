

## Introduction
Codio Books lets you build a complete book, with chapters, sections and pages that can be nested to any depth to form a table of contents and associated content that mirrors a normal book structure. Parts of a book can then be mapped to assignments in courses.

A Codio book still sits on top of a Codio box so you have the same capabilities that projects and assignments have. Before we introduced books, switching assignments wasted time as a new assignment needed to load, which took several seconds. If you frequently switch assignments (for instance during student revision) this delay becomes irritating. With a book, there is no delay and the student can freely access all parts of the book irrespective of which assignment they are accessing.

### Recommendations
We strongly recommend you have a thorough understanding of the following before embarking on large scale books.

- [Content authoring](/courses/authoring/)
- [Courses](/courses/coursemanagement/), especially how [courses map to books](/courses/coursemanagement/#adding-assignments)
- [Assigning content to courses](/courses/classes/#assign-resource-modules-to-the-course)
- Limitations (see below)

### Limitations, restrictions and when not to use a book
There are cases where authoring your content in a book is not appropriate. For more information on this, please refer to [limitations and restrictions](/project/books/#limitations-and-restrictions) below.


### Courses
Rather than assign a Book to a course, you can map any sections of the Book to the usual course and module structure. So you can still divide a course into modules and assignments and assign these to a course.

### Assessments
Although it is entirely up to the book author, a book will usually contains a number of assessments. When you map a course assignment to a section of the book, any assessments that fall within that assignment are shown in the course dashboard.

You should make a decision as to when assessments should be in the book and when they are better suited to a project assignment. Generally speaking, standard assessments that are used to monitor student engagement with content belong in the book.

Questions that are assigned to a course for homework or lab assessments could also go in a book but are usually better in a course project assignment. Please refer to limitations and restrictions below for a discussion on cheating related risks to putting assessments in a book.

## Limitations and restrictions

When you map book content to a course assignment, you should be aware that certain features may not work as expected.

Because a book sits on a single Codio box, if the student is able to access the terminal window or is able to see the file tree, they can effectively access parts of the book that are outside the scope of the assignment. In many cases, this does not matter, but you should be aware of it.

Here are some specific things to be aware of.

- **Auto grade script**: in [assignment settings](/courses/classes/#autograde-method), you can specify an auto grade script to execute when the student makes the assignment as complete. You can still use this but if the script you are executing needs to be assignment specific, then you should include an argument that is passed to your script so it knows the assignment context.
- **Plagiarism** - plagiarism detection makes little sense in books. If you have are doing coding assignments, then you should use a [project assignment](/courses/coursemanagement/#adding-assignments) within a course.
- **Mark as complete**: this works as expected but, unlike course project assignments and projects, it cannot set the project to be read-only as the book project can be mapped to other assignments which will require access to the box.
- **Secure assessments**: if you want to minimize the risk of student cheating, then you should understand that students may be able to access the terminal window and access all parts of the underlying box. As a result, we would recommend that more [secure assessments](/courses/classes/#secure-scripts) are placed in project assignments rather than book based assignments. This also allows full disabling of the box by setting a project to read-only after being marked as complete.


## Creating and managing books

### Creating a new book
Creating a new book is done from the main books screen. Press the large blue **New Book** button.

You will get the same options for creating a book as for a project, so you can start from scratch or import from a project or a Git repo. You also have control over visibility as with projects and courses.

### Editing a book in the IDE
Once the book has been created, you can edit the book in the IDE by clicking on the book.

### Editing a book's settings
Modify a book's settings by clicking on the gear icon.

### Deleting a book
You can delete a book by clicking on the gear icon and then pressing the **Delete** button.

## Table of contents
The table of contents is edited using the Codio Guide authoring capability. This is the same functionality as available for authoring project and project assignment content.

Please [click here](/courses/authoring/#table-of-contents-management) for full details.
## Editing page content
The page content is edited using the Codio Guide authoring capability. This is the same functionality as available for authoring project and project assignment content.

Please [click here](/courses/authoring/#page-editing-overview) for full details.
## Publishing and the stack
It is important to understand how and why a book is published.

Until you publish a book, it behaves exactly as a project does. You can open it up and work with it but it cannot be accessed by anyone or mapped to a course until it has been published. After a book is published, you can continue to work on the book without the published version being affected.

Please note the following.

1. Publishing creates a snapshot of the book and creates a new version.
1. You can continue work on the book without affecting the published version.
1. When you map a course assignment to a book, it will only pull from a published version.

When you press the **Publish** button, the following screen will appear where you can add details of the changes made. This will then be available to see from the **versions** tab

![versions](/img/book_publish.png)




### Later book modifications
If, after publishing, you make further changes to your book then you will need to re-publish when you want those changes to be available to courses. This will not happen automatically. You will need to update the project assignment within your course to pull the published version. See  [Editing a book assignment](/courses/coursemanagement/#editing-a-book-assignment) for more information.


### Course mapping
A book cannot be assigned to a course without mapping it through a course. The advantage of this approach is that you can break your book into smaller chunks that map to lessons or lectures.

You can map the entire book through a single course assignment if you are not concerned about detailed assignment mappings.

Please refer to [Creating book based course assignments](/courses/coursemanagement/#new-book-assignment) page for details on how to do this.



## Permissions and collaboration
By default, a book is only available to you for editing purposes and only you can create courses from a Book.

You can change permissions to allow others

- to edit your book
- to create courses from your book.

To modify the permissions, goto **Books** from the dashboard. Then select the settings icon.

![Book settings](/img/booksettings.png)

### Private / Public visibility
If the book is set to **Private**, unless you override the permissions, only you can modify a book contents and create course assignments from it. Private books cannot be assigned to public courses.

If the book is set to **Public**, then any Codio user inside or outside your organization can create courses from your book but they will not be able to edit it.  The default organization setting restricts the ability to create Public books. To allow this, see [Public/Private Settings](/dashboard/organisations/#publicprivate-settings).

![Book settings page](/img/booksettingspage.png)

### Permissions and collaboration
If you want 2 or more people to collaborate on a book, you need to understand how Codio manages this process.

**It is recommended that you connect your assignments to a remote repo (GitHub/BitBucket etc)** where you can push your work. As well as giving you full versioning control it also allows you to 

- easily update assignments where you may use the same content in different courses as you can make the changes in one assignment, push to the repo and then pull in the changes to the other assignments to publish.

- collaborate with colleagues who can create their own 'project' by importing from the repo and push their changes to the repo for review before they are pulled into the course assignment and published.

If you wish to do this within Codio however, you need to give explicit permission to other users or to an organization and apply write permissions.

The permissions can be changed by selecting the **Permissions** tab on the book settings screen. You should first specify which user or organization you want to grant permissions to. You need to know the precise organization or user name and this is case sensitive. We do not support lookups as the potential for incorrect assignment is too great.

![Book permissions](/img/book-permissions.png)

You can grant the following permissions.

- **Read** : this allows the user or organization specified to create course assignments from your book.
- **Write** : this allows the user or organization to create course assignments and to edit your book. If you want to co-author/collaborate with another user on a book, then you an either follow the process described below or you can use git and a remote git repo.

It is important to understand that each user editing a book is not actually editing the same physical project. Codio uses snapshotting of the latest published version. If using the basic collaboration approach described below and not git, then you should remember that **only one user should make changes at a time**.

If User A and User B want to collaborate, then they each need to inform the other when they are working on the content. If they fail to do so, then one person will have to surrender their changes at some point.

Let's say User A has created a book and authored some content. User A now wants User B to be able to work on the content. User A should first [publish](/project/books/#publishing-and-the-stack) the book. Be aware that if User A does not publish the book, then User B will start with an empty book.

When User B accesses the book (from the **Shared with me** tab on the main books listing), Codio will take a snapshot of the published book and User B can start work on it. In other words, User B is **not** editing User A's book, User B is now working on a clone of the published book.

User B now makes changes to the book. When done, User B should publish the book and inform User A that the changes are complete and published. At this point, when User A opens the project, a dialog will appear showing that User B has published new changes. User A can now update her own version of the book from this published version. And so the cycle continues.

![Book New Version](/img/bookversion.png)

You can do this with as many users as you like, provided that only one user is making changes at a time.

## Creating course assignments
Books cannot be accessed directly by students. Once your book is [published](/project/books/#publishing-and-the-stack), you need to [map parts of it to one or more course assignments](/courses/coursemanagement/#new-book-assignment), which can then be [assigned to a course](/courses/classes/#assign-resource-modules-to-the-course).



