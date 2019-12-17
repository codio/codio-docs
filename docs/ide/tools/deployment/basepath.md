---
title: Base path field


---

You will notice that all deployment targets, except Codio, have a **Preview Base Path** field.

![base path](/img/deploy-basepath.png)


It is important to complete this field for all target types involving remote servers so that the Preview option knows how to access your project once deployed.

For example, you might deploy to a remote server at a folder location `/home/fmay/www`. Accessing this application via a browser, however, depends on how you configure your remote web server.

So it could be `http://123.456.789` or `fmay.mydomain.com` is the correct location.

Please see the [Preview](/ide/features/inline-preview) section for more information.

