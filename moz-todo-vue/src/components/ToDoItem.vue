<template>
    <div>
        <input type="checkbox" id="todo-item" :checked="isDone">
        <label for="todo-item">{{label}}</label>
        <p>用户的名字是：{{ username }}</p>
        <input type="text" v-model="username">
        <input type="checkbox" v-model="isDone">
        <input type="date" v-model="date">
        <hr>
        <input type="text" :value="username">
        <hr>
       <select v-model="city">
            <option value="">请选择城市</option>
            <option value="1">北京</option>
            <option value="2">上海</option>
            <option value="3">广州</option>
        </select>
        <h1>Multiple checkboxes</h1>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        <h1>选择框</h1>
        <h2>单选时：</h2>
        
    </div>
</template>
<script>
export default {
    props:{
        label: {required: true, type: String},
        done: {default: false, type: Boolean}
    },

    data() {
        return {
            isDone: this.done,
            date: "2020-12-15",
            city:'', 
            username:'Pixie',
            checkedNames: []
        }
    },
    
}
</script>