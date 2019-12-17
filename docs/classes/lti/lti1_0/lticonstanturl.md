---
title: "LTI Constant URLs"


---

Enabling this setting enables constant URL for class units, class detection will be done based on the custom parameter your LMS should pass.

Constant URL's allows the transfer of learning content without modifying LTI links and they are also required if you wish to fork Codio classes and LMS Courses. See [LTI Class fork](/classes/lti/lti1_0/lticlassfork) for more on this.

**Please note the screenshots below are for implementation in Canvas but other LMS systems should be similar. Refer to their documentation for more assistance**

- Create an External app in your LMS using the configuration type: By URL

![LTI URL config](/img/lti/canvas_url.png)

- Enter in the Consumer Key and Shared Secret from your Codio organisation

![LTI Fields](/img/lti/lti-org-fields.png)

- Copy the XML URL into the Config URL field
- Submit
- Return to your Codio class and enable the **Enable LTI constant URL's** button, and save your changes
- Copy the **LTI constant URL's enabled** link

**N.B. If your LMS supports it, `lis_course_offering_sourcedid` is also supported as a unique course identifier so you can replace `codio_class_target_id` if required**

![Enable Constant URL](/img/lti/constant_url.png)

- Return to your LMS external app and 'edit'
- Paste the **LTI constant URL's enabled** link into the Custom Field
- Submit


