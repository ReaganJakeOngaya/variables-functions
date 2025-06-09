## Variables
- Are the Fundamentals for storing and managing data in JS.
- They are essentially named containers that store values, allowing referrencing and manipulation while working on your code.

## Naming conventions and rules
1. Cannot start with a number
2. Only starts with a letter( a-z, A-Z) or underscore(_) or a dollar-sign ($)
3. They are "CaseSensitive" mostly use camel case.
4. Can not use JS reserved key word like "for" , "function" etc.

 ## Var
- Was the only way of declaring Variable in the old JS before "let" and "const"
 1. when declared inside afunction it is only accessible within that function.
 2. If declared outside then it is accessible anywhere in your bloce of code.
 3. it does not respect the "block scope" ie.(inside "if statements" or "for loops")
 4. The are "Hoisted" meaning they can be used even before its declaration but will have "undefined value" until its actual assignment line is executed.
 5. You can redeclare the same variable multiple of times but often leads to confusion if not keen on them.

 ## Let
 1. It is block scoped meaning it is only accessible whin the scope it was declared on. Reducing error posibilities.
 2. They are also Hoisted, they are in "Temporal dead zone"  you can not use them or access them until their line of code is executed. if you try to access them they throw a "Reference Error".
 3. you can not re-declare the sane varible in the same scope.
 4. You can re-assign them

 ## const
 1. its preferred for immutable variables.
 2. its also block scoped just like let.
 3. its also hoisted the same way as let. and throw a Referrence error if accessed early.
 4. they can NOT be re-assigned. But a new Object or Array can modify the properties of the object or the elements of the array the const variable is storing and managing.