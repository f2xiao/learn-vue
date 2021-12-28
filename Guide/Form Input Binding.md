# Basic Usage

You can use the v-model directive to create two-way data bindings on form input, textarea, select elements. It automatically picks the correct way to update the element based on the input type. Although a bit magical, v-model is essentially a syntax sugar for updating data on user input events, plus special care for some edge cases.

**Note**
v-model will ignore the initial value, checked, or selected attributes found on any form elements. It will always treat the Vue instance data as the source of truth. You should declare the initial value on the JavaScript side, inside the data option of your component.

v-model iternally uses different properties and emits different events for different input elements:

- text and texteare elements use `value` property and `input` event
- checkboxes and radiobutton use `checked` property and `change` event
- select fields use `value` property and `change` event
  **Note** For languages that require IME, you will notice that `v-model` doesn't get updated during IME composition. If you want to cater to these updates as well, use the `input` event instead.

## Text

```
<input v-model="message" placehlder="edit me">
<p>Message is: {{message}}</p>
```

## Multiline text

```
<span>Multiline message is:</span>
<p style="white-space:pre-line">{{message}}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

**Note** Interpolation on textareas (`<textarea>{{text}}</textarea>`) won't work. Use v-model instead.

## Checkbox

Single checkbox, boolean value:

```
<input type="checkbox" id="checkbox" v-model="checked" >
<label for="checkbox">{{checked}}</label>
```

Multiple checkboxes, bound to the same Array:

```
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{checkedNames}}</span>
```

```
new Vue({
    el: '...',
    data: {
        checkedNames: []
    }
})
```

## Radio

```
<input type="radio" id="one" value="One" v-model="picked">
<Label for="one">One</Label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<Label for="two">Two</Label>
<br>
<span>Picked: {{picked}}</span>
```

**Note** Radio buttons are similar to checkboxes, but with an important distinction -- radio buttons are grouped into a set in which only one radio button can be selected at a time, whereas checkboxes allow you to tunr single values on and off. Where multiple controls exists, radio buttons allow one to be selected out of them all, whereas checkboxes allow multiple values to be selected.

## Select

Single select:

```
<select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<span>Selected: {{selected}}</span>
```

```
new Vue({
    el: '...',
    data:{
        selected: ''
    }
})
```

**Note** If the initial value of your `v-model` expression does not match any of the options, the `<select>` element will render in unselected state. On iOS, this will prevent the user from being able to select the first item, because iOS does not fire a `change` event in this case. It is therefore recommended to provide a `disabled` option with empty value, as demonstrated in the example above.

Multiple select (bound to Array):

```
<select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
</select>
<br>
<span>Selected: {{selected}}</span>
```

Dynamic options rendered with v-for:

```
<select v-model="selected" multiple>
    <option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
</select>
<span>Selected: {{selected}}</span>
```

```
new Vue({
    el: '...',
    data: {
    selected: 'A',
    options:[
        {text:'Onw', value: 'A'},
        {text:'Two', value: 'B'},
        {text:'Three', value: 'C'},
    ]
}
})
```

# Value Bindings

For radio, checkbox and select options, the `v-model` binding values are usually static strings(or booleans for checkboxes):

```
<!--:"picked" is a string "a" when checked  -->
<input type="radio" v-model="picked" value="a">

<!-- "toggle" is either true or false -->
<input type="checkbox" v-model="toggle">

<!-- "selected" is "abc" when the first option is selected -->
<select v-model="selected">
    <option value="abc">ABC</option>
</select>
```

But sometimes, we may want to bind the value to a dynamic property on the Vue instance. We can use v-ind to achieve that. In addition, using v-bind allows us to bind the input value to non-string values.

## Checkbox

```
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
```

```
<!-- when checked -->

vm.toggle = 'yes'

<!-- when unchecked -->
vm.toggle = 'no'
```

The true-value and false-value attributes don't affect the input's value attribute, because browser don't include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a form(i.e. 'yes' or 'no'), use radio inputs instead.

## Radio

```
<input type="radio" v-model="pick" v-bind:value="a">
```

```
<!-- when checked: -->
vm.pick === vm.a
```

## Select Options

```
<select v-model="selected">
    <option v-bind:value="{number: 123}">123</option>
</select>
```

```
<!-- when selected: -->
typeof vm.selected
vm.selected.number
```

# Modifiers

## `.lazy`

By default, `v-model` syncs the input with the data after each `input` event (with the exception of IME composition, as stated above). You can add `lazy` modifier to instead sync after `change` events:

```
<!-- synced after `change` instead of `input` -->
<input v-model.lazy="msg">
```

## `.number`

If you want user input to automatically typecast as a Number, you can add the`.number` modifier to your v-model managed input:

```
<input type="number" v-model.number="age">
```

This is often useful, because even with `type="number"`, the value of HTML input elements always returns a string. If the value can not be parsed with parseFloat(), then the original value is returned.

## `.trim`

If you want whitespace from user input to be trimmed automatically, you can add `.trim` modifier to you v-model managed input:

```
<input v-model.trim="msg">
```

# `v-model` with Components
