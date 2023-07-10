<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Nombre de jours</th>
          <th>Taux journalier</th>
          <th>Prestation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <template v-if="item.editable">
              <input v-model="item.title" />
            </template>
            <template v-else>
              {{ item.title }}
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <input v-model="item.nombreJours" />
            </template>
            <template v-else>
              {{ item.nombreJours }}
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <input v-model="item.tauxJournalier" />
            </template>
            <template v-else>
              {{ item.tauxJournalier }}
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <input v-model="item.prestation" />
            </template>
            <template v-else>
              {{ item.prestation }}
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <button @click="sauvegarderItem(item)">Sauvegarder</button>
              <button @click="annulerModification(item)">Annuler</button>
            </template>
            <template v-else>
              <button @click="modifierItem(item)">Modifier</button>
              <button @click="supprimerItem(item)">Supprimer</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import data from './data.json';
//import { mapActions } from 'vuex';

export default {
  name: 'TableauComponent',
  computed: {
    items() {
      return this.$store.getters.tableau;
    }
  },
    mounted() {
      this.$store.dispatch('getTableau');
    },

  methods: {
    modifierItem(item) {
      item.editable = true;
    },
    sauvegarderItem(item) {
      item.editable = false;
     this.$store.dispatch('updateTableau',item)
    },
    annulerModification(item) {
      item.editable = false;
    },
    supprimerItem(item) {
      this.$store.dispatch('deleteTableau',item)
    }
  }
};
</script>

<style>
/* Votre style personnalisé pour le tableau */
</style>
