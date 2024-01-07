import {createRouter, createWebHistory} from 'vue-router'
const Site =()=> import('./components/views/Site.vue')
const Login =()=> import('./components/views/Login.vue')
const Home =()=> import('./components/views/Home.vue')
const PaginaErro =()=> import('./components/views/PaginaErro.vue')
const Servicos =()=> import('./components/servicos/Servicos.vue')
const Servico =()=> import('./components/servicos/Servico.vue')
const Indicador =()=> import('./components/servicos/Indicadores.vue')
const Vendas =()=> import(/*webpackChunkName:"vendas"*/'./components/vendas/Vendas.vue')
const VendasDefault =()=> import(/*webpackChunkName:"vendas"*/'./components/vendas/VendasDefault.vue')
const Leads =()=> import(/*webpackChunkName:"vendas"*/'./components/vendas/Leads.vue')
const Lead =()=> import(/*webpackChunkName:"vendas"*/'./components/vendas/Lead.vue')
const Contratos =()=> import(/*webpackChunkName:"vendas"*/'./components/vendas/Contratos.vue')
const Dashboards =()=> import('./components/dashboards/Dashboards.vue')
const Rodape =()=> import('./components/dashboards/Rodape.vue')


const routes= [{path:'/',
                component:Site},
               {path:'/login',
                component:Login
               },
                {path:'/home',
                component:Home,
                
                children:[{path:'servicos',component:Servicos,
                           children:[{path:'servico/:id/',
                           props:{
                            default:true,
                            "servico":true,
                           },
                           components:{"servico":Servico,default:Indicador},name:'servico'}]},

                          {path:'dashboards',components:
                          {default:Dashboards,"rodape":Rodape}},
                          {path:'vendas',
                          component:Vendas,
                          children:[{path:"",component:VendasDefault},
                                    {path:'leads',component:Leads},
                                    {path:'leads/:id', component:Lead,
                                    props:(e)=>{return {id:parseInt(e.params.id)+0}},
                                    meta:{autorizacao:true}},

                                    {path:'contratos',component:Contratos}]}]    
                },
                    {path:"/:cathAll(.*)*",component:PaginaErro}]

const router=createRouter({
    routes:routes,
    scrollBehavior(to,from,savedPosition){
        if(savedPosition)return savedPosition

        if(to.hash)return{el:to.hash}
    },
    history:createWebHistory()
})

router.beforeEach((to)=>{
  
    if(to.meta.autorizacao){
        const resp=window.confirm("Tem certeza que quer vizualizar esses dados?")
        if(resp) return true
         return false
    }

    
})



export default router