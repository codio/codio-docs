https://github.com/codio/codio-docs/pull/85---
title: Understanding Courses

---

A course has the following properties.

- It is a grouping of students who are taught as a logical group.
- It can have one or more teachers/instructors.
- You can add content to it.
- You can instantly access student code and projects.
- You can integrate the course with any LTI enabled LMS platform such as Canvas, D2L, Moodle, Blackboard and many others. Your LMS can auto-populate courses and grade data can be fed back from Codio to the LMS.

**Video: Courses Overview**
<p><a href="https://codio.wistia.com/medias/qk7l9qi31y?wvideo=qk7l9qi31y"><img src="https://embedwistia-a.akamaihd.net/deliveries/b0b4255c1cfbc9a7ec79c65887e436a2.jpg?image_play_button_size=2x&amp;image_crop_resized=960x523&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0" width="400" height="217.5" style="width: 400px; height: 217.5px;"></a></p>

## Creating a new course
To work with the course features in Codio you will first need to set up a course for your students.

1. Sign in to Codio at www.codio.com

1. If you are in the IDE, click the Codio icon in the top left corner to take you back to the **Courses** screen. If you are in the dashboard, click on **Courses** in the left menu.

1. Click the **New Course** button at the top left of the page.

![New Course](/img/manage_classes/addcourse.png)

1. Select **Add Empty Course** , complete the details requested, then click **Create Course**.

![Add Empty Course](/img/manage_classes/create_class/new-class.png)

1. Your new course will appear in your **Courses** area.

### Creating new course from share code

You can create courses from a code other users in other organisations can share to you. A relationship between your course and those created using the share code will be established so any updates/changes you may make in your course content can be pulled in by the other users. See [working with master/child courses](/courses/classes/#working-with-masterchild-courses) below for more information

1. Select the **Add From Share Code** option

![Share Course Dash](/img/manage_classes/sharecode.png)

1. Enter the code given and complete all other details and the course will be created for you.

### Sharing your course with others

To share your course with others

1. Select the existing course, go to the **Admin** area.

1. Enable **Course share code** and a code will be generated.

![Create Share Code](/img/manage_classes/createsharecode.png)

1. Copy to your clipboard and share out as required.

1. In order that you can manage access you can disable the code and/or regenerate to create a new code and the original code can no longer be used.  

### Restricting child courses from being cloned/shared

To restrict a course that is shared/cloned from a master course from being shared/cloned further, enable **Course share code** as above and enable **Licensed**

Please note:

- Child courses created from licensed master courses cannot be shared/cloned and the content cannot be added into other courses/modules or as assignments
- The ability to enable/disable course share code is restricted in such child courses



### Cloning a Course

You can clone an existing course to create a new course in 2 ways

1. Sign in to Codio at www.codio.com

Either:
1. Click the 3 blue dot menu item shown on the main course dashboard and select **Clone Course**
![Clone Course Dash](/img/manage_classes/maincloneclass.png)

or

2. Select the existing course, go to the **Admin** area.

- Click the **Clone Course** button at the bottom of the page.
![Clone Course](/img/manage_classes/cloneclass.png)

1. Complete the details requested for the name of the new course, then click **Create Course**.

1. Your new course will appear in your **Courses** area.

Please note, students in the existing course will not be added to the new course.

#### Working with Master/Child courses

Where you have cloned a course or created using a share code, there will be a relationship between the original (Master) course content and the clone (Child) course content so that if you have need to edit/update an assignment in the master course these changes can be pulled into the child courses.

After publishing the updates from the original course, you can send notifications so that teachers (not 'read only' teachers) in the course will see a banner advising them of the available updates.

##### Updating and sending notifications to child courses
To send notifications, go to the **Admin** tab and select **Send New Notification**

![Notify Child Courses](/img/manage_classes/notifychild.png) 

where you can then enter a notification message to assist teachers in the child course to understand what changes have been made available and can be updated

![Send Notification](/img/manage_classes/sendnotification.png) 

This message can include details of all the changes made in each assignment or just be a summary. If a summary used and the teachers in the child course wish to check the changes made for individual assignments, they can **[pull](/courses/classes/#updating-and-not-sending-notifications-to-child-courses)** the assignments to review the information entered in the publish assignment changelog

The history of all notifications sent for published updates in the master course can be seen selecting the **View Sent Notification**

Where notifications have been sent, teachers will then see an icon on the course view

![Course Update List](/img/manage_classes/courseupdatelist.png) 

and when accessing the course, details of the notification changes available in the associated child course

![Course Update Banner](/img/manage_classes/courseupdates.png) 

Clicking on **Show Changes** will then show details of the assignments updated tagged with the parts of the assignment that have been updated

![Course Update Details](/img/manage_classes/detailcourseupdates.png) 

Clicking on the **?** for updated part will show information on the meaning of the tags

![Tag Meanings](/img/manage_classes/tagmeaning.png) 


Clicking on **Update History** will show the notification message sent for that update

Select the assignments you wish to update and **Apply**. A confirmation dialog will be shown for you to confirm you wish to update the assignments


##### Updating and not sending notifications to child courses

After publishing the update from the original course, go to the cloned course where (in 'edit' mode) you will see the option to Pull for the individual assignments.

![Pull](/img/manage_classes/pull.png)

Details will be shown of the update published in the original course to allow for confirmation and on acceptance the update will be pulled in to the assignment in the cloned course.

![Update](/img/manage_classes/updatedialog.png)

You can also **Pull All** to pull all updates available for each module but be aware this will not show you the details for each updated assignment. To see this information, use the individual **Pull** for the assignment.

![Pull All](/img/manage_classes/pullall.png) 

The option to pull at the module or individual level will only be shown if an update to the assignment has been published in the original course.

#### Adding new assignments from Master to Child courses

Having added and published a new assignment to a master course you can add this into child courses and allow future updates to be pulled as above.

Go to the child course, select the module and click on the **+ Add assignment** and select **Existing**

![Add assignment](/img/manage_classes/addchild.png) 

Select the master course and module and select the assignment(s) to be added to the child course.

The assignment in the child course will automatically be published.

#### Reverting to an earlier version

You can revert to earlier published versions, see [Revert to earlier versions](/courses/coursemanagement/#reverting-to-an-earlier-version)

## Searching and ordering courses
Courses are shown grouped together by their creation date with the most recently created first.

The grouping intervals are

- Sep-Dec - Autumn
- Jan-May - Spring
- Jun-Aug - Summer


### Ordering courses within their groups

Courses can be ordered by Name, Created Date, Student Count or Start Date within the groups

![CreateDate](/img/manage_classes/orderclass.png)


### Searching

If you have a large number of courses, you can also search by Name, Created Date, Student Count or Start Date. Select the appropriate option and simply start typing, whereupon Codio will search within all course names and filter your list accordingly.
![Name](/img/manage_classes/nameclass.png)

### Add as a Tab

You can then 'Add as a Tab' to save the search parameters and in future quickly access them by clicking on the tab that will be created for you.

### Archiving Courses
To help manage the number of courses visible to teachers they can be archived so they no longer show on the active screen for teachers and in the students dashboard the course will show as archived and their assignments will be read-only. Go to the 3 blue dot menu and select 'Archive Course'. You will then be prompted to confirm your action by typing in a phrase 'make-read-only'

Archiving a course does not effect students being able to see their grades/feedback but they will not be able to continue working on assignments.  They are not deleted and can be unarchived at any time in the future if they are required either by clicking on the course in the archived tab or from the 3 blue dot menu and selecting 'Unarchive Course'

## Adding teachers to a course
Your course may be taught by more than one teacher. If this is the case, you can add another teacher to your Codio course in the following way:


1. From the **Courses** area, click on your course to open it.


1. Click on the **Admin** tab, centre right near the top.

    ![CourseAdmin](/img/manage_classes/adding_teachers/admin_tab.png)

1. Find the **Teachers** area on the left, and then click **Edit**.

    ![EditTeacher](/img/manage_classes/adding_teachers/edit_teachers.png)

1. Click **Add Teacher**

    ![Add Teacher](/img/manage_classes/adding_teachers/add_teacher.png)

1. Search for the teacher you want to add, then click done.

    ![Search Teacher](/img/manage_classes/adding_teachers/search_teacher.png)
    
    
1. The teacher should then appear in your teacher list for that course. If you wish the teachers to be restricted to only viewing the course but not to be able to add/edit/change the course content, you can do so checking **Add this teacher as read-only** option. If needed to be changed later, this can be done toggling the **Read Only** switch. With this enabled, these teachers will not be able to switch into **Edit** mode.

    ![Course Read Only Teacher](/img/manage_classes/adding_teachers/coursereadonly.png)
    
Click **Done** to save your changes.

  
1. If the teacher is not a member of your Organization, you can send them an invitation email.
    ![Invite Teacher](/img/manage_classes/adding_teachers/inviteteacher.png)

1. An email will be sent to your colleague containing a link where they can sign up for a Codio account and on completion they will be added into your organization and course automatically. If you wish the teachers to be restricted to only viewing the course but not to be able to add/edit/change the course content, you can do so checking **Add this teacher as read-only** option. If needed to be changed later, this can be done toggling the **Read Only** switch. With this enabled, these teachers will not be able to switch into **Edit** mode as above.

### Teaching Assistants

Teaching assistants can be invited into courses by sending then the invitation email and they will then be able to switch between being a teacher and student. When they are in teacher mode they will see all the courses in which they are set as a teacher and when in student mode will see all the courses in which they are set as a student. 


### Enabling teachers to be student in a course

If a teacher wishes to be a student in a course that they are already a teacher in, this can be done by using the **Student Invite URL** that can be found on the course admin tab. Enter that into the browser and it will add them into that course as a student. 


## Add students to a course

**Video: Adding Student and Test Students**

<p><a href="https://codio.wistia.com/medias/zebku9t15m?wvideo=zebku9t15m"><img src="https://embed-fastly.wistia.com/deliveries/a804c551a6f6ec0259517365ce1f55575798654f.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p>


You can add students to your organization and your course easily by giving each student a unique two-word phrase called a token or by giving them in Student Invite URL.  A student will enter the token and will automatically be added to the your organization and the correct course as they complete the process to create a Codio account.  To do this follow the steps below:

1. From the **Courses** area, click on your course to open it.

1. Click on the **Students** tab, top centre of your screen.

![Students Tab](/img/manage_classes/students_tab.png)

1. Click on the **Add a student** button.


1. You can then send the 2 word token to your students or send them the Invite URL to join the course or you can add the Test students to your course. We recommend you use the **Invite URL** to avoid students going through the process to create a new organisation where they may click on the **Free Trial** button in error. There maybe a delay in us being able to get back to them to advise them of the correct steps to take but if you use the Invite URL, they should be able to get started a lot quicker.

![Add Students](/img/manage_classes/addstudents.png)

1. If using the token then ask them to go to [https://codio.com/p/join-class](https://codio.com/p/join-class) or select the **Join Course** button on our main website. They should enter the token when requested and proceed to register for a Codio account.

1. If using the URL, the students can just click that and proceed as above.

1. To view the students in your course, select the course and the **Students** tab once again. You will see a list of students who have successfully completed the sign-up process.

**Please note:** If your course is LTI enabled, students cannot be added this way to avoid them having duplicate accounts with different registered email addresses. They do so by logging into the LMS and when accessing an assignment an account will be created for them. See [Single sign-in and account creation]{/courses/lti1_0/#single-sign-in-and-account-creation).

## Change student passwords
You can change a student's password in the following way:

1. From the **Courses** area, click on your course to open it.


1. Click on the **Students** tab, top centre of your screen.

![authtoken](/img/manage_classes/students_tab.png)

1. You will see all students in your course displayed on this screen. Find the student whose password needs to be changed and click on the blue triple dot icon to the right of their name. Choose **Change student's password** and follow the steps to reset.
## Remove a student from a course
1. From the **Courses** area, click on your course to open it.


1. Click on the **Students** tab, top centre of your screen.

![authtoken](/img/manage_classes/students_tab.png)

1. You will see all students in your course displayed on this screen. Find the student that you want to remove from the course and click on the blue triple dot icon to the right of their name. Choose **Remove student** to take them out of the course. (Note: this does not remove your student entirely from your organization - if you wish to do this, see [Remove Members](/dashboard/organisations/#remove-members))

![authtoken](/img/manage_classes/remove_student.png)


## Deleting a course
A course can be deleted by course teachers and organization owners. All the course data can also be exported. See [Export course data](/courses/classes/#exporting-course-data) for more information

- Select the course, go to the **Admin** area and then press the **Delete Course** button.

![Course delete](/img/class_delete.png)

- You can delete just the course or you can also delete the course AND remove the students from your organization as well. If you select the option to **Delete the Course and Students** and any of the students in this course are also members in other courses, they will not show in the list of students. They will not be removed from the organization or from other courses they are also members of. The option **Delete Course Only** will just delete the course but not remove any students.

![Delete course confirmation](/img/deleteclass.png)

- [Organization owners](/dashboard/organisations/#administrator-role) are able to view a list of any members that are no longer members of any courses and remove any users from the organization. See [View organization members](/dashboard/organisations/#view-organization-members) for more information.
## Exporting course data
### Course Data
Course data (including students workspaces) can be exported. We would recommend the data is exported before you [Delete a Course](/courses/classes/#deleting-a-course)

- Select the course, go to the **Admin** area and then press the **Course Data** button.

![Course Export](/img/class_export.png)

- All the data from the course will be compiled into a zip file in the background and when ready an email will be sent to you with a link for you to download.

- The link will be active for 7 days and after this time the zip file will be removed

- You can also access any active files to download (and generate a new export if required) by clicking on the **Course Data** button

![Course Export Links](/img/class_exportlinks.png)

Individual assignments data can also be exported separately if required. See [managing assignments](/courses/classes/#managing-assignments) for more details

If your course is LTI enabled you can also download all the unit LTI intergration URL's in a csv file. See [Exporting LTI settings](/courses/lti1_0/#exporting-lti-settings) for more information.


### User Access Data
Use this to download a CSV of user access to assignments in the course. Details include

- Username
- Users registered email address
- First name
- Last name
- Date/time when user logged in
- Access type (Log In, Log Out, Project Open, Project Close)
- Assignment name (n.b Book based assignments will report the name of the book)
- Role in course (ie Teacher/Student)
- Project path
- IP address (IP address associated with login session)


- Select the course, go to the **Admin** area and then press the **Export User Access Data** button.

![course Export](/img/user_access_export.png)

Collection and storage of this data will be retained for maximum of 6 months.

### Autograde Notification Failure

Where autograde scripts are implemented, Codio can send email notifications of such failures to the teachers in the course.
By default, all teachers in the course will receive them but you can change this to either:

- **Off** - no notification emails will be sent
- **Teachers** - all teachers in the course will receive the notification email (default)
- **Custom** - where you can enter specific email addresses to receive the notifications (one entry per line)

![Autograde_Notification_Emails](/img/notificationemails.png)

### LTI Settings
For more information see [Exporting LTI settings](/courses/lti1_0/#exporting-lti-settings)

### Working with student workspaces

If in the future you have need to review any students workspace, these can be imported back into your Codio account.
Simply 'zip' up the folder and you can then import the project into your account. See [creating and importing a project](/project/projects/#creating-and-importing-a-project) for more information.

Please note, the stack used in the original workspace is not included in the exported workspace so if you need to 'run' the project you should select the appropriate stack when importing the project or by switching the stack, either from the gear icon in the main projects listing or by going to **Project->Stack->Settings** in the project



## Course contact url
Contact URL's can be set at the course level so if you have specific areas/forums for your courses for students to raise questions, you can set the contact URL's there and it will override the [organisation contact url](/dashboard/organisations/#organization-contact-url) if set. You can set as many options as you require and also define the default option that will be checked automatically for the students.

Students will then be shown all the options in addition to contact Codio directly if they have a problem accessing the Codio platform, or loading a assignment.

![Student options](/img/manage_organization/studentoptions.png)

- Select the course, go to the **Admin** area and **Edit Details** where you can then enter the text and URL's to direct students to when they use any of the Contact us options.

![Course contact url](/img/classcontacturl.png)

**N.B. "Teacher" accounts will not be effected by this setting and they will still be able to contact Codio in the usual manner. See [Support](/dashboard/account/#contact-us) for more on this**

## LMS shared feedback
If your organisation uses an LMS, when grades are released a URL is passed to the LMS grading area where students/teachers can access the grading information for the assignment.

By default, only the course teachers and the individual student can access the grading preview but by enabling the LMS shared feedback option,


![LMS shared feedback](/img/lmssharedfeedback.png)

this will pass a different URL back to your LMS system where anyone who knows the URL can access the students grading information
## Grading rubric templates
The Grading Rubric feature provides a two dimensional grid that provides grading guidance for manually assessing a coding project.

![rubric example](/img/class_administration/grading/template-example.png)

### Grading Rubric templates
You will only have access to this feature if you are a member of the [owners group](/dashboard/organisations/#administrator-role) or a teacher. To find the grading templates screen, click on your user name from the Codio dashboard and then select your organization name.

You should see a **Grading Templates** tab item. There will be fewer tabs visible if you are not an organization owner.

![rubric setup](/img/class_administration/grading/templates.png)

Click the **New** button in the to right to create a new template. You should then add rows and columns.

- **Rows** : a row addresses a single assessment criterion. Each row has a weighting % value that you should supply. All rows must add up to 100%.

- **Columns** : each column contains a score that you can freely assign. Typically, you would have a 0 value in the first column that corresponds to a complete failure to address the criterion. The remaining columns contain a range of values that you choose with the right most column being the score for fully meeting the assessment criterion. Please read the following paragraph before choosing column values.

### Calculation of scores
When you are grading student code, the grading rubric will appear and is clickable. Points are awarded according to where you click. Codio will then weight the scores according to the weightings that were provided for each row.

A final score is calculated based on your selections and is re-based to the maximum column value. You should be aware of this when choosing your column values. If you wanted your scores to calculate directly to percentages then you should choose a maximum value of 100 with other column values distributed between 0 and 100.


### Applying a grading template to an assignment
To use a grading template you should select the course so you see the full assignment listing. Go to the **Edit** tab, select **Settings** 

![asignmentsettings](/img/class_administration/asignmentsettings.png)

and scroll down to the **Grading Weights** from the list, select [Teachers Grading](/courses/classes/#teachers-grading), enable **Rubrics** and choose the grading template from the list. If there are no templates set up, follow the link to the organisation area to create a new template.

![Grading Weights](/img/gradingweights.png)

See [Grade weights](/courses/classes/#grade-weights) for more information on grading weights

### Grading student work
You perform the actual grading from the course. [Teachers Grading](/courses/classes/#teachers-grading) needs to be enabled before teachers can grade. See [the grading process](/courses/grading/#the-grading-process) for more information.

Select an assignment to grade so you see the students listed.

![grading with rubric](/img/class_administration/grading/classroom.png)

You can then grade in the usual two ways.

- either from the student course. With an assignment selected from the course, you click the grading box for the student and then the grading dialog appears. Press edit and click within the grading field and the template appears.
- or from with a student's code, select the **Education->Grading** menu item to bring up the same grading dialog.

You can then click within the template to assign a score for each criterion. Large cells are partially collapsed but will maximize when you click within the row. The score is calculated as you click.

If you have enabled a [grading rubric template](/courses/classes/#grading-rubric-templates), clicking in the 'grade' field will pop up the rubric

It is important that you click the Apply button to save the score correctly.

#### Anonymous Grading

Anonymous grading can be set for the course so that students will not see the names of the teachers who graded their work.

The teacher names are not shown for the grades and code comments with the setting:

- in the shared feedback,
- in the project and dashboard for the user who started the graded assignment, regardless of their role. 

These users see their own names for their comments.

To enable this go to the **Admin** tab for the course, **Edit Details**, enable **Anonymous Grading** and **Save** for the changes to be applied

![Anonymous Grading](/img/class_administration/grading/anongrading.png)

## Gigaboxes
A Gigabox is a box that has a higher memory allocation than the standard Codio boxes. The default memory allocation is 512MB, which is fine for most applications.

If you need your students to have more memory then we offer 1GB, 2GB, 8GB,16GB and GPU (for GPU-accelerated instances) boxes. These need to be purchased separately and you can add any number of either box size to your organization. You will need to specify the Gigabox size and then each student accessing the assignment will have a Gigabox for that assignment. 

You can set the required Gigabox in your project or assignment in the course module and this setting will be automatically applied to the assignments as you add the module into a course. If students have already started the assignment, the gigabox settings will be applied to their assignment when they next run the assignment.

You should be aware that if you do not have enough Gigaboxes in your organization then they will be allocated on a first come, first served basis. Students who access the assignment after your Gigabox limit has been reached will see a warning.

An organization owner can see the status of the Gigabox count in the organization settings screen.


## Assign a project to the course

In Codio, a teaching assignment is a project that has been assigned to a course. The scope of an assignment is entirely up to you but it could be a project assignment that a course works on. It could also be some tutorial content built using Guides. We generally recommend that it relates reasonably closely to a lesson or two. But if you prefer and it suits your structure better then you can assign as much or as little content to a Unit as you like.
 
 There are two ways you can assign an assessment to a course.
 
### Assign a project
The simplest and quickest thing you can do is to assign one of your projects to a course. Once assigned, we refer to it as an assessment but the assessment's source is simply a project.

- With the course selected, click on the Assessment tab at the top of the page. The list will be empty at this point.
- Now click the **+** button in the top left.
- Select **Empty Module** and create a new module.
- When created click **Add Assignment** and then select **Project Based**
- From here you can either start creating a new project or import projects in.
- To import an existing project see: 

![](/img/import.png)

- Then select **Copy Project** and your project will show. If you have other projects in your **My Projects** area you can browse to select one of them.
- At this point you can set the name of the assignment (by default it will be the name of your project with 'copy' appended) and add a description if you wish.
- When ready, click the **Create** button and the assignment will be added to the course module.
- To create a new assignment, select your starting point (the stack you wish to start from) and you can create your assignment. For more information on authoring your content, strategies etc, see [creating course content](/courses/coursemanagement)
- For the assignments to be visible to your students, you need to **Publish** the assignment. 
- To publish your assignment, either press the **Publish** button visible in the assignment or go to **Education->Publish Assignment**

![](/img/publish.png)

- Any changes you make in future to assignments will not be visible to students until you publish again. Details of previously published versions is available in the log area.

At this point, we take a snapshot of your source project, ready for the students to clone when they start the assignment. Any changes you make to the source project will not be reflected automatically in the student assignment.

Once assigned to the course, each student will be able to access the assignment from their dashboard. Go to the **Students** tab and login as one of the test students. Make sure you have the correct course and module selected form the dropdowns. You will now see the assignment in the list. If you don't, make sure the module dropdown has the correct module name selected.  You can then switch back to your teacher account.
### Assign existing modules to the course
You can assign existing course modules and all of its assignments to your course with a single action.

To assign an existing course module, follow the steps below:

1. From the **Courses** screen, click on your course to open it.

1. Click on the **New Module** button, and choose **Add Copy from Existing**.

![Add Copy](/img/manage_classes/addcopy.png)

1. Choose the course you want to copy the content from and select the modules you wish and click **Select**

1. The module will appear in your course.

To add Codio resources to your courses see [Creating from Resources](/resources/Codio-Resources)

## Removing course module from a course

You can remove course modules from a course selecting the **Delete** button

![delete module](/img/manage_classes/deletemodule.png)

You can also remove individual assignments from a module, clicking the **Delete** button for that assignment

![deleteassignment](/img/manage_classes/deleteassignment.png)

**Warning**
Deleting a module or assignment from your course also removes all student data for all the assignments in the module (including assessment data and results) and cannot be restored so you may wish to [Download CSV](/courses/grading/#download-csv-summary) before removing the module or assignment.

## Updating courses 

### Updating assignment content

It is recommended that you connect your assignments to a remote repo (GitHub/BitBucket etc) where you can push your work. As well as giving you full versioning control it also allows you to 

- easily update assignments where you may use the same content in different courses as you can make the changes in one assignment, push to the repo and then pull in the changes to the other assignments to publish. Where you have courses that do not have a relationship (see [Working with Master/Child courses](/courses/classes/#working-with-masterchild-courses)) this will allow you to easily update all courses where an assignment has been updated in one course.

- collaborate with colleagues who can create their own 'project' by importing from the repo and push their changes to the repo for review before they are pulled into the course assignment and published

**Please note** the code workspace can be updated with new files added but existing files will not be updated as this can invalidate work for students who have already started the assignment. Any students who haven't started the assignment will see the updated content but for those that have already started the assignment they will not. 

To enable students who have started the unit to see the new content, the assignment can be **Reset** (see [Actions Area Settings](/courses/classes/#actions-area-settings) for more information) but be aware that any existing work they may have done will be lost.


### Updating Stack 
If changes to the stack used in the assignment are required, when completed (and tested) remember to update your stack before publishing. Either create a new version of the stack if you have permissions or create a new stack. See [Modifying a stack](/project/stacks/#modifying-a-stack) for more information.


Most assessment changes can be safely upgraded but if you have altered the structure of a question (for example multiple choice changed from single response to multiple response) then student response data can be invalidated.

Any changes to guides content can be applied. You should be careful about making major structural changes as students who have already started the assignment could be confused. The code workspace folder will not be impacted, so any student work in this folder will not be impacted.


## Test students
Codio automatically creates 3 test students for you. This allows instructors to view the student experience when assignments are assigned to courses even if your course is integrated with an LMS

1.  They can be seen in the members section. If there are not 3 student listed then you can regenerate them from this screen.

![Create Organization](/img/class_administration/createanorganization/org_teams.png)

1.  You can log in as the student here by clicking the **Login as** button:

![Student login](/img/class_administration/createanorganization/studentlogin.png)

1. Or you can also log in as the student within a course as well:

![Student course login](/img/class_administration/createanorganization/classteststudents.png)

1.  You can switch back to teacher mode by clicking **Switch back to teacher account**.

![Swtich Teacher](/img/class_administration/createanorganization/test-student-view.png)


## Excluding Files

Files/folders may need to be excluded from students assignments. Such files may be
unused resources/logs and other files used when testing the assignment prior to publishing.

This can be handled by using `.unitignore` file in the source project and when published to a course, these files/folders will not be available to the students.

Enter on a new line the file/folders to be excluded defining them relative to the location of the `.unitignore` file and defining folders with `/`

For example if the `.unitignore` file is located in the project workspace and you wish to exclude

- `testing` & `node_modules` folder
- the file `checkscore.js` in the `views` folder
- the files `app.js` and `README.md`

the `.codioignore` file will be

```
/testing
/node_modules
/views/checkscore.js
app.js
README.md
```

## Managing Assignments

On the module assignment screen you can manage the following settings


![assignmentscreen](/img/class_administration/modulesettings.png)

1. Change the name of the module
2. Change the name of the assignment
3. View the version history of the assignment publications, This allows you to view the version history. You can see
    - date/time when the assignment was published,
    - name of the person who published the assignment,
    - the name and version of the stack assigned to the assignment.
![versions](/img/versiondetails.png)
4. Delete the individual assignment from the module. You are required to enter a confirmation code to proceed and you can then do one of the following
    - Select **Convert content to a project** to delete the assignment and save the assignment contents to your projects list.
    - Select **Delete content** to delete the assignment and its content entirely.
5. Delete the entire module. You are required to enter a confirmation code to proceed
6. Reorder the modules in the course. 
7. Duplicate the assignment 

You can also change the order of the assignments within a module by dragging an assignment into its desired position in the list.

**Video: Rearranging and Deleting Assignments**

<p><a href="https://codio.wistia.com/medias/xmubhjvxdd?wvideo=xmubhjvxdd"><img src="https://embedwistia-a.akamaihd.net/deliveries/3058be9b2705dc8a7fc41d7939157010.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p>

When on the **Edit** tab

![asignmentedit](/img/class_administration/editassignment.png)

you can:

- [Pin](/courses/classes/#pinunpin-units) the assignment
- Amend the [Unit Duration](/courses/classes/#unit-duration) of the assignment
- See at a glance how many students have started and completed the assignment
- [Release the grades](/courses/grading/#releasing-grades)
- View Insights for the assignment
- Access the [assignment settings](/courses/classes/#assignment-settings)

From the 3 blue dot menu area you can:

- Run the [Plagiarism Checker](/courses/plagiarism/)
- Download CSV with student grade data for the assignment
- Export assignment data. This allows you to export all the data for the assignment, including the students workspaces. All the data from the course will be compiled into a zip file in the background and when ready an email will be sent to you with a link for you to download. The link will be active for 7 days and after this time the zip file will be removed. All the data from all the courses/modules/assignments in the course can also be exported. 

### Assignment Settings

Click on the settings icon to view the assignment settings
![asignmentsettings](/img/class_administration/asignmentsettings.png)


#### Assignment Settings
Available from the **Settings** area.

![Unit actions](/img/unitactions.png)

#### Pin/unpin units
This allows you to pin or unpin an assignment. Pinning an assignment ensures that the assignment is shown in a large box at the top of the student dashboard. You would typically pin an assignment if this is the assignment you are currently teaching. When you have finished teaching it, you would unpin it. You should not have more than four assignments pinned.

![Pinned](/img/pinned.png)

#### Disable/enable assignment
You can enable or disable assignments that have been assigned to a course. This is useful when your students are working in controlled assessment conditions and you only want them to have access to their work within a prescribed timeframe.
For book based assignments, you should be aware that if another assignment gives access to the book then students can access the book. and if the student is able to access the terminal window or see the file tree then access to areas that you intend to be disabled cannot be guaranteed. For project assignments and normal projects, preventing access can be guaranteed.

#### Visibility on completed
You can specify the students ability to access the assignment when completed. **Not available for book based assignments**

- 'Read Only with Resubmit' will allow students access the assignment in read only mode, but also to change the status of their assignment from completed to not completed regain full access and re-submit their work again. Any assessments that are not limited to 'one attempt only' can also be submitted again.
- 'Read-Only' will allow students to access their assignment but not make any changes.
- 'No Access' will not allow the students to access their assignment.

#### Visibility on disabled
You can specify the students ability to access the assignment when disabled.  **Not available for book based assignments**

- 'Read-Only' will allow students to access their assignment but not make any changes.
- 'No Access' will not allow the students to access their assignment.



#### Disable Mark as Completed
Disabling will not allow students to mark the assignment as completed. If assignments in your course are of a ‘playground’ type where you allow students to experiment with their code, this can be useful to disable to avoid them completing the assignment in error and then having to ask the teacher/instructor to change the status back so they can continue working.
If your assignment contains guides content, you should also disable the option to show Mark as Completed button in guides

#### Unit duration
You can specify a start and a stop date and time for an assignment. The assignment will be disabled prior to the start date at which point it becomes available to students in their dashboard.

**Video: Setting Due Dates and Late Work Penalties** 

<p><a href="https://codio.wistia.com/medias/vm8r1lte74?wvideo=vm8r1lte74"><img src="https://embed-fastly.wistia.com/deliveries/25c4df6b8be34c465c9f796f54d601ca78e49fed.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p>


Once the stop date and time is reached you can set the assignment to be marked as complete and/or disabled. If you elect to disable access, then depending on your [disabled assignment settings](/courses/classes/#disableenable-assignment) students will either be refused all access or can have read-only access to the assignment.

Please note, that selecting mark as complete will not stop students who have not started the assignment from being able to access the assignment after the stop date/time has been reached. If you wish to manage this, look at using the disable assignment and mark as complete option.

For book based assignments, you should read the caveats mentioned in the **Disable/enable assignment** section above.

![authtoken](/img/manage_classes/unitduration.png)

For more information on using **Mark as complete** please [click here](/courses/assessments/#mark-as-complete).

#### Penalties

If applying penalties for late submission it is recommended that you set the end date/time for the assignment to the last date/time of your penalties.
You can set the penalty date/time after the assignment end date/time but for students to then be able to work you will need to change the individual students assignment status from [Completed](/courses/classes/#actions-area-settings) and also adjust the [deadline](/courses/classes/#adjustdeadline) for each of them.

**Time Zones**
The time zone is taken automatically from your browser, so please check your time settings are correct.

##### **Set assignment penalties**
You can specify penalties in the event that students do not complete the assignment within agreed timescales. Incremental penalties can be applied if required.


![penalties](/img/penalties.png)

Each row in the table will contain the following fields :

- Number (auto-incremental)
- Date
- Time
- Penalty % (The % of the total score for the assignment to be deducted as a penalty)
- Message (If the message field is not specified, then a default message will be generated - see below)

##### **Default Messages:**

1: If a student opens a project after deadline or the student is working in the assignment when deadline is reached

```Deadline X (the table row number) has been reached. This deadline carries a penalty of Y%. You can review your answers with no penalty. However, if you decide to change any answers by pressing the Modify button beneath a question, a Y% penalty deduction will be applied to your overall results. Once a modify button has been pressed once, the penalty deduction will be applied and you will be free to modify as many questions as you like with no additional penalty```

2: If a student presses a Modify button past a deadline

```Deadline X (the table row number) has been reached. This deadline carries a penalty of Y%. If you proceed, a Y% penalty deduction will be applied to your overall results. You will then be able to modify as many questions as you like with no additional penalty```

3: Final deadline (assignment end date)

Once the final deadline hits (if one is set), the assignment will be forced to read-only and then following message will be displayed to the student :

```You have exceeded the final deadline. You are no longer able to make changes to your answers. You are free to review your answers.```

##### **Teacher/Instructors Dashboard:**

**Penalty indicator:** If a penalty was applied then the grade field will have a light red background. This should be the case even if no grade has been calculated yet. Hover above the field to see the penalty details (#, date/time, penalty %).
![dashboard penalty](/img/penaltydashboard.png)
**Final grade field:** this field will show the final graded score less any penalty deduction. If the field is overwritten by the teacher/instructor, then the penalty deduction will not be applied.

<a name="adjustdeadline"></a>

##### **Adjusting deadline for individual students**

The set deadline(s) can be adjusted forward by a number of days if required for individual students.

Select the assignment from the course assignments list and click on the 3 blue vertical dots and select 'Adjust deadline'

![penalties](/img/penaltydeadline.png)

You can then adjust the deadline forward by as many days/hours/minutes as you require.
If a deadline is already set, you can remove it

![penalties](/img/deadlineadjust.png)

When applied, the adjustment will then show next to the grade field in the teacher/instructors dashboard. The deadline in the image below was adjusted by 4 days

![penalties](/img/adjusted.png)

### Exam Proctoring

Where you can enable various options to help support running an assignment in exam conditions

![examproctoring](/img/examproctoring.png)

- **Time Limit** - when enabled assignments will be marked as complete after the indicated amount of time has passed since the student started the assignment or the End Time of the assignment is reached, whichever is first

- **Shuffle Question Order** - when enabled, each student will receive the pages of the assignment in a random order

- **Forward Only Navigation** - When enabled, navigation buttons and menus that allow students to re-visit questions will be hidden so students can only go forward through the pages. If any assessments on a page are unanswered, a pop-up dialogue will encourage students to review the assessment on the current page before proceeding to the next page.

![Forward Only](/img/forwardonly.png)

- **Single Login** - Once a student has started this assignment, until they mark it as complete, all other account login attempts will be blocked. 

    As students start the assignment, they will be advised that it is restricted to single login and to ensure

    1. They have closed other tabs or browsers with Codio open
    1. They have a stable internet connection
    1. They have enough power in their device
    1. They have plenty of time to complete the assignment


    If students attempt to access the assignment from a different IP address or browser, they will be restricted and advised to contact their course instructor/professor for assistance. 

    If students try to logout of Codio before the assessment is fully completed, they will be advised if they continue they will not be able to access it again. 

    Instructor/Professors will be able to release the lock for the individual students if they feel it is appropriate. Either go to the students tab in the course, find the student and go to the 3 blue dot menu where you will see the option to release the lock or when in the assignment, on the student tab there, also on the 3 dot blue menu

### Grade Weights
Where you can enable/disable Teachers Grading, Assessments Grading, Script Grading, set the grading rubric to use for the assignment and manage the weighting for all/any grade options you have enabled.


![Grading Weights](/img/gradingweights.png)

**Video: Combining Grading Sources**

<p><a href="https://codio.wistia.com/medias/5xp528jt6x?wvideo=5xp528jt6x"><img src="https://embed-fastly.wistia.com/deliveries/87b426566dfe4e3013c49403a2f5a686.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p>


These are relative weightings against all 3 grade options. 

You can set any number for these. For example, if
the teachers grading has weight 2 and assessments grading has 1, that means the final grade will be calculated like `(teachersgrading_points * 2 + assessmentgrading_points * 1) /3`. 

If you have only one option enabled 100% of the points of the enabled grading will go to the final grade.

#### Teachers Grading

Where you can set a [Grading Rubric Template](/courses/classes/#grading-rubric-templates) to use with an assignment and set the weighting for this.

#### Assessments Grading

If your assignment includes [assessments](/courses/assessments/) this will be enabled by default. If you do not wish the results of the assessments to be included in the grading you can disable this.

You can also set the weighting for this. 

#### Script Grading
This allows you to specify an auto-grade script that should run when the assignment is marked as complete. The default setting ensures that any grades generated from auto-graded assessments and grades from free text assessments are automatically transferred into the grading field.

You can also set the weighting for this.


An assignment is marked as complete in any of the following ways

1. Students mark the assignment as complete from their dashboard.
1. The teacher can also mark the assignment as complete for a student from the Course dashboard with the assignment selected.
1. The teacher can mark all assignments as complete for all students by pressing the **Actions** button. This button appears on the assignment screen.
1. If you are using the **Assignment Duration** feature, all student assignments are marked as complete as soon as the assignment duration expiry date and time is reached.


#### Running an auto-grade script
To populate the grading field, you write your own custom script that evaluates the student code. This script can then transfer the grading value into the grading field.

If you are using an LMS platform with Codio then be sure to write a percentage value into this field to maintain compatibility with LMS gradebooks. This grading field is then transferred into your LMS gradebook once you [release the grades](/courses/grading/#releasing-grades).


<a name="securescripts"></a>
#### Secure scripts
If you want your scripts to run securely such that the student has no way of either viewing the script or viewing other files that might contain secure data then you should place those scripts and files in the `.guides/secure` folder. Codio ensures that only the original project author is able to access this folder but when it is assigned to Students as an assignment, it is not accessible in any way and the script runs in an ephemeral container isolated from the students assignment.


#### Timeout
Your script must execute within 3 minutes or a timeout error will occur.

#### Accessing authored content assessment results
You are able to get scores attained by students in authored content based autograded assessments. This data is in JSON format and can be accessed from the `CODIO_AUTOGRADE_ENV` environment variable. Below is an example.

```
{
  "assessments": {
    "stats": {
      "total": 2,
      "answered": 2,
      "correct": 2,
      "totalPoints": 12,
      "points": 8
    },
    "info": [{
      "name": "Test 1",
      "points": 5,
      "answer": {
        "correct": true,
        "points": 5
      }
    }, {
      "name": "Test 2",
      "points": 7,
      "answer": {
        "correct": true,
        "points": 3
      }
    }]
  },
  "completedDate": "2017-02-07T09:47:54.471Z"
}
```

You can get both summary data and data for each assessment individually.


<a name="regrading"></a>
#### Regrading for an individual student
If students set their work to 'complete' such that the custom script step is triggered then you can regrade the work by resetting the complete switch and then setting it again, which re-triggers the custom script.

#### Regrading all students
From the **Actions** area of the assignment, you can regrade all students that have already been auto-graded by pressing the **Regrade All** button. This is useful if you have found a bug in your grading script. If you follow (or use) the code sample shown at the bottom of this page you can see how the original student submission date is handled.

#### Testing and debugging your grading scripts
**IMPORTANT**: please read this section carefully.

We provide a way of testing autograding scripts when authoring your project. This is described below. You should make use of this before publishing your project to a course.

You should be aware that once the assignment has been published to the course, any changes made to the assignment's source project are not automatically reflected in the published assignment. As a result, if you include your main grading logic within the project itself and if that script has bugs, you will not be able to fix the bugs without deleting the assignment, fixing the bug and finally republishing the assignment. All student data will be lost as a result. However, if all your scripts are stored in `.guides/secure` folder, you can update and test them and you can then publish the new version.

Another strategy is to use a simple bootstrap launcher that loads and executes the script from a remote location that you can edit and debug independently of the Codio box.

The following example bash script shows a Python script that is located as a Gist on GitHub. This script might be called `.guides/secure/launcher.sh`.

```
#!/bin/bash
URL="https://gist.githubusercontent.com/MaximKraev/11cd4e43b0c43f79d9478efbe21ba1b9/raw/validate.py"
curl -fsSL $URL | python - $@
```
It is important that it is located in the `.guides/secure` folder. You then specify the full filepath `.guides/secure/launcher.sh` in the **Set custom script path** field in the assignment settings.

You are now free to debug the Python script and fix any bugs that you may have noticed once students have started work on the assignment.

#### Testing your script in the IDE
We provide the ability to test your autograding script from the **Education -> Test Autograde Script** menu.

This option lets you specify the location to your autograding script and run it against the current project contents. It also lets you simulate scores attained by any autograded assessments located within the Codio Guide.

![authtoken](/img/autograde-test.png)

You should be aware of the following points.

- When you press the **Test Script** button
  - all output to `stdout` and `stderr` are displayed within the dialog
  - the grade as returned by your test script is at the bottom of the output section
- `stdout` and `stderr` output is not available when running for real (not in this test mode) as the autograding script runs invisibly when the assignment is marked as complete. As such, you should generate output for testing and debugging purposes only.
- If you want your script to provide any feedback to the student, then you should output it to a file that the student can access when opening the project at a later date. In this case you will need to allow read-only access to the project from the assignment settings after being marked as complete.
- Your script must execute within 3 minutes to avoid a timeout error.

If the Guide has autograded assessments then the test takes its data from the fields shown in the dialog. All of your assessment settings are accessed as described above under **Accessing Guide assessment results**.

##### Example Python grading script
Below is an example Python file that might be loaded by the bootstrap script above.

Notice that the only code you need to modify is near the bottom. The other functions are helpers and can be used for any test in any assignment.

```python
import os
import random
import requests
import json
import datetime

# import grade submit function
import sys
sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_grade

##################
# Helper functions #
##################


# Get the url to send the results to
CODIO_AUTOGRADE_URL = os.environ["CODIO_AUTOGRADE_URL"]
CODIO_UNIT_DATA = os.environ["CODIO_AUTOGRADE_ENV"]

def main():
  # Execute the test on the student's code
  grade = validate_code()
  # Send the grade back to Codio with the penatly factor applied
  res = send_grade(int(round(grade)))
  exit( 0 if res else 1)

########################################
# You only need to modify the code below #
########################################

# Your actual test logic
# Our demo function is just generating some random score
def validate_code():
  return random.randint(10, 100)

main()
```

<a name="examplebashscript"></a>
##### Example Bash grading script

Below is an example bash script file that would be stored  in .guides/secure folder

```
#!/bin/bash
set -e
# Your actual test logic
# Our demo function is just generating some random score
POINTS=$(( ( RANDOM % 100 )  + 1 ))
# Show json based passed environment
echo $CODIO_AUTOGRADE_ENV
# Send the grade back to Codio
curl --retry 3 -s "$CODIO_AUTOGRADE_URL&grade=$POINTS"
```

#### Autograding enhancements

To provide instructors with more robust auto-grade scripts, you can also now 

- Send back feedback in different formats HTML/Markdown/plainText
- Allow separate debug logs
- Notify (instructors and students) and reopen assignments for a student on grade script failure.

To support this additional feedback, this URL (passed as an environment variable) can be used:```CODIO_AUTOGRADE_V2_URL```

These variables allow POST and GET requests with the following parameters:

- **Grade** (```CODIO_AUTOGRADE_V2_URL```): 0-100 grade result
- **Feedback** - text
- **Format** - html|md|txt - txt is default if used (optional)
- **Extra Credit** - where extra credit points can be given to students (optional)

If the grade is submitted to these urls script output is saved as debug log.
If the script fails, the attempt is recorded, the assignment is not locked (if due date is not passed) and an email  notification with information about the problem is sent to the course instructor(s) containing the debug output from the script.

##### Example Python grading script

```python
import os
import random
import requests
import json
# import grade submit function
import sys
sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_grade_v2, FORMAT_V2_MD, FORMAT_V2_HTML, FORMAT_V2_TXT
def main():
  # Execute the test on the student's code
  grade = random.randint(10, 100)
  # Send the grade back to Codio with the penatly factor applied
  
  res = send_grade_v2(int(round(grade)), feedback='Simple text here', format=FORMAT_V2_HTML, extra_credit=int(round(grade)))
  exit( 0 if res else 1)
  
main()
```

##### Example Bash grading script

```bash
#!/bin/bash
set -e
POINTS=$(( ( RANDOM % 100 )  + 1 ))
curl --retry 3 -s "$CODIO_AUTOGRADE_V2_URL" -d grade=$POINTS -d format=txt -d feedback='Simple text here'  -d extra_credit=$POINTS
```

### Actions area settings
Additional options are also available if you select the **Actions** button.

![Action Area](/img/actionarea.png)


- **Plagiarism checker**

You can run [plagiarism detection](/courses/plagiarism/) from the blue dots menu on the assignment or the **Actions** area.

- **Mark all as completed**

Certain actions can be triggered when a student marks an assignment as complete: [Auto-graded assessment scores can be passed directly to the grade field](/courses/classes/#transferring-authored-content-assessment-total) and/or [Scripts can be executed for assessing the student code and assigning the grade](/courses/classes/#running-a-custom-script)

Students can mark the assignment as complete from their own dashboards but a teacher is also able to do this on their behalf either individually or for all students either by pressing the **Marking All As Completed** button to mark all student assignments as complete, hover over a student to see the switch appear to the left of the students name, which you can then activate or [Accessing student work](/courses/grading/#accessing-student-work) and going to the **Education->Mark as Completed** menu item within the IDE.

Teachers can also mark complete assignments as incomplete for all students in the course or for individual students selecting the switch or by accessing their assignment.

![assignment actions](/img/mark-complete.png)

- **Unmark as complete**

Where the assignment can be marked as not complete for all students

- **Download CSV**

This allows you to download a CSV file with student grade data for the assignment.

- **Reset** 

**This option will destroy all student work.**

In the event that an assignment in your course is updated you can reset it so **all** students, including those who have already started the assignment, are updated with the new assignment.

You can reset the assignment for all your students by selecting either

- the **Actions** button and then the **Reset** button

![resetunit](/img/resetunitall.png)

or

- you can reset the assignment for individual students from the 3 blue dot menu

![resetunit](/img/resetunitstudent.png)

- Regrade completed
This option should be selected if you are running an auto-grade script when the assignment is marked as completed and you want the script to be re-run. 

- Release Grades
By default, grades are not shown to students or transferred to the LMS gradebook if you are using LMS integration for a course. When you are ready to do so, you can select the option from here.








