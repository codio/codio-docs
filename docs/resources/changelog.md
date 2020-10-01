---
title: Changelog


---

This page contains a list of recent updates made to the Codio platform. We update Codio regularly, so this page should provide information to help you.

We do not report small bug fixes or issues that affect individual users, who we will notify directly.

`[I]` = Update or improvement
`[F]` = New feature

**October 2020**

- `[I] [ 1st]`: Add ability to seach list of assessments in a project by name,point or order in guides.

**September 2020**

- `[I] [29th]`: Fix issue with [Desktop App](/dashboard/desktopapp/) when connecting to assignments in courses
- `[F] [29th]`: Add distractors for [Fill in the blank](courses/assessments/#execution_3) assessment when showing possible values
- `[F] [25th]`: Add Time Limit option for [exam proctoring](/courses/classes/#exam-proctoring)
- `[I] [25th]`: Allow [deadlines](/courses/classes/#adjusting-deadline-for-individual-students) to be adjusted forward by days/hours and minutes
- `[I] [23rd]`: Update handling of visibility on completed to require students to change status of assignment from completed to be able to continue working
- `[I] [18th]`: Update handling of visibility on disabled for assignments not started before end date of course
- `[F] [16th]`: Add ability to more easily [generate items](/courses/assessments/#generate-items) for Standard Code test
- `[I] [16th]`: Fix problem with Code Commenting where guides layout protected
- `[I] [15th]`: Improvements for Code Commenting to remember toggled state and to show new comments in real time
- `[I] [15th]`: Improve handling of .svg files in books
- `[I] [14th]`: Fix problem with Fill in the Blank assessment points allocation
- `[I] [14th]`: Improve handling of `<pre>` tags used in Fill in the Blank assessments
- `[I] [14th]`: Improve presentation of adjusted deadline details to students and teachers
- `[I] [ 9th]`: Further improvements in handling of adjusting deadlines past end date of assignments
- `[I] [ 3rd]`: Improve handling of adjusting deadlines past end date of assignments
- `[I] [ 3rd]`: Improve course assignment list handling remembering scroll location from previous visit
- `[I] [ 3rd]`: Add additional student sorting options at assignment level
- `[I] [ 3rd]`: Improve handling for resolving Code comments
- `[I] [ 1st]`: Add support for 'pull' in child courses for books

**August 2020**

- `[I] [27th]`: Improve handling of teacher/student switching
- `[I] [26th]`: Add support for grading rubric items with [Grade Book assessment](/courses/assessments/#grade-book-assessments)
- `[I] [26th]`: Add support for [Anonymous Grading](/courses/classes/#anonymous-grading)
- `[I] [21st]`: Improve information shown to students from [teacher grading](/courses/classes/#teachers-grading)
- `[I] [19th]`: Improve accesssibility in clickable buttons/icons for screen readers
- `[I] [17th]`: Improve access to Code Comments within Guides settings
- `[I] [13th]`: Fix problem with FITB assessment overflowing callout area
- `[I] [12th]`: Fix issue with downloading user access data
- `[I] [12th]`: Improve rubric handling allowing word wrapping and multiple lines
- `[I] [12th]`: Fix problem with guides edit button
- `[I] [12th]`: Improve view of modules when adding existing into courses
- `[I] [11th]`: Add [Code Commenting](/courses/grading/#code-commenting) support
- `[I] [10th]`: Fix problem selecting book based content in assignment
- `[I] [ 5th]`: Add support for [LTI Roles](/courses/lti1_0/#teacher-roles)
- `[I] [ 5th]`: Add support for new files to be added to existing assignments

**July 2020**

- `[I] [31st]`: UI/icon changes for guides editor
- `[I] [30th]`: Improve handling of autograde scripts where error causes autograde URL not to be called
- `[I] [29th]`: Add ability to easily amend [assessment points](/courses/assessments/#editing-points-given-for-an-assessment) for multiple assessments
- `[I] [28th]`: Accessibility improvements
- `[I] [21st]`: Add support for partial points in [standard code test](/courses/assessments/#standard-code-tests) assessment
- `[F] [21st]`: Add [cursor presence](/courses/grading/#cursor-presence) to show other users activity in project/assignment in real time
- `[I] [16th]`: UI updates for [Assessment Library](/courses/assessments-library/)
- `[I] [14th]`: Fix issue switching Guides to edit mode
- `[I] [14th]`: Improve password management advising users if password used has been leaked
- `[I] [14th]`: Fix issues opening 'Shared with me' projects
- `[I] [14th]`: Hide `.codio` file in assignments without guides
- `[I] [14th]`: Enlarge the grade field on course-assignment screen
- `[I] [14th]`: Fix issue with Parsons puzzle
- `[I] [ 8th]`: Add support for AST Parser for the Processing Language
- `[I] [ 8th]`: Improve handling of script output for free text auto assessment if script passes
- `[I] [ 8th]`: Improve handling of incompatible assessments when updating course assignments
- `[I] [ 8th]`: Remove http preview option
- `[I] [ 7th]`: Allow updating to the latest version of the book for all assignments in a course
- `[I] [ 3rd]`: Update guides table of contents, moving buttons to the top
- `[I] [ 3rd]`: Fix problem with release grade settings not passing correctly when cloning course
- `[I] [ 3rd]`: Add example using [collapsible content](courses/authoring/#collapsible-content) in guides
- `[I] [ 2nd]`: Update default points for assessments from 1 to allow better implementation of partial points
- `[F] [ 2nd]`: Add support for [Regular Expressions](https://en.wikipedia.org/wiki/Regular_expression) in [Fill in the Blank assessments](/courses/assessments/#regular-expression-support)
- `[I] [ 1st]`: Fix issue with roles when inviting teachers to organisation
- `[I] [ 1st]`: Fix layout of expand/collapse arrows shown in dialogs

**June 2020**

- `[I] [30th]`: Improve handling of multiple incorrect login password attempts
- `[I] [30th]`: Update naming of code playback tabs
- `[I] [22nd]`: Improve handling of teachers accessing students completed assignments
- `[I] [22nd]`: Enhance Autograde scripting functions. See [here](/courses/classes/#example-python-grading-script) and [here](/courses/assessments/#partial-points) for more information and examples
- `[I] [22nd]`: Improve loading of large courses lists
- `[I] [22nd]`: Optimise messaging for teachers when accessing students assignments
- `[I] [22nd]`: Fix issue with Project settings values of ALLOW PRIVATE STATIC PREVIEW and PROTECT DYNAMIC PORTS params not being correctly applied in student's assignment project
- `[I] [19th]`: Update [Parsons Puzzle](/courses/assessments/#parsons-puzzle-assessments) assessment
- `[I] [17th]`: Allow users to be [teacher and student](/courses/classes/#enabling-teachers-to-be-student-in-a-course) in same course
- `[F] [15th]`: [Code Playback](/courses/grading/#code-playback) allowing teachers to playback students steps
- `[I] [15th]`: Improve messages in empty archived courses
- `[I] [12th]`: Make jupyter lock cell editing flag value as true by default
- `[I] [11th]`: Fix problem with loading course listings
- `[I] [10th]`: Update logic handling renewal dates for [self invoicing](/dashboard/account/#organisation-billing)
- `[I] [10th]`: Replace fonts.com and typekit.net fonts with Google fonts
- `[I] [ 9th]`: Fix problem when deleting last page in guides 
- `[I] [ 8th]`: Fix problem with guides fonts
- `[I] [ 5th]`: Improve naming of preview tabs
- `[I] [ 5th]`: Fix problem for teachers opening students jupyter notebook files
- `[I] [ 3rd]`: Fix issue with formatting of `.md` files downloaded from projects/assignments
- `[I] [ 3rd]`: Fix problem with jupyter assignment feedback for multiple submissions and/or publishes
- `[I] [ 1st]`: Fix problem with deployment functions
- `[I] [ 1st]`: Update behaviour of 4 panel guides layout

**May 2020**

- `[I] [30th]`: Update content in $CODIO_AUTOGRADE_ENV variable
- `[I] [29th]`: Fix problem running autograde scripts on archived assignments
- `[I] [28th]`: Improve messaging when errors in autograde scripts
- `[I] [28th]`: Update message shown when users try to access others projects without permission
- `[I] [27th]`: Fix issue with incorrect redirection when pressing enter on assessment name creation
- `[I] [27th]`: Fix problem with 3 blue dot menu not being accessible on disabled assignments
- `[I] [27th]`: Update search in documentation so Enter key no longer clears search field
- `[I] [27th]`: Fix problem with assignment of partial points
- `[I] [27th]`: Improve messaging for autograde script issues
- `[I] [27th]`: Fix problem with visibility on completed
- `[I] [26th]`: Fix issue where users can be added twice to project permissions
- `[I] [26th]`: Update students assignments on next run if Gigabox settings are changed in the course
- `[I] [26th]`: Improve message when users credentials not passed
- `[I] [22nd]`: Improve messaging for students creating account from LMS
- `[I] [21st]`: Upgrade user password requirements - min length to 8 symbols
- `[I] [21st]`: Update messaging if user tries to open url of existing project of another user without permission
- `[I] [21st]`: Fix problem with Blockly blocks in assignments
- `[I] [19th]`: Fix problem accessing assignments from test student accounts
- `[I] [18th]`: Fix problem creating similarly named assignments in different coursers
- `[I] [15th]`: Improve [Pin](/courses/classes/#pinunpin-units) function to allow multiple assignments to be pinned
- `[I] [15th]`: Recommended stacks updated to use Ubuntu 18.04
- `[F] [15th]`: [Codio Feedback](/dashboard/support/#feedback) released where you can raise new feature requests and vote/comment on ideas raised by others
- `[I] [14th]`: Fix problem with lack of context options when mouse right click on file tree root
- `[I] [14th]`: Accessibility fixes/improvements
- `[I] [13th]`: Fix problem with release grade switch showing incorrect status
- `[F] [09th]`: Add [Exam Mode Options](/courses/classes/#exam-proctoring) for course assignments
- `[I] [08th]`: Update handling of archived courses showing in LMS's
- `[I] [07th]`: Fix problem with searching/finding users/orgs/groups when adding permissions to projects/assignments
- `[F] [07th]`: Update project/assignment creation to include configured .codio file and sample files
- `[I] [06th]`: Update default Readme.md files created with new projects/assignments
- `[I] [06th]`: Improve presentation of [Debug menu](/project/ide/features/#creating-and-managing-debug-targets)

**April 2020**

- `[I] [30th]`: Improve error messaging in Parsons Puzzle
- `[I] [24th]`: Fix issue deleting tabs saved in course
- `[I] [22nd]`: Improve handling of LMS roles passing to Codio 
- `[F] [21st]`: Add function to allow teachers to [preview](/courses/grading/#previewing-assignments) assignments in courses
- `[F] [20th]`: Add function to [Add new assignments from Master to Child courses](/courses/classes/#adding-new-assignments-from-master-to-child-courses)
- `[F] [14th]`: Show assignment end date (where set) to students in their recently used cards in their [dashboard](/students/#courses)
- `[I] [14th]`: Fix issue with mark as completed button not showing on frame reload
- `[I] [14th]`: Update message to students when trying to start assignments in LTI enabled courses
- `[I] [14th]`: Add Rubric feedback to students when viewing their grades
- `[I] [14th]`: Add functions to allow pull to child courses at course module level
- `[I] [14th]`: Improve updating child courses showing pull option for child of child courses
- `[I] [13th]`: Added 'Number of started' and 'Number of completed' to student tab [order by](/courses/grading/#accessing-student-work) field
- `[I] [ 9th]`: [Onboarding Guide](https://codio.com/home/starter-packs/2ae8501b-e5f7-4b07-8e9f-adb155fc6d10) updated for new IDE
- `[I] [ 8th]`: Fix issue in My Projects - Shared with Me
- `[F] [ 8th]`: Add feature to set teachers as **Read Only** at [Organisation](/dashboard/organisations/#organisation-read-only-teachers) and/or [Course](/courses/classes/#adding-teachers-to-a-course) level
- `[I] [ 8th]`: Accessing [Codio Resources](/resources/Codio-Resources/) from IDE now opens in new tab
- `[I] [ 7th]`: Improve updating child courses from master to only show pull button when updates available
- `[I] [ 6th]`: Fix issue with incorrect format for [download csv](/courses/grading/#download-csv-summary)
- `[I] [ 6th]`: Add functionality to allow updates to assignments in a master course to be [pulled](/courses/classes/#working-with-masterchild-courses) to cloned courses
- `[I] [ 3rd]`: Fix loading of guides content in [CS: Introduction in Python](https://www.codio.com/resources/intro-python)
- `[I] [ 3rd]`: Rename [filter option names](/courses/grading/#the-grading-process) for student grading
- `[I] [ 2nd]`: Fix problem with LTI course integration parameter
- `[I] [ 1st]`: Fix problem when trying to add [CS: Introduction in Python](https://www.codio.com/resources/intro-python) resource to account
- `[I] [ 1st]`: Fix problem filtering students by 'Not Graded' in a course
- `[F] [ 1st]`: Release of new IDE improving Teacher section
- `[F] [ 1st]`: Update internal IDE links to new documentation 

**January 2020**

- `[I] [08th]`: Remove Firefox performance warning as earlier issues now addressed in latest FF versions

**December 2019**

- `[I] [17th]`: Update [Phonegap](/docs/ide/tools/phonegap) API
- `[I] [12th]`: Review handling of .git in authors units to improve collaboration

**November 2019**

- `[I] [22nd]`: Improve visibility of assessment id to list of assessments
- `[I] [21st]`: Fix problem uploading images to stacks/packs/units/books/course/modules
- `[I] [19th]`: Fix problem with assessment button not showing
- `[F] [17th]`: Add support for [LTI 1.3](/classes/lti/lti1_3) integration
- `[I] [11th]`: Fix problem connecting to BitBucket repo's
- `[I] [06th]`: Update messaging when unable to publish jupyter based units
- `[I] [05th]`: Update handling of users signing up through LMS

**October 2019**

- `[F] [16th]`: Add function to allow [Classes](/classes/classmanagement/searchclass/) to be sorted by begin date of class
- `[I] [02nd]`: Fix problem with AOB allocation for self pay organisations

**September 2019**

- `[I] [27th]`: Improve handling of autograde scripts for large units
- `[I] [24th]`: Improve accessibility function in Find panel
- `[I] [19th]`: Fix problem opening files in same tab as guides
- `[I] [11th]`: Fix problem with SSH connections
- `[I] [09th]`: Fix problem with handling of answer/rationale for free text assessment
- `[F] [04th]`: Add support for the standard input when [debugging](/ide/features/debugging/) C/C++, node.js and GDB programs.

**August 2019**

- `[I] [29th]`: Fix problem with marking units as completed
- `[I] [28th]`: Update handling of grade book comments
- `[I] [28th]`: Improve stack creation when creating from an older stack
- `[F] [28th]`: Add [Codio Global Assessment library](/content/authoring/assessments-library/global-assessments-library)
- `[I] [27th]`: Add hint to student tab in classes for number of students
- `[I] [27th]`: Update handling of answer/rationale showing for students
- `[F] [20th]`: Add [Assessments Library](/content/authoring/assessments-library) to allow sharing of assessments
- `[I] [15th]`: Fix issue with navigation after searching in guides
- `[F] [15th]`: Add support for self pay students to purchase through institutions [bookstores](/dashboard/account/billing-ind#bookstore)
- `[I] [09th]`: Fix problem accessing projects in 'Shared with Me' area
- `[I] [02nd]`: Fix problem deleting modules in course

**July 2019**

- `[I] [31st]`: Update handling of [viewing Git repo's](/ide/editing/git/git-viewing/) in Codio account
- `[I] [30th]`: Add `currentPage` and `totalNumberofPages` parameters for [custom scripts](/dashboard/create/custom-script/)
- `[I] [30th]`: Fix problem with contact URL settings in IDE chat area
- `[I] [29th]`: Fix issue with sorting of new classes being added
- `[I] [25th]`: Fix issue with guides section list not correctly showing for completed unit
- `[I] [23rd]`: Fix problem with focus on guides pages
- `[I] [23rd]`: Redesign dialog pages for [assessments](/content/authoring/assessments)
- `[I] [19th]`: Add user cues when using [git remote](/ide/editing/git/remotes/)
- `[I] [11th]`: Improve handling of long class names
- `[I] [11th]`: Fix problem with [color picker](/ide/editing/color-preview)
- `[I] [02nd]`: Update Class Dashboard pages and other menus for better accessibility

**June 2019**

- `[I] [19th]`: Update Dashboard pages for better accessibility
- `[I] [17th]`: Improve handling of publication of large units
- `[I] [11th]`: Fix issue with showing/hiding folders in guides

**May 2019**

- `[I] [17th]`: Fix guides navigation problem causing layout to be incorrect
- `[I] [07th]`: Fix issue with library path not saving correctly in JUnit settings
- `[I] [07th]`: Fix issue with [debugger](/ide/features/debugging/) with Node 11
- `[F] [06th]`: Add additional configuration options for [nbgrader/jupyter](/classes/monitor/nbgrader#nbgradertimeout) units
- `[I] [03rd]`: Improve handling of autograder custom scripts

**April 2019**

- `[I] [30th]`: Add `python working directory` parameter for [Advanced Code Test](/content/authoring/assessments/assessments-code-tests/) to support python unit tests running from dot folders
- `[I] [23rd]`: Update clike codemirror plugin for better handling of objective c files
- `[I] [23rd]`: Fix layout problem for pull/push buttons in desktop app
- `[I] [23rd]`: Fix problem with updating Jupyter Notebook units to a class
- `[I] [22nd]`: Improve layout of private/public icon in class
- `[I] [18th]`: Fix problem with autograde scripts where units are read only
- `[F] [18th]`: Add support to extend timeout for [nbgrader/jupyter](/classes/monitor/nbgrader#nbgradertimeout) units
- `[I] [17th]`: Improve messaging where assessment submissions unable to complete correctly
- `[I] [17th]`: Improve handling of code assessment submissions files
- `[I] [16th]`: Update handling of test students to show correct class logged into
- `[I] [15th]`: Fix problem with handling of grading templates for class units
- `[I] [ 9th]`: Fix problem with changing theme in guides
- `[I] [10th]`: Remove grading button when unit is [opened as teacher](/classes/unitmanagement/settings-info/teachersolutions)
- `[I] [10th]`: Fix problem with saving panel layout on submission
- `[F] [10th]`: Add support for [secure assessment script execution](/content/authoring/assessments/overview#secure)
- `[I] [10th]`: Improve handling of copying links/tokens to show confirmation
- `[F] [10th]`: Add assessment attempts count into [download csv](/classes/unitmanagement/settings#exportunitdata) files
- `[I] [10th]`: Fix problem with partial points for advanced code test not showing correctly in dashboard
- `[F] [10th]`: Add [custom script](/dashboard/create/custom-script) to allow third-party systems to track/help students.
- `[I] [ 9th]`: Improve standard code feedback field text handling
- `[I] [ 9th]`: Fix problem with changing theme in guides
- `[F] [ 9th]`: Add [sense.network](/content/authoring/assessments/assessments-sense-network) assessment to offer feedbackdback to students on code submissions
- `[I] [ 7th]`: Improve visibility of keyboard focus
- `[I] [ 7th]`: Change wording `Upgrade` to `Update` for consistency of language
- `[F] [ 6th]`: Add ability to [exclude files](/classes/unitmanagement/excludefiles/) from students units in a class
- `[I] [ 4th]`: Update handling of teacher only pages in books

**March 2019**

- `[F] [31st]`: Empty Stack set to use Ubuntu 18.04.
- `[F] [29th]`: Add ability to [clone class](/classes/classmanagement/clone-class/) from main class dashboard
- `[I] [27th]`: Fix terminal scrolling problem when unit run in iframe
- `[I] [26th]`: Update messaging to students marking units as completed
- `[I] [26th]`: Minor [dashboard](/dashboard/navigation/) text changes
- `[I] [22nd]`: Fix problem with handling of read only projects where external services are used (e.g. Jupyter/RStudio)
- `[I] [21st]`: Fix problem with storage of guides layout settings in units
- `[I] [20th]`: Improve handling of adding teachers to class
- `[I] [19th]`: Fix problem with teachers not able to access students projects after deadline passed
- `[I] [15th]`: Fix problem for student feedback when unit running in iframe
- `[I] [15th]`: Fix issue with students able to start units after deadline is past
- `[I] [15th]`: Remove menu item "Submit Jupyter assessments" from jupyter units
- `[I] [14th]`: Improve handling of test autograde script
- `[F] [11th]`: Improve [organisation](/dashboard/create/orgcontacturl) and [class](/classes/classmanagement/classcontacturl) contact url for students, allowing multiple contact urls to be defined.
- `[I] [ 7th]`: Improve layout for unit penalty screen
- `[F] [ 7th]`: Add `Education>Validate Jupyter` menu item to allow authors to validate and check Jupyter projects before publishing
- `[I] [ 7th]`: Update guides page navigation handing to mitigate content synchronisation issues
- `[I] [ 6th]`: Improve handling of submit jupyter assessments button
- `[I] [ 6th]`: Fix issue with show expected answer in html pages
- `[I] [ 5th]`: Improve validation to detect errors better in .codio-menu file
- `[I] [ 4th]`: Fix issue with symbols used in guides TOC
- `[I] [ 4th]`: Fix problem with Tools>Guides>Remotes menu item
- `[F] [ 4th]`: Add support to provide additional feedback to students when test fails in [standard code test](/content/authoring/assessments/assessments-standard-code-tests#errorfeedback)
- `[I] [ 1st]`: Improve messaging when stack used in class unit is deleted where unit was not re published

**February 2019**

- `[I] [28th]`: Fix issue in [upgrade course](/classes/unitmanagement/upgradecourse/) where long names used in module and/or units
- `[I] [28th]`: Fix layout issue in [standard code test](/content/authoring/assessments/assessments-standard-code-tests) assessment in html type of page
- `[I] [26th]`: Improve messaging when connecting project in [desktop app](/dashboard/desktopapp)
- `[I] [26th]`: Fix issue with Book permissions if a user is deleted
- `[I] [26th]`: Improve handling of redirection when unit run in LMS when students mark the unit as completed
- `[I] [26th]`: Add refresh button to [visualisation](/content/authoring/settings-actions/open-tabs/#tutor) assessment
- `[I] [26th]`: Fix problem for students being unable to view the content of the unit when marked as complete and visibility set to read only
- `[I] [26th]`: Update Light reading theme drop down in guides [global settings](/content/authoring/settings-actions/global/) to read only
- `[I] [26th]`: Make course/module owner brighter
- `[F] [25th]`: Add [visualisation](/content/authoring/settings-actions/open-tabs/#tutor) assessment support in [guides](/content/authoring/)
- `[F] [21st]`: Add support for promotion codes in [Self Invoicing](/dashboard/account/billing/)
- `[I] [20th]`: Update handling of soft tabs for python that were not handling backspace and delete buttons actions correctly
- `[I] [20th]`: Improve messaging on stack version creation if user has no access
- `[I] [19th]`: Improve messaging when publishing unit in a module that the user hasn't previously opened
- `[I] [18th]`: Improve handling of [course upgrade](/classes/unitmanagement/upgradecourse/) in class where there is a mix of public and private modules
- `[I] [15th]`: Enlarge size of confirmation dialogs text for better accessibility
- `[I] [15th]`: Remove [project settings](/ide/customization/project-settings/) from [desktop app](/dashboard/desktopapp)
- `[I] [15th]`: Improve messaging display when invalid dates entered for a class
- `[I] [15th]`: Update [download csv](/classes/monitor/progress#downloadcsv) to remove data of students removed from the class
- `[I] [15th]`: Improve guides settings to save and close from one click
- `[F] [15th]`: Add new guides [layout](/content/authoring/settings-actions/page/) including file tree with guides presented on the left hand side
- `[F] [14th]`: Add new assessment type: [Parson's puzzle](/content/authoring/assessments/parsons-puzzle)
- `[I] [12th]`: Review button colours on Class Admin screen
- `[I] [12th]`: Fix problem with returned grade score for book based units
- `[I] [12th]`: Fix issue with one attempt only message for assessments showing incorrectly when not enabled
- `[I] [12th]`: Fix problem with dark theme in FF65 on MacOS
- `[I] [11th]`: Improve handling of invitation of teachers into classes
- `[F] [ 6th]`: Fix problem with exporting project as zip
- `[I] [ 5th]`: Increase inactive timeout period to 60mins
- `[F] [ 4th]`: Add course permissions feature to [restrict access](/courses/manage/restrict-access/) to courses for teachers/students

**January 2019**

- `[I] [30th]`: Improve handling of project preview when waiting for services to start
- `[F] [29th]`: Add statistical collection for teachers/instructors to [export](/classes/classmanagement/export/) class activity
- `[I] [25th]`: Fix issue with changing stack in project
- `[I] [25th]`: Improve handling for Brightspace D2L integration where by if you have
```resource_link_id```field an endping URL of ```https://apollo.codio.com/lti/link_endpoint``` can be used
- `[I] [24th]`: Fix problem with unit ordering in course module when adding new units
- `[I] [23rd]`: Fix problem updating students units in class when archived
- `[I] [23rd]`: Fix problem with partial points implemented in [Advanced Code Test](/content/authoring/assessments/assessments-code-tests) assessment
- `[F] [21st]`: Add new guides [layout](/content/authoring/settings-actions/page/) for '3 panels without tree' with guides presented on the left hand side
- `[I] [21st]`: Fix problem with book settings not applied to class units
- `[F] [18th]`: Add ability to [clone](/classes/classmanagement/clone-class) content of existing class into a new class
- `[F] [18th]`: Add new [Custom Button](/content/authoring/page-edit/buttons#restorebutton) function to all users to restore current files in guides
- `[F] [17th]`: Add new guides [layout](/content/authoring/settings-actions/page/) for '2 panels without tree' with guides presented on the left hand side
- `[F] [16th]`: Add new [global](/content/authoring/settings-actions/global#guidesprotect) setting in guides to restrict students from opening/closing tabs in unit
- `[I] [16th]`: Fix problem with handling of .codiomenu on guides being closed
- `[I] [16th]`: Fix problem for self-pay students agreeing to [Student Consent](/dashboard/create/consent/)
- `[I] [11th]`: Fix problem with grade feedback dialogs not opening for students
- `[I] [ 8th]`: Improve contrast colour for confirmation code dialogs
- `[I] [ 8th]`: Update [RStudio](https://codio.com/home/stacks/dd949669-ae2d-480b-b2b7-44f69476a07c?tab=details) stack to be loginless
- `[I] [ 6th]`: Improve handling of syncronisation in  [desktop app](/dashboard/desktopapp)

**December 2018**

- `[I] [28th]`: Improve accessibility handling of next/previous buttons in guides
- `[I] [26th]`: Improve handling of user authentication when allow private static preview is enabled
- `[I] [24th]`: Improve handling of .git folder if it is in .guides/secure folder
- `[I] [17th]`: Add setting to manage students access to project based units when [completed](/classes/unitmanagement/settings#visibilitycomplete)
- `[I] [14th]`: Fix problem with [event listener](/content/authoring/page-edit/buttons#eventlistener)
- `[I] [14th]`: Add jupyter preview to student's grade feedback preview
- `[I] [14th]`: Improve guides for visually impaired users
- `[I] [14th]`: Add additional fields for students answers into the [download csv](/classes/monitor/progress#downloadcsv)
- `[I] [11th]`: Improve handling of [gigabox](/classes/classmanagement/giga/) allocation when run from a course
- `[I] [10th]`: Fix problem with Advanced Code Test with Custom language type and Allow Partial Points
- `[I] [ 7th]`: Add answer and rationale fields to [grading feedback](/dashboard/student/gradefeedback) for student dashboard
- `[I] [ 6th]`: Fix problem with global scripts in guides
- `[I] [ 5th]`: Improve [grading feedback](/dashboard/student/gradefeedback) for student dashboard
- `[I] [ 4th]`: Improve messaging when synchronising of files pulled/pushed to [desktop app](/dashboard/desktopapp)



**November 2018**

- `[F] [29th]`: Add [grading feedback](/dashboard/student/gradefeeback) for student dashboard
- `[F] [29th]`: Pass [grading feedback URL](/classes/lti/gradeinfo) to LMS systems
- `[I] [29th]`: Improve handling of line delimiters in .codio-menu file
- `[I] [29th]`: Improve synchronisation of files pulled/pushed to [desktop app](/dashboard/desktopapp)
- `[F] [22nd]`: Allow files/folders to be excluded from synchronisation with [desktop app](/dashboard/desktopapp#codioignore)
- `[I] [22nd]`: Fix problem with [customizing](/courses/authoring/#customizing-ide-menu) in [books](/books/introduction)
- `[F] [22nd]`: Add support for `python3` in unit tests
- `[F] [21st]`: Add separate fields for first and last name to [download csv](/classes/monitor/progress/)
- `[I] [21st]`: Fix problem with first time execution of advanced code test assessments
- `[I] [20th]`: Fix problem trying to start unit from a course
- `[I] [16th]`: Fix problem with delete confirmation dialog showing in error when deleting owned module
- `[I] [15th]`: Improve highlighting of differences in standard code text
- `[I] [14th]`: Improve sorting when accented characters used
- `[I] [13th]`: Fix problem with project permissions not updating when project renamed
- `[I] [12th]`: Update handling of autograde scripts in .guides/secure folder
- `[I] [ 9th]`: Improve handling of [Public/Private Settings](/dashboard/create/public_private/)
- `[I] [ 9th]`: Improve messaging for Allow Box Cloning
- `[I] [ 8th]`: Fix problem with scrolling in guides with assessments
- `[I] [ 6th]`: Fix problem with handling of spaces in [Standard Code Test](/content/authoring/assessments/assessments-standard-code-tests) output
- `[I] [ 6th]`: Fix sorting of [modules](/courses/manage/course-add/)
- `[I] [ 6th]`: Update message shown when units already graded by another teacher
- `[F] [ 5th]`: Add [Autograde Free Text](/content/authoring/assessments/assessments-autofree) assessment

**October 2018**

- `[I] [31st]`: Update guidelines for privacy settings for Safari 12.0 browser
- `[I] [29th]`: Fix problem accessing grading in students units
- `[F] [29th]`: Allow use of accented characters
- `[I] [26th]`: Fix issue with users able to update project settings when not having admin rights
- `[I] [26th]`: Improve handling of guide editor
- `[I] [24th]`: Fix focus problem when adding assessments to guides page
- `[I] [24th]`: Improve tab handling in pop up dialogs
- `[I] [23rd]`: Add function to hide Codio logo icon when [customizing](docs/content/authoring/playmode/#customizetopmenu) top menus for students
- `[I] [19th]`: Fix rendering of bold text in guides for Firefox browser
- `[I] [19th]`: Fix problem using tabs in Firefox
- `[F] [18th]`: Add new user/project preference `navigateWithinSoftTabs` to simplify navigation when soft tabs are used
- `[I] [18th]`: Fix problem with loss of focus when in split view mode editing guides
- `[I] [18th]`: Fix problem in guides saving close tab state
- `[I] [18th]`: Add text description that is visible on mouse over when the icon gets focus.
- `[I] [18th]`: Fix problem rendering output of code tests on Mac OS
- `[I] [15th]`: Fix problem unpacking projects
- `[I] [15th]`: Fix problem with page focus in guides
- `[I] [15th]`: Improve menu handling when [customizing](docs/content/authoring/playmode/#customizetopmenu) top menus for students
- `[F] [10th]`: Add function to automatically release grades in new classes. See [organisation release grades](/dashboard/create/orgreleasegrades) for more information
- `[F] [ 9th]`: Add ability to change all students completed unit to incomplete. See [force marked as complete](/classes/unitmanagement/settings-info/complete-unit/) for more information.
- `[I] [ 3rd]`: Fix problem when executing commands in [Guides](/content/authoring/page-edit/buttons/) that contain brackets
- `[F] [ 3rd]`: Add [organisation](/dashboard/create/orgcontacturl) and [class](/classes/classmanagement/classcontacturl) contact url for students to be able to raise questions, seek assistance from your preferred area (forums/LMS discussion areas etc)
- `[F] [ 3rd]`: Add ability to sort students in classes by first or last names

**September 2018**

- `[I] [30th]`: Fix problem with [Multiple Choice](/content/authoring/assessments/assessments-mcq/) assessments not showing students correct answers on submission
- `[I] [26th]`: Fix layout of media page in guides settings
- `[F] [26th]`: Add feature for IDE top menu to be [customized](docs/content/authoring/playmode/#customizetopmenu) for student view when running guides
- `[I] [24th]`: Fix problem with [Self Invoicing](/dashboard/account/billing/)
- `[I] [24th]`: Improve messaging of local file changes when disconnecting project in [desktop application](/dashboard/desktopapp)
- `[I] [20th]`: Fix problem embedding content in [Canvas](/classes/lti/canvas)
- `[I] [20th]`: Improve [download csv](/classes/monitor/progress#downloadcsv) content adding students email address
- `[I] [20th]`: Remove character limitation for [grading](/classes/monitor/grading/) comments
- `[I] [15th]`: Improve [download csv](/classes/monitor/progress#downloadcsv) content, adding 2 new fields for Points and Max Points
- `[I] [13th]`: Fix problem for book based units when disabling units in class module
- `[F] [13th]`: Add ability for 'mark as completed' to be [disabled](/classes/unitmanagement/settings#disablecomplete) for individual units in classes
- `[I] [12th]`: Remove https preview warning to avoid confusion for students
- `[I] [12th]`: Improve handling of fullscreen button in frames
- `[I] [12th]`: Improve Usability handling in menus
- `[I] [11th]`: Fix problem with changing state of 'use submit buttons' setting in guides
- `[I] [11th]`: Fix problem when adding projects to module with reserved words
- `[I] [10th]`: Update explanatory text for Visibility Summary for Course and Modules
- `[I] [10th]`: Fix problem with Guides Table of Contents
- `[I] [10th]`: Improve handling of LTI full screen support
- `[I] [10th]`: Improve handling of empty points field in Grade book assessment
- `[I] [ 5th]`: Add example bash script for [autograding on completion](/classes/unitmanagement/settings-info/autograde/#examplebashscript)
- `[I] [ 5th]`: Improve handling of duplicate file warning
- `[I] [ 4th]`: Improve colour contrast on [Quick Open](/ide/features/quick-open/) and [Command Bar](/ide/features/command-bar/)
- `[I] [ 4th]`: Fix problem with handling of cancel button actions in project settings area
- `[I] [ 3rd]`: Add support for `lis_course_offering_sourcedid` as a unique course identifier in LMS systems

**August 2018**

- `[I] [29th]`: Update handling of panel widths when guides is collapsed/reopened when in 3 column layout
- `[I] [29th]`: Fix problem with [Quick Open](/ide/features/quick-open/) handling in screen readers
- `[F] [29th]`: Added [Self Invoicing](/dashboard/account/billing/) for University and School organisation
- `[F] [29th]`: Added support for [LTI Constant URLs](/classes/lti/lticonstanturl) and [LTI Class fork](/classes/lti/lticlassfork)
- `[F] [22nd]`: Added [Codio LTI App](/classes/lti/ltiapp) to improve ease of integrating Codio with LMS systems
- `[I] [16th]`: Fix issue with [Custom Buttons](/content/authoring/page-edit/buttons/) incorrectly handling
- `[F] [ 9th]`: Add ability to use current file in [debugger](/ide/features/debugging#debugfilepath) targets
- `[I] [ 7th]`: update handling of [Crunch](/misc/schoolscontent/crunch/) projects
- `[I] [ 7th]`: Improve visibility of form elements and handling of [Quick Open](/ide/features/quick-open/) dialog
- `[I] [ 7th]`: Update menu handling for screen readers
- `[F] [ 7th]`: Add additional 3 column [layout](/content/authoring/settings-actions/page/) options
- `[I] [ 4th]`: Fix problem with terminal opening in guides
- `[I] [ 2nd]`: Add support for manual grading for [nbgrader](/classes/monitor/nbgrader)

**July 2018**

- `[I] [26th]`: Improve handling of [Book](/books/introduction) deletion
- `[F] [26th]`: Add typescript support for [desktop application](/dashboard/desktopapp)
- `[F] [18th]`: Improve handling of enabling/disabling of class units
- `[F] [17th]`: Fix issue with cloning [Partial Point Rubric](/classes/monitor/grading-freetext#partialpointrubric) in IE browser
- `[F] [13th]`: Add support for [nbgrader](/classes/monitor/nbgrader)
- `[I] [12th]`: Improve handing of copy file actions
- `[I] [11th]`: Improve handling of cookie consent
- `[I] [11th]`: Fix issue in counter for grading of book based units
- `[F] [10th]`: Allow [Partial Point Rubric](/classes/monitor/grading-freetext#partialpointrubric) to be cloned from other units
- `[I] [ 3rd]`: Update handling of Edge browser integration with LMS systems
- `[I] [ 3rd]`: Improve [plagiarism checker](/classes/plag/plag-start/) adding new filters that can be set
- `[I] [ 2nd]`: Fix problem with tab focus being lost in guides
- `[I] [ 2nd]`: Fix problem when removing units from module/course in a class

**June 2018**

- `[I] [29th]`: Improve visibility of active buttons in tabs
- `[I] [29th]`: Improve export class data to better handle any archived units
- `[I] [29th]`: Fix problem with layout for manual grading in IE browser
- `[I] [27th]`: Fix problem with adding user project permissions
- `[F] [22nd]`: Add STACK file type in [Math assessment](/content/authoring/assessments/assessments-math/) authoring and YAML validation.
- `[I] [21st]`: Improve error message handling of publishing of books with broken .json files
- `[I] [21st]`: Improve teacher view of pinned units
- `[F] [20th]`: Add [Partial Point Rubric](/classes/monitor/grading-freetext#partialpointrubric) for manual grading
- `[I] [19th]`: Improve behaviour of free text assessment
- `[I] [19th]`: Update unit publishing to ignore assessmentsAnswers.json file
- `[I] [19th]`: Update handling of assessment submiit button
- `[F] [15th]`: Add [collapse on start](/content/authoring/settings-actions/global#guidescollapse) for guides
- `[I] [15th]`: Improve handling of [exporting class data](/classes/classmanagement/export/)
- `[I] [13th]`: Improve support for keyboard and screen readers
- `[I] [13th]`: Update handling of dynamic port protection
- `[I] [ 5th]`: Add overview video for [desktop application](/dashboard/desktopapp)
- `[I] [ 4th]`: Improve handling of mark as completed process for students

**May 2018**

- `[I] [31st]`: Improve handling of autocomplete when searching for users to share projects
- `[I] [28th]`: Improve handling of local deleted files and folders in [desktop application](/dashboard/desktopapp)
- `[I] [28th]`: Improve handling of assessment points if changed when updating unit in class
- `[I] [28th]`: Fix issue with [plagiarism](/classes/plag/) in book based units
- `[I] [24th]`: Improve handling of `exit` terminal commands
- `[I] [21st]`: Fix problem with teachers opening own last version of unit in [courses](/courses/units/edit/)
- `[I] [21st]`: Fix issue with restarting [guides](/ide/tools/guides/) after changing settings
- `[I] [21st]`: Improve message handling of errors in [debugger](/ide/features/debugging/)
- `[I] [21st]`: Fix issue for students opening list of units
- `[I] [18th]`: Fix issue with updating stack causing issue publishing new version of course unit
- `[F] [18th]`: Add support for timeout period in [advanced code tests](/content/authoring/assessments/assessments-code-tests/)
- `[I] [18th]`: Improve layout for student grading screens
- `[I] [18th]`: Update subscription information shown when plan expires
- `[I] [16th]`: Teachers in Self-Pay organisations no longer require subscription
- `[F] [14th]`: Restrict preview of box url to owners of the box. See [Project Settings](/ide/customization/project-settings/) for more information
- `[I] [14th]`: Improve handling of file and directory names in [desktop application](/dashboard/desktopapp)
- `[F] [ 8th]`: Add support for Python and Javascript in [advanced code tests](/content/authoring/assessments/assessments-code-tests/)
- `[F] [ 4th]`: Improve handling of tab focus when returning to a unit
- `[I] [ 4th]`: Fix issue with project list last accessed sorting
- `[F] [ 4th]`: Add [Grade Book](/content/authoring/assessments/assessments-gradebook) assessment


**April 2018**

- `[F] [27th]`: Add support for Java and Ruby in [advanced code tests](/content/authoring/assessments/assessments-code-tests/)
- `[I] [27th]`: Improve handling of downloading files in private projects
- `[I] [27th]`: Improve handling for [language server protocol](/ide/boxes/installsw/langserver/)
- `[I] [24th]`: Improve accessibility to support dialog actions accessible from keyboard
- `[I] [24th]`: Fix issue with [replace](/ide/editing/search-replace/) in projects
- `[I] [20th]`: Fix grading issue with [rubric templates](/classes/classmanagement/rubric/)
- `[I] [20th]`: Improve messaging for errors when synchronising units in [desktop application](/dashboard/desktopapp)
- `[I] [19th]`: Fix problem with invite teacher process
- `[I] [16th]`: Improve handling of unit/project descriptions in [desktop application](/dashboard/desktopapp)
- `[I] [14th]`: New [desktop application](/dashboard/desktopapp) allowing a local code workspace to synchronize with a Codio box.
- `[I] [13th]`: Improve performance of X-server
- `[I] [13th]`: Improve handling of double clicking on submission of assessments
- `[I] [ 4th]`: Improve visualisation of navigation options in teacher dashboard
- `[I] [ 2nd]`: Update IDE shortcut key for accessing menu (to F10)
- `[I] [ 2nd]`: Update handling of [download csv](/classes/monitor/progress#downloadcsv) to better handle characters in grading comments

**March 2018**

- `[I] [29th]`: Update handling of [books](/books/introduction) requiring [guides](/content/authoring) before [publishing](/books/publish)
- `[I] [27th]`: Improve IDE menu items for better keyboard accessibility
- `[I] [27th]`: Update structure of [exporting class data](/classes/classmanagement/export/)
- `[I] [27th]`: Improve memory handling for [language server protocol](/ide/boxes/installsw/langserver/)
- `[I] [23rd]`: Improve handling of focus when switching panels using [keyboard shortcuts](/ide/customization/codio-prefs/)
- `[I] [20th]`: Improve messaging when stack/pack owner is changed
- `[F] [20th]`: Allow adjustment of [unit penalties](/classes/unitmanagement/settings-info/penalties#adjustdeadline) for individual students
- `[I] [19th]`: Fix sorting of units in classes
- `[I] [16th]`: Fix problem starting [Plagiarism tool](/classes/plag/plag-start/)
- `[I] [15th]`: Fix problem with [export class data](/classes/classmanagement/export/) for old classes
- `[I] [12th]`: Fix issue with image handling when editing/creating [starter packs](/project/packs)
- `[I] [ 7th]`: Improve handling of course updates in classes
- `[I] [ 7th]`: Fix issue with class dashboard in IE browser
- `[F] [ 6th]`: Add support for [searching/filtering](/classes/classmanagement/search-class) of classes
- `[I] [ 6th]`: Fix problem for teachers opening latest version of books
- `[I] [ 5th]`: Improve handling for opening of large project warning
- `[I] [ 5th]`: Fix issue with terminal reconnections

**Febuary 2018**

- `[I] [28th]`: Update handling of book unit switching
- `[I] [26th]`: Fix issue with unit reloading for students
- `[F] [26th]`: Expand [Gigabox](/dashboard/create/gigaboxes/) options to include 1GB, 2GB, 8GB,16GB and GPU (for GPU-accelerated instances) boxes.
- `[I] [26th]`: Fix issue with [regrade complete](/classes/unitmanagement/settings-info/autograde#regrading)
- `[I] [13th]`: Fix issue with [MCQ](/content/authoring/assessments/assessments-mcq)/[FITB](/content/authoring/assessments/assessments-fitb) assessments not showing correct answers
- `[I] [13th]`: Fix issue with undo/redo
- `[I] [12th]`: Fix issue with file tree not updating correctly when files created via terminal
- `[I] [12th]`: Fix issue with unit settings changing when [Upgrade Course](/classes/unitmanagement/upgradecourse/) is run
- `[I] [12th]`: Fix issue with icon handling
- `[F] [ 9th]`: [Exporting LTI settings](/classes/lti/keys#exportlti)
- `[I] [ 9th]`: Fix problem with txt files not opening correctly
- `[F] [ 8th]`: [Export class data]((docs/classes/classmanagement/export/) enabling all class data, including students workspaces to be exported.
- `[I] [ 5th]`: Fix issue with book units
- `[I] [ 5th]`: Fix issue publishing books after changing stack
- `[I] [ 1st]`: Fix issue with content being lost when switching browsers

**January 2018**

- `[I] [24th]`: Fix problem with Test students in Self-Pay organisations
- `[I] [24th]`: Update handling of Autocomplete in Language Server Protocol
- `[I] [22nd]`: Improve Run Button so that the command name is used for run button command as terminal name
- `[I] [22nd]`: Fix issue with [stack exclusions](/project/stacks/exclusions/
- `[I] [22nd]`: Fix issue when the wrong students answer is shown when switching between students projects
- `[I] [19th]`: Fix issue with assessments on [Reset Unit](/classes/unitmanagement/settings-info/reset-unit/)
- `[I] [19th]`: Implement completion and hover support for [Language Server Protocol](/ide/boxes/installsw/langserver)
- `[I] [16th]`: Fix problem for teachers not being able to edit course/module units
- `[I] [15th]`: Always use tabs regardless of user/project settings when using Makefile
- `[I] [ 4th]`: Fix issue with guides table of contents focus on open
- `[I] [ 4th]`: Improve handling of books when switching between book units

**December 2017**

- `[I] [21st]`: Fix problem with advanced code test output
- `[I] [20th]`: Update guides table of contents so current selection is always visible in large tree
- `[I] [18th]`: Executing `exit` command in terminal or guides content will automatically close the terminal tab
- `[I] [14th]`: Improve handling of application of grades for large classes
- `[I] [11th]`: Update handling of [Free Text Assessment](/content/authoring/assessments/assessments-free)] submissions
- `[I] [11th]`: Update handling of [Upgrade Course](/courses/units/update-class) for Firefox browser
- `[I] [ 8th]`: Fix duplicate messaging issue when deleting units in course modules
- `[I] [ 6th]`: Improve handling of [Unit Penalties](/classes/unitmanagement/settings-info/penalties)
- `[I] [ 4th]`: Update messaging when removing modules from courses
- `[I] [ 1st]`: Update helper text for stack version change in units
- `[I] [ 1st]`: Update handling of layout change
- `[I] [ 1st]`: Fix issue with changes to metadata.json files not saving correctly

**November 2017**

- `[I] [30th]`: Update definition of incorrect points for multiple choice assessments
- `[I] [30th]`: Improve messaging highlighting [Public/Private Settings](/dashboard/create/public_private/) when creating Courses/Modules/Books/Projects/Stacks/Starter Packs
- `[I] [28th]`: Fix XSS image issue
- `[I] [28th]`: Improve handling of teachers joining class as student through LTI
- `[I] [28th]`: Simplify [creation of book based units](/courses/units/unit-add/#createbook)
- `[I] [28th]`: Update [Unit Duration](/classes/unitmanagement/settings-info/unit-duration/)
- `[I] [28th]`: Improve [student submission options](/content/authoring/assessments/submitcomplete)
- `[I] [28th]`: Update Guides [global](/content/authoring/settings-actions/global) settings
- `[F] [27th]`: Add functionality to change/review [JUnit](/ide/features/junit/) timeout settings
- `[F] [24th]`: [Unit Penalties](/classes/unitmanagement/settings-info/penalties) to allow teachers/instructors to specify grading deadlines and associated penalties
- `[I] [24th]`: Update Book publishing to allow pages to be selected
- `[I] [15th]`: Fix issue when changing stack for ad-hoc projects in a class
- `[I] [15th]`: Update guides collapse button handling when layout set to 1 panel
- `[I] [14th]`: Fix handling of book based units opening for students
- `[I] [14th]`: Block deletion of a course that contains modules
- `[I] [14th]`: Improve warnings when deleting units and modules
- `[I] [13th]`: Fix issue publishing units in IE browser
- `[I] [13th]`: Fix icon for Advanced Code Tests
- `[I] [13th]`: Fix handling for teachers opening students project assessments
- `[I] [09th]`: Fix TOC scrolling issue in guides for Firefox and IE browsers
- `[I] [07th]`: Improve Mark as Completed process to provide warning of assessments in the unit not completed
- `[I] [07th]`: Update teacher dashboard for grading, allowing teachers to filter to find students and by status of unit. See [Grading project work](/classes/monitor/grading/) for more information
- `[I] [03rd]`: Fix terminal light theme to show cursor
- `[I] [03rd]`: Fix problem where teachers are not always able to view content of 3 blue dot menu in the students listing
- `[I] [03rd]`: Update Codemirror components and fix soft tabs
- `[I] [02nd]`: Fix problem when Guides TOC opened and closed to cause terminal to resize incorrectly

**October 2017**

- `[I] [26th]`: Update message handling for change stack for units in a course
- `[I] [25th]`: Improve stack creation from the IDE
- `[I] [24th]`: Update unit action to also update codio files (e.g .codio, .settings)
- `[I] [18th]`: Update saving of draft free text assessments
- `[I] [16th]`: Fix problem for students answering assessments
- `[I] [16th]`: Fix problem with custom assessment grades not being passed correctly
- `[I] [13th]`: Improve grading for [Free text assessments](/content/authoring/assessments/assessments-free#freetextassessments) supporting comment field and easy navigation to other students and other assessments for the currently selected student
- `[I] [12th]`: Update handling of symbols in free text assessment previewing
- `[I] [12th]`: Improve class navigation for teachers, click units tab to return to main unit listing
- `[F] [11th]`: Unify guides/books [table of contents](/content/authoring/toc/)
- `[I] [11th]`: Fix issue with creating projects importing from zip file
- `[I] [10th]`: Fix problem with books upgrade to class
- `[I] [10th]`: Improve handling of size of free text assessment field for student
- `[I] [09th]`: Show points assigned for free text assessments to students within the unit when grades released
- `[F] [06th]`: Add user preference editor setting to show a vertical ruler in files. `[ruler]=xx`
- `[I] [06th]`: Improve handling of unit ordering when adding or updating a course in a class to match the order set in the course
- `[I] [06th]`: Add [courses overview](/courses/introduction#courseoverview) video
- `[I] [06th]`: Add [ownership and visibility of courses](/courses/introduction#coursevisibility) video
- `[I] [06th]`: Add [working with stacks in courses](/courses/introduction#coursestacks) video
- `[I] [06th]`: Add [account settings overview](/dashboard/account/obg-overview) video
- `[I] [06th]`: Add [dashboard overview](/dashboard/obg-overview) video
- `[I] [05th]`: Improve warnings for unsaved changes when authoring [guides](/content/authoring/introduction)
- `[I] [05th]`: Ignore .git and .hg files in [search and replace](/ide/editing/search-replace/) actions
- `[I] [04th]`: Improve handling of students ability to amend answer submissions during completion of a unit
- `[I] [04th]`: Fix problem so students can not create courses,modules and units
- `[I] [04th]`: Improve [grading free text](/classes/monitor/grading-freetext/) to show confirmation message when applying
- `[I] [04th]`: Improve stack handling when [publishing](/courses/units/publish/) units
- `[I] [04th]`: Improve [upgrade course](/classes/unitmanagement/upgradecourse/) process
- `[F] [02nd]`: Release of [books](/content/authoring/books/)
- `[I] [02nd]`: Allow LMS students to access already started units from Codio dashboard
- `[I] [02nd]`: Redirect LMS users back to their LMS when marking unit as complete


**September 2017**

- `[I] [29th]`: Update Recommended Course content to resolve reported issues in assessments
- `[I] [29th]`: Update messaging if cookies not allowed.
- `[I] [28th]`: Reorganization of documentation structure.
- `[F] [27th]`: Changes to [terms of use](/legal/terms)
- `[I] [22nd]`: Improve handling for publishing new stack versions
- `[I] [21st]`: Improve handling of student output in standard code assessment
- `[I] [21st]`: Improve handling of students starting units while new stack version is being updated
- `[I] [21st]`: Update the handling of student data when removing modules from classes
- `[F] [19th]`: Update documentation to advise on [cookie requirements](/dashboard/account/cookies)
- `[I] [18th]`: Fix students seeing grading stats before grades are released
- `[I] [18th]`: Fix Teacher Invitation list in classes showing test students
- `[I] [15th]`: Update handling of Upgrade course for IE11 browser
- `[I] [14th]`: Improve teacher dashboard view to show date students completed units and answers submitted
- `[I] [14th]`: Improve handling for accessing binary files
- `[I] [12th]`: Allow teachers to grade draft answers
- `[I] [12th]`: Improve create stack from current project process
- `[I] [12th]`: Improve the updating of manual grading actions for teachers
- `[I] [11th]`: Improve message handling if student working with stack unit they do not have access to.
- `[I] [11th]`: Refactor Guides buttons changing Settings to smaller gear icon
- `[I] [08th]`: Remove version entry field from stack version and just auto-increment
- `[F] [08th]`: Added preview type for [free text assessment](/content/authoring/assessments/assessments-free)
- `[I] [07th]`: Update teacher dashboard for [free text assessment grading](/content/authoring/assessments/assessments-free#grading-free).
- `[I] [07th]`: Add confirmation step when unit is marked as complete by students.
- `[F] [02nd]`: Add student [IP consent](/dashboard/create/consent).
- `[I] [01st]`: Improvement to publishing units allowing for simpler handling of [stack](/project/stacks/stack-overview) changes.
- `[F] [01st]`: [Upgrade course](/classes/unitmanagement/upgradecourse). If any updates to the course(s) used in your class are detected, you can upgrade the content to the latest version within the class. Update unit option removed from courses in a class.

**August 2017**

- `[F] [30th]`: Support pug for syntax highlighting (mapping to jade).
- `[I] [25th]`: Review field ordering for [assessments](/content/authoring/assessments).
- `[I] [25th]`: Change [public/private](/dashboard/create/public_private) settings to private by default.
- `[F] [23rd]`: Add **go to line** hotkey (default **Alt+G**).
- `[I] [17th]`: [Invite teachers](/classes/classmanagement/addteachers) into a class with email invitation.
- `[I] [16th]`: Update guide icons and add new [callout blocks](/content/authoring/page-edit/edit).



We implemented the changelog page in August, 2017 so this is as far back as we go.

