
# Elements
## <!DOCTYPE html>
* indicate the type of files
## <html></html>
* root element
* cover all contents on the website

## <head></head>
* not show to users
* display important information for developers

## <body></body>
* display all information to users

### div
* division
* defines a division or a section in an HTML document
* a container for HTML elements 

#### span
* an inline container used to mark up a part of a text, or a part of a document

### heading
<h1></h1>
...
<h6></h6>

### Paragraph
* Use space to separate attributes
```html
    <p> text </p>
```

#### class
```html
    <p class="editor-note"> text </p>
```


### list

```html
    <!-- Unordered lists --> 
    <ul>
        <li>technologists</li>
        <li>thinkers</li>
        <li>builders</li>
    </ul>

    <!-- Ordered lists -->
    <ol>
        <li>technologists</li>
        <li>thinkers</li>
        <li>builders</li>
    </ol>
    
```

### link
* anchor
    * transfer texts to hyperlinks
```html
    <a></a>
```
#### href
* linked url
```html
    <a href=""></a>
```


## <meta charset="utf-8">
* meta
    * defines metadata about an HTML document
* use the charset on the website

## <title></title>
* display the title to users

## src, alc
* src: source
* alc: altervative. If the source is not displayed, show the contents of alc to users



# Nesting Element
* in the text of paragraph
```html
    <p>My cat is <strong>very</strong> grumpy.</p>
```