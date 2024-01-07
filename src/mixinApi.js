export default{
    data:()=>({
        dados:""
    }),

    methods:{
        getRecuperarDados(url,queryParams={}){
            Object.keys(queryParams).forEach((chave)=>{
                if(queryParams[chave]==""){
                    delete queryParams[chave]
                }
            })
            const query=new URLSearchParams(queryParams).toString()
            const queryModificada=query ? `${url}&${query}` : url
        
            fetch(queryModificada).then((res)=>res.json()).then((res)=>this.dados=res)

        }
    }
}