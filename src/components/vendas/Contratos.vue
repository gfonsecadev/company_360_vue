<template>
    <div>
        <div class="card mb-4">
    <div class="card-header">Contratos</div>
    <div class="card-body">
        <div class="row">
            <div class="col-6">
                <label class="form-label">ID Contrato:</label>
                <input type="text" class="form-control" v-model="queryMontada.id_like">
            </div>
            <div class="col-6">
                <label class="form-label">Data início:</label>
                <div class="input-group">
                    <input type="date" class="form-control" v-model="queryMontada.data_inicio_gte">
                    <input type="date" class="form-control" v-model="queryMontada.data_fim_lte">
                </div>
            </div>
        </div>
    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="pesquisarContrato()">Pesquisar</button>
    </div>
</div>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Serviço</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Data inicio</th>
                    <th scope="col">Data fim</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contrato in dados" :key="contrato.id">
                    <th>{{contrato.id}}</th>
                    <td>{{contrato.lead.nome}}</td>
                    <td>{{contrato.servico.servico}}</td>
                    <td>{{contrato.lead.telefone}}</td>
                    <td>{{contrato.data_inicio}}</td>
                    <td>{{contrato.data_fim}}</td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script> 
    import MixinApi from "@/mixinApi"
export default{
    name:'Contratos',
    data:()=>({
        
        queryMontada:{id_like:"",
                      data_inicio_gte:"",
                      data_fim_lte:""},
        relacionamentoUrl:"_expand=lead&_expand=servico"
    }),
    mixins:[MixinApi],
    methods:{
        pesquisarContrato(){
          this.getRecuperarDados(`http://localhost:3000/contratos?${this.relacionamentoUrl}`,this.queryMontada)  
        }
    },
    created() {
        this.getRecuperarDados(`http://localhost:3000/contratos?${this.relacionamentoUrl}`)
       
    },
   

}
</script>