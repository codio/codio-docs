---
title: "Grading and accessing student projects"


---

You can monitor student progress and time spent on individual assignments.

1. From the **Courses** screen, click on your class to open it.
![authtoken](/img/monitor_students/year10class.png)

1. Click on the **Students** tab, top centre of your screen.
![authtoken](/img/monitor_students/studentstab.png)

1. You will see all students in your class displayed on this screen. You will see progress data for assignments started and assignments completed alongside their names.
1. To see an individual student's progress in more detail click on their name. You will then see an individual breakdown of auto-graded assessment results, along with time spent on each assignment.
![authtoken](/img/monitor_students/breakdown.png)
1. To see a more detailed breakdown of each assignment the student has attempted, click on the assignment name. You will be able to view a breakdown of the challenges attempted along with corresponding results.

<a name="downloadcsv"></a>
## Download CSV summary

You can also download a CSV file of your students progress. You can do this for individual assignments to see all your students by clicking on the blue triple dot icon to the right of the assignment name:
![authtoken](/img/downloadcsv_unit.png)

or you can download a CSV file for the Course to see all your students progress in all the assignments in each Module by hovering over the Module name to select **Download CSV** there:
![authtoken](/img/downloadcsv_module.png)

or you can export all the data from a class (including the students workspaces) by exporting class data. See [export class data](/classes/classmanagement/export/) for more details

## Accessing student work

As a teacher you have access to your students cloud area within Codio. This allows you to view and access any work your students have completed at any time.

1. From the **Courses** area, click on your class to open it.
![Class](/img/monitor_students/year10class.png)

1. Click on the **Students** tab, top centre of your screen.
![Students tab](/img/monitor_students/studentstab.png)

1. You will see all students in your class displayed on this screen. By default they will show sorted alphabetically by first name but you can also sort them by last name if preferred

1. To view/access an individual students work click on their name. On the far right of the screen, under the heading **Open**, click the blue arrow to open the students work.
![Open student work](/img/openstudent.png)

## Auto-graded assessments

Auto-graded assessments will appear in the teacher dashboard.

![Teacher Dashboard](/img/teacherdash.png)

## nbgrader autograding

**[Jupyter notebook](https://jupyter.org/)** has auto-grade functionality through **[nbgrader](http://nbgrader.readthedocs.io/en/stable/index.html)** that Codio supports


### Overview

Assignment creators create the assignment with [Jupyter notebook](https://jupyter.org/) files for the assignment.

**nbgrader** support doesn't require [guides](/content/authoring/) or any other [assessments](/content/authoring/assessments/).

Any user configurations required should be stored in a `.codio-jupyter` file.

if a `.codio-jupyter` file exists in a project we assume it is **jupyter** based grader, and therefore only **nbgrader** can be selected for the assessment scripts in the assignment

When the assignment is published to a class, either as an [individual project](/classes/unitmanagement/assign-project) or as part of a [course/module](/classes/unitmanagement/assign-module), the release version is created for the student.

When the student submits the assignment by marking the assignment as complete, it will be [autograded](/classes/unitmanagement/settings-info/autograde) automatically.

[Manual grading](/classes/monitor/grading/) is also available if required


### Configuration

<a name="nbgradertimeout"></a>
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


If you require any assistance at all, or would like us to consider adding additional functions, please don't hesitate to [contact us](/dashboard/support/)

## Grading project work

Codio's grading features address four important aspects when grading student projects.

- **Assign grade** - manually reviewing student projects and then assigning a grade.
- **Grading moderation** - having other lecturers review grades already assigned in order to monitor consistency of grading.
- **Grading rubric** - This provides a grading guideline framework for teachers. Please [click here](/classes/classmanagement/rubric) for details.
- **LMS gradebook sycnhronization** - This feature ensures that when teachers release grades, the data is passed automatically to any LTI enabled LMS platform such as Moodle, Blackboard and Canvas.

### Video overview
[Click here](https://vimeo.com/165275339) if you'd like to watch a quick video overview.

### The grading process
Once students have completed their assignments, they should notify the teacher of completion by going to the **Education->Mark as Completed** menu item within the IDE. The teacher is then able to see whose project is ready to be graded (see below image with completion status circled left).

The teacher is also able to filter either finding specific students or to view students based on the status of the assignment.
![Filtering](/img/filter.png)

Students can be filtered by:

- Any Status
- Started
- Not Started
- Fully Graded
- Not Graded
- Completed
- Uncompleted

You can access the student's project from the same screen by clicking on the 3 blue dots on the extreme right (see below image with dots circled right). You can then review the project.

![Grading access](/img/grading-unit.png)

The teacher can also mark the assignment as complete going to the **Education->Mark as Completed** menu item within the IDE and if already marked as complete, can change the status to incomplete

There are two ways to assign the grade.

- Either you can grade from within the IDE itself from the Education menu item. You need to have a student project open in the IDE.
- Or you can grade from the class dashboard. You must first have selected the assignment associated with the project and then press the grading icon.

Also see [Autograding](/classes/unitmanagement/settings-info/autograde/)

To grade from the class dashboard, you should first select the assignment. You can see the check mark next to those students who have completed the assignment.

To assign comments or a grade, you click on the Grade icon (see image above with grading icons circled center). You can then modify the comments and grade fields for any individual student.

![Assign Grades](/img/grading-assign.png)

<a name="releasegrades"></a>
### Releasing Grades
By default students are not shown the grades until you decide to release them to the class. This allows you to hold back until you have completed the entire grading process and then release them in one go. If you want the students to see the grades as you go then simply flick the release grades switch before you start grading.

![Grading](/img/grading-release.png)

Students are able to see their grades either from their Course view or by opening the assignment and going to **Education->Feedback**

You can also release grades from the main assignment view right clicking on the 3 vertical dots and selecting **Release grades**.

![Release Grades](/img/grading-release2.png)

<a name="releasegradesstatus"></a>
### Automatically releasing grades
If you wish to automatically release grades when students complete a assignment, you can enable this feature at the organisation level so when you create new [courses](/classes/classmanagement/create-class/) this option is automatically enabled. See [organisation release grades](/dashboard/create/orgreleasegrades) for more information.

You can also change the status of this feature for individual C
courses if required on the admin tab of the class.
![Class Release Grades](/img/changereleasegrades.png)

### Grading moderation
In some situations you may want to monitor the accuracy of grading. This can become especially important if you have more than one lecturer or teacher grading student work. It is important that students can rely on a consistency of grades no matter which person actually assigns the grade.

This is where grading moderation is a very useful tool. It allows other teachers to access a student's project, review it and then assign a grade and associated comments. Rather than reviewing all student projects, typically a smaller sample will be taken for review and from that it should become clear if there are any obvious discrepancies.

A common approach is to take a few students who got top grades, a few with terrible grades and a few from the middle of the pack and then perform the grading moderation on those.

The below screenshot shows an example of where a student project has been graded by Professor Babbage, who awarded an A-. The grade was then reviewed by Freddy May, who assigned a slightly better grade.

![Moderation](/img/grading-moderation.png)

The moderated grade will not be shown to the class and can only be seen by teachers of that class.

Teachers who you want to perform grading moderation will need to be added to the class from the **Admin** screen first.

## Grading free text questions

Free text questions will normally require a manual grading process. In order to grade these questions, you should first select the assignment. You will then be shown the student list, as you can see below.

![StudentList](/img/studentlist.png)

You can now select a student. You will then be shown the list of all assessments for that student within the assignment. Free text questions are denoted by the icon highlighted below.

![Free Text Grading](/img/guides/freetext-grading.png)

Note that if a student has started to answer a question but not submitted the answer, then you will see **DRAFT** written next to it. Once they submit, you will see **GRADE** indicating that the question has been submitted and is ready to be graded.

<a name="partialpointrubric"></a>
### Partial Point Rubric

Where an answer is set to all partial points, a rubric is provided to allow graders to dynamically deduct points from the maximum score.
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


If a class deadline is reached, then you can grade questions that are  set to **DRAFT** and where the student may have forgotten to submit the answer fully.

You can also see the date and time for each submitted answer as well as the date that the assignment was [marked as complete](/dashboard/student/guides#completed) by the student.
