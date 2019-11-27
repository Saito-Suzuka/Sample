var item = { a:1 }

var vm = new Vue({
    el: '#practice',
    data: {
        count : item,
        message :
            {
                morning: 'Good morning',
            },
        foods_list: ['ごはん', '肉・魚', '野菜'],
        num: 1

    },

    created: function() {
        // console.log('a is: ' + this.a)
    },

    methods: {
        handleClick: function (event) {
            alert(event.target) // [object HTMLButtonElement]
        },
        changeText: function() {
            alert('ok');
        }

    }
})

vm.a = 2

item.a = 3

item.a += 1;

// console.log(vm.a)

var obj = {
    foo: 'bar'
}

// Object.freeze(obj)

var app = new Vue({
    el: '#app',
    data: {
        val: true,
        val: [],
        val: '',
        message: 'Hello Vue.js',
        foo: obj,
        count: 1,
        radius: 50,
        name: 'キマイラ',
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ],
        show: true
    },
    created: function() {
        this.list.forEach(function(item) {
            this.$set(item, 'active', false)
        },this)
    },
    methods: {
        increment: function() {
            this.count += 1
        },
        // 追加ボタンをクリックしたときのハンドラ
        doAdd: function () {
            // リスト内で1番大きいIDを取得
            var max = this.list.reduce(function (a, b) {
                console.log('a = ' + a)//aは配列[0]〜
                // console.log(b)//bはlistの中身
                // console.log(a > b) //idの値の方が必然的に大きいため変える値は"false"
                //a > b = false　なので ↓は 右辺のb.idになる
                return a > b.id ? a : b.id
            }, 0)
            // console.log(max)
            // 新しいモンスターをリストに追加
            this.list.push({
                id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
                name: this.name, // 現在のフォームの入力値
                hp: 500
            })
        },
        doRemove: function (index) {
            // 受け取ったインデックスの位置から1個要素を削除
            // console.log(index)
            this.list.splice(index, 1)
        },
        handleClick() {
            var count = this.$refs.count
            // console.log(this.$refs.count)
            if (count) {
                count.innerText = parseInt(count.innerText, 10) + 1
            }
        },
        handleInput: function (event) {
            // 代入前に何か処理を行う…
            // console.log(event)
            this.message = event.target.value
        },
        handler: function (comment) {
            console.log(comment)
        }
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        show: true
    }
})



