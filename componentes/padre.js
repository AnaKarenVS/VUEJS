Vue.component('padre',{
    template: //html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}} </h2>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        <button @click="numeroPadre++">+</button>
        {{nombrePadre}}
    </div>
    `,
    data(){
        return{
            numeroPadre: 100,
            nombrePadre: ''
        }
    }
})