---
title: "Hello World!"
date: 2026-03-29
description: "Ever wondered what actually happens when you run git commit? We explore the object store, tree objects, and how git history really works under the hood."
tags: ["demo", "test"]
---

This content page is to test how the markdown rendering is working using astro & webtui!

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](https://github.com/dcurtis/markdown-mark/blob/master/png/208x128-solid.png?raw=true "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns (centered)|
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```js
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `astro & webtui! :)`.
