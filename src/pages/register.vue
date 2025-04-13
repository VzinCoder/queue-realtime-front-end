<template>
    <v-container class="d-flex justify-center align-center fill-height" fluid>
      <v-card class="pa-6 card" max-width="500" elevation="12" rounded="xl">
        <v-card-title class="text-center text-h5 font-weight-bold mb-4">
          Criar Conta
        </v-card-title>
  
        <v-form v-model="valid" @submit.prevent="register">
          <v-text-field
            v-model="form.name"
            label="Nome"
            prepend-inner-icon="mdi-account"
            :rules="[rules.required]"
            variant="outlined"
            class="mb-3"
          />
  
          <v-text-field
            v-model="form.email"
            label="E-mail"
            prepend-inner-icon="mdi-email"
            :rules="[rules.required, rules.email]"
            variant="outlined"
            class="mb-3"
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
            class="mb-3"
          />
  
          <v-text-field
            v-model="form.confirmPassword"
            label="Confirmar Senha"
            prepend-inner-icon="mdi-lock-check"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.matchPassword(form,'password', 'confirmPassword')]"
            variant="outlined"
            class="mb-5"
          />
  
          <v-btn :disabled="!valid" type="submit" color="primary" block size="large">
            Registrar
          </v-btn>
        </v-form>
  
        <div class="text-center mt-4">
          <small>Já tem uma conta? <Router-link to="/login">Entrar</Router-link></small>
        </div>
      </v-card>
    </v-container>
  </template>
  

<script lang="ts">
import {rules} from '@/functions'
export default {    
    data(){
        return {
            valid:false,
            form:{
                name:"",
                email: "",
                password: "",
                confirmPassword: ""
            },
            showPassword: false,
            rules
        }
    },

    methods:{
        register(){
            alert("Dados enviados!")
        },
    }
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

  .card{
    min-width: 30%;
  }

  @media screen and (max-width: 600px) {
    .card{
      min-width: 100%;
    }
  }


</style>