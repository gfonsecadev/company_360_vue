<template>
    <div>
        <h4>Detalhes: <strong>{{dados.servico}}</strong></h4>
        <small class="text-muted">Idioma padrão:<strong></strong></small>
    </div>
</template>

<script>
    import MixinApi from "@/mixinApi"
    export default{
        name:"Servicos",
        props:["id","idioma"],
        mixins:[MixinApi],
        beforeRouteUpdate(to){
            this.getRecuperarDados(`http://localhost:3000/servicos/${to.params.id}`)
            console.log(to.params)
         
        },
        created() {
            this.getRecuperarDados(`http://localhost:3000/servicos/${this.id}`)
        },
    }
</script>