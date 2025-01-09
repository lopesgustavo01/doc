<script setup>
    import { ref } from "vue";
    import SideBar from "../components/SideBar.vue";
    import Conteudo from "./Conteudo.vue"
</script>

<template>
    <div class="container-xxl">
        <SideBar @change-section="(section) => activeSection = section"></SideBar>
        <Conteudo></Conteudo>
    </div>
</template>

<style scoped>

.c{
    background-color: var(--cor-principal);
}
.custom-icon {
    height: 20px; 
}
.container-xxl {
    display: flex;
    flex-direction: row;
    min-height: 90vh;
}

</style>