<template>
    <!-- Conteúdo Principal -->
    <v-container class="py-8">
        <!-- Lista de Filas -->
        <v-row v-if="queues.length > 0">
            <v-col v-for="queue in queues" :key="queue.id" cols="12" sm="6" md="4" lg="3">
                <v-card class="pa-4 queue-card" hover>
                    <div class="d-flex align-center mb-2 title-container">
                        <v-icon left color="primary" class="mr-2">mdi-account-group</v-icon>
                        <h3 class="text-h6 text-truncate">{{ queue.name }}</h3>
                    </div>

                    <v-divider class="my-2"></v-divider>

                    <div class="d-flex justify-space-between align-center mb-2">
                        <span class="text-caption">Status:</span>
                        <v-chip :color="getStatusColor(queue.status)" small>
                            {{ queue.status }}
                        </v-chip>
                    </div>

                    <div class="d-flex justify-space-between align-center mb-2">
                        <span class="text-caption">Próximo:</span>
                        <span class="font-weight-bold">{{ queue.nextTicket }}</span>
                    </div>

                    <div class="d-flex justify-space-between align-center">
                        <span class="text-caption">Tempo de Espera:</span>
                        <span class="font-weight-bold">{{ queue.waitTime }}</span>
                    </div>

                    <div class="text-right mt-4">
                        <span class="text-caption text--secondary">
                            Criada em: {{ queue.dateCreated }}
                        </span>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Mensagem quando não há filas -->
        <v-row v-else>
            <v-col cols="12" class="text-center">
                <v-icon size="64" class="mb-4">mdi-inbox</v-icon>
                <h3 class="text-h6">Nenhuma fila criada ainda</h3>
                <p class="body-1">Clique no botão abaixo para criar sua primeira fila</p>
            </v-col>
        </v-row>
    </v-container>

    <!-- Botão Flutuante -->
     <Router-link to="/app/createQueue">
        <v-btn class="fixed-bottom-right" size="50" density="compact" icon="mdi-plus"
        ></v-btn>
     </Router-link>
   
</template>

<script>
export default {
    data: () => ({
        queues: [
            {
                id: 1,
                name: "Atendimento Geral",
                status: "Ativa",
                nextTicket: "A023",
                waitTime: "15 min",
                dateCreated: "20/05/2024"
            },
            {
                id: 2,
                name: "Prioritário",
                status: "Pausada",
                nextTicket: "P012",
                waitTime: "25 min",
                dateCreated: "18/05/2024"
            },
            {
                id: 3,
                name: "Retirada de Documentos",
                status: "Encerrada",
                nextTicket: "-",
                waitTime: "-",
                dateCreated: "15/05/2024"
            },
            {
                id: 4,
                name: "Atendimento Geral",
                status: "Ativa",
                nextTicket: "A023",
                waitTime: "15 min",
                dateCreated: "20/05/2024"
            },
            {
                id: 5,
                name: "Prioritário",
                status: "Pausada",
                nextTicket: "P012",
                waitTime: "25 min",
                dateCreated: "18/05/2024"
            },
            {
                id: 6,
                name: "Retirada de Documentos",
                status: "Encerrada",
                nextTicket: "-",
                waitTime: "-",
                dateCreated: "15/05/2024"
            }
        ]
    }),

    methods: {
        getStatusColor(status) {
            const colors = {
                'Ativa': 'green',
                'Pausada': 'orange',
                'Encerrada': 'red'
            }
            return colors[status] || 'grey'
        },

        openCreateDialog() {
            // Implementar lógica para abrir modal de criação
            console.log('Abrir modal de criação de fila')
        },

        logout() {
            // Implementar lógica de logout
            console.log('Logout realizado')
        }
    }
}
</script>

<style scoped>
.fixed-bottom-right {
    position: fixed !important;
    bottom: 32px;
    right: 32px;
    z-index: 999;
}

.queue-card {
    transition: all 0.3s ease;
    min-height: 200px;
}

.queue-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1) !important;
}

@media (max-width: 600px) {
    .fixed-bottom-right {
        bottom: 16px;
        right: 16px;
        width: 56px !important;
        height: 56px !important;
    }
}
</style>

<route lang="yaml">
meta:
  title: Filas
  layout: app
</route>