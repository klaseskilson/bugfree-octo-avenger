Bugfree octo-avenger
====================
Bugfree octo-avenger (_bugfree_ for short) is a simple web app written in AngularJS. It keeps track of competitors end time,
and displays them in a nice way. You can order the results table by first name, last name and
end time.

_"Det blir nice"_ was the words first used to describe this simple app. (Those three
words are, as it turned out, a great way to describe the workflow while using Angular.)

The app largely uses the power in AngularJS templating and the two-way data binding,
which makes sure that the data is allways the same all over the app.

#### Todo
* Make the filter work for the end time.
* Fix the column width so that it doesn't jump around when changing from the podium view.
* Add some sort of session saving, and mayhaps a server backend.

## Technical details
It's a very simple web app. It uses [AngularJS](http://angularjs.org) and [Bootstrap CSS](http://getbootstrap.com)
using [Less CSS](http://lesscss.org), without any backend. I've tried to apply the KISS principle here.

### The app
The app is a angular module called `bugfree`. The controller `Result` handles the
entries with the functions `addEntry` and `reset`. AddEntry pushes a new entry
to the `entries` array. Reset resets the form.

The filter `prettyTime` displays the object sent to it as a time in the form
`H:MM.SS`, with leading zeroes on the minutes and seconds.

### The entries
Each entry object contains the following data:
* `first_name`
* `last name_name`
* `time` the end time, object. Split up in order to enable it to be ordered correctly.
	* `hh`
	* `mm`
	* `ss`

### The results
The results are displayed using the `ng-repeat`-directive, and are ordered by the
`OrderBy`-filter. The results can be filtered, based on name.

### Folders
The file structure for this repo:
* `css` all the css files!
	* `css/src` all the less files that will be used to compile a static css file
	* `css/bootstrap` all the bootstrap css files
* `fonts` the fonts
* `script` the javascript files
	* `script/libs` the javascript libs used (AngularJS, Less)

## License
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
Version 2, December 2004

Copyright (C) 2014 Klas Eskilson <hej@klaseskilson.se>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE TERMS AND CONDITIONS
FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.
