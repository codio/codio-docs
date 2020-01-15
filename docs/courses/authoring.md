---
title: Content Authoring with Guides


---
## Introduction
Codio Guides is a powerful authoring tool creating rich tutorial and instructional content as well as assessments. Here are a few of the key features.

- Each page of content can [control the layout of the IDE](/courses/settings-actions/#page)
- [Open and close files, terminal windows and html page previews](/courses/settings-actions/#open-tabs)
- [Launch commands](/courses/authoring/#openclose-tabs-from-content) from the content page and pipe terminal output into the content page
- Create manually and automatically graded [questions and assessments](/courses/assessments/)
- Manage a [table of contents](/courses/authoring/)

### Where is it?
You can launch the content authoring from

- The menu, **Tools->Guide->Edit**
- The button at the top of the file tree as shown below

![Start Authoring](/img/guides/startguides.png)

## Project, course assignment or book?
Before you start to author content you should be aware of the three different places you can create content using guides. Let's look at each of the three ways to create content and why you might choose each one.

### Projects
A [project](/project/projects/#what-is-a-project) is simply a standalone Codio box. It may or may not have guides content. Projects are to be found in the **Projects** page on the main Codio dashboard.

![My Projects](/img/projectslist.png)


You would want to choose a project as the place to create your content if you have individual, ad hoc assignments or examples that do not constitute more extensive coursework or are not part of a larger series of associated projects.


A project can be [assigned to a course](/classes/unitmanagement/assign-project) at any time. All the students in that course will then be able to access that project and its content.


There are drawbacks to using projects to assign to students. If you have related projects and the number of projects grows, it can be hard to quickly find a project you want to assign to a course. There is also no way to arrange your projects into chronological order. Courses and books offer excellent solutions to this organizational problem.


### Assignments
An [assignment](/courses/classes/#assign-a-project-to-the-course) is essentially the same as a project. The only difference is that your project assignments are located in the courses area in the main Codio dashboard and accessible to other teachers who can edit the item and to students in the course. Assignments are very easy to locate as they are tidily organized within the course module they belong to. You can also arrange your assignments within a course module.



![Courses](/img/courseslist.png)

You would typically use an ssignment if either of the following apply.

- You have a logically related series of projects that you want to assign to a student that form a course module.
- You have a collection of assessments relate to a course that are used for homework, lab assessments, projects etc.

A course allows you to subdivide your course into modules and then chronologically arrange your assignments within your modules. When you create a course, you have to create at least one module. A module does nothing special other than contain assignments and are simply a nice way to group your assignments.

There is one minor drawback to project based assignments that you should be aware of. If students are working with a project assignment and want to look at tutorial content that is contained in another assignment, they have to switch assignments. This can take several seconds and can be irritating during a revision phase when they want to frequently switch assignments. For this reason, we created the book, which we will look at next.


### Book assignments
A [book](/project/books/) is intended to replicate a hard-copy book. It contains a lot of content, often an entire course of content. Let's look at the case of a course called **Introduction to Java**. If this was a regular book, it might contain 500 pages. If you used project assignments to create this content, you might end up with a very large number of assignments, say 50.  As we mentioned above, when students are revising and want to randomly move between different assignments to review content, the can get frustrated by the time it takes to switch assignments.

A book addresses this issue by offering sophisticated table to contents management with nested chapters and sections. As a result, you can put all of your content into a single book, with a single box running in the background. This means that when students want to revise, they are able to move to any location in the book without any delays.


However, faculty will still often want to teach a course based on a book. To do this, you use a course but rather than creating a project assignment, you create a book based assignment. This allows you to point to any parts of a book for that assignment. Students can see the parts of the book that the assignment related to in the table of contents. The course and course manager is also able to specify that parts of the book not mapped to by the assignment either a) can be seen or b) cannot be seen in the course. See [Book Visibility](/courses/classes/#book-visibility) for more information.


![Books](/img/bookslist.png)

### Book or project assignment?
It can still be a little confusing whether you should use a book based assignment or a project assignment, so here are some typical use cases.

- **Project assignments** - use when you have a collection of assessments with no or minimal tutorial content. Best used for homework or lab type assessments. If a student is not going to regularly switch assignments in a single session.

- **Book assignments** - use for tutorial content, examples and non-critical assessments. If students, when looking at one assignment, need to review content in another assignment, then a book is preferable as they can access all parts of the book if they need to.


Note that you can mix both book and project assignments in a course.
## Author and student views
The experience when authoring differs from that of a student. Students are not able to view the authoring tools. When they start a assignment or project, if there is content present, it will automatically be shown. The author can also specify whether the student is able to close the content or not.

If you are an author, you will often want to view the content as a student will see it.

### Editing
Only an author is able to edit the content. Students and users with read-only rights will not be able to. [Click here](/courses/authoring/#page-editing-overview) for details on page editing.

### Preview
You can press the preview button in the top right area of the edit pane. This will switch to preview mode. You can then switch back to editor mode by pressing the **Editor** button.

You can also start the preview mode from the **Tools->Guide->Play**.

Finally, there is also a button at the top of the file tree that launches the content.


![StartGuides](/img/guides/startguides.png)

<a name="customisetopmenu"></a>
### Customising IDE menu
To simplify the educational process for students, the top menu can be customised to remove options from students that they cannot override.


Through a `.codio-menu` file, a teacher can specify what menu items should be hidden.
Example:

```json
{
    "Logo": false, // hides the Codio logo
	"Codio": false, // hides the Codio menu dropdown
    "Project": {
         "Permissions": false // hides the Permissions option in the Project menu dropdown
    },
    "Help": false, // hides the Help menu dropdown
    "Run": false, // hides the Run menu dropdown
    "Preview": false, // hides the Preview menu dropdown
    "Debugger": false, // hides the Debugger menu dropdown
    "Status": false // hides the Status icon, user Avatar, user name and exit button
}
```

**Please note that if setting Status=false, students will need to use the 'Back to Dashboard' button shown on the last page of the guides to return to their dashboard area**

Setting up .codio-menu file:

![EditorMode](/img/guides/codiomenu.png)

Menu items that the student will see:

![PreviewMode](/img/guides/codiomenupreview.png)

The student will not see the .codio-menu file to be able to edit/change it.

### Player Options
![authtoken](/img/guides/playmode.png)

When the content is rendered to a student, various options can be controlled

- The **Collapse table of contents**  button allows the user to collapse the content pane to provide larger working area if required.
- **Navigation Buttons** allows the user to navigate forward/backward in the guide.
- **Settings** allows the user to view the assignment as a teacher (e.g. show solution information hidden to students) change the Theme (light/dyslexic), Mark as Complete, change the font size, reset both the theme and fonts and to restore the current files (see below). See [Dyslexia Support](/students/#dyslexia-support) section
- **Show/Hide Section List** Hamburger Icon allows the user to show/hide the section list.

#### Restore current files
The Restore Current Files feature is a great way to reset/restore any files on that page to its initial state after hacking sample code around. Files can be restored from the menu as shown below.

![authtoken](/img/guides/reset.png)


## Table of contents management
Once you are in the Codio IDE, you are able to create and manage content. There are two ways to access the Codio Guide.

-  Press then right arrow at the top of the file tree.

![startauthoring](/img/guides/startguides.png)
- From the menu, select **Tools->Guide->Edit**.

### Editing page content and actions
Please refer to the following pages for details in how to edit page content and control page actions.

- [Page Editing](/courses/authoring/#page-editing-overview) for details on how to edit a pages content using markdown or HTML, hiding folders and other actions.
- [Settings and page actions](/courses/settings-actions/#page) : Opening and closing files, panel configuration and other settings

### Editing content
The image below highlights the main components of the editing page.

![Edit Book](/img/guides/editbook.png)

### Accessing the table of contents
To open and close the table of contents, press the **Hamburger Icon** at the top right. From here you can add and organize content.

<a name="chapters"></a>
### Chapters, sections and pages
A guide is comprised of pages organized into chapters and sections. A chapter is a top level item only. Sections can be placed at any location and nested to any depth.

You can add a new chapter, section or page by

- right clicking on the appropriate location within the table of contents.
- by first selecting the item in the table of contents below which the new element should be added and then pressing one of the buttons underneath the table of contents.

### Adding content to a chapter or section
By default, chapters and sections are passive and do not have page content assigned to them. However, you can add content by right-clicking the item and then selecting **Add content** from the menu.

If you want to reverse the procedure, you right click and select **Remove content**.

### Multiple selection
You can multi-select pages as follows

- Select an item then `shift+click` on a latter item to select all pages between the two items. This only works for items at the same level.
- Use `ctrl+click` (PC/Linux) or  `cmd+click` (Mac) to multi select individual pages.

<a name="dragdrop"></a>
### Drag and Drop
It is very important to understand how drag and drop works within a table of contents as it is very powerful but can be confusing if you don’t understand that drop process. Drag and drop works with individual or multiple selected pages.

What is unusual about our drag and drop support is that the destination folder location is determined by where you drop.

- If you drop in the top portion of the target item, the selection will be dropped above it at the same level.
- If you drop in middle portion of the target item, the selection will be dropped within it if the target is a section.
- If you drop in the lower portion of the target item, the selection will be dropped below the target at the same level.

## Page editing overview
To create new content or to edit existing content, go to the **Tools->Guide->Edit** menu option.

Use the layout modes to switch between editor, preview, and split view modes.

When in preview mode, you can quickly switch back to editor mode by selecting the **Editor** button:

![authtoken](/img/guides/editor.png)

### Anatomy of the content editor
Below is a screenshot of the editor with the main components highlighted.
![overview](/img/guides/overview.png)

### Editor settings
Editor settings gives you access to the key functions:

#### Page
  - **[Layout](/courses/settings-actions/#page)** allows you to specify the panel layout you want to choose for this section,
  - **[Show Folders](/courses/authoring/#hiding-folders)** allows you to define specific folders in your project that you wish to be visible when the current section is displayed,
  - **[Close Tabs](/courses/authoring/#openclose-tabs-from-content)** allows you to close all tabs open from previous section,
  - **Set Section as Chapter** allows you to set the section as a chapter in your content,
  - **[Teacher Only](/courses/authoring/#teacher-only-content)** allows you to show content that only teachers are able to see.
  - **Content Type** allows you to write your content in either [Markdown](/courses/authoring/#markdown-content-editing) or [HTML](/courses/authoring/#html-content-editing)

#### [Open Tabs](/courses/settings-actions/#open-tabs)
This allows you to specify:

  - which files you want to automatically open when the current section is displayed,
  - Preview (including external websites),
  - Open a Terminal window (including running a terminal command),
  - which lines (if any) you wish to highlight within each file.


#### [Assessments](/courses/assessments/#assessments)
This allows you to set up assessments.

#### [Media](/courses/authoring/#adding-media)
This allows you to play audio files within your project.


#### [Global](/courses/settings-actions/#global)
![Global Settings](/img/guides/globalsettings.png)

- **Scripts** allows you to point to one or more `.js` files in your project (usually you would have this somewhere within the `.guides` folder) that is run when the page is shown. This is especially useful when interacting with a button in a page of content.
- **Theme** allows you to select the default theme for people viewing the content. We currently have a light theme and will be adding a dark theme shortly. Dyslexic users can also choose a special theme from the Settings drop down in the content player.
- **[Lexicon Topic](/resources/schoolscontent/lexikon/)**  if you use this option, an icon will appear in the toolbar that will load the Lexikon window with the selected topic automatically selected. Students can still access the Lexicon from the **Tools>Lexicon** menu (unless of course you are restricting the top menu available to them)
- **Suppress page numbering** allows you to suppress the section page numbers when in Play Mode.
- **Hide Menu** allows you to hide the main Codio menu items in the IDE (Codio/Project/File/Edit etc) when the assignment is run in a [course](/courses/classes/#assign-a-project-to-the-course).
- **Allow guide to be closed** allows students to be able to close the content. It can be restarted by selecting the Start icon in the file tree:

![StartGuides](/img/guides/startguides.png)

- **Use submit buttons** see [Student submission options](/courses/assessments/#student-submission-options) for more information
- **Use mark as completed** see [Student submission options](/courses/assessments/#student-submission-options) for more information
- **Collapsed on start** starts the assignment with the guides pane collapsed. Students can show the content clicking on the hamburger icon on the right
![OpenGuides](/img/guides/guidecollapse.png)
- **Hide Section List** hides the sections list in your content for the students. 
- **Hide Back to Dashboard button** hides this button that would otherwise show on the last page of the guides.
- **Protect Layout** prevents students from closing files in tabs.

## Authoring guidelines
Here are some guidelines for creating good quality content.


### Markdown
The best way to author content is using markdown. It is extremely easy to write content that renders very nicely and without having to fiddle with HTML. You can embed HTML snippets into a markdown as well where you need full control.

We have a Cheat Sheet project that you can use to see the full capabilities. To fork this starter pack into your own account, please [click here](https://codio.com/home/starter-packs/cb114a27-d88e-4b74-a2a0-518ccb30dc44/). You should select the **Use Pack** option to create the project.

### Courses and Books
We strongly recommend that when you are creating content at scale then you have a thorough understanding of [the differences between projects, course assignments and books](/courses/authoring/#project-course-assignment-or-book) before starting.

### Media assets
When creating a book or a guide, you will often be working with images, video and other media. We recommend the following.

- Images should be placed in the `.guides/img` folder. You can create sub-folders for organizational purposes.
- Videos should be hosted on a 3rd party platform such as YouTube or Vimeo. You can embed these using regular HTML embed tags as available from those platforms.
- Web based media such as Google Doc documents can be embedded using regular HTML embed tags as available from those platforms.

### Callout blocks
Our markdown supports the use of special callout blocks. These provide icons and highlighted backgrounds for various concepts such as : Important, Info, Challenge, Topic, Definition, Meetups, Headline, Hackathon, Create, Calendar, Growth Hack, Debugging, Cross Discipline and more.

Please refer to the **Callout** section of the Books Cheat Sheet. If you have not done so already, fork [this starter pack](https://codio.com/home/starter-packs/cb114a27-d88e-4b74-a2a0-518ccb30dc44/) into your own account. You should select the **Use Pack** option to create the project.

### Don't make pages too long
Again, this depends on your intended audience but try to keep each page reasonably brief. If the topic is a long one, you may want to break it up into several pages. This prevents lots of scrolling and allows students to digest information in manageable chunks.

### Hidden folders
Your content will often want to show code samples. Codio's recommended approach is to put each set of code samples into a dedicated folder. Then, using the page settings, you can specify this folder with the consequence that all non-specified folders are hidden from view in the file tree (if you choose to show it).

The benefit of hiding folders is that the student is not distracted by folders and files that are not relevant to the topic you are explaining.

[Click here](/courses/authoring/#hiding-folders) for more details on folder hiding.

### Assessments
Codio offers a range of [manually and auto-graded assessments](/courses/assessments/#assessments). When used as a part of content, assessments are a very important way of giving students challenges and exercises that help internalize what they have been learning.

When used in a course situation, assessments are extremely helpful to the teacher as all assessment results are fed automatically through to the teacher course dashboard, allowing them to monitor students' progress across a Course.

Many of Codio's assessment types (code tests, multiple choice questions, text, fill in the blank and list-based) are auto-graded, saving teachers considerable amounts of time and can also offer students instant feedback on the correct answers.

You can also use the [free-text](/courses/assessments/#free-text_1) assessment type for answers that require a typed answer that can be manually graded by faculty. The free text type also support Latex, so math questions can be answered and graded.

Assessments you create can be saved in your own library for use in other assignments. See [here](/courses/assessments-library/#adding-questions-to-an-assessments-library) for more information on this. We also have an extensive library of assessments that you are free to use as you wish. See [here](/courses/assessments-library/#codios-global-assessments-library) for more details

### Layouts
The editor lets you create different panel layouts for your guide content and the layout can change from section to section.

[Click here](/courses/settings-actions/#page) for more information on panel layouts.

## Markdown content editing
### Cheat Sheet
Please refer to the **Callout** section of the Cheat Sheet. If you have not done so already, fork [this starter pack](https://codio.com/home/starter-packs/cb114a27-d88e-4b74-a2a0-518ccb30dc44/) into your own account. You should select the **Use Pack** option to create the project.

Content can be written in

- **Markdown** - the recommended option and described on this page
- **HTML** allowing more detailed control but requiring more time; described on the next page.

When you are in edit mode, you can select a section by

- using the navigation buttons in the header area
- selecting a section from the section list

![editnav](/img/guides/editnav.png)


### Renaming the Section
You can rename your section by clicking on the section title in the header area.

### Writing content
You can then start writing your content in the main content area.

### Markdown
For those of you not familiar with Markdown, it is an extremely easy way of writing content without having to worry about HTML.

When in Play Mode or as you preview, your content is rendered as students will see it. You can also override the default CSS styling if you wish. Go to **Tools>Guide>Add Custom CSS**

![Guide CSS](/img/guides/guidecss.png)

'Reset Custom CSS' will restore the default CSS styling

Click here for details on how to insert [images, videos and hyperlinks](/courses/authoring/#adding-media).

Here is a summary of the Markdown formatting codes

### Headers/Titles
To display a header or title, you can use the `#` character at the start of the line. The more `#` characters you add, the smaller the font.

```markdown
# Big title
## Smaller title
# Even smaller title
## etc.
```

### Bold and Italic
To create bold or italic text, you use `**` and `*` either side of the respective words.

```markdown
I want to say that **this is really important**, you know
I *really* like chocolate
```

### Bullet Lists
To create a list of bullet points, you start the line with a `-`

```markdown
- Bullet 1
- Bullet 2
- Bullet 3
- etc
```

### Numbered Lists
To create a numbered list, you start the line with a `1.` The numbers are automatically calculated for you.

```markdown
1. Item 1
1. Item 2
1. Item 3
1. etc
```

### Code Blocks
If you want to show some code, styled with the courier font, in a box and with syntax highlighting applied you surround your code block with three backticks `` ``` ``. For example, the following javascript snippet

```js
var i;
for(i = 0; i < 10; i++) {
   document.write(i);
}
```

is written as

`` ```js``
var i;
for(i = 0; i < 10; i++) {
   document.write(i);
}
`` ``` ``

Note that you can specify a language type after the top 3 back ticks. Entering `python ` after the backticks would apply syntax highlighting for python. Many languages are supported. [See a full list of supported languages here](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). You should search for your language and then use the `alias` shown.

### Code Segments
If you want to insert a piece of code inline with the rest of your text, then you use a single \` (backtick) character either side of the text. For example,

We can define a variable `var x;` if we like

... is written in markdown as

We can define a variable \`var x;\` if we like


### Indented Lists
If you want to indent a list, then indent just 2 spaces and it will indent.

```markdown
  - Bullet 1
  - Bullet 2
  - Bullet 3
  - etc
```

### Callout Blocks
If you want to show a callout block a number of options are available and others can be easily added if required

  - important
  - info
  - warning
  - topic
  - definition
  - challenge
  - guidance
  - meetup
  - hackathon
  - create
  - calendar
  - growthhack
  - xdiscipline
  - debugging

e.g.

```
|||info
# My Title

Some text

|||
```

![calloutinfo](/img/guides/callout_info.png)

The **Guidance** callout block is only visible in play mode to designated teachers within a course. It is not visible for students.


### Hyperlinks, Images, Videos & iframes
We describe these in [this section](/courses/authoring/#adding-media).

### HTML
You can include HTML tags

### Latex / MathJax

Latex is supported using [MathJax](http://www.mathjax.org/). For example

```markdown
When $a \ne 0$ there are two solutions to $(ax^2 + bx + c = 0)$ and they are $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$

and for multiple lines we do the following

$$
y=x^2
y=\frac{x^2}{x+1}
$$
```

[Click here](/courses/authoring/#latex-for-math-expressions) for more details on Latex and Mathjax.

![MathJax](/img/guides/mathjax.png)

Inline math equations are encapsulated in a single `$` like this: $\omega = d\phi / dt$.


### Cheat Sheet

Check out our [Cheat Sheet](https://codio.com/home/starter-packs/cb114a27-d88e-4b74-a2a0-518ccb30dc44/) and **Use Pack** to create the Cheet Sheet project in your Codio account.
## Previewing content
### Preview mode
You will regularly want to switch from editing your page content to preview it as users will see it. The best way to do this is to press the preview button in the top right of the content window. When the guide renders, it would open at the current page you were editing.

![authtoken](/img/guides/preview-button.png)

To return to the edit mode, press the **Editor** button and you will be returned to edit mode on the page that you were viewing in Play mode.

![authtoken](/img/guides/editor-button.png)


### Split screen
Another approach that works for the current page is to switch layout mode to split view mode by selecting the 2nd from left button in the header bar.

![authtoken](/img/guides/split-button.png)

### Play
You can start the Guide player from the **Tools->Guide->Play** menu or selecting the '>' icon in the file tree
## HTML content editing
We do not recommend this setting unless you have very specific reasons. It is much harder to use and maintain than markdown but for those who want ultimate control over appearance it is a good option.

### Setting HTML
You can specify that an individual page be authored using HTML from the content **Settings**. You will find the **Content type** dropdown where you can switch between HTML and markdown.

### CSS header and footer
In order to style your content properly, you should use the **Edit HTML header** and **Edit HTML footer** settings. These can be found in the main **Settings** area on the **Global** tab.

The header and footer information wrap the HTML content for your page. Below is a typical example of a header.

```html
<html>
<head>
  <meta charset="UTF-8">
		<title>bjlo2e_ch04-1</title>
		<link href=".guides/content/css/my-style.css" rel="stylesheet" type="text/css" />
		<script src="https://codio.com/codio-client.js" type="text/javascript"></script>
		<script src=".guides/content/script/my-script.js" type="text/javascript"></script>
	</head>

<body>
```

And here is the footer.

```html
</body>
</html>
```

### Support functions
In a page authored using Markdown, you are able to create buttons and other actions. We provide some javascript functions that support the same functionality.

**Important** : if you use any of the functions listed below then you must load `https://codio.com/codio-client.js`in the HTML Header as shown in the example above.


- `codio.run(command, callback)` - Run a command on the box. `callback` will fire once executed and should be used to communicate back to the user.
- `codio.runAndShow(command, outputElementId)` - Run a command on the box. All `stdout` will be displayed in `outputElementId`.
- `codio.open('file', path, panel_num)` - Opens a file located in `path` in the `panel_num` panel, where `0` is the first panel from top left
- `codio.open('terminal', command, panel_num)`-  Opens a terminal window and executes `command`. `panel_num` specifies the location of the panel, where `0` is the first panel from top left.
- `codio.open('preview', url, panel_num)` - Opens a preview window at `url`. `panel_num` specifies the location of the panel, where `0` is the first panel from top left.
- `codio.goToNextSection()` - Moves to the next page in the guide.
- `codio.goToPreviousSection()` - Moves to the previous page in the guide.
- `codio.switchUnit(unitId)` - Changes to a different assignment. The assignment ID is found by opening the assignment and getting the ID from the URL.
- `codio.goToSectionTitled('Section Title')` - Switches to the page whose title is "Section Title'.
- `codio.assessments.check(assessmentId)` - Executes the assessment
- `codio.assessments.reset(assessmentId)` - Resets any response and score that the user may have already provided for `assessmentId`.
- `codio.assessments.get(assessmentId, callback)` - Gets the result data for a completed assessment
- `codio.assessments.send(assessmentId, answer, points, callback)` - Sends result data for a custom assessment. `answer` contains the custom result data for `assessment` and will be stored in Codio. You can use `codio.assessments.get()` to reconstruct the output for an already answered question.
- `codio.resetCurrentFiles()` - Allows students to restore current files in guides within your content.

## Teacher only content  

Teacher only content can be viewed by teachers when:

- opening a assignment within a course module in a course
- [viewing student code](/courses/grading/#accessing-student-work) within a course



Warning

- If your project is public and a user accesses this project via the public listing of your account then they will have access to the solutions.

You can make content available only to course teachers in the following ways.

### Entire page
If you want a page and its appearance in the table of contents to be only visible to a teacher, then you should enable the **Teacher Only** slider in the [page settings](/courses/settings-actions/#teacher-only-content).

### Selected content within page
If you want to hide a certain piece of information *within a page* from students then you should include all such content within a page within `|||guidance ..... |||`. An example is shown below.

```
|||guidance
# Solution
This solution will only be shown

- to teachers
- provided the content is published within a assignment
- if you share a project normally or it is public and a student loads it, they have access to this content.

|||
```

Teacher only content can also be shown to teachers within an assessment question. This allows an question's answer rationale to be shown. Please refer to the [assessments section](/courses/assessments/#assessments) for more details.

## Custom Buttons
Custom buttons are a powerful feature that let you insert a button into your guide content that when pressed can carry out any custom action.

There are a number of ways to use a custom button

### To jump to a page in the content
This will jump to a specific page in the guide

```javascript
{Button Text | go-to-section-titled}(section title)
```

e.g.
```javascript
{Go to Section: LTI | go-to-section-titled}(LTI)
```

### To launch a process
This will launch a process and execute a terminal command.

```javascript
{Button Text}(command paramater1 parameter2 parameterN)
```

### Launching a process in a terminal window
There are cases where you will want to launch a command in a dedicated terminal window. A typical example is when student code requires input from the user. Codio cannot handle standard input through the guides window, so use the following button command.

```bash
{Button Text | terminal}(command)
```
### Launching a debugger configuration
You can launch a debugger configuration as shown below. It is important to specify the configuration name exactly.

```bash
{Button text | debugger}(debugger configuration name)
```
<a name="restorebutton"></a>
### To restore current files in guides
Students can restore current files to the default setting from the [setting](/students/#guides) menu but you can also offer them a button within your guides content as well.

```bash
{Button text | reset}(optional commands to run)
```

### Writing a custom event handler
This offers you the most flexibility and allows you to write your own custom button press handler. A common use case is executing tests on user code.

To do this, you should use the following format for your custom button.

```bash
{Button Text|custom}(myId)
```
If you wish to use a custom event handler to allow students to restore current files and handle other functions, you can do so but you will need to include this code in your custom script

```bash
window.addEventListener('codio-button-custom', function (ev) {
  if(codio) {
    codio.resetCurrentFiles()
  }
});
```

#### Loading Scripts
You should point your content page to a script file to load javascript scripts. You can do this from **Settings>Global>Scripts**.


![authtoken](/img/guides/scripts.png)

<a name="eventlistener"></a>

#### Event Listener
The event listener is able to execute your custom task. It will display a custom message area beneath it into which you can write your own results data. The message data can be a custom message that a test might return and can be plain text or HTML.

For the event listener to run you should include in **Settings>Global>Scripts**:

- https://codio.com/codio-client.js (where your account is running on codio.com)
- https://codio.co.uk/codio-client.js (where your account is running on codio.co.uk)


The icon that appears in the top left of the message area can be controlled from your event listener, as shown in the example below.

```javascript
window.addEventListener('codio-button-custom', function (ev) {
  console.log('id:', ev.id, 'cmd:', ev.cmd, ev);
  if (codio) {
    codio.setButtonValue(ev.id, codio.BUTTON_STATE.PROGRESS, 'Checking');
	codio.setButtonValue(ev.id, codio.BUTTON_STATE.FAILURE, 'Bad Job :(');
	codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, 'Internal error');
    window.setTimeout(function () {
      codio.setButtonValue(ev.id, codio.BUTTON_STATE.SUCCESS, 'Extremely well done!');
    },1000);

  }
});
console.log('test.js script loaded');
```

- `ev.id` is the contents internal id for the button.
- `ev.cmd` is the `myId` text you specified in the button with `{Button Text|custom}(myId)`. This is typically used to indicate the id of the test you wish to run or just the specific button that is being pressed.

The available button commands are

```javascript
codio.setButtonValue(ev.id, codio.BUTTON_STATE.PROGRESS, 'Checking..');
codio.setButtonValue(ev.id, codio.BUTTON_STATE.SUCCESS, 'Good job!');
codio.setButtonValue(ev.id, codio.BUTTON_STATE.FAILURE, 'Bad Job :(');
codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, 'Internal error');
```

The 3rd parameter can contain any text to display in the button's attached message area. It can be plain text or HTML.





## Adding media
You can insert Audio, Images and Videos into a page.

### Audio
You can insert and play audio files within your project.

On the page you wish to play Audio, go to the **Settings** area where you can define the source audio file along with any actions the should be triggered at specific times during playback.

![authtoken](/img/guides/media.png)

- **Source Name** - select the source file either from `.guides/media` folder if already uploaded to the project or upload directly from your PC where it will then be stored in the `.guides/media` folder.
- **Add Action** - specifies actions that are triggered at specific times during playback. The following options are available.

  Open file
  Close file
  Open Terminal
  Close Terminal
  Run command
  Highlight
  Close all tabs
  Pause


### Images
Inserting an image is similar. Here are some examples. PNG and JPG image types are supported. Note that the 2nd and 3rd examples point to images within your project.

Generally speaking, you should put your images in the `.guides/img` folder in order to keep the rest of your workspace free of extraneous content for the benefit of the student.

```markdown
![optional alt tag](http://any-url-you-like.png)
![](image-in-project-root.jpg)
![](.guides/img/best-place-for-images.png)
```


You can also drag/drop images from your project file tree into your content. They will be automatically tagged with the correct path.

For Markdown pages:

```markdown
![.guides/img/displayimage](.guides/img/displayimage.png)
```

For HTML pages:

```html
![.guides/img/displayimage](.guides/img/displayimage.png)
```


### Videos

Including embedded videos are also possible using the standard `<iframe>` html tag.


#### YouTube

If you wish to embed a YouTube video, go to the Share option and select **Embed** to obtain the code snippet.

![authtoken](/img/guides/guides_youtube.png)

```
<iframe width="560" height="315" src="//www.youtube.com/embed/1JNhoVbmNAo" frameborder="0" allowfullscreen></iframe>
```

#### Vimeo

  If you wish to embed a Vimeo video, go to the Share option and select **Embed** to obtain the code snippet.

![authtoken](/img/guides/guides_vimeo.png)

```
<iframe src="//player.vimeo.com/video/110479088" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/110479088">Codio - Innovation in Computer Programming Education</a> from <a href="http://vimeo.com/user20752628">Codio</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
```

### Hyperlinks
Creating a hyperlink on a piece of text is easy.

```markdown
Go to [Google](google.com) to look stuff up.
```



### iframes

You can embed content in an iframe using the `<iframe>` html tag.

To embed from Google Docs, go to **File>Publish** to Web and select **Embed** to get the code snippet

![authtoken](/img/guides/guides_publish.png)


### Example Projects
https://codio.com/codio-units/java-example is a project that you can [fork](/project/ide/features/#forking-a-project) into your own Codio account and shows you how to create code tests and setup automatic marking. We would also recommend that you check out our [Guides Cheat Sheet](https://codio.com/home/starter-packs/cb114a27-d88e-4b74-a2a0-518ccb30dc44/) and **Use Pack** to create into your Codio account to review.
## Open/close tabs from content
You can include links in your content to perform the same open and close actions as you do from the [open tabs](/courses/settings-actions/#open-tabs) dialog.

### Syntax Summary
The syntax is as follows and actions can be chained together using, separated by a `;`.

```
[Hyperlink text](open_file file1, file2; cmd ls -al)
```

### Opening directives
- `open_file file1 file2 fileN panel=0` where panel is optional, in which case the default panel (0) will be used if not specified.
- `open_preview file panel=0` where panel is optional, in which case the default panel (0) will be used if not specified.
- `open_terminal command panel=0` where command (a system command) is optional and where panel is optional, in which case the default panel (0) will be used if not specified.
- `cmd systemcommand argument1 argument2 argumentN`
- `open_tutor file panel=0` to open [visualiser](/courses/settings-actions/#visualiser) and where panel is optional, in which case the default panel (0) will be used if not specified.

### Closing directives
- `close_all` closes all tabs in all panels, except the Guide itself.
- `close_all panel=0` closes all tabs in panel 0.
- `close_file file1` closes `file1` in all panels
- `close_file file1 file2 fileN panel=0` where panel is optional, in which case the default panel (0) will be used.
- `close_preview` behaves like `close_file` for preview tabs.
- `close_terminal` behaves like `close_file` for terminal tabs.
- `close_tutor file panel=0` where visualiser is closed for file open in panel 0

### Important - spaces and ; in file names and commands
If any of your files contain spaces in the names, then you should enclose the file name in double quotes

- `open_file "file name.txt"`

If you use `cmd` and the command has a `;` character in it, then you should also use quotes

- `cmd "cp file1 file2; cp file3 file4"`


### Examples

Open a file `file.txt`

```
[Click here](open_file file.txt)
```

Open a file `file.txt` in panel 1

```
[Click here](open_file file.txt panel=1)
```

Open a file `file.txt` in panel 1, with a code reference and highlight 3 lines

```
[Click here](open_file file.txt panel=1 ref="some text in your code" count=3)
```

Open files `file.txt` and `file2.txt`

```
[Click here](open_files file.txt file2.txt)
```

Open a file `file.txt` and preview of `file.txt` in panel 2

```
[Click here](open_file file.txt; open_preview file.txt panel=2)
```

Run a command then open a preview of `file.txt` in panel 2

```
[Click here](cmd cp source.txt target.txt; open_preview file.txt panel=2)
```

Open a Terminal window in panel 1

```
[Click here](open_terminal panel=2)
```

Close `file.txt` and open a preview `file.txt`

```
[Click here](close_file file.txt; open_preview file.txt)
```

Close all open files, previews and terminals in all panels, then open a file `file.txt`

```
[Click here](close_all; open_file file.txt)
```

Close all open files, previews and terminals, then open a file `file.txt`

```
[Click here](close_all; open_file file.txt)
```

Close all open files, previews and terminals that are in panel 2, then open a file `file.txt`

```
[Click here](close_all panel=2; open_file file.txt)
```
## Hiding folders
Your content will often want to show code samples. Codio's recommended approach is to put each set of code samples into a dedicated folder. Then, using **Show Folders** on [page settings ](/courses/settings-actions/#showhide-folders), you can specify this folder. All non-specified folders are hidden from view in the file tree.
## Latex for math expressions
Latex is ideal for entering mathematical expressions into your pages. You can also insert Latex expressions into many assessment fields. Codio uses [Mathjax](http://www.mathjax.org/) for the rendering of all Latex expressions, so certain macros are not supported.

### Inline Latex expressions
An example of an inline expression is `$\frac{x^3+1}{x^2-1}$`. When your page is shown, the Latex expression will render appropriately.

### Display mode Latex expressions
You can also render one more more lines of Latex expressions in a more prominent format as shown below.

```
$$
y=x^2
\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}
$$
```

### Latex Resources
Google is often your friend when it comes to discovering Latex syntax. However, here are two very useful references that will accelerate things for you.

#### Mathjax
[Here is a list](http://docs.mathjax.org/en/latest/tex.html#supported-latex-commands) of Latex commands supported by Mathjax.

#### Stack Exchange
Here is a page on Math StackExchange that has an excellent overview of Mathjax/Latex syntax as well as explaining general concepts.

Click here :[Stack Exchange](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

#### Detextify
[Detextify](http://detexify.kirelabs.org/classify.html) is an excellent way of finding a Latex symbol by free hand drawing it on the screen using your mouse or touchpad.

![Detextify](/img/detextify.png)

**Important:** you should not use commands that are not in the standard package. In the image above, you can see the last one has a \usepackage command. Symbols in a special package may not work.

