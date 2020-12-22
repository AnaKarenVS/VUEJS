const app = new Vue ({
    el: '#app',
    data: {
        saludo: 'Este sera el ciclo de vida de VUE'
    },
    beforeCreate(){
        console.log("before create");
    },
    created(){
        console.log("create");
    },
    beforeMount(){
        console.log("before mount");
    },

    mounted(){
        console.log("mounteed");
    },
    beforeUpdate(){
        console.log("antes de actualizar");
    },
    updated(){
        console.log("actualizado");
    },
    beforeDestroyed(){
        console.log("antes de destruir");

    },
    destroyed(){
        console.log("destruida");
    },

    methods:{
        destruir(){
            this.$destroy();
        }
    }





})