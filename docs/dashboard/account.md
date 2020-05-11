---
title: Account


---

## Account settings overview
A brief overview of interesting account settings.

<iframe src="https://player.vimeo.com/video/236066104" width="640" height="436" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>-

## Cookie Requirements
In order for Codio to work correctly you need to allow cookies. Check our [Privacy Policy](https://www.codio.com/legal-stuff) for more information about cookies.

The following information explains how to enable cookies for all sites. You can also enable them only for certain sites, which is not explained below.

### To enable cookies in Chrome:

In your browser enter: `chrome://settings/content/cookies`
and

- enable **Allow sites to save and read cookie data (recommended)**
- disable **Block third party cookies**
![Chrome Cookies](/img/chromecookies.png)

*Image from Chrome Version 59.0.3071.86 (Official Build) (64-bit)*

### To enable cookies in Firefox:
In your browser enter: `about:preferences#privacy`
Select **User custom settings for history** from the drop down in the History section and

- check **Accept cookies from sites**
- select 'Always' in the drop down for **Accept third-party cookies**
![Firefox Cookies](/img/firefoxcookies.png)

*Image from Firefox 55.0.2 (64-bit)*

### To enable cookies in Safari:
In your browser go to `Safari> Preferences`
![Safari](/img/safari.png)
Select the **Privacy** tab and ensure check **Block all cookies** and **Prevent cross-site tracking** are not checked.

![Safari Cookies](/img/crosssitetracking.png)

If using an earlier version of Safari, check **Always Allow** in the Cookies and website data section

*Image from Safari 12.0 on macOS Sierra 10.12.6*


## Firewall and network settings
Codio can usually run from anywhere in your browser without any special settings. However, some school or university firewall settings may require special configuration.

This page contains information for

- School network system administrators
- Students and teachers who may be using Codio from home

### Firewall settings
The following is a list of ports and URLs that Codio access from time to time. We have put these in priority order.

- __*.codio.com__ the main Codio site and application
- __*.codio.io__ domains that are auto-generated for each user project
- __api.keen.io__ statistics gathering to measure student time spent in units   (stats)
- __*.typekit.net__ web fonts
- __fonts.gstatic.com__ web fonts
- __fast.fonts.net__ web fonts
- __*.cloudfront.net__ our CDN for speeding up static content
- __*.youtube.com & *.vimeo.com__ for video's included in Course content
- __gravatar.com__ used for user gravatars (pictures)

- __*.intercom.io__, __cdnjs.cloudflare.com__ and __*.pubnub.com__ are highly recommended as they relate to  the help and support application (Intercom) built into Codio.

If your institution blocks access to YouTube as a general rule, your IT department can whitelist YouTube access that only allows access to content from registered and accredited educational content repositories. See [here](https://support.google.com/youtube/answer/2695317?hl=en-GB) for more information on this.


### Ports
We recommend opening the following ports

- **80 and 443** for standard communications
- **3000** is a standard port for user projects
- **9500** is a standard SSL port for user projects

### Working from home
Sometimes the anti-virus/firewall settings on your personal devices may interfere with home usage and make the experience slow.

You should check your settings and ensure that items in the above **Firewall settings** list are added to your exclusion list.

### Connectivity Test
If you continue to experience difficulties, visit the [Connection Diagnostics](https://codio.com/connectivity/index.html) page and send us back the generated output going to **Help > Support/Contact Us** and attach the output file using the paperclip icon)
![authtoken](/img/contactus.png)


## Browser support
Codio is best experienced on the very latest browsers, in particular Chrome, but should run fine on the following browsers:

- **Chrome** 21 or later
- **Firefox** - 22 or later
- **IE** - 10 or later
- **Safari** - 6 or later
- **Opera** - 15 or later

If using **Safari** and accessing Codio via an [LMS](/courses/lti1_0/), disable "Prevent cross-site tracking" to ensure access.

![Safari settings](/img/crosssitetracking.png)

If you are experiencing any issue where Codio will not run as it should, please send an email to help@codio.com.

<a name="ie-compatibility"></a>
### Disable IE Compatibility View

It could happen that even if you have Internet Explorer 10 or a later version, we detect a older version of the browser.

This is due to the *Compatibility Mode* of the Browser which enables old features we no longer support.

To disable this option, please go to ***Tools → F12 developer tools*** and be sure that in **Browser Mode** is selected **«Internet Explorer 10»** and in **Document Mode** is selected **«Standards (Page default)»**.
## Resetting student passwords
You can change a student's password in the following way:

1. From the **Courses** area, click on your course to open it.

![authtoken](/img/manage_classes/year_10_class.png)

1. Click on the **Students** tab, top centre of your screen.

![authtoken](/img/manage_classes/students_tab.png)

1. You will see all students in your course displayed on this screen. Find the student whose password needs to be changed and click on the blue triple dot icon to the right of their name. Choose **Change students password** and follow the steps to reset.
## Forgot your password
If you have forgotten your password, you should use the **lost password** link on the log-in page to reset your password automatically via email.

**For School and University students only:** If you do not have access to the email address you used in creating your Codio account and you are a student, please contact your teacher. He or she will be able to reset your password for you.

If you wish to change your password (you should also do this if you forgot your password and it was reset) follow these steps:

1. Click on your name and gravatar (bottom left of screen)

![authtoken](/img/what_students_do/forgotpassword/profilepic.png)

1. From the options along the top of the page, choose **Account**
![authtoken](/img/what_students_do/forgotpassword/account.png)

1. About halfway down the **Account** page is the **Change Password** area. The student should enter their new password, and then click **Update password**.
![authtoken](/img/what_students_do/forgotpassword/change.png)

## Public key
Codio automatically generates a public key for your account. This key can then be used whenever Codio attempts communication with an external server that requires public/private key based authentication such as SSH or SFTP access.

![public key dialog](/img/prefs-account-ssh.png)


### Where is it used?
Codio makes use of the public key in the following places

- [SFTP deployment target](/project/ide/tools/deployment/#sftp-target-type)
- [RSYNC deployment target](/project/ide/tools/deployment/#rsync-target-type)
- [SSH Terminal](/project/ide/tools/ssh/)
- [Git](/project/ide/editing/#git-mercurial-svn)

In both cases, you will need to install the public key onto the remote system. In the case of SFTP, you should know how to do this already.

### Adding your public key to a remote server
If you want to get your Codio public key onto a remote server, just press the Upload Public Key button. You enter your user credentials on the remote and Codio will get it installed in the `~/.ssh/authorized_keys` file.

![authtoken](/img/prefs-account-ssh-dialog.png)

### Adding your public key to GitHub or BitBucket
If you are working with GitHub or BitBucket, then you need to install the public key. Codio makes this very easy for you. Goto **Codio>Account** and select GitHub or BitBucket tab and select 'Upload your public key to GitHub/BitBucket'

![SSH Public](/img/prefs-account-gh1.png)

You will be redirected to your GitHub/BitBucket account and asked to authorise the application

On accepting this you will then be redirected back to your Codio account.

## GitHub
The GitHub tab lets you associate your account with your GitHub account and where you can upload your public key. See [SSH Key](/dashboard/account/#public-key)


![SSH Public](/img/prefs-account-gh1.png)

You can sign in with GitHub as well.
## BitBucket
The BitBucket tab lets you associate your account with your BitBucket account and where you can upload your public key. See [SSH Key](/dashboard/account/#public-key)

You can sign in with BitBucket as well.


## Change account details
You can change the following settings

- **Account name** - changing this will not affect the URL associated with your account name. This name is for display and communication purposes only.
- **Email address**

![Profile Settings](/img/prefs-ac-profile.png)

## Delete your account
You can delete your account at any time from the **Codio > Account** menu item and going to the **Account** tab

![authtoken](/img/delete.png)

Please be warned that when you do finally close the account, it cannot be retrieved, nor can its contents, so please make sure you export any projects you want to keep or push the to a remote Git repo.

## Organisation Billing
![Organizations Billing](/img/organisations_billing.png)

For Schools and University organisations, the billing screen allows you to generate invoices for your account (for new accounts and renewal of existing accounts), and for active subscriptions, view the details of the current plan as well as enter the email of the person who should receive billing notifications.

To access the organsisation billing screen:

1. Click on your profile picture (bottom left of **Courses**)

![Profile](/img/class_administration/profilepic.png)
1. Click the name of your school (under **My Organizations**)

![Org Name](/img/class_administration/addteachers/myschoolorg.png)
1. You will see billing options listed across the top of the page.
![Org Billing](/img/class_administration/orgbilling.png)

Select the country you are in and 'Save'. Then enter the number of student licenses required (**minimum 25**). The plans available will be shown , select the plan you require and if you require the invoice to be sent to someone else, you can change the recipient.

If you have a promotion code, enter it in the appropriate field. Validation is case insensitive.

- If the promotion code is invalid, the message `Invalid promotion code` will be shown
- If the promotion code has expired, the message `This promotion code has expired` will be shown
- Promotion codes are only available for new users and not available for self pay plans.

When you are ready, click the 'Generate Invoice' button and the invoice will be generated and sent to the email address.

The option to switch to/from a Self Pay plan is also available but be aware if you have an annual plan and have already paid this might lead to a conflict.


![Organizations Billing](/img/organisations_invoicing.png)


**Important** : This is accessed from the Organization screens and having clicked on your Organization. Please do not use the normal Billing area for individuals that you can access by clicking on your name/gravatar (bottom left of screen) and selecting the **Billing** tab unless you wish to subscribe as an **Individual** or already are subscribed as an **Individual**

## Individual Billing
The user billing screen can be found on the Billing tab of your Account Settings. You can find both your subscription details and billing history here.

![Account Billing](/img/account_billing.png)

To access your individual billing area, follow these steps:

1. Click on your name and gravatar (bottom left of screen)
![authtoken](/img/what_students_do/forgotpassword/profilepic.png)

1. From the options along the top of the page, choose **Billing**

<a name="bookstore"></a>
### Bookstores
Some institutions may provide Codio licenses via the bookstore. Your course instructor or course syllabus will specify if this is available at your particular school.

A single license can be used for a specified timeframe - 1 semester (5 months), 2 semesters (10 months) or a year. Specific licenses options may depend on your local bookstore.


Purchasing a license

To purchase a license, you can request the following from your bookstore

	1 Semester  - Codio 1-Semester Subscription - ISBN: 978-1-7331872-5-1
	2 Semesters - Codio 2 Semester Subscription ISBN 978-1-73331872-8-2
	Annual - Codio Annual Subscription ISBN # 978-1-7331872-1-3


Your bookstore will provide you with a sheet that contains a code that can be used to activate your subscription for the specified timeframe.

NOTE: A single subscription can be used for multiple courses using Codio during the specified timeframe.


### Activating a bookstore license

To log in to Codio, please follow your instructor's directions. This may be through your local LMS (Canvas, Blackboard, Desire2Learn, Moodle, etc) or through Codio.com using a course token.

The first time you log in, there will be a small banner at the top requesting you go to “Billing”. Please click on it or navigate to it by clicking on your username in the bottom left and selecting the “Billing” tab and after selecting the "Plan" drop down field go to the **Redeem Code** option and click the **Upgrade** button where you can then enter the code provided to you. Please note the code is case sensitive so enter it exactly as given.
If you have any problems [contact us](/dashboard/support/) through your Codio account or email us at [help@codio.com](mailto:help@codio.com)

### Educational Discounts
We offer substantial **Whole School** license discounts for Schools, Colleges and Universities as well as a full 30 day trial of all the Education Features

## Contact us

### Customer Technical Support

We have an extensive documentation section where you can find out how to [add students](/courses/classes/#add-students-to-a-course), [add teachers](/dashboard/organisations/#add-teachers) and much more.

To access the documentation

- Click **Help** in the top menu bar on our website.

If you are logged into Codio, you can access the documentation section in 2 ways:

- if on the Dashboard, by selecting the **Help** button from the left-hand menu.
- or if you have a project/unit open, from the top menu bar using Help>Documentation

To contact us:

- There is a contact button on the bottom right hand corner of our website.

If you are logged into Codio:

- if on the Dashboard, you can use the **Support** button from the left-hand menu (just below the **Help** button)
- or if you have a project/unit open, from the top menu bar using **Help>Support/Contact Us**.

If it is out of our office hours, we will get back to you as soon as possible.


### Sales Inquiries

If you are interested in purchasing Codio, please see our [pricing](https://www.codio.com/pricing). If you have any questions about how Codio could be right for you, we offer [demos and webinars](https://www.codio.com/demo) for you and your colleagues. Or alternatively, please email us at help@codio.com, and we will get in touch as soon as possible.
