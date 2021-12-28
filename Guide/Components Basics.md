# Base Example

Here's an example of a Vue component:

```
Vue.component('button-counter',{
    data: function(){
        return {
            count: 0,
        }
    },
    template: '<button v-on:click="count++">You clicked me {{count}} times.</button>',
})
```

Components are resuable Vue instances with a name: in this case, `<button-counter>`. We can use this component as a custom element inside a root Vue instance created with `new Vue`:

```
<div id="coponents-demo">
    <button-counter></button-counter>
</div>
```

```
new Vue({
    el: '#component-demo'
})
```

Since components are resuable Vue instances, they accept the same options as `new Vue`, such as `data`, `computed`, `watch`, `methods`, and lifecycle hooks. The only exceptions are a few root-specific options like `el`.

# Reusing Components

Components can be resued as many times as you want:

```
<div id="components-demo">
    <button-counter></button-counter>
    <button-counter></button-counter>
    <button-counter></button-counter>
</div>
```

Notice that when clicking on the buttons, each one maintains their own state, separate `count`. That's because each time you use a compoent, a new instance of it is created.

## data Must Be a Function

When we defined the `<button-counter>` compoent, you may have noticed that data wasn;t directly provide an object, like this:

```
data:{
    count: 0
}
```

Instead, a component's data option must be a function, so that each instance can maintain an independent copy of the returned data object:

```
data: function(){
    return {
        count: 0
    }
}
```

If Vue didn't have this rule, clicking on one button would effect the data on all other instances, like below:

# Organizing Components

It's common for an app to be organized into a tree of nested components:

For example, you might have components for a header, sidebar, and content area, each typically containing other components for navigation links, blog posts, etc.

To use these components in templates, they must be registered so that Vue knows about them. There are two types of component regiesteration: global and local. So far, we've only regiestered components globally, using Vue.component:

# Passing Data to Child Components with Props

# A Single Root Element

# Listening to Child Components

# Events

# Content Distribution with Slots

# Dynamic Components

# DOM Template PArsing Caveats
