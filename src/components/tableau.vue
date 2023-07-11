<template>
  <div class="content-table">
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
              <input v-model="item.nom" />
            </template>
            <template v-else>
              <p>{{ item.nom }}</p>
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <input v-model="item.nbrDeJours" />
            </template>
            <template v-else>
              <p>{{ item.nbrDeJours }}</p>
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <input v-model="item.tauxJournalier" />
            </template>
            <template v-else>
              <p>{{ item.tauxJournalier }}</p>
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <p style="display: none;"> {{ i = item.tauxJournalier * item.nbrDeJours }}</p>
              <input v-model="i" disabled/>
            </template>
            <template v-else>
              {{  item.tauxJournalier * item.nbrDeJours }}
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <button class="btn btn-cancel"  @click="annulerModification(item)">cancel</button>
              <button class="btn btn-save" @click="sauvegarderItem(item)">save</button>
            </template>
            <template v-else>
              <div></div>
             <button class="btn-edit-delete" style="border:1.5px solid yellowgreen" @click="modifierItem(item)"><li class="bi bi-brush"></li></button>
              <button class="btn-edit-delete" style="border:1.5px solid red" @click="supprimerItem(item)"><li class="bi bi-trash" ></li></button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

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
  table{
    margin-top:12px;
    width:90vw;
    min-width: 600px;
    border-collapse: collapse;
  }
  td{
    width:200px;
    padding: 12px 0px;
  }
  .btn{
    border: none;
    padding: 6px 9px;
    border-radius: 6px;
    font-size: 15px;
    margin-left: 5px;
  }
  .btn-save{
    background-color: rgb(33, 235, 33);
    color:white;
  }
  .btn-cancel{
    background-color: white;
    color:black;
    border:1px solid #eaeaea;
  }
  tbody {
    background-color: white;
  }
  thead tr th{
    padding: 25px 10px;
  }
  input{
    padding: 4px 4px;
    border-radius: 6px;
    border-color: #eaeaea;
    border:1px solid #eaeaea;
    padding:8px 8px;
    text-align: center;
  }
  li{
    list-style-type: none;
    padding:7px 7px;
  }
  .btn-edit-delete{
    background-color: #ffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    margin:0px 2px;
  }
  p{
    font-size: 13.5px;
  }
  tbody tr td{
    border-bottom:1px solid #eaeaea;
  }
</style>
