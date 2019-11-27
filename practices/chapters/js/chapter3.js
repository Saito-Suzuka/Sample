
var app = new Vue({
    el: '#app',
    data: {
        preview: '',
        show: true,
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ]
    },
    created: function() {

    },
    methods: {
        handleChange: function (event) {
        var file = event.target.files[0]
        if (file && file.type.match(/^image\/(png|jpeg)$/)) {
            this.preview = window.URL.createObjectURL(file)
        }
        },
        doAttack: function (index) {
            this.list[index].hp -= 10 // HPを減らす
        },
        handler: function (comment) {
            console.log(comment)
        }

}
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'hello!'
    }
})
//
// new Vue({
//     el: '#app3',
//     data: {
//         // あらかじめ空リストを用意しておく
//         list: []
//     },
//     created: function () {
//         axios.get('list.json').then(function (response) {
//             // 取得完了したらlistリストに代入
//             this.list = response.data
//         }.bind(this)).catch(function (e) {
//             console.error(e)
//         })
//     }
// })

new Vue({
    el: '#app4',
    data: {
        scrollY: 0,
        timer: null
    },
    created: function () {
        // ハンドラを登録
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function () {
        // ハンドラを解除（コンポーネントやSPAの場合忘れずに！）
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        // 違和感のない程度に200ms間隔でscrollデータを更新する例
        handleScroll: function () {
            if (this.timer === null) {
                this.timer = setTimeout(function () {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 200)
            }
        }
    }
})