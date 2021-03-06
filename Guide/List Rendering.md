# Mapping an Array to Elements with v-for

We can use the `v-for` directive to render a list of items based on an array. The `v-for` directive requires a special syntax in the form of `item in items`, where `items` is the source data array and `item` is an alias for the array element being iterated on:

```
<ul id="example-1">
<li v-for="item in items">{{item.message}}</li>
</ul>>
```

```
const vm1 = new Vue ({
    el: '#example-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})
```

Inside `v-for` blocks we have full access to parent scope properties. `v-for` also supports an optional second argument for the index of the current item.

```
<ul id="example-2">
    <li v-for="item in items">{{parentMessage}} - {{index}} - {{item.message}}</li>
</ul>
```

```
const vm2 = new Vue({
    el: "#example-2",
    data: {
        parentMessage: 'Parent',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})
```

You can also use `of` as the delimiter instead of `in`, so that it is closer to JavaScript's syntax for iterators:

```
<div v-for="item of items"></div>
```

# `v-for` with an Object

you can also use `v-for` to iterate through the properties of an object.

```
<ul id="v-for-object" class="demo">
    <li v-for="value in object">{{value}}</li>
</ul>
```

```
const vm3 = new Vue({
    el: '#v-for-object',
    data: {
        object:{
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt:'2016-04-10'
        }
    }
})
```

You can also provide a second argument for the property's name (a.k.a key):

```
<div v-for="(value,name) in object">
    {{name}} : {{value}}
</div>
```

And another for the index:

```
<div v-for="(value, name, index) in object">
   {{index}}. {{name}}: {{value}}
</div>
```

When iterating over an object, the order is based one the enumeration order of `Object.keys()`, which is not guaranteed to be consistent across JavaScript engine implemenations.

`Object.keys()` method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
Parameter: the object of which the enumerable's own properties are to be returned.
Return value: an array of strings that represent all the enumerable properties of the given object.

# Maintaining State

When Vue is updating a list of elements rendered with `v-for`, by default it uses an "in-place patch" strategy. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in place and make sure it reflects what should be rendered at that particular index.

This default mode is efficient, but only suitable when your list render output does not reply on child component state or temporary DOM state(e.g. form input values).

To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique `key` attribute for each item:

```
<div v-for="item in items" v-bind:key="item.id">
    <!-- content -->
</div>
```

It is recommended to provide a key attribute with v-for whenever possible, unless the iterated DOM content is simple, or you are intentionally relying on the default behavior for performance gains.

Since it's a generic mechanism for Vue to identify nodes, the key also has other uses that are not specifically tied to v-for, as we will se later in the guide.

```
Don;t use non-primitive values like objects and arrays as v-for keys. Use string or numeric values instead.
```

# Array Change Detection

## Mutation Methods

Vue wraps an observed array's mutation methods so they will also trigger view updates. The wrapped methods are:

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

You can open the console and play with previous example's items array by calling their mutation methods. For example, `vm1.items.push({message: 'Baz'})`

## Replacing an Array

Mutation methods, as the name suggests, mutate the original araay they are called on. In comparison, there are also non-mutating methods, e.g. `filter()`, `concat()` and `slice()`, which do not mutate the original array but always return a new array. When working with non-mutating methods, you can replace the old array with the new one:

```
vm1.items = vm1.items.filter(function (item){
    return item.message.match(/Foo/)
})
```

You might think this will cause Vue to throw away the existing DOM and re-render the entire list, luckily, that is not the case. Vue implements some samrt heuristics to maximize DOM element reuse, so replacing an array with another array containing overlapping objects is a very efficient operation.

## Caveats

Due to limitations in JavaScript, there are types of changes that Vue can not detect with arrays and objects.

# Displaying Filtered/Sorted Results

Sometimes we want to display an filtered or sorted version of an array without actually mutating or resetting the original data. In this case, we can create a computed property that returns the filtered or sorted array.

For example:

```
<li v-for="n in evenNumbers">{{n}}</li>
```

```
data: {
    numbers: [1,2,3,4,5]
},
computed:{
    evenNumbers: function() {
        return this.numbers.filter(function(number){
            return number % 2 === 0;
        })

    }
}
```
In situations where computed properties are not feasible(e.g. inside nested `v-for` loops), you can use a method:

```
<ul v-for="set in sets">
 <li v-for="n in even(set)">{{n}}</li>
</ul>
```
```
data:{
    sets: [[1,2,3,4,5],[6,7,8,9,10]]
},
methods: {
    even: function(numbers){
        return numbers.filter(function(number){
            return number % 2 ===0
        })
    }
}
```

# `v-for` with Range

`v-for` can also take an integer, in this case it will repeat the template that many times.
```
<div><span v-for="n in 10">{{n}}</span></div>

```

# `v-for` with `<template>`
Similar to template `v-if`, you can also use a `<template>` tag with `v-for` to render a block of multiple elments:

```
<ul>
    <template v-for="item in items">
        <li>{{item.msg}}</li>
        <li class="divider" role="presentation"></li>
    </template>
</ul>
```

# `v-for` with `v-if`

When they exist on the same node, `v-for` has a higher priority than `v-if`. That means the `v-if` will run on each itertion of the loop separately. This can be usful when you want to render nodes for only some items, like below:
```
<li v-for="todo in todos" v-if="!todo.isComplete">
    {{todo}}
</li>
```
The above only renders todo that are not complete.
If instead, you intent is to conditionally skip execution of the loop, you can place the `v-if` on a wrapper element (or `<template>`). For example:

```
<ul v-if="todos.length">
    <li v-for="todo in todos">{{todo}}</li>
</ul>
<p v-else>No todos left!</p>
```

# `v-for` with Component







































