<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="8" class="text-center">
                <h1 class="display-2 font-weight-bold mb-4">Controle de Filas Inteligente</h1>
                <p class="subtitle-1 mb-8">Gerencie filas de atendimento em tempo real com nossa solução completa</p>

                <v-row justify="center">
                    <v-col cols="12" md="6">
                        <v-card class="pa-4" hover>
                            <v-icon large color="primary" class="mb-4">mdi-account-plus</v-icon>
                            <h3 class="headline mb-2">Criar Conta</h3>
                            <p class="body-2 mb-4">Comece agora e otimize seu atendimento</p>
                            <v-btn color="primary" to="/register">Registrar-se</v-btn>
                        </v-card>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-card class="pa-4" hover>
                            <v-icon large color="primary" class="mb-4">mdi-login</v-icon>
                            <h3 class="headline mb-2">Acessar Sistema</h3>
                            <p class="body-2 mb-4">Já possui uma conta? Faça login</p>
                            <v-btn color="primary" outlined to="/login">Entrar</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.v-card {
    transition: transform 0.3s ease;
}

.v-card:hover {
    transform: translateY(-5px);
}
</style>