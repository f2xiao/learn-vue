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
            city:'2', 
            username:'Pixie'
        }
    },
    
}
</script>