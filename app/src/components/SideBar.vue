<script>
import { ref } from 'vue';
import { activeSection } from '../data/states'; // Importa o estado global
import { showSidebar } from '../data/states';

export default {
  setup() {
    let btn1 = ref(false);
    let btn2 = ref(false);
    const activeItem = ref(null); // Variável para armazenar o item ativo

    const ativarLista = (btnRef) => {
      if (btnRef === 1) btn1.value = !btn1.value;
      else btn2.value = !btn2.value;
    };

    const setSession = (btnRef) => {
      activeSection.value = btnRef; // Atualiza o estado global
      activeItem.value = btnRef; // Atualiza o item ativo
    };

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value; // Alterna a visibilidade
    };

    return { btn1, btn2, ativarLista, setSession, activeItem, activeSection, showSidebar, toggleSidebar };
  },
};
</script>

<template>
  <div>
    <button class="hamburger" @click="toggleSidebar"><i class="bi bi-list"></i></button>
    <div class="sidebar" :class="{ 'sidebar-visible': showSidebar }">
      <div class="sidebar-content">
        <ul class="side-list">
          <li>
            <button class="btn-list" @click="ativarLista(1)">Meta Quest2 <span><i :class="['bi', 'bi-caret-right-fill', btn1 ? 'rotate' : '']"></i></span></button>
            <ul :class="btn1 ? 'active' : 'inactive'">
              <li @click="setSession(1)" :class="{ active: activeItem === 1 }">Introdução</li>
              <li @click="setSession(2)" :class="{ active: activeItem === 2 }">Download</li>
              <li @click="setSession(3)" :class="{ active: activeItem === 3 }">Dicas</li>
            </ul>
          </li>
          <li>
            <button class="btn-list" @click="ativarLista(2)">Unity <span><i :class="['bi', 'bi-caret-right-fill', btn2 ? 'rotate' : '']"></i></span></button>
            <ul :class="btn2 ? 'active' : 'inactive'">
              <li @click="setSession(4)" :class="{ active: activeItem === 4 }">Introdução</li>
              <li @click="setSession(5)" :class="{ active: activeItem === 5 }">Download</li>
              <li @click="setSession(6)" :class="{ active: activeItem === 6 }">Exemplo</li>
              <li @click="setSession(7)" :class="{ active: activeItem === 7 }">Xr ToolKit</li>
            </ul>
          </li>
          <li>
            <button class="btn-list" @click="setSession(8)">Referências</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background-color: var(--cor-principal);
  border-right: 1px solid var(--cor-contraste);
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  transition: transform 0.3s ease;
  z-index: 5;
  transform: translateX(-100%); /* Esconde a sidebar inicialmente */
}

.sidebar-visible {
  transform: translateX(0); /* Exibe a sidebar quando o estado showSidebar é true */
}

.sidebar-content {
  padding: 20px;
}

.sidebar li {
  cursor: pointer;
}

.sidebar li.active {
  color: var(--cor-marca);
}

/* Estilo do botão hamburguer */
.hamburger {
  display: none;
  font-size: 30px;
  background: none;
  border: none;
  color: var(--cor-marca);
  position: absolute;
  top: 5px;
  left: 20px;
  z-index: 7;
}

/* Estilos para dispositivos móveis */
@media (max-width: 768px) {
  .sidebar {
    display: block; /* Torna a sidebar visível apenas quando showSidebar for true */
  }

  .hamburger {
    display: block; /* Exibe o botão hamburguer em telas pequenas */
  }
}

/* Estilos para telas grandes */
@media (min-width: 769px) {
  .sidebar {
    position: static;
    width: auto;
    transform: none; /* Sidebar está sempre visível em telas grandes */
  }

  .sidebar-content {
    display: block; /* Sempre visível em telas grandes */
  }
}
</style>
