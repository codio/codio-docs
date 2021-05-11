---
title: Advanced IDE Features


---


Our IDE features also include autocomplete, code-folding, key-bindings, line-numbering, multiple cursors, detailed control over visual themes and preferences, key bindings, standard and regex search and replace.

Additional advanced features include multiple code panels and syntax highlighting support for all programming languages.

## Debugging
Codio offers an integrated, language specific debugger. Codio currently supports the following languages.

- Java
- Python 2
- Python 3
- NodeJS
- C and C++

If you would like support for any languages that do not appear in the list, please [contact us](/dashboard/support/) and we can look into adding it.

### Sample project
If you created the account for your Codio Trial account then you will find **Demo Codio Debugger** in your My Projects list. You will find instructions in the README.md file when you open the project.

If you cannot see it then [click here](https://codio.com/home/starter-packs/b83690d5-6ff5-4f86-970a-768292c70aec/) to create it now. Press the **Use Pack** button to install.

### Video overview
For anyone who has not used a debugger before, here is a useful video tutorial.

<iframe src="https://player.vimeo.com/video/165269077" width="640" height="408" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Prerequisites
If you install Java, C or NodeJS from a stack, then the GBD components that support debugging will be automatically installed. However, if you have installed these languages manually then when you run the debugger, you will get a warning telling you to install the GDB component. A link will be provided to the Install Software feature that allows you to install it with a single click.


<a name="debugfilepath"></a>

### Creating and managing debug targets
You should first configure a debug target. Having multiple debug targets is useful for the following reasons.

- It allows you to quickly debug the same application with different command line arguments, allowing you to test different scenarios.
- You can debug more than one application.

You manage debug targets from the following locations

- the rightmost toolbar menu item, select the **Configure...** option
- **Tools->Debugger Settings**

This will bring up the list of any debug targets you may have previously configured.

![authtoken](/img/debug-targets.png)

To create a new target, press the Create button. You can then configure your target. You can also edit any existing debug target. The following parameters can be configured.

- The programming language
- A friendly name to give the configuration
- The command to execute to your program along with any command line parameters you may wish to include
- Any command to execute before debugging starts. This is usually a compile process.
- You can also reference the active file in use using {{filepath}} token which inserts the path and full file name /path/to/file.ext

![authtoken](/img/debug-target.png)

When creating a new target, you are also shown the debugger port and instruction but these can typically be ignored.

### Single file confgurations
If you are using C, C++ or Java and debugging a simple single code file project (common in early programmng courses) then you should choose Single C File, Single C++ file or Single Java file Debugger Type. This frees you from having to worry about the detailed compile and run configuration.


#### Language specific compilation commands
If you are not using a single file configuration then you will need to provide the following information

- **Before Launch** will typically be a compilation or build command
- **Launch** will be the command to launch the program

In java you are asked for a port number, which should always be set to `5105`.

### Starting a debugging session
There are two ways you can launch an application in debug mode.

- from the rightmost toolbar menu you can select the debug target from the dropdown menu or just press the button to re-run the last executed debug target.
- from the debug targets list you can press the **Debug** button.

![authtoken](/img/debug-launch.png)

At this point, the debugger will fire up and you will see a screen similar to the one show below.

![authtoken](/img/debug-started.png)

You may need to wait a second or two for the debugger to load. It will automatically stop on the first line of code, regardless of whether there is a breakpoint set or not.

### Breakpoints
A breakpoint is a line of code where the debugger will pause code execution if in debug mode. To set a breakpoint you click in the gutter next to the line number. You can remove a breakpoint in the same way.

When a breakpoint is set, a red dot will appear on the line.

### Controlling the debugger
Once the debugger stops code execution you can control execution using the buttons at the top of the debug panel.

![authtoken](/img/debug-buttons.png)

- **Resume** - this tells the debugger to carry on execution without stopping until another breakpoint is encountered.
- **Stop** - execution will stop and the debug window will be closed.
- **Step over** - the debugger will execute the next line of code and then stop. If the line of code about to be executed is a function, then it will execute the contents of that function but will not stop within it unless the function contains a breakpoint.
- **Step into** - the debugger will execute the next line of code and then stop. If the line of code about to be executed is a function, then it will stop on the first line within that function.
- **Step out** - the debugger will exit the current function and stop on the next line of the calling function. If the current line is the main entry function of the application then execution will cease but and the debugger will restart automatically.

### Other features
The debug panel also contains other useful features.

- **Call stack** - this shows the parent functions relative to the function that contains the currently executing line of code.
- **Local variables** - all local variables of the current function and their current values are automatically displayed.
- **Watches** - this allows you to watch a specific variable, and for some languages also expressions,
- **Breakpoints** - this lists all the breakpoints currently set in any of your code files. You can disable them by unchecking the boxes.
- **Console** - the console has two main functions; it displays status messages from the system in bold and your code can output data there by writing output to the console  (for example a `print('message')` statement in Python).

### Support for the standard input when debugging

Support for stdin is available for:

- C/C++
- Node.js
- GDB

Node example:

```javascript
function testStdIn() {
    console.log("What is your name?");
    process.stdin.once('data', (chunk) => {
        let name = chunk.toString();
        console.log("Hello, " + name + "!");
    });
}

testStdIn()
```

### Launching the debugger from Codio content
It is also possible to launch any debugger configuration from a page. Please [click here](/courses/authoring/#custom-buttons) for details.




## JUnit testing framework
Codio provides a simple way to execute [JUnit](https://junit.org/junit4/) tests for Java in your project.

To use JUnit, your project requires Java and so should

- either use the [Java 8](https://codio.com/home/stacks/cf71b65b-ab7a-4f9b-9885-34009fccb476/?tab=details) stack
- or you should have manually installed Java in your box
- or install from **Tools>Install Software**. See [Installing Software Packages](/project/ide/boxes/#installing-software-packages) for more information

### Configuration
Open the JUnit dialog **Tools->JUnit** or use the **Shift+Alt+J** hotkey. Then configure the

- **Source path** is the location of the student source code
- **Test source path** is the location of the test cases source folder
- **Library path** is the path to any libraries used by the student application
- **Working directory** is the path where the compiled student code should execute

All paths are relative to the root of the workspace folder.

![junit](/img/junit.png)

Individual test cases can be added

- by specifying the paths to a file with JUnit tests in the add test case fields
- or by dragging and dropping the file into the JUnit tab.

***Please note*** that if using multiple cases in an assignment/project, the files for each should all be in separate folders for them to work independently of each other. This applies to student code files as well as the code used for the cases.

### Timeout settings

The default timeout for JUnit execution is 30 seconds but you can change this as required in user or project preferences. You can also change the default hotkey to access JUnit if required as well

![junitsettings](/img/junitsettings.png)

To ensure that the same settings apply to students may use the project within a class, we would recommend you change this as a [project preference](/project/ide/settings/#project-preferences)

### Execution
You can Execute the tests from the **JUnits Execution** tab. Once completed, the results will be listed below.

![junitexecute](/img/junitexecution.png)

If you publish your project as a unit to a class, the JUnit configurations you set up will be included in the Unit for students.
### Autocomplete
Autocomplete is supported within HTML, CSS and Javascript files. Just type away and we will automatically show you matches for what you are typing.

If you don't like your auto-complete auto-completing, just set the preference `automatic_completions = false`.

Other languages are supported with **language server protocol** although in such files, autocomplete is not automatically involved. See [language server protocol](/project/ide/boxes/#language-server-protocol) for more information.

### HTML Tags
Auto complete is context sensitive, so you will only be shown Tags that are relevant to your location within the HTML file.

For example, if you are not within `<body></body>`, you will see a much reduced set of options in the auto complete popup. However, place your cursor inside the `<body></body>` tags and you will see the full list of standard HTML tags.

### HTML Attribtues
If you have entered `<a `, then invoke auto complete, you are presented with a list of relevant attributes for the `<a>` tag.

### Tern & Javascript
We support intelligent autocomplete using TernJS. Tern also support explicit directives in the `.tern-project` file you can place in the root of your project.

This file looks like this

```json
{
  "libs": [
    "browser",
    "jquery"
  ],
  "loadEagerly": [
    "importantfile.js"
  ],
  "plugins": {
    "requirejs": {
      "baseURL": "./",
      "paths": {}
    }
  }
}
```

You should note that Codio currently only supports autocomplete for the currently opened file as well as items specified in the `libs` section of the `.tern-project` file.

Please refer to the [Tern documentation](https://ternjs.net/doc/manual.html#configuration) for full details on how to configure this file.


### CSS
Use `ctrl+space` within your CSS to invoke auto complete.
## Command bar
The Command Bar allows you to access almost all of the Codio actions from a searchable list. It is also a great way of looking up keyboard shortcuts without having to explore the menu.

You invoke the Command Bar with

- **Tools > Command Bar**
- `Cmd+Shift+P` (Mac) / `Ctrl+Shift+P` (PC/Linux)

You will then see the following popup dialog.

![Command Bar](/img/command-bar.png)

Now just start typing and the list will refine as you type.

## Copying a project
You can copy any 3rd party public project into your account going to `Project>Create Copy`. If you are looking at a copied project, then it will look like this.

![Copied Project](/img/fork-ide.png)

If you are signed into Codio, copying a project will create the copy in your account.

If the project owner has allowed box cloning you will also be able to clone the box as well as the project.

![Clone box](/img/fork-clone.png)

## Code beautification
You can format your code by pressing the keyboard shortcut as defined in the [User Preferences](/project/ide/settings/#user-preferences). By default, it is

- `key_format_code` = `Cmd+Shift+B` (for a Mac)
- `key_format_code` = `Ctrl+Shift+B` (for anything else)

It will indent your code correctly and manage spaces and other cool things.

For example, if you start out with this

```js
if ('this_is'==/an_example/){of_beautifer();}else{var a=b?(c%d):e[f];}
```

Then after beautifying, you will end up with this

```js
if ('this_is' == /an_example/) {
    of_beautifer();
} else {
    var a = b ? (c % d) : e[f];
}
```
### Settings

If you look within the `[code-beautifier]` section of the Codio Preferences, you will see the various beautification settings available.

Don't forget, you can force these at the [Project level preferences](/project/ide/settings/#project-preferences) if you want to have consistently beautified code regardless of who edits your code.

## Preview
It is important to understand the difference between Static and Dynamic content when using the Preview menu options. Codio provides a configurable menu item for Dynamic/Server Side content (rightmost Codio menu) as well as Static content.

### Static content
You can use **Preview static** options on Static content only (HTML, CSS, JS and text).
You can also preview static content on your mobile device easily using **Project>QR Code for Preview URL** to generate a QR code you can scan with a QR Reader on your device.

### Dynamic content
To access files or services that are executed on the server (PHP, Ruby, Node etc.), you need to use the right-most menu option. You can access your server side application by:

- word1-word2-port.codio.io which will access your box over port 80, which is useful if your corporate firewall blocks ports other than 80 and 443.



`word1-word2` is an automatically generated subdomain name for your Codio Box. You can configure your application to listen on ports defining the port in the URL, but please be aware than Codio supported a restricted range of ports. Please refer to [this section](/project/ide/boxes/#accessing-boxes-and-ports) for more details.

Read on for information on how to configure your Static and Dynamic preview menus.

### Instructions
The Preview button lets you preview one or more web pages with a simple button press. Codio creates three default entries in the Preview menu automatically.

![authtoken](/img/preview-deploy.png)


- **Project Index** - this is the default file to run for your project. It can be set by right-clicking a file in the file tree. This option should only be used to preview static content (typically `.html` files). For PHP, Ruby etc. you should use the **Box URL** option.
- **Current File** - whichever code file currently has focus. This option should only be used to preview static content (typically `.html` files). For PHP, Ruby etc. you should use the **Box URL** option.
- **Box URL** - use this option for previewing PHP, Ruby or other server side languages over https. [Click here](/project/ide/boxes/#accessing-boxes-and-ports) for more information on configuring port access for https.



If you right-click a file in the file tree or the Tab, you can also select **Preview Static**.

![authtoken](/img/preview-deploy-right-click.png)


### Preview in a Codio tab or new browser tab
In the Preview dropdown menu, you can select one of the following ways to preview

- **Inside Codio** : displays the preview in a Codio tab; note that if you are accessing via any port other than Port 80 (the Box URL defaults in the screenshot at the top) then this option will only work if you are using HTTPS as Codio itself runs over HTTPS and the browser will not allow mixed HTTP/HTTPS. [See here](/project/ide/boxes/#accessing-boxes-and-ports) for more details on using HTTPS.
- **New browser tab** : it will open up a new browser tab or window.

If you are previewing a private project containing Static content and you have not enabled **Allow Private Static Preview** option (available only via **Project>Settings**) you will be asked to authenticate with your username and password. If you signed up using GitHub/BitBucket/G+ method, a random password is created for your account. Go to **Codio>Account** and on the Account tab you can set up a password of your own choosing.

If though you have enabled this option, then you can preview static content without authentication. A new backend URL will be generated for this purpose that you can then share with anyone else you wish to be able to preview your project. You are also able to regenerate this URL at any time and access using the old URL will no longer function.

This only applies to code being previewed over the standard ports 80 and 443. Previewing via any other port will have no authentication, because the code is being served from your application server, which we have no control over but you can add your own authentication.

See [Apache Password Basic Authentication](https://wiki.apache.org/httpd/PasswordBasicAuth) and [HTTP Authentication with PHP](https://php.net/manual/en/features.http-auth.php) for some examples.

#### Modifying the Preview menu
You are free to customize the menu in either of the following ways

- From the **Preview** or **Run** drop down menus (the 2nd and 3rd right most Codio menu items), select **Configure...**
- If it exists already, open the `.codio` file that lives in the root of your project.

For details about the various tokens that can be inserted, please refer to **[Customizing the Run menu](/project/ide/boxes/#customizable-run-menu)**.

`{{domain3000}}` is the most important token for the **Preview menu**. It is replaced by the public url required to access your project over port 80, which is useful if your corporate firewall blocks ports other than 80 and 443.
`{{domain}}` can also be used in the **Preview** menu. In most cases you will want to add the Port number (default 3000) to your service. e.g ` "Box URL": "https://{{domain3000}}/",`


```json
{
// Configure your Run and Preview buttons here.

// Run button configuration
  "commands": {
        "Node version": "node --version"
  },

// Preview button configuration
  "preview": {
        "Project Index (static)": "https://{{domain}}/{{index}}",
        "Current File (static)": "https://{{domain}}/{{filepath}}",
        "Box URL": "https://{{domain3000}}/"
  }
}
```

Note that static content is served over Port 80. To access dynamic content you may need to specify the appropriate Port.



The full range of Codio `{{tokens}}` is explained in [this section](/project/ide/boxes/#codio-tokens).

### Insecure Content with In-Tab preview and front-end code (#mixed-content)
Codio runs over a secure connection using HTTPS, and therefore so does the inline preview. If your code references an external resource (script, font, image, etc.). For example:

```html
<script src="http://code.angularjs.org/1.1.5/angular.js">
```

You will get a browser error indicating that there is some form of insecure or mixed content because you are running in a mixed HTTP/HTTPS mode. This is a restriction of the browser, and cannot be modified easily, or in some browsers, it cannot be modified at all. It is intended to protect you from insecure content.

There are 2 ways to avoid this:

- Modify your external references to use HTTPS.
- Modify your references to use the 'current protocol' by including '//' without http or https, so `<script src="//code.angularjs.org/1.1.5/angular.js">`.
- If none of the above work, then download the external file, and include and reference it within the Codio project itself.

## Quick open
Quick open (fast open) is a great way of opening files without the need to access the file tree. Invoke Quick Open from

- **File > Open File** from the menu
- `Cmd+O` (Mac) / `Ctrl+O` (PC/Linux)

... and the quick open dialog will appear.

![Quick Open](/img/quick-open.png)

You now start typing the name of a file and as you type, the list will narrow down. You can then select the file you want using the mouse or use the keyboard, pressing Enter on the required file.
## Real time code collaboration
If you give other Codio users permissions to access to your project, then Codio allows more than one user to view and edit files simultaneously.

Rather like Google Docs, you will be able to see other people editing the file in real time.

Because of this collaboration feature, your files are saved in real time and there is no need to press the save button. It just happens automatically.

You can change full access to your project from the **Project->Permissions** menu, but this is risky and we advise strongly against this unless you are sure only one person will be editing the project at a time.

The better approach is to use Git. If you are familiar with Git then each person has their own project but they all use Git to synchronize the content with a remote repository hosted on a platform like GitHub or BitBucket.

### Cursor Presence 

When accessing another users project where [permissions](/project/ide/settings/#project-permissions) have been granted by the project owner, all active users in a project will be shown with a color in an icon showing in the menu bar when files are being accessed/edited

Clicking on the icon will change focus to show what that user is currently editing highlighted in that color and will show the users cursor. 
Hovering over the icon will show the filename and line currently being edited.

![Cursor Presence](/img/monitor_students/cursorpresences.png)

This can be very useful if a colleague needs assistance as you can see what they are doing, real time and if you need to demonstrate something to them, they can see what you are doing

### Audio/Video Chat Support

When accessing another users project where [permissions](/project/ide/settings/#project-permissions) have been granted by the project owner or for teachers viewing the students assignment, a **Call** button will show allowing Audio/Video calls and or real time chat.

![A/V Call](/img/monitor_students/call.png)



## Saving files
There is generally no need to save your files as content is saved automatically. You can still save manually using the `Ctrl+S|Cmd+S` keyboard shortcut, which most of you should be familiar with, but you don’t need to.
If you make mistakes, then use the regular undo (`Ctrl+Z`).

Version Control is the best possible way of managing restores and this is comprehensively supported thanks to our [Git integration](/project/ide/editing/#git-mercurial-svn).
## Sharing and embedding
To share a project or link to a project from a web page, go to the **Project > Share** menu item.

![Sharing](/img/sharing.png)

### Retaining layout status & automatically starting tutorials
You'll notice the three options at the top of the dialog. When you embed or link to a Codio project you have three ways of the IDE rendering it

- **Project URL** : use this URL to display the project with whatever panel and open file configuration happens to be active at the time. This can change all the time depending on what the user happens to have active at any given time.
- **Guide URL**: use this URL to display your project with your [Guide](/courses/authoring/) automatically starting.
- **With Layout** : use this URL if you want to always use the precise panel and file configuration that you currently have open. This is the right option if you want to embed it in a blog post or page and a precise configuration should be retained no matter what the project owner is doing with the layout at any given time.

You can use either of these basic URLs by copying and pasting.

But if you want to use one of our preconfigured button options, read on.

### Markdown or HTML
You can choose between Markdown or HTML by clicking on the HTML or Markdown label. Markdown is great for your GitHub README.md pages.

Once you have made your selection you can copy and paste from one of the button options below.

### Suggested Buttons
You will notice that there are two suggested buttons available for Project URL and With Layout modes.

- **Demo** : the suggested button for any situation where you want to link to a demo project. A great example would be on your GitHub page, where you want to be able to show a demo of your code as well as allowing the user to browse around the code itself.
- **Show me the code** : the suggested button for any situation where you want to link a blog, tutorial or some documentation to a real code sample.
