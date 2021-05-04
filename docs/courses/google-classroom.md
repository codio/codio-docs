---
title: Integrating with Google Classrooms

---

Integrating [Google Classroom](https://classroom.google.com/) is very easy to do. 

### Setting up Integration

#### In Google Classroom

  - Create a Class

#### In Codio

  - Go to the **Admin** area in the course you wish to integrate to Google Classroom
  - Select **Connect to Google Classroom** and authenticate to your Google account
  
![Connect to Google](/img/google_integrate.png)
  
  - When authenticated you will be redirected to the **Classes List** page and will see a list of your Google Classes
  - Select **Connect Class** button for the Google class you wish to connect your Codio course to 

 ![Connect to Codio](/img/google_classlist.png)

Your Codio Course is now integrated with your Google Class

**Please Note:** Google classrooms do not support the ordering of modules/assignments from the Codio Course, they will be generated randomly but can easily be reordered from the **Classwork** tab in your Google Class

### Single sign-in and account creation

It is important to understand how Codio maps Google Classroom users to Codio users. The following rules should be understood. If students or faculty access Codio via a Google Classroom assignment then Codio will initially use the Google Classroom email address to identify the user and create the Codio account. In all subsequent access, the Google Classroom userID will be used so in the event the user changes their email address in Google Classroom, the user will be mapped to the same Codio account.

- If the user is not known to Codio then we will sign up the user as a new Codio user in the background and take the user directly into the Codio content. The Google Classroom user role will be carried over as well.
- If the user is known to Codio then Codio will take them directly into the Codio content without any sign-in required. If they are a Codio user but are not a member of your organization then they will be required to complete a verification via email.

### Releasing grades
By default, grades in Codio are neither passed back to the student nor to Google Classroom until they are

- Marked as complete by either the student or the teacher and
- the **Release Grades** switch is enabled (or if you have set the course to automatically release grades when completed)

Once **Release Grades** is enabled, all completed student assignments are automatically sent through.

![Release Grades](/img/lti/release-complete.png)

There are various ways to mark a student's work as complete


- The student can do this from either the Course dashboard or from the **Education->Mark as Complete** menu in the assignment itself.
- The teacher can do the same in the assignment when [viewing students code](/courses/grading/#accessing-student-work)
- The teacher can do the same from the assignment in the Course dashboard by hovering in the left side of a student entry and then setting the completed switch.
- The teacher can mark all student assignments as completed in one action. This is done by
    - selecting the assignment in the Course
    - pressing the **Action** button
    - pressing the **Mark all as Completed** button



### Updating 

If assignments/modules are added/removed in the Codio Course, to update to your Google Classroom

  - Go to the **Admin** area in the course 
  - Select **Update Google Classroom** to update 
  
 ![Update Google Classroom](/img/google_update.png)
  
As above, be aware that this may change the ordering in your Google classroom so review and reorder as required from the **Classwork** tab

### Removing

To remove the integration link between Codio and your Google Classroom

  - Go to the **Admin** area in the course 
  - Select **Remove Google Classroom** to update 
  
 ![Remove Google Classroom](/img/google_remove.png)
 
**Please note:** Removing the integration link will mean students will not be able to access any of their assignments any longer from Google Classroom