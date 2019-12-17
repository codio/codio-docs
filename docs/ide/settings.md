---
title: "Settings"


---

Codio allows various Preferences and Settings to be customized.

Quick access to the following commonly used settings are available from the **View** menu

- Font Size, Tab Size, Soft Tabs, Wrap, Theme

Full settings can be accessed and managed as follows

## Account settings
You can find your account settings in the **Codio > Account** dropdown menu and from the Gear icon at the bottom of the Dashboard.

Account Settings lets you manage the following

- [User profile](/dashboard/account/general/)
- [Password](/dashboard/account/forgotpassword/)
- [SSH key](/dashboard/account/publickey)
- [Github single signon and Codio public key upload](/dashboard/account/github)
- [BitBucket single signon and Codio public key upload](/dashboard/account/bitbucket)
- [Account deletion](/dashboard/account/delete)

## User preferences
You can access the User Preferences using the menu item **Codio > Preferences > User** when you are in a project.

![authtoken](/img/prefs-menu.png)

User Preferences are the full collection of settings that apply to you, the logged in user. They cover all aspects of Codio usage from code editor settings (tab stops, indentation, colors, fonts etc.) through to hotkey keyboard shortcut mappings.

![Codio Annotations](/img/prefs-user.png)


Codio allows you to fully customize all these preferences and the User level and the [Project level](/ide/customization/project-prefs).

Codio does the following to manage the final preferences for the logged in user...

1. Codio defaults are taken
2. Any user overrides are then applied
3. Any project level preferences are finally applied, if any

## Default Preferences
When you create your account, you will be assigned the default settings. You can see these on the right hand side. These settings are read-only, so you cannot modify them. You can browse through this file to see the complete set of preferences available.

Default settings look something like this

```ini
;Brace style.
; Type: list.
; Values:
;  collapse : collapse
;  expand : expand
;  end-expand : end-expand
brace_style = collapse
```

You can see the setting name (`brace_style` with a default value of `collapse`) as well as the data type (list) and the available values (in the case of a list).

## User Preferences
User preferences can be made from the main menu **Codio > Preferences > User**.

User preference overrides are made in left hand pane. When your account is created, this will be empty. Here is an example of user settings that override the Codio defaults ...

```ini
[editor]
theme=eclipse
font_size=13

[code-beautifier]
indent_level=4
indent_with_tabs=true
```

## Keyboard shortcuts & Hotkeys
Within the default settings (right hand pane) you can see how you can map your own keyboard shortcuts.

The defaults will display appropriately for Mac or Linux/PC users. If you override these shortcuts in the left hand pane, then these not Mac/PC/Linux aware. If you are a Mac user and you specify `Cmd` keys, then you should be aware that these will not be accessible from PC/Linux machines. If you need to have your custom shortcuts working on all machines then avoid using `Cmd`.

## Using Autocomplete
Be sure to use the Codio autocomplete feature for both the setting name and possible values.

Position the cursor within the left pane and press `ctrl+space`.

If you are on the first line of the file, you will see that you only have Sections available. If you are within a Section, you will see all available settings for that section.

Having selected a preference, press `=` and then `ctrl+space` to bring up the autocomplete window again. Depending on the preference type (list or boolean), you will see the available options for that preference.


## Searching for preference settings
If you want to find a preference setting in the default pane, the best thing is to search. This will highlight any matching text.


## Project preferences
Project preferences get the highest priority and are applied over User Settings. To modify these, you should open your project and then choose one of the following

1. From the menu, select **Codio > Preferences > Project**
2. From the file tree, locate the `.settings` file

As any project preferences will be applied over your user preferences and everyone else's, you should be careful in what settings you place in here.

## Preferences list
You can set a lot of preferences in Codio. There are various ways of listing and finding preferences and their corresponding keyboard shortcuts.

- [Command Bar](/ide/features/command-bar) lets you find and execute commands and actions. It only shows actionable commands, so things like Font Size, Theme are not available here. Toggle items are, however.
- **Help > Shortcuts** and type and search list that shows all keyboard shortcuts
- **Codio > Preferences > User** where a complete list is shown in the Default Preferences area and you can also modify the preferences.

To see how to modify your preferences see [Codio Preferences](/ide/customization/codio-prefs)

## Project settings
These settings are found within the IDE (a loaded project) from the **Project > Settings** menu item and also accessible from the **My Projects** listing, by clicking the gear icon in the right side of the listing.

Project settings, as distinct from Project preferences, are used to store the following details about the project


- Project Name
- Project Description
- Public/Private
- Allow Box Cloning (subscription required)
- Enable your Box as [Always-On](/ide/boxes/always-on/)
- Allow Private Static Preview. See [Preview](/ide/features/inline-preview/) for more information. **NB** Only available from **Project>Settings**
- Protect Dynamic Ports. Disable to allow preview of the box to anyone who knows the box url. **NB** Only available from **Project>Settings**
- Delete your Project
- Export the project as a Zip file.
- Stack Settings - details of the stack used in your project.
- Forwarding Settings - details of how to SSH into your box. See [here](/ide/boxes/access/ssh-access/) for more.

![Project Setting](/img/project-settings.png)

## Project permissions
You modify permissions by selecting **Permissions** from the **Project** dropdown menu.

![authtoken](/img/permissions-dlg.png)

By default:

- Anyone can see a public project
- No-one can edit a public project (but they can fork it)
- No-one can see a private project

Changing permissions allows you to give the following access permissions to Users and/or Groups.

- **Read** - View the project only
- **Write** - Edit the project
- **Admin** - Users can access the terminal and the deployment screens. Care should be taken as this entails security risk given that an Admin user has full access to keys and any other private data that might be stored on the Box.

## Adding/Removing a User
To add a new user, start typing the user name in the text field. When you find the user, click Add and that user will be added to the list of users below.

You can remove a user from the list by clicking the 'x' button.
