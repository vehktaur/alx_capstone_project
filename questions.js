const quizArray = [
  {
    category: 'HTML',
    questions: [
      {
        number: 1,
        questionText: 'Which HTML element is used to define a list item?',
        answers: [
          { text: '<list>', correct: false },
          { text: '<li>', correct: true },
          { text: '<item>', correct: false },
          { text: '<ul>', correct: false }
        ]
      },
      {
        number: 2,
        questionText: "What is the purpose of the HTML 'br' element?",
        answers: [
          { text: 'To create a bold text effect', correct: false },
          { text: 'To insert a line break or carriage return', correct: true },
          { text: 'To define a bullet point list', correct: false },
          { text: 'To highlight text in yellow', correct: false }
        ]
      },
      {
        number: 3,
        questionText: 'Which HTML element is used to create a numbered list?',
        answers: [
          { text: '<nl>', correct: false },
          { text: '<ul>', correct: false },
          { text: '<ol>', correct: true },
          { text: '<li>', correct: false }
        ]
      },
      {
        number: 4,
        questionText: "What does the HTML 'doctype' declaration define?",
        answers: [
          { text: 'The document title', correct: false },
          { text: 'The character encoding of the document', correct: false },
          {
            text: 'The type and version of HTML being used in the document',
            correct: true
          },
          { text: 'The author of the document', correct: false }
        ]
      },
      {
        number: 5,
        questionText:
          "In HTML, what is the 'alt' attribute used for in an 'img' element?",
        answers: [
          { text: 'To set the image source', correct: false },
          { text: 'To define the image dimensions', correct: false },
          { text: 'To specify the alignment of the image', correct: false },
          {
            text: 'To provide alternative text for the image, displayed if the image cannot be loaded',
            correct: true
          }
        ]
      },
      {
        number: 6,
        questionText:
          "What does the 'href' attribute specify in an anchor ('a') element in HTML?",
        answers: [
          { text: 'The heading level of the target section', correct: false },
          {
            text: 'The hyperlink reference, which is the URL of the linked resource',
            correct: true
          },
          { text: 'The font size of the anchor text', correct: false },
          { text: 'The alignment of the anchor element', correct: false }
        ]
      },
      {
        number: 7,
        questionText: "What is the purpose of the HTML 'header' element?",
        answers: [
          {
            text: 'To define a section that contains navigation links',
            correct: true
          },
          {
            text: 'To create a horizontal line across the page',
            correct: false
          },
          {
            text: 'To specify the main content of the web page',
            correct: false
          },
          { text: 'To insert a comment in the HTML code', correct: false }
        ]
      },
      {
        number: 8,
        questionText:
          "What is the semantic meaning of the HTML 'footer' element?",
        answers: [
          {
            text: 'It represents a subsection of the document',
            correct: false
          },
          {
            text: 'It marks a change in the language of the document',
            correct: false
          },
          {
            text: 'It signifies the end of the document or a section',
            correct: true
          },
          {
            text: 'It defines a section that contains metadata about the document',
            correct: false
          }
        ]
      },
      {
        number: 9,
        questionText:
          "What is the purpose of the 'input' element with the 'type' attribute set to 'checkbox' in HTML?",
        answers: [
          { text: 'To create a clickable button', correct: false },
          { text: 'To display a list of options', correct: false },
          { text: 'To input text data', correct: false },
          {
            text: 'To allow the user to select multiple options from a list',
            correct: true
          }
        ]
      },
      {
        number: 10,
        questionText: "What is the HTML 'iframe' element used for?",
        answers: [
          { text: 'To display images', correct: false },
          { text: 'To embed video content', correct: false },
          {
            text: 'To create a container for external web content, such as a webpage or media',
            correct: true
          },
          { text: 'To format text and paragraphs', correct: false }
        ]
      },
      {
        number: 11,
        questionText:
          "What is the purpose of the 'figure' and 'figcaption' elements in HTML?",
        answers: [
          { text: 'To create footnotes for a document', correct: false },
          { text: 'To insert audio and video content', correct: false },
          {
            text: 'To group content and provide a caption or legend for it',
            correct: true
          },
          { text: 'To define a block of code in a document', correct: false }
        ]
      },
      {
        number: 12,
        questionText:
          "In HTML, what is the 'cite' attribute used for in a 'blockquote' element?",
        answers: [
          { text: 'To specify the author of the document', correct: false },
          {
            text: 'To create a citation link to an external source',
            correct: true
          },
          {
            text: 'To define the text color of the blockquote',
            correct: false
          },
          { text: 'To set the font style of the blockquote', correct: false }
        ]
      },
      {
        number: 13,
        questionText: "What is the 'role' attribute used for in HTML?",
        answers: [
          {
            text: 'To specify the purpose or type of an element for accessibility',
            correct: true
          },
          { text: 'To define the table layout', correct: false },
          {
            text: 'To set the position of an element on the page',
            correct: false
          },
          {
            text: 'To declare the character encoding of the document',
            correct: false
          }
        ]
      },
      {
        number: 14,
        questionText: "What is the HTML 'nav' element used for?",
        answers: [
          {
            text: 'To define a section that contains the main content of the web page',
            correct: false
          },
          { text: 'To specify the language of the document', correct: false },
          { text: 'To create a list of navigation links', correct: true },
          { text: 'To add a horizontal line across the page', correct: false }
        ]
      },
      {
        number: 15,
        questionText:
          "What is the 'autocomplete' attribute used for in an 'input' element in HTML?",
        answers: [
          {
            text: 'To enable or disable the auto-scrolling feature',
            correct: false
          },
          {
            text: 'To specify the character encoding of the input',
            correct: false
          },
          {
            text: 'To control whether the browser should automatically complete the input based on previous user input',
            correct: true
          },
          { text: 'To set the input field as read-only', correct: false }
        ]
      }
    ]
  },
  {
    category: 'CSS',
    questions: [
      {
        number: 1,
        questionText: "What is the CSS 'box-model' used for?",
        answers: [
          { text: 'Defining borders only', correct: false },
          { text: 'Controlling layout and spacing of elements', correct: true },
          { text: 'Styling text fonts', correct: false },
          { text: 'Creating animations', correct: false }
        ]
      },
      {
        number: 2,
        questionText: "In CSS, what is the 'z-index' property used for?",
        answers: [
          { text: "Setting the element's width", correct: false },
          { text: 'Controlling the stacking order of elements', correct: true },
          { text: "Changing the element's color", correct: false },
          { text: 'Applying shadows to text', correct: false }
        ]
      },
      {
        number: 3,
        questionText: "What does 'CSS specificity' refer to?",
        answers: [
          { text: 'The weight of a font', correct: false },
          { text: 'The order of elements in the HTML', correct: false },
          {
            text: 'The importance of a CSS rule in relation to an element',
            correct: true
          },
          { text: 'The size of a margin', correct: false }
        ]
      },
      {
        number: 4,
        questionText: "What does the CSS property 'margin' control?",
        answers: [
          { text: 'Spacing between the border and content', correct: true },
          { text: 'The text color', correct: false },
          { text: 'The font size', correct: false },
          { text: 'Element positioning', correct: false }
        ]
      },
      {
        number: 5,
        questionText:
          'Which CSS property is used to change the text color of an element?',
        answers: [
          { text: 'background-color', correct: false },
          { text: 'text-color', correct: false },
          { text: 'color', correct: true },
          { text: 'font-color', correct: false }
        ]
      },
      {
        number: 6,
        questionText:
          "In CSS, how can you select all anchor links within a specific `<div>` with the class 'menu'?",
        answers: [
          { text: '.menu a', correct: true },
          { text: 'div.menu a', correct: false },
          { text: 'div.menu > a', correct: false },
          { text: '.menu > a', correct: false }
        ]
      },
      {
        number: 7,
        questionText:
          "What is the purpose of the CSS property 'position: relative'?",
        answers: [
          {
            text: 'It removes an element from the normal document flow.',
            correct: false
          },
          {
            text: 'It positions an element relative to its nearest positioned ancestor.',
            correct: true
          },
          {
            text: 'It makes an element absolute to a relative positioned element.',
            correct: false
          },
          {
            text: 'It gives an element a relatively large position.',
            correct: false
          }
        ]
      },
      {
        number: 8,
        questionText: "What does the CSS property 'display: none' do?",
        answers: [
          {
            text: 'It makes the element invisible but still occupies space.',
            correct: true
          },
          { text: 'It changes the font size.', correct: false },
          { text: 'It adds a shadow to the element.', correct: false },
          {
            text: 'It removes the element from the document flow completely.',
            correct: false
          }
        ]
      },
      {
        number: 9,
        questionText:
          'Which CSS pseudo-class selects an element when a user hovers over it?',
        answers: [
          { text: ':hover', correct: true },
          { text: ':active', correct: false },
          { text: ':focus', correct: false },
          { text: ':visited', correct: false }
        ]
      },
      {
        number: 10,
        questionText: "What is the CSS property 'text-decoration' used for?",
        answers: [
          { text: 'Changing the background color of text.', correct: false },
          { text: 'Adding shadows to text.', correct: false },
          {
            text: 'Controlling text underlines, overlines, and line-throughs.',
            correct: true
          },
          { text: 'Adjusting the spacing between letters.', correct: false }
        ]
      },
      {
        number: 11,
        questionText: "In CSS, what does 'box-sizing: border-box' do?",
        answers: [
          { text: 'It adds a border to the box.', correct: false },
          {
            text: `It includes padding and border in the element's total width and height.`,
            correct: true
          },
          { text: 'It rounds the corners of the box.', correct: false },
          { text: 'It makes the box invisible.', correct: false }
        ]
      },
      {
        number: 12,
        questionText:
          'Which CSS property is used to control the order in which elements are displayed on the Z-axis?',
        answers: [
          { text: 'z-index', correct: true },
          { text: 'order', correct: false },
          { text: 'position', correct: false },
          { text: 'layer-index', correct: false }
        ]
      },
      {
        number: 13,
        questionText: "What is the CSS 'float' property used for?",
        answers: [
          { text: 'Creating animations', correct: false },
          {
            text: 'Positioning an element relative to the viewport.',
            correct: false
          },
          { text: 'Making text bold.', correct: false },
          {
            text: 'Controlling the alignment and positioning of elements within their parent container.',
            correct: true
          }
        ]
      },
      {
        number: 14,
        questionText:
          'Which CSS property is used to set the background color of an element?',
        answers: [
          { text: 'color', correct: false },
          { text: 'background-color', correct: true },
          { text: 'text-color', correct: false },
          { text: 'font-color', correct: false }
        ]
      },
      {
        number: 15,
        questionText: "In CSS, what does 'media query' refer to?",
        answers: [
          {
            text: 'A query language used for selecting elements in the DOM.',
            correct: false
          },
          { text: 'A query to retrieve data from a database.', correct: false },
          {
            text: 'A technique for applying different styles to different screen sizes or devices.',
            correct: true
          },
          { text: 'A method for creating dynamic animations.', correct: false }
        ]
      }
    ]
  },
  {
    category: 'Python',
    questions: [
      {
        number: 1,
        questionText: "What is the purpose of a Python 'lambda' function?",
        answers: [
          { text: 'Define a class', correct: false },
          { text: 'Create an anonymous function', correct: true },
          { text: 'Import external libraries', correct: false },
          { text: 'Declare a global variable', correct: false }
        ]
      },
      {
        number: 2,
        questionText: "What is the 'GIL' in Python?",
        answers: [
          { text: 'Global Internet Locator', correct: false },
          { text: 'Global Interpreter Lock', correct: true },
          { text: 'Graphical Interface Layer', correct: false },
          { text: 'General Input Language', correct: false }
        ]
      },
      {
        number: 3,
        questionText: 'Which data structure in Python is not mutable?',
        answers: [
          { text: 'List', correct: false },
          { text: 'Tuple', correct: true },
          { text: 'Dictionary', correct: false },
          { text: 'Set', correct: false }
        ]
      },
      {
        number: 4,
        questionText:
          "What is the purpose of Python's 'virtual environment' (virtualenv)?",
        answers: [
          {
            text: 'To create virtual copies of the entire Python environment',
            correct: false
          },
          { text: 'To run Python code in a web browser', correct: false },
          {
            text: 'To isolate and manage dependencies for Python projects',
            correct: true
          },
          {
            text: 'To simulate real-world environments for testing',
            correct: false
          }
        ]
      },
      {
        number: 5,
        questionText:
          "What is the primary use of the 'if' statement in Python?",
        answers: [
          { text: 'To create loops', correct: false },
          { text: 'To define functions', correct: false },
          {
            text: 'To execute code conditionally based on a boolean expression',
            correct: true
          },
          { text: 'To import external modules', correct: false }
        ]
      },
      {
        number: 6,
        questionText:
          'What does the term "PEP 8" refer to in the Python community?',
        answers: [
          { text: 'A popular Python programming editor', correct: false },
          {
            text: 'A Python enhancement proposal related to syntax highlighting',
            correct: false
          },
          {
            text: 'The Python Enhancement Proposal for Python style guide recommendations',
            correct: true
          },
          { text: 'A Python-specific search engine', correct: false }
        ]
      },
      {
        number: 7,
        questionText: "In Python, what does the 'super()' function do?",
        answers: [
          { text: 'Create a new object', correct: false },
          { text: 'Access the parent class or its attributes', correct: true },
          { text: 'Execute a loop', correct: false },
          { text: 'Terminate the program', correct: false }
        ]
      },
      {
        number: 8,
        questionText: 'What is the purpose of the Python module "os"?',
        answers: [
          { text: 'To create graphical user interfaces', correct: false },
          { text: 'To handle file and directory operations', correct: true },
          { text: 'To perform mathematical calculations', correct: false },
          { text: 'To manage network connections', correct: false }
        ]
      },
      {
        number: 9,
        questionText:
          'What is the difference between "deep copy" and "shallow copy" in Python?',
        answers: [
          {
            text: 'Deep copy creates a new object with a completely independent copy of the original, while a shallow copy shares references with the original.',
            correct: true
          },
          {
            text: 'Deep copy only copies the top-level elements, while a shallow copy copies all nested elements.',
            correct: false
          },
          {
            text: 'Deep copy creates a reference to the original object, while a shallow copy creates a completely independent copy.',
            correct: false
          },
          {
            text: 'Deep copy and shallow copy are two different terms for the same operation in Python.',
            correct: false
          }
        ]
      },
      {
        number: 10,
        questionText:
          'What does the "list comprehension" feature in Python allow you to do?',
        answers: [
          {
            text: 'It allows you to compress large lists into smaller ones.',
            correct: false
          },
          {
            text: 'It enables you to create a new list by applying an expression to each item in an existing list or iterable.',
            correct: true
          },
          { text: 'It helps you generate random lists.', correct: false },
          {
            text: `It's used to list all possible exceptions in a Python program.`,
            correct: false
          }
        ]
      },
      {
        number: 11,
        questionText: 'In Python, what is a "docstring"?',
        answers: [
          {
            text: 'A specialized Python data type for storing documentation.',
            correct: false
          },
          {
            text: 'A way to add comments within the code that are not visible to the interpreter.',
            correct: false
          },
          {
            text: 'A string used to document modules, classes, and functions, providing information about their purpose and usage.',
            correct: true
          },
          {
            text: 'A debugging tool for locating syntax errors.',
            correct: false
          }
        ]
      },
      {
        number: 12,
        questionText: 'What is a "closure" in Python?',
        answers: [
          {
            text: 'A data structure for storing multiple values.',
            correct: false
          },
          {
            text: 'A function that has access to variables from its containing (enclosing) function, even after the outer function has finished executing.',
            correct: true
          },
          { text: 'A type of exception handling in Python.', correct: false },
          {
            text: 'A Python-specific design pattern for creating user interfaces.',
            correct: false
          }
        ]
      },
      {
        number: 13,
        questionText:
          'What is the purpose of the Python built-in function "zip()"?',
        answers: [
          { text: 'To compress and decompress files.', correct: false },
          { text: 'To convert a string to lowercase.', correct: false },
          {
            text: 'To combine two or more iterables into tuples of corresponding elements.',
            correct: true
          },
          { text: 'To create a zip archive of files.', correct: false }
        ]
      },
      {
        number: 14,
        questionText: "What is the Python 'assert' statement used for?",
        answers: [
          { text: 'To display a message on the console.', correct: false },
          {
            text: 'To assert the correctness of a condition or expression, raising an exception if it is False.',
            correct: true
          },
          { text: 'To import external modules.', correct: false },
          { text: 'To create custom exceptions.', correct: false }
        ]
      },
      {
        number: 15,
        questionText:
          "In Python, what does the 'yield' keyword do in the context of functions?",
        answers: [
          {
            text: 'It defines a variable with a specific value.',
            correct: false
          },
          {
            text: 'It generates a sequence of values lazily, allowing the function to resume from where it left off.',
            correct: true
          },
          { text: 'It converts a value to a string.', correct: false },
          { text: 'It represents an anonymous function.', correct: false }
        ]
      }
    ]
  },
  {
    category: 'JavaScript',
    questions: [
      {
        number: 1,
        questionText: "What is a 'closure' in JavaScript?",
        answers: [
          { text: 'A way to lock an element in place', correct: false },
          { text: 'A way to enclose an element in a div', correct: false },
          {
            text: 'A function that has access to variables from its containing function',
            correct: true
          },
          { text: 'A method to close a window in a browser', correct: false }
        ]
      },
      {
        number: 2,
        questionText: "What is the purpose of 'hoisting' in JavaScript?",
        answers: [
          { text: 'Creating custom animations', correct: false },
          {
            text: 'Automatically moving variables and functions to the top of their containing scope',
            correct: true
          },
          { text: 'Creating responsive layouts', correct: false },
          { text: 'Declaring event listeners', correct: false }
        ]
      },
      {
        number: 3,
        questionText: "What is the 'event loop' in JavaScript responsible for?",
        answers: [
          {
            text: 'Handling asynchronous operations and callbacks',
            correct: true
          },
          { text: 'Defining keyboard events', correct: false },
          { text: 'Managing CSS animations', correct: false },
          { text: 'Executing script tags in HTML', correct: false }
        ]
      },
      {
        number: 4,
        questionText: "What is the purpose of the 'Map' object in JavaScript?",
        answers: [
          { text: 'To create a visual map of a web page', correct: false },
          { text: 'To display geographical maps in a browser', correct: false },
          {
            text: 'To store key-value pairs and remember the original insertion order of keys',
            correct: true
          },
          {
            text: "To navigate through a document's DOM structure",
            correct: false
          }
        ]
      },
      {
        number: 5,
        questionText: "What does 'destructuring' refer to in JavaScript?",
        answers: [
          {
            text: 'A technique for deleting elements from an array',
            correct: false
          },
          {
            text: 'A way to break down objects or arrays into individual variables',
            correct: true
          },
          {
            text: 'A method for splitting strings into substrings',
            correct: false
          },
          { text: 'A process of renaming variables', correct: false }
        ]
      },
      {
        number: 6,
        questionText: "What is a 'Promise' in JavaScript used for?",
        answers: [
          {
            text: 'A representation of a resolved value in JavaScript',
            correct: true
          },
          {
            text: 'A type of data structure for storing multiple values',
            correct: false
          },
          {
            text: 'A way to create responsive designs in web development',
            correct: false
          },
          { text: 'A method to create recursive functions', correct: false }
        ]
      },
      {
        number: 7,
        questionText: "What does the JavaScript 'NaN' stand for?",
        answers: [
          { text: 'Not a Number', correct: true },
          { text: 'New Assignment', correct: false },
          { text: 'Nested Arrays', correct: false },
          { text: 'No Action Needed', correct: false }
        ]
      },
      {
        number: 8,
        questionText: "In JavaScript, what is a 'callback function'?",
        answers: [
          {
            text: 'A function that is called automatically when the page loads',
            correct: false
          },
          {
            text: 'A function used for mathematical calculations',
            correct: false
          },
          {
            text: 'A function passed as an argument to another function and executed at a later time or under certain conditions',
            correct: true
          },
          {
            text: 'A function that adds event listeners to HTML elements',
            correct: false
          }
        ]
      },
      {
        number: 9,
        questionText: "What is 'TypeScript' in relation to JavaScript?",
        answers: [
          {
            text: 'A JavaScript library for creating slide presentations',
            correct: false
          },
          {
            text: 'A superset of JavaScript that adds static typing and other features',
            correct: true
          },
          {
            text: 'A JavaScript framework for building web applications',
            correct: false
          },
          { text: 'A method for encrypting JavaScript code', correct: false }
        ]
      },
      {
        number: 10,
        questionText:
          "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
        answers: [
          {
            text: 'To define functions that execute asynchronously',
            correct: false
          },
          { text: 'To create animations in web development', correct: false },
          {
            text: 'To work with promises and make asynchronous code appear more like synchronous code',
            correct: true
          },
          { text: 'To declare variables as constant', correct: false }
        ]
      },
      {
        number: 11,
        questionText: "What is 'localStorage' in JavaScript used for?",
        answers: [
          { text: 'To store data in a remote server', correct: false },
          { text: 'To access global variables', correct: false },
          {
            text: `To store key-value pairs in the client's web browser for persistent data storage`,
            correct: true
          },
          { text: 'To manipulate the DOM', correct: false }
        ]
      },
      {
        number: 12,
        questionText: "What is the purpose of the JavaScript 'fetch' API?",
        answers: [
          { text: 'To create animations and transitions', correct: false },
          {
            text: 'To fetch data from a remote server using HTTP requests',
            correct: true
          },
          {
            text: 'To manipulate the structure of HTML elements',
            correct: false
          },
          { text: 'To execute JavaScript code on a schedule', correct: false }
        ]
      },
      {
        number: 13,
        questionText: "What does 'ES6' refer to in the context of JavaScript?",
        answers: [
          {
            text: 'A specific version of the JavaScript programming language',
            correct: true
          },
          { text: 'A file format for web graphics', correct: false },
          { text: 'A standard for naming HTML elements', correct: false },
          { text: 'A method for searching and sorting arrays', correct: false }
        ]
      },
      {
        number: 14,
        questionText: "What is the JavaScript 'spread operator' used for?",
        answers: [
          {
            text: 'To create new arrays or objects by copying existing ones',
            correct: true
          },
          { text: 'To define custom font styles', correct: false },
          { text: 'To create tooltips for HTML elements', correct: false },
          { text: 'To execute code on page load', correct: false }
        ]
      },
      {
        number: 15,
        questionText:
          "What is a 'callback hell' or 'pyramid of doom' in JavaScript?",
        answers: [
          { text: 'A popular coding convention in JavaScript', correct: false },
          {
            text: 'A design pattern for creating responsive web pages',
            correct: false
          },
          {
            text: 'A situation where nested callback functions become hard to read and manage due to excessive indentation',
            correct: true
          },
          { text: 'A type of error in JavaScript code', correct: false }
        ]
      }
    ]
  },
  {
    category: 'MySQL',
    questions: [
      {
        number: 1,
        questionText: "What is a 'JOIN' clause used for in SQL?",
        answers: [
          { text: 'Adding new records to a table', correct: false },
          {
            text: 'Combining rows from two or more tables based on a related column',
            correct: true
          },
          { text: 'Deleting records from a table', correct: false },
          { text: 'Sorting records in ascending order', correct: false }
        ]
      },
      {
        number: 2,
        questionText:
          "What does 'ACID' stand for in the context of database transactions?",
        answers: [
          {
            text: 'Atomicity, Consistency, Isolation, Durability',
            correct: true
          },
          { text: 'All Columns In Database', correct: false },
          { text: 'Advanced Coding In Databases', correct: false },
          { text: 'Action Command In Database', correct: false }
        ]
      },
      {
        number: 3,
        questionText: "What is the purpose of the 'GROUP BY' clause in SQL?",
        answers: [
          { text: 'Filter rows based on a condition', correct: false },
          { text: 'Sort rows in descending order', correct: false },
          {
            text: 'Group rows that have the same values into summary rows',
            correct: true
          },
          { text: 'Join multiple tables', correct: false }
        ]
      },
      {
        number: 4,
        questionText: "What is the purpose of the 'LIKE' operator in SQL?",
        answers: [
          { text: 'To create new tables', correct: false },
          { text: 'To perform mathematical calculations', correct: false },
          {
            text: 'To filter rows based on a specified pattern in a text column',
            correct: true
          },
          { text: 'To combine data from multiple tables', correct: false }
        ]
      },
      {
        number: 5,
        questionText: "What is a 'primary key' in a database table?",
        answers: [
          {
            text: 'A special key used for opening the database',
            correct: false
          },
          {
            text: 'A key that is only used in emergency situations',
            correct: false
          },
          {
            text: 'A unique identifier for each row in a table, ensuring data integrity and facilitating table relationships',
            correct: true
          },
          {
            text: 'A key used for encrypting data in the database',
            correct: false
          }
        ]
      },
      {
        number: 6,
        questionText: "What is the purpose of the 'UNION' operator in SQL?",
        answers: [
          { text: 'To find the intersection of two sets', correct: false },
          {
            text: 'To concatenate the results of two or more SELECT queries',
            correct: true
          },
          {
            text: 'To perform division operations on numeric data',
            correct: false
          },
          { text: 'To filter rows based on a condition', correct: false }
        ]
      },
      {
        number: 7,
        questionText: "What is the SQL statement 'ALTER TABLE' used for?",
        answers: [
          { text: 'To drop a table and delete all its data', correct: false },
          { text: 'To insert new rows into a table', correct: false },
          {
            text: 'To modify the structure of an existing table, such as adding, deleting, or modifying columns',
            correct: true
          },
          { text: 'To create a new database', correct: false }
        ]
      },
      {
        number: 8,
        questionText: "What is the purpose of the 'HAVING' clause in SQL?",
        answers: [
          { text: 'To change the data type of a column', correct: false },
          {
            text: 'To specify the order of rows in the result set',
            correct: false
          },
          {
            text: 'To filter rows in the result set after grouping with the GROUP BY clause',
            correct: true
          },
          { text: 'To rename a column in the result set', correct: false }
        ]
      },
      {
        number: 9,
        questionText:
          "What is the SQL 'CASCADE' option used for in foreign key constraints?",
        answers: [
          { text: 'To enforce strict data type checking', correct: false },
          { text: 'To prevent changes to primary key values', correct: false },
          {
            text: 'To automatically update or delete related records in child tables when the parent record is updated or deleted',
            correct: true
          },
          { text: 'To restrict access to the database', correct: false }
        ]
      },
      {
        number: 10,
        questionText: "What is the SQL statement 'GRANT' used for?",
        answers: [
          { text: 'To create a new user account', correct: false },
          { text: 'To define a new table structure', correct: false },
          {
            text: 'To assign specific privileges or permissions to a user or role in a database',
            correct: true
          },
          { text: 'To insert data into a table', correct: false }
        ]
      },
      {
        number: 11,
        questionText: "What is the purpose of the SQL 'CASE' statement?",
        answers: [
          { text: 'To count the number of rows in a table', correct: false },
          { text: 'To execute a loop', correct: false },
          {
            text: 'To perform conditional logic and return different values based on specified conditions',
            correct: true
          },
          { text: 'To sort the result set in ascending order', correct: false }
        ]
      },
      {
        number: 12,
        questionText: "What is a 'view' in a database and why is it used?",
        answers: [
          {
            text: 'A graphical representation of a database schema',
            correct: false
          },
          {
            text: 'A virtual table created as a result of a SELECT query, allowing users to see specific data without modifying the underlying tables',
            correct: true
          },
          { text: 'A type of database storage engine', correct: false },
          { text: 'A tool for optimizing SQL queries', correct: false }
        ]
      },
      {
        number: 13,
        questionText: "What is the purpose of the SQL 'TRUNCATE' statement?",
        answers: [
          {
            text: 'To round numeric values to the nearest integer',
            correct: false
          },
          {
            text: 'To delete all rows from a table, but the table structure remains intact',
            correct: true
          },
          { text: 'To update rows in a table', correct: false },
          { text: 'To change the data type of a column', correct: false }
        ]
      },
      {
        number: 14,
        questionText: "What is the SQL 'COUNT' function used for?",
        answers: [
          {
            text: 'To count the number of rows in a table or matching a specified condition',
            correct: true
          },
          {
            text: 'To calculate the average value of a numeric column',
            correct: false
          },
          { text: 'To group rows by a specified column', correct: false },
          { text: 'To select distinct values from a column', correct: false }
        ]
      },
      {
        number: 15,
        questionText: "What does the SQL 'NULL' value represent?",
        answers: [
          { text: 'A placeholder for a specific value', correct: false },
          { text: 'A wildcard character in SQL queries', correct: false },
          {
            text: 'An unknown or missing value in a database column',
            correct: true
          },
          { text: 'A special value representing infinity', correct: false }
        ]
      }
    ]
  }
];

export default quizArray;
