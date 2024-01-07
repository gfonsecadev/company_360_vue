<template>
    <div>
        <p>Indicadores: {{dados.indicador}}</p>
    </div>
</template>

<script>
    import MixinApi from "@/mixinApi"
    export default{
        name:"Servicos",
        mixins:[MixinApi],
        beforeRouteUpdate(to){
            this.getRecuperarDados(`http://localhost:3000/servicos/${to.params.id}`)

        },
        created() {
            this.getRecuperarDados(`http://localhost:3000/servicos/${this.$route.params.id}`)
        },
    }
</script>