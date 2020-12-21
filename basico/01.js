const app = new Vue({
    el: '#app',
    data: {//data es para gestionar datos
        titulo: 'Lista de frutas',
        frutas: [
            {nombre: 'manzana', cantidad: 20},
            {nombre: 'pera', cantidad: 0},
            {nombre: 'durazno', cantidad: 8},
            {nombre: 'nueces', cantidad: 0},
            {nombre: 'piña', cantidad: 190}
        ],
        nombreFruta: '',
        cantidadFruta: '',
        total: 0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nombreFruta,
                cantidad: this.cantidadFruta
            });
            this.nombreFruta='';
            this.cantidadFruta='';
        }
    },
    computed:{ //son arreglos donde podemos hacer operaciones
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
       
    }  

})