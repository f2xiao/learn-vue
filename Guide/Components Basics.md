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

# Listening to Child Components

As we develop our blog-post component, some features may require communicating back up to the parent. For example, we may decide to include an accessibility feature to enlarge the text of blog posts, while leaving the rest of the page its default size:

# Events

# Content Distribution with Slots

# Dynamic Components

# DOM Template PArsing Caveats
