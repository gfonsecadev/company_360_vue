<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <button class="nav-link" @click="$router.push('/')">Sair</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" to="/home/dashboards" exact-active-class="active"><i class="bi bi-speedometer2"></i> Dashboard</router-link>
                <div class="navbar-nav ">
                    <router-link data-bs-toggle='collapse' data-bs-target='#grupo_vendas'  class="list-group-item list-group-item-action d-flex" to="/home/vendas"  exact-active-class="active"><span class="flex-grow-1"><i class="bi bi-cart"></i> Vendas</span><i class="bi bi-caret-down-fill"></i></router-link>
                
                    <ul class="navbar-nav collapse" id="grupo_vendas">
                    <li> <router-link class="list-group-item list-group-item-action dropdown-item" to="/home/vendas/leads"  exact-active-class="active"><i class="bi bi-caret-right"></i> Leads</router-link></li>
                    <li> <router-link class="list-group-item list-group-item-action dropdown-item" to="/home/vendas/contratos"  exact-active-class="active"><i class="bi bi-caret-right"></i> Contratos</router-link></li>
                    </ul>
                </div>
                <router-link class="list-group-item list-group-item-action" to="/home/servicos"  exact-active-class="active"><i class="bi bi-pencil-square"></i> Serviços</router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>

                <div class="container-fluid">
                    <router-view/>
                    <router-view name="rodape"/>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}

</style>