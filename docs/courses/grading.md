---
title: Grading and accessing student projects

---

### Previewing assignments

You can open the assignments in teachmode. This allows you to see any content that is for teachers' eyes only. This includes hidden content and teacher solutions auto-graded assessments.

1. From the **Courses** screen, click on your course to open and go to the **Teach** tab. If your teacher account is read only you will only have access to this tab.

1. You will see the assignments you have assigned to your course. To open the assignment to preview it, click the **Preview** button 

![Preview](/img/manage_classes/previewassignment.png)

**Important**: Each time you preview the assignment it opens as new. i.e. anything you may add as notes to your preview is not saved

### Overview of student progress
You can monitor student progress and time spent on individual assignments.

**Video: Viewing Student Work and Adjusting Individual Due Dates**

<p><a href="https://codio.wistia.com/medias/dvoe0bx9nr?wvideo=dvoe0bx9nr"><img src="https://embedwistia-a.akamaihd.net/deliveries/be47ddc70ba95a6ddc93170209f3f95b.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p>

1. From the **Courses** screen, click on your course to open it.

![authtoken](/img/monitor_students/year10class.png)

1. Click on the **Students** tab, top centre of your screen.

![authtoken](/img/manage_classes/students_tab.png)

1. You will see all students in your course displayed on this screen. You will see progress data for assignments started and assignments completed alongside their names.
1. To see an individual student's progress in more detail click on their name. You will then see an individual breakdown of auto-graded assessment results, along with time spent on each assignment.

![authtoken](/img/monitor_students/breakdown.png)

1. To see a more detailed breakdown of each assignment the student has attempted, click on the assignment name. You will be able to view a breakdown of the challenges attempted along with corresponding results.


## Download CSV summary

You can also download a CSV file of your students progress. You can do this for individual assignments to see all your students by clicking on the blue triple dot icon to the right of the assignment name:

![Download Assignment CSV](/img/downloadcsv_unit.png)

or you can download a CSV file for the Course module to see all your students progress in all the assignments in a Module by selecting **Download CSV**:

![Download Module CSV](/img/downloadcsv_module.png)

or you can export all the data from a course (including the students workspaces) by exporting course data. See [export course data](/courses/classes/#exporting-course-data) for more details

## Accessing student work

As a teacher you have access to your students cloud area within Codio. This allows you to view and access any work your students have completed at any time. You can enable writable mode at any time to be able to make changes without them affecting the students work. Any changes you may make will be discarded when you exit the assignment.

1. From the **Courses** area, click on your course to open it.

![Course](/img/monitor_students/year10class.png)

1. Click on the **Students** tab, top centre of your screen.

![Students tab](/img/monitor_students/students_tab.png)

1. You will see all students in your course displayed on this screen. By default they will show sorted alphabetically by first name but you can also sort them by last name, number of started or number of completed assignments if preferred.

1. To view/access an individual students work click on their name. On the far right of the screen, under the heading **Open**, click the blue arrow to open the students work.

![Open student work](/img/openstudent.png)


## Cursor presence

When accessing a students assignment, all active users in a project/assignment will be shown with a color in an icon showing in the menu bar when files are being accessed/edited

Clicking on the icon will change focus to show what that user is currently editing highlighted in that color and will show the users cursor. 
Hovering over the icon will show the filename and line currently being edited.

![Cursor Presence](/img/monitor_students/cursorpresences.png)

This can be very useful if a student needs assistance as you can see what they are doing, real time and if you need to demonstrate something to them, they can see what you are doing

## Audio/Video Chat Support

When accessing a students assignment, a **Call** button will show allowing Audio/Video calls and or real time chat with the student if they are also accessing the assignment at the same time

![A/V Call](/img/monitor_students/call.png)

## Code Playback 

Teachers have access to all of the files that students produce on Codio. In order to see how these code files were built, teachers can use **Code Playback**. If your cursor is in the code file you want to see the playback of, simply select  Tools->Code Playback menu. If you are looking into a multi-file program or did not have the file you want to investigate in-focus, search for the student’s file by clicking on the folder icon.

![Code Playback](/img/codeplayback/CodePlayback1.gif)


To watch the code be built, click the play button. You can change the speed using the **Speed** drop down which is in changes per second. To walk through the changes manually, you can use the “Previous change” and “Next change” buttons. You can drag along the playback slider to find points of interest.

![Code Playback](/img/codeplayback/CodePlayback2.gif)



## Auto-graded assessments

Auto-graded assessments will appear in the teacher dashboard.

![Teacher Dashboard](/img/teacherdash.png)

## nbgrader autograding

**[Jupyter notebook](https://jupyter.org/)** has auto-grade functionality through **[nbgrader](http://nbgrader.readthedocs.io/en/stable/index.html)** that Codio supports


### Overview

Assignment creators create the assignment with [Jupyter notebook](https://jupyter.org/) files for the assignment.

**nbgrader** support doesn't require [guides](/courses/authoring/) or any other [assessments](/courses/assessments/).

Any user configurations required should be stored in a `.codio-jupyter` file.

if a `.codio-jupyter` file exists in a project we assume it is **jupyter** based grader, and therefore only **nbgrader** can be selected for the assessment scripts in the assignment

When the assignment is published to a course, either as an [individual project](/courses/classes/#assign-a-project-to-the-course) or as part of a course [module](/courses/classes/#assign-resource-modules-to-the-course), the release version is created for the student.

If the assignment is updated in the future, when published it will overwrite all tests and read only cells with the new version and the release version for the students will be updated.

When the student submits the assignment by marking the assignment as complete, it will be [autograded](/courses/classes/#autograde-on-assignment-complete) automatically.

[Manual grading](/courses/grading/#grading-project-work) is also available if required


### Configuration


### Extend Timeout period

To extend the time required for completion (to 90 seconds in this example), you can add

```yaml
nbgrader:
   ExecutePreprocessor.timeout: 90
```
to the `.codio-jupyter` file


### Lock all cells

To lock all cells (Default: False)

```yaml
nbgrader:
   LockCells.lock_all_cells: True
```
to the `.codio-jupyter` file

### Lock all grade cells

To lock all grade cells (Default: True) where grade cells are locked (non-deletable)

```yaml
nbgrader:
   LockCells.lock_grade_cells: True
```
to the `.codio-jupyter` file

### Lock all read-only cells

To lock all grade cells (Default: True) where read only cells are locked (non-deletable and non-editable)

```yaml
nbgrader:
   LockCells.lock_readonly_cells: True
```
to the `.codio-jupyter` file

### Lock all solution cells

To lock all solution cells (Default: True) where solution cells are locked (non-deletable and non-editable)

```yaml
nbgrader:
   LockCells.lock_solution_cells: True
```
to the `.codio-jupyter` file

### Execute preprocessor on timeout

If execution of a cell times out, interrupt the kernel and continue executing other cells rather than throwing an error and stopping.

```yaml
nbgrader:
   ExecutePreprocessor.interrupt_on_timeout: True
```
to the `.codio-jupyter` file

### To run custom grading with jupyter

To avoid execution of autograder with nbgrader and allow codio script autograder to be executed. When set this will not show jupyter files as assessments in codio and will not submit through nbrader after mark as completed, so not assessments and points set in the assignment.

```yaml
codio:
  grader: false
```
### ClearSolutions.code_stub

```yaml
nbgrader:
    ClearSolutions.code_stub:
        R: |
            # BEGIN YOUR CODE
            # END YOUR CODE
        python: |
            # YOUR CODE HERE
            raise NotImplementedError()
        ruby: |
            # BEGIN YOUR CODE
            raise NotImplementedError.new()
            #END YOUR CODE
```

If you require any assistance at all, or would like us to consider adding additional functions, please don't hesitate to [contact us](/dashboard/support/)

## Grading project work

Codio's grading features address four important aspects when grading student projects.

- **Assign grade** - manually reviewing student projects and then assigning a grade.
- **Grading moderation** - having other lecturers review grades already assigned in order to monitor consistency of grading.
- **Grading rubric** - This provides a grading guideline framework for teachers. Please [click here](/courses/classes/#grading-rubric-templates) for details.
- **LMS gradebook sycnhronization** - This feature ensures that when teachers release grades, the data is passed automatically to any LTI enabled LMS platform such as Moodle, Blackboard and Canvas.



### The grading process
Once students have completed their assignments, they should notify the teacher of completion by going to the **Education->Mark as Completed** menu item within the IDE. The teacher is then able to see whose project is ready to be graded (see below image with completion status circled left).

The teacher is also able to filter either finding specific students or to view students based on the status of the assignment.

![Filtering](/img/filter.png)

Students can be filtered by:

- Any Status
- Started
- Not Started
- Has Final Grade
- No Final Grade
- Completed
- Uncompleted
- Needs Grading
- Has Extra Credit

You can access the student's project from the same screen by clicking on the 3 blue dots on the extreme right (see below image with dots circled right). You can then review the project.

![Grading access](/img/grading-unit.png)

The teacher can also mark the assignment as complete going to the **Education->Mark as Completed** menu item within the IDE and if already marked as complete, can change the status to incomplete

There are two ways to assign the grade.

- Either you can grade from within the IDE itself from the Education menu item. You need to have a student project open in the IDE.
- Or you can grade from the course dashboard. You must first have selected the assignment associated with the project and then press the grading icon.

Also see [Autograding](/courses/classes/#autograde-on-assignment-complete)

To grade from the course dashboard, you should first select the assignment. You can see the check mark next to those students who have completed the assignment.

To assign comments or a grade, [Teachers Grading](/courses/classes/#teachers-grading) needs to be enabled. When it is click on the Grade icon (see image above with grading icons circled center) and select 'Add Grade' button. You can then modify the comments and grade fields for any individual student. Due to the weighting feature, we only allow numeric grades. If you are using a [Rubric Template](/courses/classes/#grading-rubric-templates), this will present as you click on the grade field.

![Assign Grades](/img/grading-assign.png)

If the students assignment has already been graded, any other teacher in the course can edit the grade with additional comments if required selecting the 'Override Grade' button.

#### Extra Credit

Extra credit can be given to students if required. Extra credit points are not added to the grade, instead the student's score is shown as grade + extra in the interface. This is done because LTI does not allow a grade > 100. To make transferring extra credit points to your LMS easier, we have included a ```Has Extra Credit``` filter. 

Extra credit can be added manually by the teacher using the Extra Credit button shown above but can also be set within an autograde script. See [Autograding Enhancements](/courses/classes/#autograding-enhancements) for more information.

#### Anonymous Grading
If required, anonymous grading can be set for the course so that students will not see the names of the teachers who graded their work.
For more information and how to enable this [click here](/courses/classes/#anonymous-grading)

#### Code Commenting

Teachers can also comment on code within students files. 
To do this, open the students project and open the file. Hover over the left hand side of the gutter bar and click the `+` to open the comment window and enter the comments as required. This comment will be visible to the student when they next view the file

![Single-line comments on the left files and a multi-line comment on the file on the right](/img/commentcode.png)

Multiple lines of code can be selected and the teacher can also edit/delete or add additional comments (from the 3 dots to the right of the comment window when the comment is saved) if required.

When actioned by the student, the comment will be marked as resolved but will still be available for review in the **Education -> Code Comments** menu item or from the Guides settings area.

![Guides Code Comments](/img/guides/codecommentguides.png)

Students can also go to this to see all comments and click to open the neccessary file.

### Releasing Grades

**Video: Releasing Grades to Students and LMS**

<p><a href="https://codio.wistia.com/medias/z7xmzl5xbd?wvideo=z7xmzl5xbd"><img src="https://embedwistia-a.akamaihd.net/deliveries/24fb44ce2093addaf89029876ce11424.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0" width="400" height="225" style="width: 400px; height: 225px;"></a></p>

By default students are not shown the grades until you decide to release them to the course. This allows you to hold back until you have completed the entire grading process and then release them in one go. If you want the students to see the grades as you go you can:

- enable this for the course in the **Course>Admin** area 

![Course Release Grades](/img/changereleasegrades.png)

- set this at the organisation level so any courses created will have this enabled automatically. See [organisation release grades](/dashboard/organisations/#organisation-release-grades) for more information.

![Grading](/img/grading-release.png)

- You can also release grades from the main assignment view flipping the switch in the  **Release grades** column for the assignment(s) you wish to release the grades for.

![Release Grades](/img/grading-release2.png)

Students are able to see their grades either from their Course view or by opening the assignment and going to **Education->Feedback**

You can also set up [Notification](/courses/classes/#notification-emails) emails to be sent to the students when new feedback is available for them to view

## Grading free text questions

Free text questions will normally require a manual grading process. In order to grade these questions, you should first select the assignment. You will then be shown the student list, as you can see below.

![StudentList](/img/studentlist.png)

You can now select a student. You will then be shown the list of all assessments for that student within the assignment. Free text questions are denoted by the icon highlighted below.

![Free Text Grading](/img/guides/freetext-grading.png)

Note that if a student has started to answer a question but not submitted the answer, then you will see **DRAFT** written next to it. Once they submit, you will see **GRADE** indicating that the question has been submitted and is ready to be graded.



### Partial Point Rubric

Partial point assessments, where full points have not been awarded, will show the icon:

![Partial Point Icon](/img/guides/partialpointicon.png)

Where an answer is set to allow partial points, a rubric is provided to allow graders to dynamically deduct points from the maximum score.
A grader can add an item, change an item weight or remove an item at any time in grading. The change will be applied for all students in this assignment, and any changes in rubric will upgrade already graded students to implement changes. The rubric is dynamic for each assignment, and every new assignment starts with an empty rubric.  

![Free Text Grading](/img/guides/partialpointrubric.png)

### Rubric
Every rubric item is 2 fields, first is the rubric item weight and the second one line item name.

- If an item is selected, then the weight is deducted from students score.
- The grader can select multiple items.
- The total score can't be negative even if sum of rubric items weights is more than maximum points.

### Editing
Editing is allowed while grading so the teacher can:

- add a new item into the form
- remove an item. As this action will effect all students already graded and their total score updated, a warning is shown for confirmation
- edit the weight or name.  If weight is changed a warning will be shown for confirmation

### Cloning
A rubric can be cloned from another assignment if required in preference to creating manually. Select the gear icon (circled in image above) to select the assignment.

### Points adjust
The points adjust field allows the teacher/instructor to manually adjust (ie reduce) the students total score if required without having to edit/change the rubric

### Feedback
A comments field is provided to allow teacher/instructors manual feedback


If a course deadline is reached, then you can grade questions that are  set to **DRAFT** and where the student may have forgotten to submit the answer fully.

You can also see the date and time for each submitted answer as well as the date that the assignment was marked as complete by the student.
