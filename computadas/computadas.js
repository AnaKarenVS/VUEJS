const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Computadas con vue',
        contador: 0
    }, 
    computed:{
        invertido(){
            return this.mensaje.split(' ').reverse().join(' ');
        },
        color(){
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador < 20 && this.contador > 20,
                'bg-danger': this.contador >= 35
            }
        }
        
    }
})