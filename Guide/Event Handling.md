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

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding an event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by the element-->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThis">...</div>
```

## Note

### Event bubbling and capture

Event bubbling and capture are terms that describe phases in how the browser handles events targeted at nested elements.

### Bubbling and capturing explained

When an event is fired on an element that has parent elements, modern browsers run three different phases - the capturing phase, the target phase, and the bubbling phase.

In the **capturing** phase:

- The browser checks to see if the element's outer-most ancestor `<html>` has a click event handler regiestered on it for the capturing phase, and runs it if so.
- then is moves to the next element inside the `<html>` and does the same thing, then the next one, and so on until it reaches the direct parent of the element that was actually selected.

In the **target** phase:

- The browser checks to see if the target element has an event handler for the click event registered on it, and runs it if so.
- Then, if `bubbles` is true, it propagates the event to the direct parent of the selected element, then the next one, and so on until it reaches the `<html>`. Otherwise, if `bubbles` is false, it doesn't propagate the event to any ancestors of the target.

In the **bubbling** phase, the exact opposite of the capturing phase occurs:

- The browser checks to see if the direct parent of the element selected has a click event handler regiestered on it for the bubbling phase, and runs it if so.
- Then it moves to the next immediate ancestor element and does tbe same thing, then the next one, and so on until it reaches the `<html>` element.
  In modern browsers, by default, all event handlers are registered for the bubbling phase.

Order matters when using modifiers because the relevant code is generated in the same order. Therefore using `v-on:click.prevent.self` will prevent all clicks while `v-on:click.self.prevent` will only prevent clicks on the elment itself.

```
<!-- the click event will be triggered at most once -->
<a v-on:click.once="doThis"></a>
```

Unlike the other modifiers, which are exclusive to native DOM events, the `.once` modifier can also be used on component events.

Vue also offers the `.passive` modifier, corresponding to `addEventListener`'s `passive` option.

```
<!-- the scroll event's default behavior (scrolling) will happen immediately, instead of waiting for `OnScroll` to complete -->
<div v-on:scroll.passive="onScroll">...</div>
```

The `.passive` modifier is especially useful for improving performance on mobile devices.

Don't use `.passive` and .prevent together, because .prevent will be ignored and your browser will probably show you a warning. Remember `.passive` communicates to the browaser that you don't want to prevent the event's default behavior.

# Key Modifiers

When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifers for v-on when listening to key events:

```
<!-- only call `vm.submit()` when the 'key' is 'Enter' -->
<input v-on:keyup.enter="submit">
```

You can directly use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case.

```
<input v-on:keyup.page-down="onPageDown">
```

In the above example, the handler wil only be called if `$event.key` is equal to `PageDown`.

## Key Codes

The use of keyCode events is deprecated and may not be supported in new browsers.

Using keyCode attributes is also permitted:

```
<input v-on:keyup.13="submit">
```

Vue provides aliases for the most used key codes when necessary for legacy browser support:

- .enter
- .tab
- .delete (captures both "Delete" and "Backspace" keys)
- .esc
- .space
- .up
- .down
- .left
- .right

A few keys(.esc and all arrow keys) have inconsistent key values in IE9, so these built-in aliases should be preferred if you need to support IE8.

You can also define custom key modifiers aliases via the global config.keyCodes object:

```
// enable `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

# System Modifier Keys

You can now use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:

- .ctrl
- .alt
- .shift
- .meta

**Note** On MAC OS, meta is the command key, in Windows, meta is the windows key.

For example:

```
<!-- Alt + C -->
<input v-on:keyup.alt.67="clear">

<!-- Ctrl + click -->
<div v-on:click.ctrl="doSomething">DO something</div>
```

Note that modifier keys are different from regular keys and when used with `keyup` events, they have to be pressed when the event is emitted. In the other words, `keyup.ctrl` will only trigger if you release a key while holding down `ctrl`. It won't trigger if you release the `ctrl` key alone. If you do want such behavior, use the keyCode for `ctrl` instead: `keyup.17`.

# `.exact` Modifier

The `.exact` modifier allows control of the exact combination of system modifiers needed to trigger an event.

```
<!-- this will fire even if Alt or Shift is also pressed -->
<button v-on:click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button v-on:click.ctrl.exact="onClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button v-on:click.exact="onClick">A</button>
```

# Mouse Button Modifiers

- .left
- .right
- .middle

These modifiers restrict the handler to events triggered by a specific mouse button.

# Why Listeners in HTML

You might be concerned that this whole event listening approach violates the good old rules about "separation of concerns". Rest assured - since all Vue hadnler functions and expressions are strictly bound to the ViewModel that's handling the current view, it won't cause any maintainance difficulty. In fact, there are several benefits in using v-on:

1. It's easier to locate the handler function implementations within your JS code by skimming the HTML template.
2. Since you don't have to attach event listeners in JS, your ViewModel code can be pure logic and DOM-free. This makes it easier to test.
3. When a ViewModel is destroyed, all event listeners are automatically removed. You don't need to worry about cleaning it up yourself.
