# Prop Casing

Props are custom attributes registered on components that allow us to pass data to the component.

HTML attributes are case-insensitive so browsers will interpret any uppercase characters as lowercase. That means when you're using in-DOM templates, camelCase prop means need to use their kebab-cased (hyphen-delimited) equivalents:

```
Vue.component("blog-post", {
      // camelCase in JavaScript
      props: ["postTitle"],
      template: `<h3>{{postTitle}}</h3>`,
    });
```

```
<!-- kebab-case in HTML -->
<blog-post post-title="Hello!"></blog-post>
```

if you are using string template, this limitation does not apply.

# Prop Types

So far, we have seen props listed as array of strings:

```
 props: ["title", 'like', 'isPublished','commentIds']
```

Usually though, you will want every prop to be specific type of value. In these cases, you can list props as objects, where the properties' names and values contain the prop names and types, respectively:

```

```

# Passing Static or Dynamic Props

# One-Way Data Flow

# Prop Validation

# Non-Prop Attributes
