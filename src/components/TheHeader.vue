<template>
    <v-app-bar color="primary" dark flat app dense>
        <v-toolbar-title class="font-weight-bold text-h5">
           <Router-link to="/" style="text-decoration: none;color:white;">QCloud</Router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text to="/login" class="mr-2">Entrar</v-btn>
        <v-btn color="amber" dark to="/register">Criar Conta</v-btn>
    </v-app-bar>
</template>