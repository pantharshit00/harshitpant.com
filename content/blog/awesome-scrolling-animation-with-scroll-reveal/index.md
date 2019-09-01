---
draft: false
title: Awesome scrolling animation with Scroll Reveal
date: 2017-05-02
author: Harshit Pant
tags:
  - misc
  - frontend
cover: ./cover.jpg
---

You must have seen the amazing scrolling effect in many big production websites. You also have thought if you might implement that same effect in your own website. It is very damn easy then you expect. The library [Scroll Reveal](http://scrollrevealjs.org) makes it very easy. Lets see an example.

## Example in codepen.io (See the JS tab)

Scroll down to see more of it.

---

<iframe height='500' scrolling='no' title='Scroll Reveal' src='//codepen.io/pantharshit00/embed/MmaEoY/?height=265&theme-id=light&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/pantharshit00/pen/MmaEoY/'>Scroll Reveal</a> by Harshit Pant (<a href='https://codepen.io/pantharshit00'>@pantharshit00</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

## Example Explained

Make sure you include the scroll reveal library by including

```js
<script src="https://unpkg.com/scrollreveal/dist/scrollreveal.min.js" />
```

I have included it in codepen's setting so you might not see it. I'll concentrate on the javascript more so open the JS tab in codepen. Firstly we are instantiating scroll reveal as `window.sr` as to make its scope all over the window or document. We are passing an object of options to override the default settings. I am just passing `{reset:true}` to show the effect more than once. You may see more options to play with in the git repo of scroll reveal linked down. Then to animate our first section we are calling `sr.reveal()` method. We have to pass the id using `#` or class using `.` kind a like CSS so that scroll reveal may select the element using `document.querySelector()` .As a second argument we may pass some options like `origin`,`distance` and `duration`. Other things in the file are the same just written for other sections. This only takes for this great scroll animation to take place. It really that simple.

---

## [Git repo](https://github.com/jlmakes/scrollreveal) of scroll reveal
