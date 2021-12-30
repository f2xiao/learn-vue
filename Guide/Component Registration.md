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

**Note** JavaScript object's key can be quoted, if the key contain space or JavaScript language keywords(ex. for, if, etc...), key must be quoted to be valid

For each property in the components object that are inside root Vue instance:

- key: the name of the custom element
- value: the options object for the component

**Note** locally registered components are not available in subcomponents. If you want componentA to be inside componentB, you have to register compoentA inside componentB's components object inside the options object:

```
const componentA = {
      /* ... */
    };
    const componentB = {
      components: {
        "component-a": componentA,
      },
    };
```

```
 import ComponentA from "./ComponentA.vue";
    export default {
      components: {
        ComponentA, // object shorthand
      },
    };
```

object shorthand, meaning, the name of the variable is both:

- the custom element name to use in the template, and
- the name of the varibale containing the component options

# Module Systems

## Local Registeration in a Module System

using module system with Babel and Webpack, recommend creating a components directry, with each component in its own file.

Then import each component you would like to use before you locally register it.

```
import CompoentA from "./CompoentA";
    import CompoentC from "./CompoentC";

    export default{
        components:{
            CompoentA,
            CompoentC
        }
        // ...
    }
```

Now both ComponentA and ComponentC can be used inside CompoentB.

## Automatic Global Registration of Base Components

Base components: generic components that wrapping an element like an input or a button, which tend to be used very often across other components

To avoid to repeatly register locally in other compoents, a good way is to automatically globally register them, when using with webPack, it offers a way to easy to do this with `require.context` in app.s entry file(e.g. src/main.js)

```
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
```

**Note** global registration must take place before the root Vue instance is created(with new Vue)
