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

To use these components in templates, they must be registered so that Vue knows about them. There are two types of component regiesteration: global and local. So far, we've only regiestered components globally, using `Vue.component`:

```
Vue.component('my-component-name', {
    // ...options...
})
```

Globally regiestered components can be used in the template of any root Vue instance(new Vue) created afterwards - and even inside all subcomponents of that Vue instance's component tree.

# Passing Data to Child Components with Props

Earlier, we mentioned created a component for blog posts. The problem is, Vue won;t be useful unless you pass data to it, such as the title and content of the specific post we want to display. That's where props come in.

Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance. To pass a title to our blog post component, we can include it in the list of props this component accepts, using a props option:

```
Vue.component('blog-post', {
    props: ['title'],
    template:''<h3>{{title}}</h3>,

})
```

A component can have as many props as you'd like and by default, any value can be passed to any prop. In the template, you'll see that we can access this value on the component instance, just like with data.

Once a prop is regiestered, you can pass data to it as a custom attribute, like this:

```
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Why Vue is so fun"></blog-post>
```

In a typical app, however, you'll have an array of posts in data:

```
new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            {id: 1, title: 'My journey with Vue'},
            {id: 2, title: 'Blogging with Vue'},
            {id: 3, title: 'Why Vue is so fun'},
        ]
    }
})
```

Then want to render a component for each post:

```
<blog-post v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title"></blog-post>
```

Above, you'll see that we can use v-bind to dynamically pass props. This is essentially useful when you don't know the exact content you are going to render ahead of time, like when fetching posts from an API.

# A Single Root Element

When building out a blog-post component, your template will eventually contain more than just the title:

At the very least, you will want to include the post's content:

```
<h3>{{title}}</h3>
<div v-html="content"></div>
```

If you try this in your template however, Vue will show an error, explaining that **every compoent must have a single root element**. You can fix this error by wrapping the template in a parent element. such as:

```
<div class="blog-post">
    <h3>{{title}}</h3>
    <div v-html="content"></div>
</div>
```

As our component grows, it's liekly we will not only need the title and content of a post, but also the published date, comments, and more. Defining a prop for each related piece information could become very annoying:

```
<blog-post
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:title="post.title"
    v-bind:content="post.content"
    v-bind:publishedAt="post.publishedAt"
    v-bind:comments="post.comments"
></blog-post>
```

So this might be a good time to refactor the `<blog-post>` component to accept a single `post` prop instead:

```
Vue.compoent('blog-post',{
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{}}</h3>
            <div v-html="">{{}}</div>
        </div>
    `
})
```

Use JavaScript's template literal in the template property to make multi-line templates more readable.

Now, whenever a new property is added to `post` objects, it will automatically be available inside `<blog-post>`.

# Listening to Child Components Events

As we develop our blog-post component, some features may require communicating back up to the parent. For example, we have a click event in the child component and we want the parent to be able to listen to this event and do something after the event is triggered.

The idea is that it makes more sense to regiester the custom event listener on the parent component, then the child component emit the event via $emit method.

When we click on the button, we need to communicate to the parent that it should enlarge the text of all posts. Fortunately, Vue instance provide a custom events system to solve this problem. The parent can shoose to listen to any event on the child component instance with v-on , just as we would with a native DOM event:

```
 <blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
  v-on:enlarge-text="postFontSize += 0.1"
></blog-post>
```

Then the child component can emit an event on itself by calling the built-in $emit method, passing the name of the event:

```
 <button v-on:click="$emit('enlarge-text')" >Enlarge text</button>
```

Thanks to the v-on:enlarge-text="postFontSize += 0.1" listener, the parent will receive the event and update postFontSize value.

## Emitting a Value With an Event

emit a specific value with an event, here want the component to be in charge of how much to enlarge the text by. Use $emit's 2nd parameter to provide this value:

```
 <button v-on:click="$emit('enlarge-text', 0.1)" >Enlarge text</button>
```

we listen to the event in the parent, we can access the emitted event's value with $event:

```
 <blog-post
  v-for="post in posts"
  v-bind:key="post.id"
  v-bind:post="post"
  v-on:enlarge-text="postFontSize += $event"
></blog-post>
```

## Using v-model on Components

# Content Distribution with Slots

Write content in the custom component tag like normal html tags:

```
<alert-box>
  Something bad happened.
</alert-box>
```

then define where the content goes with the `<slot></slot>` tag in the Vue.component template:

```
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})
```

# Dynamic Components

dynamically switch between components with Vue's `<component>` element with the `is` special attribute:

```
 <component v-bind:is="currentTabComponent" class="tab"></component>
```

The currentTabAttribute can contain either:

- the name of a registered component, or
- a component's options object

# DOM Template Parsing Caveats

HTML elements that have restrictions on what elements can appear inside them will lead to issues when using components inside them, the is special attribute offers a workaround:

```
<table>
    <tr is="blog-post"></tr>
</table>
```
