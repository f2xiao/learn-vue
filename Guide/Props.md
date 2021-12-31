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

If you specify the data type in the props object, Vue does prop validation and warns user if they pass the wrong type.

# Passing Static or Dynamic Props

Since props are custom attributes regiestered on components, we can use v-bind to assign dynamically.

# One-Way Data Flow

All props form a one-way-down binding between the child property and the parent one: when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from accidentally mutating the parent's state, which can make your app's data flow harder to understand.

In addition, every time the parent component is updated, all props in the child component will be refreshed with the latest value. That means you should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console.

That means, once the the data passed to the child and becomes a property of that child, the value can not be changed inside the child component since it's read only. However, the data can still be changed from the parent side, and will update the props' value in the child component accordingly.

There are two cases where it's tempting to mutate a prop inside the child component:

1. the prop is used to pass in a value to initialize a data property in the child component, in this case, it's best to define a local data property that uses the prop as it's initial value:

```
props: ['initialCounter'],
data: function () {
  return {
    counter: this.initialCounter
  }
}

```

2. The prop is passed in as a raw value that needs to be transformed.

```
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

# Prop Validation

To specify prop validations, you can provide an object with validation requirements to the value of props:

```
props:{
    propA:{
        type: [String, Number],
        required: true,
default: 100,
// default: function () {
//      return  'hello' ;
//     },
validator: function (value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }


    }

}
```

## Type checks

The `type` can be one of the following native constructors:

- String
- Number
- Boolean
- Array
- Object
- Date
- Function
- Symbol

  In addition, `type` can also be a custom constructor function and the assertion will ne made with an `instanceof` check.

# Non-Prop Attributes

A non-prop attribute is an attribute that is passed to a component, but does not have a corresponding prop defined. It will be added to $attrs object of the instance of the compoent. It's read only as well.

## Replacing/Merging with Existing Attributes

For most attributes, the value provided to the component will replace the value set by the component. Fortunately, the class and style attributes are a little smarter, so both values are merged.

## Disabling Attribute Inheritance

If you do not want the root element of a component to inherit attributes, you can set `inheritAttrs: false` in the component’s options.
