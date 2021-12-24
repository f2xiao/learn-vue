# v-if

The directive `v-if` is used to conditionally render a block. The blcok will only be rendered if the directive's expression returns a truthy value.

```
<h1 v-if="awesome">Vue is awesome!</h1>
```

It is also possible to add an "else block" with v-else:

```
<h1 v-if="awesome">Vue is awesome </h1>
<h1 v-else>Oh no 😢</h1>
```

## Conditional Groups with `v-if` on `<template>`

Because v-if is directive it has to be attached to a single element. But what if we want to toggle more than one element? In this case we can use `v-if` on a `<template>` element, which serves as an visible wrapper. The final rendered result will not include the `<template>` element.

```
<template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</template>
```

## `v-else`

You can use the `v-else` directive to indicate an "else block" for `v-if`:

```
<div v-if="Math.random() > 0.5">
    Now you see me
</div>
<div v-else>
    Now you don't
</div>
```

A `v-else` element must immediately follow a `v-if` or a `v-else-if` element - otherwise it will not be recognized.

## `v-else-if`

The `v-else-if`, as the name sugguests, serves as an "else if block" for `v-if`. It can also be chained multiple times.

```
<div v-if="type==='A'">
    A
</div>
<div v-else-if="type==='B'">
    B
</div>
<div v-else-if="type==='C'">
    C
</div>
<div v-else>
    not A/B/C
</div>
```

Similarly to `v-else`, a `v-else-if` element must immediately follow a `v-if` or a `v-else-if` element.

## Controlling reusable elements with `key`

Vue tries to render elements as efficiently as possible, often re-using them instead of rendering from scratch. Beyond helping make Vue very fast, this can have some useful advantages. For example, if you allow users to toggle between multiple login types:

```
<template v-if="loginType==='username'">
    <label>Username</label>
    <input placeholder="Enter your username">
</template>
<template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address">
</template>
```

Then switching the `loginType` in the code above will not erase what the user has already entered. Since both templates use the same elements, the `input` is not replaced - just its placeholder.

This is not always desirable though, so Vue offers a way for you to say, "These two elements are completely separate - don't re-use them." Add a key attribute with unique values:

```
<template v-if="loginType==='username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email-input">
</template>
```

Now those inputs will be rendered from scratch each time you toggle.

Note that the `label` elements are still efficiently re-used, because they don't have `key` attributes.

# `v-show`

Another option for conditionally displaying an element is the v-show directive. The usage is largely the same:

```
<h1 v-show="ok">
    Hello!
</h1>
```

The difference is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` only toggles the `display` CSS property of the element.

Note that `v-show` doesn't support the `<template>` element, nor does it work with v-else.

# `v-if` vs `v-show`

`v-if` is "real" conditonal rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.

`v-if` is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.

In comparision, `v-show` is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.

Generally speaking, `v-if` has higher toggle costs while `v-show` has higher initial render cost. So prefer `v-show` if you need to toggle something very often, and prefer `v-if` if the condition is unlikely to change at runtime.

# v-if for v-for

Using v-if and v-for together is not recommended.

When used together with v-if, v-for has a higher priority than v-if.
