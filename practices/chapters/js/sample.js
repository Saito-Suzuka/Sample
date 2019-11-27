
Vue.component('foods-list', {
    template: '<li>rice</li>'
})

Vue.component('todo-list', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var pr4 = new Vue({
    el: '#practice',
    data: {
        animals: ['いぬ', 'ねこ', 'ハムスター'],
        message: 'Before',
        input_message: 'type here',
        todoList: [
            {text: 'sample1'},
            {text: 'sample2'}
        ]
    },
    methods: {
        changeText: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})


pr4.animals.push('ライオン')


var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

Vue.component('todo-list', {
    props:['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var suzuka1 = new Vue({
    el: '#suzuka-1',
    data: {
        todoList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})


