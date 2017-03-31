**Resources:** 

[Angular Material](https://material.angular.io)

[Angular Material Github](https://github.com/angular/material2)

**Note**

Currently Angular Material is in Beta and throws unmet dependency errors when installed via npm.  Follow the documentation on the resource sites anyway.  The modules will still be imprted and still work.  This current version of Angular Material is in Beta and hopefully these errors will be resolved going forward.

The material-example.module.ts file imports all the necessary dependencies.

What is not on the documentation is the need to have `BrowserAnimationsModule` installed via npm as well and then imported to the necessary modules.

Run `npm install --save @angular/animations` 

Per the documentation the following lines are added to the `index.html` file::

`<link href="node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css" rel="stylesheet">`

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`


One of the links brings in code from the local node_modules directory, and the other imports via a third party.  This is not ideal.  Note that I have adedd the node_module stylesheet into the `.angular-cli.json` file directly.  Ordering is extremely important in the styles declarations. The second link I have manually copied and set in the global styles.css page. Since there is a third party link in this file, it is possible for those servers to go down and make the code unrenderable.  I have not studied the access rights on this file so tred with caution. 
