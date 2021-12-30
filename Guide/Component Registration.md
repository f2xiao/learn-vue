# Component Names

When registering a component, it will always be given a name. The component's name is the first argument of `Vue.component`.

When using a component directly in the DOM, recommend W3C rules: all-lowercase, must contain a hyphen

## Name Casing

two cases:

- with kebab-case (if use the component directly in DOM)

```
Vue.component('my-component-name', { /* ... */ })
```

```
<my-component-name></my-component-name>
```

- with PascalCase (won't work if use the component directly in DOM )

```
Vue.component('MyComponentName', { /* ... */ })
```

```
<my-component-name></my-component-name>
```

or

```
<MyComponentName></MyComponentName>
```

# Global Registration

Components created using Vue.component() are globally registered. They can used in the template of any root Vue instance(new Vue) created after registration:

```

```

This applies to all subcomponents, meaning all three of these components will also be avai;ab;e inside each other.

# Local Registeration

If using Webpack as a build system, globally registered components can still be included in the final build even if they are not used. This increases the amount of JavaScript users have to download in the end.
In these case, you can define your components as plain JavaScript obejcts:

```
const componentA = {
      /* ... */
    };
    const componentB = {
      /* ... */
    };
    const componentC = {
      /* ... */
    };
```

```
new Vue({
      el: "#app",
      components: {
        "component-a": componentA,
        "component-b": componentB,
        "component-c": componentC,
      },
    });
```

For each property in the components object that are inside root Vue instance:

- key: the name of the custom element
- value: the options object for the component

**Note** locally registered components are not available in subcomponents. If you want componentA to be inside componentB, you have to register compoentA inside componentB's components object inside the options object:

```

```

# Module Systems

## Local Registeration in a Module System

## Automatic Global Registration of Base Components
