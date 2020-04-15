# Technical assessment - Charlien Van Impe


## Introduction

Pleas find here my solotion of the technical assessment. As stated in the assignment, the app has been developed in PHP 7.3, ZF 3 for the back end, and bootstrap 3 and JQuery on the frond end.

For the layout, the MENTOR bootstrap 3 template has been integrated, since layout is secundary in this assignmet.

## Installation using Composer

With the terminal command `composer install` you can install the dependencies as stored in the composer.lock files.
Other changes may be required depending on your local operating system, webserver and development environment.

## Project without database

The data is retrieved from a data file.

A database could be integrated by using DOCTRINE. Doctrine is an Object Relational Mapper component (ORM). This enables you to work with Entity classes to access, create, edit and delete data stored in the database, in an object oriented way. I would choose a MySQL database.

## Further possible backend improvement

Make use of models to handle the logic. Create factories so that the models can be easily accessed within the controller. Since I am used to work with a preset Zend boilerplate, I am not used yet to configure these factories within Zend. In order to achieve a working result, I decided to put the logic within the controller itself. Since it is a small app it will work fine. However with the growth and maintainance of the project in mind, I would quickly consult a senior collegue and take note of his/hers approach in a real working situation.

Create a Rest API, that enables the front end to perform the CRUD operations using AJAX. Exampleo of an AJAX call with Jquery for submitting a form on the front end
`
$.ajax({
    type: 'POST',
    data: {
        firstName: 'Charlien',
        lastName: 'Van Impe',
        email: 'charlienvanimpe@yahoo.com',
        position: 'developer'
    },
    url: location.protocol + '//' + location.hostname + '//usersapi',
    success: function(data) {
        //show the success alert under the form
        $('#success').removeClass('hid')
    },
    error: function(data) {
        //show the error alert under the form
        $('#err').removeClass('hid')
    }
 })
`
## possible front end improvements

* Integrate [jQuery data tables plugin](https://datatables.net/). This works fine if you can consume the data from the backend throug an API. Since I encountered problems on the backend to set the API up from scratch, I did not choose this option for now.
* Make use of jQuery form validation plugin: example [jQuery Validation plugin](https://jqueryvalidation.org/)
