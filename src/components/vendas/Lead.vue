<template>
   <div>
      
      <div class="card">
        <h4 class="card-header">Detalhes da Lead</h4>
        <div class="card-body">
            <label class="form-label">Id:</label>
            <input class="form-control" readonly v-model="dados.id"/>
            <label class="form-label mt-2">Nome:</label>
            <input class="form-control" readonly v-model="dados.nome"/>
            <label class="form-label mt-2">Telefone:</label>
            <input class="form-control" readonly v-model="dados.telefone"/>
            <button class="btn btn-warning mt-2 w-100" type="button" @click="$router.go(-1)">Voltar</button>
        </div>
      </div>
      
   </div>
</template>

<script> 
    import MixinApi from "@/mixinApi"

export default{
    name:'Lead',
    mixins:[MixinApi],
    props:["id"],
    created() {
        this.getRecuperarDados(`http://localhost:3000/leads/${this.id}`)

    },

}
</script>