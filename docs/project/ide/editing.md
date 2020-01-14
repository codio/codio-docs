---
title: Code Editing


---

## Productivity, Emmet, Zen Coding
We have implemented lots of productivity features into the Codio IDE thanks to [Emmet](http://www.emmet.io), formerly Zen Coding. These features let you saves considerable time when working with HTML, CSS and Javascript files.

##Standard Code Editor Keyboard Shortcuts
General keyboard shortcuts can be found [in this section](/project/ide/editing/#keyboard-shortcuts). All other productivity shortcuts are found here in this chapter.

### Emmet Keyboard Shortcuts
A set of powerful [productivity shortcuts](/project/ide/editing/#special-keyboard-actions) for HTML5, CSS and Javascript.

### Abbreviations
Thanks to our Emmet support, you get a large number of [HTML and CSS abbreviations](/project/ide/editing/#abbreviations_1) that expand to code, a bit like this

```css
div>ul>li*3
```

which expands to

```html
  <div>
      <ul>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>
```

Be sure to check out the [complete reference](/project/ide/editing/#complete-reference) as there are an awful lot of abbreviations for you to take advantage of.

### Emmet docs
We would strongly recommend having a good dig around the [Emmet documentation](http://docs.emmet.io/abbreviations/syntax/) for a detailed introduction into the general Emmet syntax.

### Abbreviations
This is a way of generating HTML using a CSS selector inspired approach. Take a look at the following examples.

You simply enter the abbreviation in the Code Editor and then press the Tab key to expand the abbreviation.


### Basic HTML Example

```css
div>ul>li*3
```

results in

```html
<div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```


### Juicier HTML Example

```css
#page>div.logo+ul#navigation>li*5>a{Item $}
```

results in

```html
<div id="page">
    <div class="logo"></div>
    <ul id="navigation">
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</div>
```

### Insertion Stops / Edit Points
Emmet offers some abbreviations that have insertion points. For example,

```css
a:link
```

will insert

```html
<a href="http://|"></a>
```

Where the `|` character represents the cursor after insertion. After you have entered the `href` url you should press `ctrl+alt+right arrow` (not the Tab key) to jump to the next edit point.

### More HTML Examples
Be sure to check out [HTML Abbreviations](http://docs.emmet.io/abbreviations/).

And also take a look at the [cheat sheet](/project/ide/editing/#complete-reference) as there are an awful lot of abbreviations for you to take advantage of.


### CSS Examples

`w100p` results in `width: 100%`
`m10p30e5x` results in `margin: 10% 30em 5ex`

and

```cs
p100+m10e
```

results in

```css
padding: 100px;
margin: 10em;
```

and how about this for gradients

```css
lg(left, #fc0, 30%, red)
```

results in

```css
background-image: -webkit-gradient(linear, 0 0, 100% 0, from(#fc0), color-stop(0.5, 30%), to(red));
background-image: -webkit-linear-gradient(left, #fc0, 30%, red);
background-image: -moz-linear-gradient(left, #fc0, 30%, red);
background-image: -o-linear-gradient(left, #fc0, 30%, red);
background-image: linear-gradient(left, #fc0, 30%, red);
```

### Fuzzy Search
If you take a look at [cheat sheet](/project/ide/editing/#complete-reference), you’ll find that there are too many CSS snippets to remember. Also, some of them might be a bit lengthy for sake of logical separation.

To make CSS writing a bit easier, Emmet implements fuzzy search logic for CSS snippets: every time you enter an unknown abbreviation, Emmet will try to find the closest snippet definition.

For example, instead of writing `ov:h` (overflow: hidden;) abbreviation, you can write `ov-h`, `ovh` or even `oh`. You can play around with the fuzzy search in text editor below. Try to find as many variations as possible (use Tab key to expand abbreviations) for `bxz:cb`, `ovx:h` and `pos:a` snippets.

### More CSS Examples
For more details on CSS abbreviations, please go to the [Emmet documentation](http://docs.emmet.io/css-abbreviations/) and be sure to look at the sub-chapters.

But also be sure to check out the [cheat sheet](/project/ide/editing/#complete-reference).

### Special keyboard actions
Emmet also offers a very nice range of keyboard shortcuts to speed productivity even further. Keyboard actions can be modified in [Preferences](/project/ide/settings/#user-preferences)

### Match Tag Pair
`Mac:Cmd+D (inward) and Shift+Cmd+D (outward)`
`WinLin:Ctrl+D (inward) and Shift+Ctrl+D (outward)`


A well-known tag balancing: searches for tag or tag's content bounds from current cursor position and selects it. It will expand (outward balancing) or shrink (inward balancing) selection when called multiple times. Not every editor supports both inward and outward balancing due of some implementation issues, most editors have outward balancing only.

<a href="http://docs.emmet.io/actions/match-pair/" target"_blank">Click here to see it in the Emmet site.</a>


### Go To Matching Pair
`Mac: Shift+Cmd+T`
`Win: Shift+Ctrl+T`


In HTML, allows you to quickly traverse between opening and closing tag.

<a href="http://docs.emmet.io/actions/go-to-pair/" target"_blank">Click here to see it in the Emmet site.</a>


### Wrap with Abbreviation
 `Mac/Win: Shift+Cmd+A`

A very powerful feature, it takes an abbreviation, expands it and places currently selected content in the last element of generated snippet. If there’s no selection, action will silently call “Match Tag Pair” to wrap context element.

<a href="http://docs.emmet.io/actions/wrap-with-abbreviation/" target"_blank">Click here to see it in the Emmet site.</a>


### Go to Edit Point
`Win: Ctrl+Alt+Right Arrow or Left Arrow`

This action works for HTML code blocks and allows you to quickly traverse between important code points:

- between tags
- empty attributes
- newlines with indentation

<a href="http://docs.emmet.io/actions/go-to-edit-point/" target"_blank">Click here to see it in the Emmet site.</a>


### Select Item
`Mac/Win: Shift+Cmd+`

Action is similar to “Go to Edit Point”, but selects important code parts.

In HTML, these are tag name, full attribute and attribute value. For class attribute it also selects distinct classes.

In CSS, it matches selector, full property and property value. For complex values and functions like 1px solid red or url(image.jpg) also selects part of it.

<a href="http://docs.emmet.io/actions/select-item/" target"_blank">Click here to see it in the Emmet site.</a>


### Toggle Comment
`Mac: Cmd+/`
`Win: Ctrl+/`


This action, as name says, toggles comments on and off for the selected line. Works nicely in CSS and HTML files.

<a href="http://docs.emmet.io/actions/toggle-comment/" target"_blank">Click here to see it in the Emmet site.</a>


### Remove Tag
`Mac: Cmd+K`
`Win: Ctrl+K`


Quickly removes tag, found by “Match Tag Pair” from current cursor position, and adjusts indentation.

<a href="http://docs.emmet.io/actions/remove-tag/" target"_blank">Click here to see it in the Emmet site.</a>

### Merge Lines
`Mac: Shift+Cmd+M`
`Win: Shift+Ctrl+M`


Merges selected lines into a single line. But when there’s no selection, will match context HTML tag.

<a href="http://docs.emmet.io/actions/merge-lines/" target"_blank">Click here to see it in the Emmet site.</a>


### Inline Calculator
`Mac: Shift+Cmd+Y`
`Win: Shift+Ctrl+Y`


Evaluates simple math expressions like 2*4 or 10/2 and outputs its result. You can use `\` operator which is equivalent to round(a/b).

Very useful in CSS where numeric values should be modified frequently.

<a href="http://docs.emmet.io/actions/evaluate-math/" target"_blank">Click here to see it in the Emmet site.</a>


### Increment/Decrement Number
`Mac/Win : Alt+Up/Down (inc/dec by 0.1)`
`Mac/Win : Ctrl+Up/Down (inc/dec by 1)`
`Mac/Win : Ctrl+Alt+Up/Down (inc/dec by 10)`


This action, as name says, increments or decrements the number under the cursor with different steps: 0.1, 1 or 10.

<a href="http://docs.emmet.io/actions/inc-dec-number/" target"_blank">Click here to see it in the Emmet site.</a>



### Complete reference
Emmet has a huge number of shortcuts available. Check out the [Emmet Cheat Sheet](http://docs.emmet.io/cheat-sheet/)

![Emmet Cheat Sheet](/img/emmet-ref.png)
## Git, Mercurial & SVN
Git, Mercurial and SVN are all preinstalled, so you can [open up a Terminal window](/project/ide/boxes/#terminal-window) to access them from the command line.

You can also configure your `.codio` file so common commands are accessible from the **Run** menu in the Codio IDE. [Refer to the Boxes documentation](/project/ide/boxes/#customizable-run-menu) on how to do this.

### A few Git helpers
We have added a few Git helpers to the **Tools->Git** menu.

![git overview](/img/git-overview.png)
### Using Git without remote repos
You can use Git commands within your Codio project without needing to ever set up a remote repo. This gives you not only collaborative capabilities, but also comprehensive version control.

However, one of the benefits of a distributed Source Control Management system is that having your code in more than one place means that there is no single point of failure. For this reason, we recommend that you use a third party provider such as GitHub as an external location to back up your data.
### Viewing GitHub repos
GitHub let's you browse around a repo but it's not the same as using an IDE. Codio gives you a great way of viewing any GitHub (or Git) repo. For web apps, you can even run and [preview](/project/ide/features/#preview) within Codio.

### Offering link/button in the repo readme.md file

This is great for anyone wanting to offer a link into a GitHub README page and then, when clicked, it initiates the creation of a project, importing in from the repo for the user in their Codio account.

The advantage of this approach is that changes you make to your repo will be automatically shown in Codio as it creates a brand new Codio project whenever clicked on. If a project of that name already exists, users can change the name on the project creation page.

![create from GitHub](/img/github-readme.png)


You just use the following link format in your GitHub README file (or anywhere else for that matter).

```
https://codio.com/home/projects/new?importType=git&activeTab=3&name=your_codio_project_name&importGitUrl=git@github.com:your_github_name/your_repo_name&stackVersion=stack_version_id

```

In some cases, you may want to specify a specific branch. The common usage for this is if you have a demo or GitHub Pages site that you want to load into Codio. In this case you do the following

```
https://codio.com/home/projects/new?importType=git&activeTab=3&name=your_codio_project_name&importGitUrl=git@github.com:your_github_name/your_repo_name&branch=other_branch&stackVersion=stack_version_id

```

### Finding the stack version ID

Go to the **Stacks** area and find the appropriate stack you wish to be used with your repo. Select **Use Stack** and from the address bar you will see the stack version ID to add to your link

Example showing the **Empty Stack** stack version ID

![Empty Stack Version ID](/img/stackversionid.png)



You are free to use any way of linking to Codio but we would recommend using the following images

![show](https://codio-public.s3.amazonaws.com/sharing/open-in-ide.png)
![show](https://codio-public.s3.amazonaws.com/sharing/demo-in-ide.png)




### How get manually import a Git repo into Codio

![create from GitHub](/img/github-clone-url.png)


- If you are on the GitHub site and looking at a repo, you will see the **Clone URL** link (circled above).
- Click to copy the link to the clipboard; if you clone using SSH, you must have added the Codio SSH public key first as [described here](/dashboard/account/#public-key)
- Login to Codio
- Click on **New Project** and then the **Click here** for more options
- Select **Import** and then from the **Source** drop-down, select **Git**
- Paste in the Git URL (see below) and add any additional details you require
- Press **Create** and Codio will load the repo and then display it

![create from GitHub](/img/github-create.png)


### Resources
If you are new to Git, then here are some resources to get you started.

- [Git is simpler than you think](http://nfarina.com/post/9868516270/git-is-simpler) (this is worth reading as it explains HOW Git works rather than teaching you usage)
- [Git reference](http://git-scm.com/docs)
- [Introduction to Git by Scott Chacon](http://git-scm.com/book)

Here is a list of more Git Tutorials in case you want some choice


- [10 Git Tutorials for beginners](http://sixrevisions.com/resources/git-Tutorials-beginners/)
### SSH keys
To transfer your public key to Github or other remotes, please refer to this [section](/dashboard/account/#public-key). There is a section on this page that describes setting up keys with Github.

You may also want to refer to [SSH Keys in the Boxes section](/project/ide/boxes/#ssh-and-code-access-codio-box-ssh-keys).
### Very basic Git tutorial

This is not supposed to be a proper Git tutorial in any sense. Its purpose is to show anyone who is new to Git or Codio how to use it to get all the basic things done.

For a proper, in-depth overview of Git, refer to the [resources](/project/ide/editing/#resources) page.

Please make sure you read this excellent overview if you are new to Git : [http://git-scm.com/book/en/Getting-Started-Git-Basics](http://git-scm.com/book/en/Getting-Started-Git-Basics)

### GitHub Keys
If you're using GitHub, it is recommended that you use the SSH remote url rather than HTTPS. In order to do this, however, you should first make sure that your Codio public key is loaded into your GitHub account or repo settings. This whole process is [described here](/dashboard/account/#public-key).

### Experimentation
The best way to learn Git is to create a really simple project with a few text files in it and then experiment like crazy. You can play around with all the Git commands and sync with GitHub repos to your heart's content without worrying about doing any coding.

Once you have done this for a while, you will feel a lot more comfortable about using Git for your precious code.

### Your project's starting point

#### You created a project by importing from a Git repo
If you have code that already exists in a remote repo, say GitHub, then you should create a new project by importing from that repo. That will automatically load the project and set up the correct association with the remote Git repo.

Creating a project is [fully described here](/project/projects/#creating-and-importing-a-project).

#### I do not yet have a remote repo
If you have code within Codio and you want to create a brand new GitHub (or other remote) repo, then follow these steps.

1. Create a new project in Codio or open up an existing one.
1. Open the terminal (Tools > Terminal) and initialize git by typing "git init" and pressing enter
1. Create a new, empty repo on GitHub or other provider.
1. Copy the repo url to the clipboard. If you're using GitHub, use the SSH url rather than https and you should make sure that your Codio public key is loaded into your GitHub account or repo settings as [described here](/dashboard/account/#public-key)

![github repo](/img/github-new-repo.png)

1. Within the IDE, go to **Tools > Git > Remotes**
1. It is recommended you use `origin` as the name to confirm the normal standards. You do not need to specify a username or password if you are using SSH.
1. Paste the remote url into the URL field.
![git overview](/img/git-remotes.png)


### Check the status with 'git status'
Whenever you want to see what the Git status of your project is enter `git status`. Initially, you will see that there is nothing to report

```bash
$ git status
# On branch master nothing to commit, working directory clean
```

### Tracking files
Codio uses Git by default and if you import a project from a Git repo, all the existing files will already be 'tracked' (explained in the next section). Any new files you add will need to be tracked using a Git command.

Tracking means that Git knows about them. If you add a new file, Git will not know about it and needs to be explicitly told.

1. Add a new file (`test.txt`) and add a few random characters to it.
1. Open any other existing file (I chose humans.txt) and make a small, harmless change to it.
1. Run `git status` again and you should see

```bash
# On branch master `
# Changes not staged for commit:`
# (use "git add ..." to update what will be committed)
# (use "git checkout -- ..." to discard changes in working directory)
#
#	modified: humans.txt
#
# Untracked files:
# (use "git add ..." to include in what will be committed)
#
#	test.txt no changes added to commit (use "git add" and/or "git commit -a")
```

This shows you the modified and the new (untracked) files.

To tell GitHub to track the file, you can do one of the following

- `git add .` which tells Git to track all files in the project that are not yet tracked. This is the quickest and simplest way to track any new files.
- `git add FILENAME` explicitly tracks a single file

### Staged Files
A staged file is one that is tracked and is ready to commit into the repository. Once you run `git add` you are tracking and staging that file. But if you modify a tracked file, the modifications are not staged. To correctly stage them, you need to rerun `git add`.

### Committing your changes
Committing means that you want to add your staged, files into the repository. There are two ways to do this...

- `git commit -m 'commit message'` will take all staged files and commit them to the repo.
- `git commit -a -m 'commit message'` will do the same but the `-a` switch tells Git to automatically stage any tracked files before committing them. This means that you don't have to use `git add` at all (unless you want to add new, untracked files).

The commit message is important as it allows you to see what general changes were involved in the commit. This can be useful when you want to look back a few days later and no longer remember what was in the commit.

So I entered `git commit -a -m "added test.txt and modified some stuff"` and get

```bash
[master d3e6bb1] added test.txt and modified some stuff
2 files changed, 2 insertions(+)
create mode 100644 test.txt`
```

and if I run a `git status` afterwards, I will see that everything is clean and up-to-date.

```bash
# On branch master nothing to commit, working directory clean
```


### Reverting
One of the nice things you can do is to revert your code back to an earlier commit. `git revert` is the command for rolling back like this. There are a number of ways to use this, simple uses are

- `git revert 'commit id'` reverts back to the SHA (uid) you can see when you type `git log`
- `git revert HEAD` will revert back to the last commit, throwing away any uncommitted changes
- `git revert HEAD~n` for example HEAD~3 will revert to the 4rd last commit.
- `git revert HEAD^^^` (count of ^ is like ~n) will also revert back to the 4th last commit

There are more advanced usages which you should read up on such as the `-n`. Try [looking here](http://git-scm.com/docs/git-revert.html).


### Pushing to a remote repository
If you want to send your committed changes to a remote repository, you will use the `git push` command. First, however, you need to make sure that you have a `remote` set up.

If you created your repository by importing from a Git repo, then the remote will have automatically been created.

If you want to create a new remote repository, then you will have already done this as described at the top of this page.

So all you need to do is enter `git push origin master` . Let's dissect this command

- `origin` is the name of the remote repo. In most cases, this will be called origin, but is not necessarily so.
- `master` is the name of the branch. When you create a new Codio project, a `master` branch is automatically created and appears in brackets at the top of the file tree next to the project name. Branches are beyond the scope of this topic but they are definitely worth investigating as they are a very powerful feature of Git.


If you now go to GitHub and look at the repository, you will see that your changes are pushed. You can also see the commits you made.

### Pulling from a remote repository
Now let's say that someone else is working remotely on the same code (let's assume they are not using Codio). They will push their code to the GitHub repo, too.

By running `git pull origin master`, we pull in changes from the remote repo and Git will automatically merge them.

### Resolving Conflicts
When you pull in from the remote, you may get a conflict warning. This will happen if someone else has modified code in a way that Git cannot automatically resolve, usually because you have been editing the same bit of code.

When this happens, you will need to resolve the conflict. If you open up the file, you will see something like this

```bash
<<<<<<< HEAD:index.html
<div id="footer">contact : email.support@github.com</div>
=======
<div id="footer">
please contact us at support@github.com
</div>
>>>>>>> iss53:index.html
```
You simply need to remove the code block that you want to dispose of. The top block is your code and the bottom comes from the code being merged. If you want to keep your code, you will want to end up with

```html
<div id="footer">contact : email.support@github.com</div>
```

if you want the merged code to remain, it will be

```html
<div id="footer">
    please contact us at support@github.com
</div>
```

To minimize conflicts, you should 1. Commit little and often and 2. Pull from the remote master often.

### Branches
Branches are important and worth mastering at an early stage. When you create a branch, you are creating a new area to code within. You then `merge` another branch, usually the `master` branch, into your new branch. From this point on, you can do whatever you want (add, commit, push etc) without impacting on the `master` branch on any other branch for that matter.

For a full overview on branching, please [read this](http://git-scm.com/book/en/Git-Branching-What-a-Branch-Is)

The commands you will need to master are

- `git branch` - creates a new branch
- `git checkout` - switches to that branch (be careful about doing this without committing the branch you are leaving as any unstaged files will be lost)
- `git merge from-branch` - merges code from `from-branch` into your current branch

Good practice is to switch over to your master branch and pull in changes from the remote (if you're using one). Then switch back to your working branch and merge in changes. Doing this ensures that conflicts are kept to a minimum.

### GitHub and other remotes
Most people will want to push to Github and other remote repos. There are various ways to manage this within Codio.

### Remotes and Github
To work with Github, you need to set up your SSH keys properly as [described here](/dashboard/account/#public-key).

#### I have a remote repo
If your starting point is a remote repo, then you should create a new project from the Codio dashboard. Create Project is an option above your project listings.

You should select the Git tab and enter in the ssh url. This will then create your Codio project by cloning the remote repo you specify and that remote repo will automatically be logged within that project.

#### I do not yet have a remote repo
If you have code within Codio and you want to configure it to synchronize with a remote repo, then you should to the following

1. Create a new, empty repo on Github or other provider.
2. Copy the repo url to the clipboard. If you're using Github, then use the SSH url rather than https.
2. Within the IDE, go to **Tools->Git->Remotes**
3. Complete the dialog as shown below. It is recommended you use `origin` as the name to confirm the normal standards. You do not need to specify a username or password if you are using SSH.

![git overview](/img/git-remotes.png)


If you prefer, you can use the command line interface to achieve the same thing using `git remote`.

Once you have set up your remotes, you can now perform sharing and updating commands (push, pull etc.) from Codio's git command line.

Try pushing your code to the remote using `git push --set-upstream origin master`. From now on you can use simply `git push` as the set-upstream command ensure `origin master` is used by default.

### Simplified Git Steps
We will not attempt any sort of tutorial here, but the following steps cover the absolute basics of Git usage with a remote. If you are new to Git, then you should refer to the [resources page](/project/ide/editing/#resources).

- `git status` gives you the status of your current branch
- `git add .` adds all files, tracked or not, to the staged files
- `git commit -a -m` stages and commits all files to the snapshot
- The first time you push, run the following command to track the new remote `git push --set-upstream origin master`
- Subsequent pushes can be done with `git push`, which pushes all committed changes of the `master` branch to the tracked remote (origin).



### Active branch
You can see which branch you are on by looking in the file tree. The top level item is the project name and to the right of this in brackets is the current branch.

You may switch branches using the command line interface or the **Tools > Git > Switch Branch** menu item.

![Git Active](/img/git-active-branch.png)
## Keyboard shortcuts
You have full control over the keyboard shortcuts for code editing. You should refer to the [Codio Preferences](/project/ide/settings/#user-preferences) section to read more about this.

Codio has its own complete set of defaults, all of which can be overriden. You can use Vim or Emacs key bindings by modifying the `keymap` preference setting. If you do not use `keymap=default`, you cannot override keyboard shortcuts.

The sections that contain productivity specific actions and shortcuts are `[Editor]` and `[Emmet]`.

## Multiple cursors
You can place multiple cursors anywhere in a file using `Cmd+Click` (Mac) or `Ctrl+Click` (PC/Linux).

Click to place the cursor at the desired location, then press and hold Cmd/Ctrl and begin clicking at new locations. When you release Cmd/Ctrl, you can start typing and the content will be duplicated at all cursor locations.

You can also use `Alt-Click` to place the cursor everywhere inbetween a start and end position.

![authtoken](/img/multiple-cursor.gif)
## Search and replace
Codio supports local and global search and replace. You can access these feature by hotkey or from the Find menu.

Hotkey shortcuts can be seen in the Find menu. You can override these from [Preferences](/project/ide/settings/#user-preferences).

### Local
Search and replace is supported on the currently selected file.

The hotkeys are defined in [Preferences](/project/ide/settings/#user-preferences) and the defaults are

```ini
;Find.
; Type: hotkey
key_find = Cmd+F

;Find next.
; Type: hotkey
key_find_next = Cmd+G

;Find previous.
; Type: hotkey
key_find_prev = Shift+Cmd+G

;Replace.
; Type: hotkey
key_replace = Cmd+Alt+F

;Replace all.
; Type: hotkey
key_replace_all = Shift+Cmd+Alt+F
```

### Global
Global search and replace are available within the **Find** menu under **Find in project** and **Replace in project**.

You can search using regular expressions, ignore case and whole word settings. The buttons on the left of the input fields control these settings.

![authtoken](/img/global-search.png)

Once the search operation has completed you will see matches listed in a Codio tab. Double click on the highlighted match to open up that file in a new tab.

![global search dialog](/img/search-matches.png)


### Pattern & Wildcard Matching (Globs)
When you are searching, you can specify a search pattern in the **Where** field.

Lets say you have the following project

```bash
|-- lib
|  |-- index.js
|  |-- hello_world.js
|-- index.html
|-- 404.html
|-- app.js
`-- gruntfile.coffee
```

then you can use globs to select files in this way:

* All files ending in `.js`: `**/*.js`.
  * `index.js`
  * `hello_world.js`
  * `app.js`
* All files ending in `.html` in the root folder: `*.html`
  * `index.html`
  * `404.html`
* All files in `lib`: `lib/*.*`
  * `index.js`
  * `hello_world.js`
* All files ending in `.html` or `.coffee`: `**/*{.html,.coffee}`
  * `index.html`
  * `404.html`
  * `gruntfile.coffee`
* All files beginning with `index`: `**/index*`
  * `index.js`
  * `index.html`

#### Basic Rules

Any character that appears in a pattern, other than the special pattern characters described below, matches itself. The NULL character may not occur in a pattern. A backslash escapes the following character; the escaping backslash is discarded when matching. The special pattern characters must be quoted if they are to be matched literally.

The special pattern characters have the following meanings:

* `*` Matches any string, including the null string. When the globstar shell option is enabled, and `*` is used in a filename expansion context, two adjacent `*`s used as a single pattern will match all files and zero or more directories and subdirectories. If followed by a `/`, two adjacent `*`s will match only directories and subdirectories.

* `?` Matches any single character.

* `[…]` Matches any one of the enclosed characters. A pair of characters separated by a hyphen denotes a range expression; any character that sorts between those two characters, inclusive, using the current locale's collating sequence and character set, is matched. If the first character following the `[` is a `!` or a `^` then any character not enclosed is matched. A `-` may be matched by including it as the first or last character in the set. A `]` may be matched by including it as the first character in the set.

  A character class matches any character belonging to that class. The word character class matches letters, digits, and the character `_`.

  Within `[` and `]`, an equivalence class can be specified using the syntax `[=c=]`, which matches all characters with the same collation weight (as defined by the current locale) as the character c.

  Within `[` and `]`, the syntax [.symbol.] matches the collating symbol symbol.

* `?(pattern-list)` Matches zero or one occurrence of the given patterns.

* `*(pattern-list)` Matches zero or more occurrences of the given patterns.

* `+(pattern-list)` Matches one or more occurrences of the given patterns.

* `@(pattern-list)` Matches one of the given patterns.

* `!(pattern-list)` Matches anything except one of the given patterns.

## Color preview and picker
### Regular Colors
If you are in any file, of any type, that contains something that looks like an RGB hex value, rgb(100, 100, 100), hsla(0,100%,50%,0.2) etc., just hover over the code and a popup will appear that shows the color preview.

![authtoken](/img/color-preview.png)


### Gradients
This works for gradients as well.

![authtoken](/img/gradient-preview.png)

### Color Picker
If you move your mouse into the color preview area and then click, a color picker dialog will appear that allows you to choose a new color. You can drag things around as well as edit the values directly.

![authtoken](/img/picker-1.png)

![authtoken](/img/picker-2.png)


## Beautify javascript
You can format your Javascript code by pressing the keyboard shortcut as defined in the [User Preferences](/project/ide/settings/#user-preferences). By default, it is

- `key_format_code` = `Cmd+Alt+F` (for a Mac)
- `key_format_code` = `Ctrl+Alt+F` (for anything else)

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
If you look within the [code-beautifier] section of the Codio Preferences, you will see the various beautification settings available.

Don't forget, you can force these in [Project preferences](/project/ide/settings/#project-preferences) if you want to have consistently beautified code regardless of who edits your code.

## Force language highlighting
Codio will automatically select the syntax highlighting rules based on the file extension.

If you open a file whose extension is not known then you will not get any highlighting of the code. You can tell Codio which language formatting to use by clicking on the name in the status bar of the code window.

![authtoken](/img/ide-force-lang.png)

You can override the language highlighting by clicking as shown (circled) in the above screenshot.