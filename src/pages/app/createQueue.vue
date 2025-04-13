<template>
        <v-container class="py-8">
          <v-card class="pa-6 mx-auto" max-width="600">
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model="form.name"
                label="Nome da Fila"
                :rules="[required]"
                outlined
                clearable
                class="mb-4"
              ></v-text-field>
  
              <v-textarea
                v-model="form.description"
                label="Descrição"
                outlined
                rows="3"
                class="mb-4"
              ></v-textarea>
  
              <v-select
                v-model="form.type"
                :items="queueTypes"
                label="Tipo de Fila"
                :rules="[required]"
                outlined
                class="mb-4"
              ></v-select>
  
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.priority"
                    label="Prioridade"
                    type="number"
                    min="1"
                    max="10"
                    outlined
                    class="mb-4"
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12" md="6">
                  <v-select
                    v-model="form.status"
                    :items="statusOptions"
                    label="Status Inicial"
                    :rules="[required]"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
  
              <div class="d-flex justify-end gap-4">
                <v-btn
                  color="grey"
                  @click="$router.back()"
                  class="px-8"
                >
                  Cancelar
                </v-btn>
                <v-btn 
                  color="primary"
                  type="submit"
                  class="px-8"
                >
                  Criar Fila
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-container>
  </template>
  
  <script>
  export default {
    data: () => ({
      form: {
        name: '',
        description: '',
        type: null,
        priority: 5,
        status: 'active'
      },
      required: value => !!value || 'Campo obrigatório',
      queueTypes: [
        'Atendimento Geral',
        'Prioritária',
        'Retirada de Documentos',
        'Agendamentos',
        'Suporte Técnico'
      ],
      statusOptions: [
        { text: 'Ativa', value: 'active' },
        { text: 'Pausada', value: 'paused' }
      ]
    }),
  
    methods: {
      submit() {
        if (this.validateForm()) {
          const newQueue = {
            id: Date.now(),
            ...this.form,
            nextTicket: "A001",
            waitTime: "0 min",
            dateCreated: new Date().toLocaleDateString('pt-BR')
          }
          
          this.$emit('queue-created', newQueue)
          this.$router.push('/')
        }
      },
  
      validateForm() {
        return this.form.name && this.form.type && this.form.status
      }
    }
  }
  </script>
  
  <style scoped>
  .gap-4 {
    gap: 16px;
  }
  </style>

<route lang="yaml">
meta:
    title: Criar Fila
    layout: app
</route>