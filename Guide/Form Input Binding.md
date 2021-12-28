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

## Radio

## Select

# Value Bindings

## Checkbox

## Radio

## Select Options

# Modifiers

## `.lazy`

## `.number`

## `.trim`

# `v-model` with Components
