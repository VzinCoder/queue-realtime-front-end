<template>
  <v-app-bar color="primary" dark>
    <!-- Botão do menu -->
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>

    <!-- Título da página -->
    <v-toolbar-title class="font-weight-bold">{{ pageTitle }}</v-toolbar-title>

    <!-- Espaço entre título e ações -->
    <v-spacer></v-spacer>

    <!-- Botão de Refresh -->
    <v-btn icon @click="refresh" class="mr-2">
      <v-icon>mdi-refresh</v-icon>
      <v-tooltip activator="parent" location="bottom">Atualizar</v-tooltip>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list density="compact" nav>
      <!-- Seção de Filas -->
      <v-list-item 
        v-for="item in menuItems" 
        :key="item.title"
        :value="item.route"
        @click="navigateTo(item.route)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <!-- Divisor -->
      <v-divider class="my-2"></v-divider>

      <!-- Logout -->
      <v-list-item @click="logout" color="error">
        <template v-slot:prepend>
          <v-icon icon="mdi-logout"></v-icon>
        </template>
        <v-list-item-title>Sair</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
export default {
  data: () => ({
    drawer: false,
    menuItems: [
      { title: 'Ver Filas', icon: 'mdi-format-list-checks', route: '/app' },
      { title: 'Criar Fila', icon: 'mdi-plus', route: '/app/createQueue' },
      { title: 'Entrar em Fila', icon: 'mdi-login', route: '/join-queue' }
    ]
  }),

  computed: {
    pageTitle() {
      return this.$route.meta.title
    }
  },

  methods: {
    navigateTo(route: string) {
      this.$router.push(route)
      this.drawer = false
    },

    refresh() {
      // Implemente a lógica de refresh aqui
      window.location.reload() // Ou emita um evento para atualizar os dados
      // this.$emit('refresh-data')
    },

    logout() {
      // Implemente a lógica de logout aqui
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.v-list-item--active {
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}

.v-list-item {
  margin: 4px 8px;
  padding: 0 12px;
}
</style>