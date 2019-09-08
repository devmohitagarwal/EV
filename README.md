
# EV ![GitHub Logo](../master/images/logo.jpg)

#### Ideology:
## EV or Event-Visualizer is a tiny , event-driven user interaction modal.

EV was made as a minimal, simple popup/modal for times when the time crunch hits you and the Error message or the success popup isn't on your top priority list. It can be run by simply adding the EV.js file in your project and done. No Initialization needed.   

<!-- ---- -->
<!-- 
 **Simple:**

 - A simple (ultra) tiny modal/alert box, built out of necessity in projects where a
   simple modal/popup/yes-no event is needed.

 **Zero Dependency:**

 - Pure Javascript, No HTML or CSS needs to be pre added, though you can add your own html with same classes
   if one needs to modify the structure

 **Dynamic:**

 - Highly configurable with configurable buttons and callbacks. -->


---
>- [Installation](#installation)
>- [Usage](#usage)
>    - [Basic](#Basic-Usage)
> - [Configurations](#Configurations)
<!-- >  - [GitHub token](#github-token)
>- [Migrating from a manual changelog](#migrating-from-a-manual-changelog)
>  - [Rake task](#rake-task) -->



## Installation

**EV**, like any other javascript file,[just include it](https://www.tutorialspoint.com/javascript/javascript_placement.htm) in your project and all is set.

----

## Usage


-  ## Basic Usage:
    
    for **Success** type:

	   EV.show({
                    evetType: "Success",
                    heading: "Great !",
                    eventDescription: "<b>EV</b> successfully initialized."
                })

	for **Error** type

	   EV.show({
                    evetType: "Error",
                    heading: "Uh-Oh !",
                    eventDescription: "It's not <b>Friday</b> yet."
                })
    
    for **Informative/Warning** type

        EV.show({
            evetType: "Info",
            heading: "Information",
            eventDescription: "The object you're lookin for is no longer available, Please try again next time"
        })
    




When the key `eventType` is "success" , "error" or "information"/"warning", the color Scheme (themeColor) is by default `#20d472` , `#f65656` and `#fdc702` respectively.

----
-  ## Configurations:
    
    **Adding Buttons**:
    you can simply add your own custom buttons removing the default `OK` button by:

        EV.show({
            buttons: [
                {
                    text: "Yes",
                    class: "MyCustomClass",
                    data: "'I wanna quit'",
                    bgColor: "#bbb",
                    onClick: function () {
                        console.log("User said he want's to: " + data)
                    }
                }, {
                    text: "Hell No",
                    class: "MyCustomClass2",
                    data: "'I am staying'",
                    bgColor: "#26bc6a",
                    onClick: function () {
                        console.log("User said he want's to: " + data)
                    }
                }
            ],
            evetType: "Success",
            heading: "Exit ?",
            eventDescription: "Are you sure you want to <b>quit</b>?"
        })
    




You can add as many buttons in the button array, though upto 3 are suggested.



| Key | Type | Description |
| --- | --- | -- |
| text | String | Text to be displayed on the button |
| class | String | Custom class can be added to a button, Avoids CSS |
| data | String | Data can be passed to the button click event, if JSON is needed, you can stringify it and it will be avaibale to you in the function in stringified format |
| bgColor | HEX/String | If you want your button to be of a specific color, pass it here |
| onClick | Function | Function to be executed when the button click is triggered |

----

<!-- ## Configurations

Here is a list of some of the configurations or customizations avaibale for EV:

    $ github_changelog_generator --help

For more details about params, read the Wiki page: [**Advanced changelog generation examples**](https://github.com/github-changelog-generator/github-changelog-generator/wiki/Advanced-change-log-generation-examples) -->

