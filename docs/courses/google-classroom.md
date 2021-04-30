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