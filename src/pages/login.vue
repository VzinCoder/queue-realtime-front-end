<template>
    <v-container class="d-flex justify-center align-center fill-height px-4" fluid>
      <v-card class="pa-6 card mx-auto" max-width="500" elevation="12" rounded="xl">
        <v-card-title class="text-center text-h5 font-weight-bold mb-4">
          Login
        </v-card-title>
  
        <v-form v-model="valid" @submit.prevent="login">
          <v-text-field
            v-model="form.email"
            label="E-mail"
            prepend-inner-icon="mdi-email"
            :rules="[rules.required, rules.email]"
            variant="outlined"
            class="mb-3"
            autocomplete="email"
          />
  
          <v-text-field
            v-model="form.password"
            label="Senha"
            prepend-inner-icon="mdi-lock"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append-inner="showPassword = !showPassword"
            :rules="[rules.required, rules.min(6)]"
            variant="outlined"
            class="mb-4"
            autocomplete="current-password"
          />
  
          <v-btn :disabled="!valid" type="submit" color="primary" block size="large">
            Entrar
          </v-btn>
        </v-form>
  
        <div class="text-center mt-4">
          <small>Não tem uma conta? <router-link to="/register">Criar conta</router-link></small>
        </div>
      </v-card>
    </v-container>
  </template>
  
<script lang="ts">
import { rules } from '@/functions'
  
export default {
    data() {
      return {
        valid: false,
        form: {
          email: '',
          password: '',
        },
        showPassword: false,
        rules,
      }
    },
  
    methods: {
      login() {
        alert('Login enviado!')
      },
    },
  }
</script>
  
<style scoped>
  a {
    color: #1976d2;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  
  .card {
    min-width: 300px;
    width: 100%;
    max-width: 500px;
  }
</style>