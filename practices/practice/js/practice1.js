var cp1 = new Vue({
    el:'#chapter-1',
    data: {
        comment: 'hello',
        text: 'text',
        ok: true,
        class: '',
        color: 'color',
        fruits: ['apple', 'banana', 'strawberry'],
        animals: [
            {id:1, name:'lions', size:'large'},
            {id:2, name:'panthers', size:'middle'},
            {id:3, name:'cats', size:'small'}
        ]
    },
    methods: {
        alert: function() {
            alert('clicked')
        }
    }
})

var cp2 = new Vue({
    el:'#chapter-2',
    data: {
        count: 1,
        addColor: false,
        addColor2: '',
        name: '',
        message: 'hello!',
        monsters: [
            {id:1, name:'ピチュ', hp:50},
            {id:2, name:'ピカチュウ', hp:70},
            {id:3, name:'ライチュウ', hp:100}
        ]
    },
    methods: {
        addNum: function() {
            this.count += 1;
        },
        addClass: function() {
            this.addColor2 = 'color';
        },
        addMonster: function() {
            var name = this.name;
            var max = 0

            this.monsters.forEach((monster) => {
                if(max < monster.id) {
                    max += monster.id
                }
            })

            this.monsters.push({
                id:max++, name:name, hp:50
            })
        },
        deleteMonster: function(index) {
            console.log(index)
            this.monsters.splice(index, 1);
        },
        attackMonster: function(index) {
            let monster = this.monsters[index]
            .hp -= 10

        },

    }

})
