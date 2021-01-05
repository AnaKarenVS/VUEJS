Vue.component('hijo',{
    template:
    `<div class="p-5 m-5 bg-success">
        <h1>Componente Hijo </h1>
        {{numero}}
    </div>`,
    props:[
        'numero'
    ]
})