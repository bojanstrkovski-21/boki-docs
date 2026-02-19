---
title: How do I display a local image in Markdown
description: How do I display a local image in Markdown
created: 2026-02-19T10:33:09 (UTC +01:00)
tags: []
source: https://stackoverflow.com/questions/41604263/how-do-i-display-a-local-image-in-markdown
author: zjffdu 29.9k5252 gold badges122122 silver badges174174 bronze badges
---

# How do I display a local image in Markdown? - Stack Overflow

> ## Excerpt
> How can I display a local image in Markdown? I don't want to set up a web server for that.
I try the following in Markdown, but it doesn't work:
`` #![image](files/Users/jzhang/Desktop/Isolated.png) ``

---
There are a few formats that we can choose from, as the [official website shows](https://daringfireball.net/projects/markdown/syntax#img). One of them, if you put a

```css
![alt text](Image.jpg "Title")
```

The path can be relative an absolute too (the example uses relative). The above assumes _Image.jpg_ is in the same folder as the Markdown file. Relative paths are useful for repositories, when others clone the project into a different folder.

The `alt text` will be shown if the picture cannot be drawn on screen.

The `Title` is optional and it will be the tooltip (mouse hover over). Several screen readers rely on those values; be kind and write meaningful text.

If you use spaces in filenames, like _Arthur Dent.jpg_, then you need to wrap the path in `< >` as follows:

```rust
![Arthur's profile picture](<Arthur Dent.jpg> "Title")
```

Here's an example of referencing an image from a neighboring folder:

```
root
├── Documentation
|   └── Readme.md
└── Resources
    └── Arthur.jpg
```

Then, in file _Readme.md_ (`../` one directory up, `Resources/` within Resources folder, _Arthur.jpg_ this image):

```less
![alt text](../Resources/Arthur.jpg "Title")
```
