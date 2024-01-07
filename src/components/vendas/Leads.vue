<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lead in dados" :key="lead.id">
                    <th>{{lead.id}}</th>
                    <td>{{lead.nome}}</td>
                    <td>{{lead.telefone}}</td>
                    <td>
                        <router-link class="btn btn-primary" :to="`/home/vendas/leads/${lead.id}`">
                            <i class="bi bi-pencil-square" style="cursor:pointer"/>
                        </router-link>
                        
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script> 
    import MixinApi from "@/mixinApi"
export default{
    name:'Leads',
    mixins:[MixinApi],
    created() {
        this.getRecuperarDados("http://localhost:3000/leads/")
       
    },

}
</script>