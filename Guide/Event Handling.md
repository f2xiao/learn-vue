# Listening to Events
We can use the `v-on` directive to listen to DOM events and run some JavaScript when they are triggered.

For example:
```
<div id="example-1">
    <button v-on:click="counter++">Add 1</button>
    <p>The button above has been clicked {{counter}} times.</p>
</div>
```
```
const vm1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})
```

# Method Event Handlers

The logic for many event handlers will be more complex thought, so keeping your JavaScript in the value of the `v-on` attribute isn't feasible. That's why `v-on` can also accept the name of a method you'd like to call.

For example:
```
<div id="example-2">
    <!-- 'greet' is the name of the a method defined below -->
    <button v-on:click="greet">Greet</button>
</div>
```
```
const vm2 = new Vue({
    el: '#example-2',
    data:{
        name: 'Vue.js',
    },
    methods:{
        greet: function(event){
            // 'this' inside methods points to the Vue instance
            alert('Hello '+this.name+'!')
            // 'event' is the native DOM event
            if(event){
                alert(event.target.tagName)
            }

        }
    }
})

// you can invoke methods in JavaScript too
example2.greet();
```

# Methods in Inline Handlers
Instead of binding directly to a method name, we can also use methods in an inline JavaScript statement:
```
<div>
    <button v-on:click='say('hi')'>Say hi</button>
    <button v-on:click='say('what')'>Say what</button>
</div>
```
```
new Vue({
    el: '#example-3',
    methods: {
        say: function(message){
            alert(message)
        }
    }
})
```

Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special `$event` variable:
```
<button v-on:click="warn('Form cannot be submitted yet', $event)">Submit</button>
```
```
// ...
methods:{
    warn: function(message, event){
        // now we have access to the native event
        if(event){
            event.preventDefault()
        }
        alert(message)
    }
}
```

# Event Modifiers

It is a very common need to call event.preventDefault() or event.stopPropogation() inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.

To address this problem, Vue provides event modifiers for v-on. Recall that modifiers are directives postfixes denoted by a dot.

- .stop
- .prevent
- .capture
- .self
- .once
- .passive

```
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doSomething"></a>

<form v-on:submit.prevent="onSubmit"></form>

<a v-on:click.stop.prevent="doThat"></a>

<form v-on:submit.prevent></form>



```