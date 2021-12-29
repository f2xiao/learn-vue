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

# Local Registeration

# Module Systems

## Local Registeration in a Module System

## Automatic Global Registration of Base Components
