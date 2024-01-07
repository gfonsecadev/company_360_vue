<template>
  <div>
    <div class="row">
        <div class="col" v-for="servico in dados" :key="servico.id">
            <div class="card" style="widht:150px">
                <img class="card-img-top" :src="`/img/${servico.icone}`">
                <div class="card-body text-center ">
                    <router-link :to="{name:'servico',params:{id:servico.id}}">
                        <span >{{servico.servico}}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-3">
        <router-view name='servico'/>
        <router-view/>
    </div>

  </div>

</template>

<script> 
import MixinApi from "@/mixinApi"
export default{
    name:'Servicos',
    mixins:[MixinApi],
    created() {
        this.getRecuperarDados("http://localhost:3000/servicos")
    },
}
</script>